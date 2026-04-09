import { motion } from 'framer-motion'
import { ArrowRight, Bot, CheckCircle2 } from 'lucide-react'
import Button from '../ui/Button'
import { siteConfig } from '../../config/site'
import { navigateToHref, scrollToHash } from '../../utils/navigation'

const floatingBadges = [
  { label: 'Web Design ✓', style: { top: '12%', left: '-12%' } },
  { label: 'AI Agents ✓', style: { top: '55%', right: '-14%' } },
  { label: 'SEO ✓', style: { bottom: '18%', left: '-8%' } },
]

const chatMessages = [
  { role: 'user', text: 'I have a question about my appointment' },
  { role: 'agent', text: 'Hi! I can help with that. What date were you looking at?' },
  { role: 'user', text: 'Next Tuesday, 2pm' },
  { role: 'agent', text: "Perfect — I've confirmed your slot. You'll get a reminder 24h before." },
]

const stats = [
  { value: '10+', label: 'Years' },
  { value: '200+', label: 'Projects' },
  { value: '24/7', label: 'AI Support' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ background: '#080808' }}
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-100 pointer-events-none" />

      {/* Red blob top-left */}
      <div
        className="absolute pointer-events-none animate-blob"
        style={{
          width: '600px',
          height: '600px',
          top: '-150px',
          left: '-150px',
          background: 'radial-gradient(circle, rgba(229,19,45,0.18) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
        }}
      />
      {/* Dark-red blob right */}
      <div
        className="absolute pointer-events-none animate-blob-slow"
        style={{
          width: '400px',
          height: '400px',
          top: '20%',
          right: '-80px',
          background: 'radial-gradient(circle, rgba(181,14,34,0.12) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-gray-300 border border-white/10 bg-white/5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Toronto's AI-Powered Web Agency
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={itemVariants}
              className="font-heading font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6"
            >
              Websites. Apps.
              <br />
              AI Agents.
              <br />
              <span className="text-gradient">Built to Perform.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg"
            >
              We design and build high-performance digital products for Toronto businesses — from custom websites to fully autonomous AI agents that work while you sleep.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
              <Button size="lg" onClick={() => navigateToHref(siteConfig.primaryCtaHref)}>
                {siteConfig.primaryCtaLabel}
                <ArrowRight size={16} />
              </Button>
              <Button variant="ghost" size="lg" onClick={() => scrollToHash('#portfolio')}>
                See Our Work
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex items-center gap-0">
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center">
                  {i > 0 && <div className="w-px h-10 bg-white/10 mx-6" />}
                  <div>
                    <div className="font-heading font-bold text-2xl text-white">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column — AI agent card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Floating badges (desktop only — absolute positioning breaks on mobile) */}
            {floatingBadges.map((badge) => (
              <motion.div
                key={badge.label}
                className="absolute z-20 px-3 py-1.5 rounded-full text-xs font-medium text-white border border-white/10 bg-white/5 backdrop-blur-sm whitespace-nowrap hidden lg:block"
                style={badge.style}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 1.5 }}
              >
                {badge.label}
              </motion.div>
            ))}

            {/* Main card */}
            <div
              className="rounded-2xl overflow-hidden relative"
              style={{
                background: 'rgba(22,22,22,0.85)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(229,19,45,0.25)',
                boxShadow: '0 0 60px rgba(229,19,45,0.2)',
              }}
            >
              {/* Card header */}
              <div
                className="px-5 py-4 flex items-center justify-between border-b border-white/8"
                style={{ background: 'rgba(16,16,16,0.9)' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand/20 border border-brand/30 flex items-center justify-center">
                    <Bot size={15} className="text-brand-light" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white font-heading">AI Agent Active</div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs text-emerald-400">Live</span>
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 border border-white/10 rounded-full px-2.5 py-1 bg-white/5">
                  openclaw.ai
                </div>
              </div>

              {/* Chat messages */}
              <div className="px-5 py-4 space-y-3">
                {chatMessages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.2, duration: 0.3 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className="max-w-[78%] px-3.5 py-2.5 rounded-xl text-sm leading-relaxed"
                      style={{
                        background: msg.role === 'user'
                          ? 'rgba(229,19,45,0.15)'
                          : 'rgba(255,255,255,0.06)',
                        border: msg.role === 'user'
                          ? '1px solid rgba(229,19,45,0.25)'
                          : '1px solid rgba(255,255,255,0.08)',
                        color: msg.role === 'user' ? '#fca5a5' : '#d1d5db',
                      }}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stat chips */}
              <div className="px-5 pb-4 flex gap-2 flex-wrap">
                {[
                  { label: '1,248 handled', icon: '✓' },
                  { label: '< 1s response', icon: '⚡' },
                  { label: '99.97% uptime', icon: '●' },
                ].map((chip) => (
                  <span
                    key={chip.label}
                    className="text-xs px-2.5 py-1 rounded-full text-gray-400 border border-white/8 bg-white/5"
                  >
                    <span className="text-emerald-400 mr-1">{chip.icon}</span>
                    {chip.label}
                  </span>
                ))}
              </div>

              {/* Footer badge */}
              <div
                className="px-5 py-3 flex items-center justify-center gap-2 border-t border-white/8"
                style={{ background: 'rgba(229,19,45,0.06)' }}
              >
                <CheckCircle2 size={13} className="text-brand-light" />
                <span className="text-xs text-gray-400">
                  Powered by <span className="text-brand-light font-medium">OpenClaw</span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
