import { motion } from 'framer-motion'
import { MessageSquare, Paintbrush, Code2, Rocket } from 'lucide-react'
import SectionBadge from '../ui/SectionBadge'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    label: 'Discovery',
    title: 'We Listen First',
    description: 'A focused strategy call where we learn your goals, audience, and what success looks like for your business.',
  },
  {
    number: '02',
    icon: Paintbrush,
    label: 'Design',
    title: 'Design That Converts',
    description: 'Custom mockups, brand-aligned visual language, and user flows — all reviewed and approved by you before we build.',
  },
  {
    number: '03',
    icon: Code2,
    label: 'Build',
    title: 'Built to Perform',
    description: 'We develop with clean code, fast load times, and SEO baked in. You get progress updates every step of the way.',
  },
  {
    number: '04',
    icon: Rocket,
    label: 'Launch',
    title: 'Go Live & Grow',
    description: 'Final testing, launch day support, and 30 days of post-launch coverage. We stick around to make sure everything performs.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24" style={{ background: '#080808' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <SectionBadge className="mb-4">Our Process</SectionBadge>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-4">
            Simple. Transparent.
            <br />
            <span className="text-gradient">No Surprises.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl">
            Four clear steps from first conversation to launch day. No confusion, no delays, no hidden handoffs.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map(({ number, icon: Icon, label, title, description }, i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-6 rounded-xl overflow-hidden group cursor-default transition-all duration-300"
              style={{ background: '#161616', border: '1px solid rgba(255,255,255,0.07)' }}
              whileHover={{
                y: -4,
                borderColor: 'rgba(229,19,45,0.3)',
                boxShadow: '0 0 32px rgba(229,19,45,0.12)',
                transition: { duration: 0.2 },
              }}
            >
              {/* Watermark number */}
              <div
                className="absolute top-3 right-4 font-heading font-extrabold text-7xl leading-none select-none pointer-events-none"
                style={{ color: 'rgba(229,19,45,0.07)' }}
              >
                {number}
              </div>

              {/* Step label */}
              <span className="text-brand text-xs font-bold uppercase tracking-wider mb-3 block">
                {label}
              </span>

              {/* Icon — large, no box, red glow */}
              <div className="mb-5">
                <Icon
                  size={48}
                  className="text-brand drop-shadow-[0_0_14px_rgba(229,19,45,0.55)]"
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="font-heading font-bold text-white text-base mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
