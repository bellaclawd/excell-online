import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Button from '../ui/Button'
import { siteConfig } from '../../config/site'
import { navigateToHref, scrollToHash } from '../../utils/navigation'

const navLinks = [
  { label: 'Services', href: '#services', type: 'hash' },
  { label: 'AI Agents', href: '#ai-agents', type: 'hash' },
  { label: 'Our Work', href: '#portfolio', type: 'hash' },
  { label: 'Case Studies', href: '/work/index.html', type: 'page' },
  { label: 'About', href: '#about', type: 'hash' },
  { label: 'Contact', href: '#contact', type: 'hash' },
] as const

function Logo() {
  return (
    <a
      href="#hero"
      onClick={(event) => {
        event.preventDefault()
        scrollToHash('#hero')
      }}
      className="flex items-center gap-2.5"
    >
      <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B50E22" />
            <stop offset="50%" stopColor="#E5132D" />
            <stop offset="100%" stopColor="#FF2D47" />
          </linearGradient>
        </defs>
        <rect x="0" y="22" width="16" height="6" rx="2" fill="url(#logoGrad)" />
        <rect x="0" y="11" width="24" height="6" rx="2" fill="url(#logoGrad)" />
        <rect x="0" y="0" width="32" height="6" rx="2" fill="url(#logoGrad)" />
      </svg>
      <span className="font-heading font-bold text-lg tracking-tight">
        <span className="text-white">excell</span>
        <span className="text-gray-400 font-normal">online</span>
      </span>
    </a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = navLinks
      .filter((link) => link.type === 'hash')
      .map((link) => link.href.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection('#' + entry.target.id)
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    navigateToHref(href)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(8,8,8,0.92)' : '#080808',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo />

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                link.type === 'hash' ? (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    aria-current={activeSection === link.href ? 'page' : undefined}
                    className={`text-sm transition-colors duration-200 font-medium ${
                      activeSection === link.href
                        ? 'text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm transition-colors duration-200 font-medium text-gray-400 hover:text-white"
                  >
                    {link.label}
                  </a>
                )
              ))}
            </div>

            <div className="hidden md:block">
              <Button onClick={() => navigateToHref(siteConfig.primaryCtaHref)} size="sm">
                {siteConfig.primaryCtaLabel}
              </Button>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 border-b border-white/5"
            style={{ background: 'rgba(8,8,8,0.97)', backdropFilter: 'blur(16px)' }}
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                link.type === 'hash' ? (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 font-medium"
                  >
                    {link.label}
                  </button>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block w-full text-left px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 font-medium"
                  >
                    {link.label}
                  </a>
                )
              ))}
              <div className="pt-2 pb-1">
                <Button
                  onClick={() => {
                    setMobileOpen(false)
                    navigateToHref(siteConfig.primaryCtaHref)
                  }}
                  className="w-full justify-center"
                >
                  {siteConfig.primaryCtaLabel}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
