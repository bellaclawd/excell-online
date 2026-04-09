import { motion } from 'framer-motion'
import {
  UserCheck, MessageSquare, Workflow, CalendarCheck,
  Bot, Zap, ArrowRight, ExternalLink,
} from 'lucide-react'
import SectionBadge from '../ui/SectionBadge'
import TerminalAnimation from '../ui/TerminalAnimation'
import Button from '../ui/Button'
import { siteConfig } from '../../config/site'
import { navigateToHref, scrollToHash } from '../../utils/navigation'

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
  'Best for intake, booking, FAQs, and fast-start automation',
  'Launch quickly with clearer guardrails and branded responses',
  'Connects cleanly to calendars, CRMs, and email workflows',
]

const hermesBullets = [
  'Built for multi-step routing, approvals, and more tailored logic',
  'Useful when the workflow spans several systems or edge cases',
  'Designed for custom automations, not one-size-fits-all bots',
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
          <SectionBadge className="mb-4">AI Workflows & Agents</SectionBadge>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-3">
            AI systems that keep leads
            <br />
            and operations moving.
          </h2>
          <p className="text-xl font-heading text-gradient font-semibold mb-5">
            Helpful, branded, and accountable.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            For businesses that lose time to repetitive intake, booking back-and-forth, FAQs,
            and manual follow-ups. We build automation that feels like part of your team, not a
            novelty bolted onto the site.
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
                  <div>
                    <div className="font-heading font-bold text-white text-sm">Fast-Start Agent Deployments</div>
                    <div className="text-[11px] uppercase tracking-[0.28em] text-red-300 mt-1">Powered by OpenClaw</div>
                  </div>
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
                  Explore OpenClaw <ExternalLink size={11} />
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
                  <div>
                    <div className="font-heading font-bold text-white text-sm">Custom Workflow Builds</div>
                    <div className="text-[11px] uppercase tracking-[0.28em] text-gray-500 mt-1">Engineered with Hermes</div>
                  </div>
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
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToHash('#contact')
                  }}
                  className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-white font-medium transition-colors"
                >
                  Discuss your workflow <ArrowRight size={11} />
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
                Want to see which automation actually fits?
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {siteConfig.bookingUrl
                  ? "Book a free strategy call and we'll map the right mix of AI, handoff rules, and integrations for your workflow."
                  : "Tell us where leads or operations are stalling, and we'll follow up with the best-fit automation path for your business."}
              </p>
              <Button
                onClick={() => navigateToHref(siteConfig.primaryCtaHref)}
                className="w-full justify-center"
              >
                {siteConfig.primaryCtaLabel}
                <ArrowRight size={15} />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
