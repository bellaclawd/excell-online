import { motion } from 'framer-motion'
import { ShieldCheck, Layers3, Zap, MapPin, ArrowRight } from 'lucide-react'
import SectionBadge from '../ui/SectionBadge'
import Button from '../ui/Button'

const values = [
  {
    icon: ShieldCheck,
    title: 'Built on Trust',
    description: 'No surprise invoices, no scope creep, no excuses. Full transparency from kickoff to launch.',
    number: '01',
  },
  {
    icon: Layers3,
    title: 'Full-Stack Capability',
    description: 'Design, development, AI, and SEO — all under one roof, all aligned to one goal.',
    number: '02',
  },
  {
    icon: Zap,
    title: 'Speed & Quality',
    description: 'We move fast without cutting corners. Tight deadlines are how we stay sharp.',
    number: '03',
  },
  {
    icon: MapPin,
    title: 'Proudly Toronto',
    description: 'We understand the GTA market. Local knowledge, global-quality execution.',
    number: '04',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24" style={{ background: '#080808' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionBadge className="mb-5">About Us</SectionBadge>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-3">
              Built in Toronto.
              <br />
              <span className="text-gradient">Built to Last.</span>
            </h2>
            <div className="space-y-5 mt-6 text-gray-400 leading-relaxed">
              <p>
                Excell Online started with a simple belief: Toronto businesses deserve agency-quality websites without agency-level nonsense. No bloated retainers, no offshore handoffs, no mystery billing. Just great work, delivered on time.
              </p>
              <p>
                Over the past decade, we've helped restaurants, law firms, real estate companies, and tech startups build digital products that actually move the needle. Every client gets senior-level attention from day one.
              </p>
              <p>
                Today, we're leading the charge on AI-powered business tools for the GTA market — deploying autonomous AI agents for small businesses that want to operate smarter without hiring more staff.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Work With Us
                <ArrowRight size={15} />
              </Button>
              <Button variant="ghost" onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
                See Our Work
              </Button>
            </div>
          </motion.div>

          {/* Right column — value cards with large icons */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map(({ icon: Icon, title, description, number }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden p-6 rounded-2xl cursor-default"
                style={{ background: '#161616', border: '1px solid rgba(255,255,255,0.07)' }}
                whileHover={{
                  borderColor: 'rgba(229,19,45,0.35)',
                  boxShadow: '0 0 36px rgba(229,19,45,0.13)',
                  transition: { duration: 0.2 },
                }}
              >
                {/* Ghost number watermark */}
                <div
                  className="absolute -top-2 -right-1 font-heading font-black text-7xl leading-none select-none pointer-events-none"
                  style={{ color: 'rgba(229,19,45,0.06)' }}
                >
                  {number}
                </div>

                {/* Large icon — no box, just the icon with a glow */}
                <div className="relative mb-5">
                  <Icon
                    size={44}
                    className="text-brand drop-shadow-[0_0_12px_rgba(229,19,45,0.5)]"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="font-heading font-bold text-white text-sm mb-2">{title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
