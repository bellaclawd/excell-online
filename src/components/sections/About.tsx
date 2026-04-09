import { motion } from 'framer-motion'
import { ShieldCheck, Layers3, Zap, MapPin, ArrowRight } from 'lucide-react'
import SectionBadge from '../ui/SectionBadge'
import Button from '../ui/Button'
import { siteConfig } from '../../config/site'
import { navigateToHref, scrollToHash } from '../../utils/navigation'

const values = [
  {
    icon: ShieldCheck,
    title: 'Direct Builder Access',
    description: 'You work directly with the people shaping the strategy, design, and build - not a handoff chain.',
    number: '01',
  },
  {
    icon: Layers3,
    title: 'Trust-First Design',
    description: 'We obsess over hierarchy, proof, clarity, and tone so your site earns confidence quickly.',
    number: '02',
  },
  {
    icon: Zap,
    title: 'Senior-Led Execution',
    description: 'Fewer layers, tighter feedback loops, and faster decisions without sacrificing polish.',
    number: '03',
  },
  {
    icon: MapPin,
    title: 'Built for Real Buying Decisions',
    description: 'The goal is not just a prettier site. It is a clearer offer, better trust signals, and stronger next actions.',
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
            <SectionBadge className="mb-5">Our Approach</SectionBadge>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-3">
              Built in Toronto.
              <br />
              <span className="text-gradient">Built to Last.</span>
            </h2>
            <div className="space-y-5 mt-6 text-gray-400 leading-relaxed">
              <p>
                Excell Online is for businesses that want a sharper first impression, cleaner trust signals, and a more direct path from visitor to lead. The work spans websites, apps, and AI-supported workflows, but the standard is the same every time: make it feel premium and make it easier to act.
              </p>
              <p>
                The strongest projects are the ones where design taste and business clarity work together. That means better hierarchy, stronger proof, clearer offers, and fewer places for visitors to hesitate.
              </p>
              <p>
                We still care about the build quality underneath it all, but the end goal is simple: help serious businesses look trustworthy, feel current, and convert with less friction.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button onClick={() => navigateToHref(siteConfig.primaryCtaHref)}>
                {siteConfig.primaryCtaLabel}
                <ArrowRight size={15} />
              </Button>
              <Button variant="ghost" onClick={() => scrollToHash('#portfolio')}>
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
