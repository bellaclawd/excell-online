import { motion } from 'framer-motion'
import { Twitter, Linkedin, Instagram, Facebook } from 'lucide-react'

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2.5">
      <svg width="28" height="24" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B50E22" />
            <stop offset="50%" stopColor="#E5132D" />
            <stop offset="100%" stopColor="#FF2D47" />
          </linearGradient>
        </defs>
        <rect x="0" y="22" width="16" height="6" rx="2" fill="url(#footerLogoGrad)" />
        <rect x="0" y="11" width="24" height="6" rx="2" fill="url(#footerLogoGrad)" />
        <rect x="0" y="0" width="32" height="6" rx="2" fill="url(#footerLogoGrad)" />
      </svg>
      <span className="font-heading font-bold text-base tracking-tight">
        <span className="text-white">excell</span>
        <span className="text-gray-400 font-normal">online</span>
      </span>
    </a>
  )
}

const quickLinks = [
  { label: 'Services', href: '#services' },
  { label: 'AI Agents', href: '#ai-agents' },
  { label: 'Our Work', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

const serviceLinks = [
  'Web Design',
  'Web Development',
  'E-Commerce',
  'AI Agents',
  'SEO & Growth',
  'Mobile Apps',
]

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
]

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer style={{ background: '#050505' }}>
      {/* Red gradient line */}
      <div
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, #E5132D 50%, transparent 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Logo + tagline + social */}
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-[220px]">
              Toronto's AI-powered web agency. We build digital products that perform.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/5 transition-all duration-200 border border-white/8"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-5">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => handleNav('#services')}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Toronto, Ontario, Canada</li>
              <li>
                <a href="mailto:hello@excellonline.ca" className="hover:text-white transition-colors duration-200">
                  hello@excellonline.ca
                </a>
              </li>
              <li className="pt-2">
                <motion.button
                  onClick={() => handleNav('#contact')}
                  whileHover={{ x: 4 }}
                  className="text-brand-light font-medium hover:text-brand transition-colors"
                >
                  Get in touch →
                </motion.button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © 2026 Excell Online. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Built with ❤️ in Toronto.
          </p>
        </div>
      </div>
    </footer>
  )
}
