import { motion } from 'framer-motion'
import SectionBadge from '../ui/SectionBadge'

const pillars = [
  {
    number: '01',
    title: 'Built on Trust',
    description: 'We work with full transparency. No surprise invoices, no scope creep, no excuses.',
  },
  {
    number: '02',
    title: 'Full-Stack Capability',
    description: 'Design, development, AI, and SEO — all under one roof, all aligned to one goal.',
  },
  {
    number: '03',
    title: 'Speed & Quality',
    description: 'We move fast without cutting corners. Tight deadlines are how we stay sharp.',
  },
  {
    number: '04',
    title: 'Proudly Toronto',
    description: 'We understand the GTA market. Local knowledge, global-quality execution.',
  },
]

const differentiators = [
  'Direct access to the people building the work',
  'Performance-first development, not just pretty comps',
  'AI systems positioned around real business outcomes',
  'Transparent scope and cleaner project execution',
  'You own the code, assets, and final build',
  'Support after launch instead of disappearing at handoff',
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24" style={{ background: '#131313' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <SectionBadge className="mb-4">Why Choose Us</SectionBadge>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-4">
            Why Toronto Businesses
            <br />
            <span className="text-gradient">Choose Excell Online</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-10 rounded-2xl"
            style={{
              background: '#161616',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <div className="max-w-2xl mb-10">
              <div className="text-[11px] uppercase tracking-[0.32em] text-gray-400 font-semibold mb-4">Core Advantage</div>
              <h3 className="font-heading font-bold text-white text-3xl sm:text-4xl leading-tight mb-4">
                Premium execution,
                <br />
                <span className="text-gradient">without agency nonsense.</span>
              </h3>
              <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
                Excell Online is built for businesses that want a serious online presence, stronger systems,
                and a cleaner path from visitor to customer.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] }}
                  className="border-t pt-5"
                  style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                >
                  <div className="text-[11px] uppercase tracking-[0.32em] text-red-400 font-semibold">{pillar.number}</div>
                  <h4 className="font-heading font-bold text-white text-xl mt-3">{pillar.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mt-3">{pillar.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 rounded-2xl h-full"
            style={{
              background: '#161616',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <div className="text-[11px] uppercase tracking-[0.32em] text-gray-400 font-semibold mb-6">What Makes It Credible</div>
            <div className="space-y-4">
              {differentiators.map((item, i) => (
                <div
                  key={item}
                  className="rounded-xl px-4 py-4"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div className="text-[11px] uppercase tracking-[0.28em] text-red-400 font-semibold">0{i + 1}</div>
                  <p className="text-sm text-gray-400 leading-relaxed mt-2">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
