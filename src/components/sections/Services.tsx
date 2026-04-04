import { motion } from 'framer-motion'
import {
  Palette, Code2, ShoppingCart, TrendingUp,
  Smartphone, Layers, Server, BarChart3,
  Bot, ArrowRight, Check, type LucideIcon,
} from 'lucide-react'
import SectionBadge from '../ui/SectionBadge'
import Button from '../ui/Button'
import { services } from '../../data/services'

const iconMap: Record<string, LucideIcon> = {
  Palette, Code2, ShoppingCart, TrendingUp,
  Smartphone, Layers, Server, BarChart3,
}

const aiBullets = [
  'Autonomous lead intake & qualification',
  'Customer support agents running 24/7',
  'Workflow automation and scheduling',
  'CRM, calendar, and ops integrations',
  'Custom agent behavior for your business',
  'Deployed via OpenClaw & Hermes',
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

export default function Services() {
  return (
    <section id="services" className="py-24" style={{ background: '#080808' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <SectionBadge className="mb-4">Our Services</SectionBadge>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-4">
            Everything You Need to
            <br />
            <span className="text-gradient">Win Online</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl">
            From your first website to full AI-powered automation — we cover every layer of your digital presence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4"
        >
          {services.map((service, i) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="group relative overflow-hidden p-6 rounded-xl transition-all duration-300"
                style={{
                  background: '#161616',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
                whileHover={{
                  scale: 1.02,
                  borderColor: 'rgba(229,19,45,0.4)',
                  boxShadow: '0 0 40px rgba(229,19,45,0.15)',
                  transition: { duration: 0.2 },
                }}
              >
                {/* Ghost icon watermark in corner */}
                {Icon && (
                  <div className="absolute -right-3 -bottom-3 pointer-events-none select-none">
                    <Icon size={90} className="text-white opacity-[0.035]" strokeWidth={0.75} />
                  </div>
                )}

                {/* Large glowing icon — NO box */}
                <div className="mb-6 relative">
                  {Icon && (
                    <Icon
                      size={46}
                      className="text-brand"
                      strokeWidth={1.4}
                      style={{ filter: 'drop-shadow(0 0 12px rgba(229,19,45,0.55))' }}
                    />
                  )}
                </div>

                <h3 className="font-heading font-semibold text-white text-base mb-2 relative">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed relative">{service.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* AI featured card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-2xl p-8 sm:p-10"
          style={{
            background: '#161616',
            border: '1px solid rgba(229,19,45,0.30)',
            boxShadow: '0 0 80px rgba(229,19,45,0.12)',
          }}
        >
          {/* Top red gradient line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/80 to-transparent" />

          {/* Giant ghost Bot background */}
          <div className="absolute -right-10 -bottom-10 pointer-events-none select-none">
            <Bot size={220} className="text-brand opacity-[0.04]" strokeWidth={0.7} />
          </div>

          <div className="relative grid sm:grid-cols-[1fr_auto] gap-8 items-start">
            <div>
              <div className="flex items-center gap-4 mb-6">
                {/* Large Bot icon, no box */}
                <Bot
                  size={56}
                  className="text-brand shrink-0"
                  strokeWidth={1.4}
                  style={{ filter: 'drop-shadow(0 0 16px rgba(229,19,45,0.6))' }}
                />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-heading font-bold text-white text-2xl">AI Agents & Automation</h3>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand bg-brand/10 border border-brand/20 px-2 py-0.5 rounded-full">🔥 Hottest</span>
                  </div>
                  <p className="text-gray-500 text-sm">Autonomous agents that run your business ops 24/7</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl">
                AI agents go beyond chatbots — they take real action. Book appointments, qualify leads, send emails, update your CRM, and handle customer support without a human in the loop. Powered by OpenClaw and Hermes.
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {aiBullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5 text-sm text-gray-400">
                    <Check size={15} className="text-red-400 mt-0.5 shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <div className="shrink-0 pt-1">
              <Button onClick={() => document.querySelector('#ai-agents')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore AI Agents
                <ArrowRight size={15} />
              </Button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
