import { motion } from 'framer-motion'
import {
  UserCheck, MessageSquare, Workflow, CalendarCheck,
  Bot, Zap, ArrowRight, ExternalLink,
} from 'lucide-react'
import SectionBadge from '../ui/SectionBadge'
import TerminalAnimation from '../ui/TerminalAnimation'
import Button from '../ui/Button'

const useCases = [
  {
    icon: UserCheck,
    title: 'Lead Intake',
    description: 'Capture, qualify, and route every inbound lead — automatically, 24/7.',
  },
  {
    icon: MessageSquare,
    title: 'Customer Support',
    description: 'Answer questions, resolve issues, and escalate to humans when needed.',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Trigger actions across your tools — CRM updates, emails, notifications.',
  },
  {
    icon: CalendarCheck,
    title: 'Scheduling',
    description: 'Book appointments, send reminders, handle cancellations automatically.',
  },
]

const openClawBullets = [
  'No-code agent builder for non-technical teams',
  'Deploy in minutes, not weeks',
  'Native CRM, calendar & email integrations',
]

const hermesBullets = [
  'Advanced multi-step reasoning pipelines',
  'Custom model fine-tuning available',
  'Enterprise-grade security & compliance',
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

export default function AISection() {
  return (
    <section
      id="ai-agents"
      className="py-24 relative overflow-hidden"
      style={{ background: '#050505' }}
    >
      {/* Background blob */}
      <div
        className="absolute pointer-events-none animate-blob"
        style={{
          width: '700px',
          height: '700px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(229,19,45,0.07) 0%, transparent 65%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-2xl"
        >
          <SectionBadge className="mb-4">🔥 Our Hottest Service</SectionBadge>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-3">
            Your Business, Running on AI Agents.
          </h2>
          <p className="text-xl font-heading text-gradient font-semibold mb-5">
            24 hours a day. 7 days a week.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            Stop losing leads to after-hours gaps. Stop paying staff to answer the same questions. AI agents handle the repetitive work so your team can focus on what actually grows your business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {/* Use case 2x2 grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {useCases.map(({ icon: Icon, title, description }) => (
                <motion.div
                  key={title}
                  variants={itemVariants}
                  className="p-5 rounded-xl"
                  style={{
                    background: '#161616',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                  whileHover={{
                    borderColor: 'rgba(229,19,45,0.3)',
                    boxShadow: '0 0 24px rgba(229,19,45,0.1)',
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="w-9 h-9 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center mb-3">
                    <Icon size={16} className="text-brand" />
                  </div>
                  <h3 className="font-heading font-semibold text-white text-sm mb-1.5">{title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{description}</p>
                </motion.div>
              ))}
            </div>

            {/* Platform cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* OpenClaw card */}
              <motion.div
                variants={itemVariants}
                className="p-5 rounded-xl"
                style={{
                  background: '#161616',
                  border: '1px solid rgba(229,19,45,0.25)',
                  boxShadow: '0 0 24px rgba(229,19,45,0.08)',
                }}
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-brand/15 border border-brand/30 flex items-center justify-center">
                    <Bot size={15} className="text-brand" />
                  </div>
                  <span className="font-heading font-bold text-white text-sm">OpenClaw</span>
                </div>
                <ul className="space-y-2 mb-4">
                  {openClawBullets.map((b) => (
                    <li key={b} className="text-xs text-gray-400 flex items-start gap-2">
                      <span className="text-brand mt-0.5">●</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://openclaw.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-brand-light hover:text-brand font-medium transition-colors"
                >
                  openclaw.ai <ExternalLink size={11} />
                </a>
              </motion.div>

              {/* Hermes card */}
              <motion.div
                variants={itemVariants}
                className="p-5 rounded-xl"
                style={{
                  background: '#161616',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <Zap size={15} className="text-gray-400" />
                  </div>
                  <span className="font-heading font-bold text-white text-sm">Hermes</span>
                </div>
                <ul className="space-y-2 mb-4">
                  {hermesBullets.map((b) => (
                    <li key={b} className="text-xs text-gray-400 flex items-start gap-2">
                      <span className="text-gray-500 mt-0.5">●</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-white font-medium transition-colors"
                >
                  Learn more <ArrowRight size={11} />
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <TerminalAnimation />

            {/* CTA block */}
            <div
              className="p-6 rounded-xl"
              style={{
                background: 'rgba(229,19,45,0.08)',
                border: '1px solid rgba(229,19,45,0.2)',
              }}
            >
              <h3 className="font-heading font-bold text-white text-lg mb-2">
                Ready to automate your business?
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Book a free 30-minute strategy call. We'll map out exactly what AI agents can do for your specific workflow.
              </p>
              <Button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full justify-center"
              >
                Book Free Strategy Call
                <ArrowRight size={15} />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
