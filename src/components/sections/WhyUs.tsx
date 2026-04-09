import { motion } from 'framer-motion'
import SectionBadge from '../ui/SectionBadge'

const pillars = [
  {
    number: '01',
    title: 'Strategy Before Surface Polish',
    description: 'Offer clarity, hierarchy, proof, and next-step friction get solved before visual flourishes take over.',
  },
  {
    number: '02',
    title: 'Same-Team Design + Build',
    description: 'The people shaping the interface stay close to the implementation, which keeps quality tighter.',
  },
  {
    number: '03',
    title: 'Automation With Restraint',
    description: 'AI only appears where it removes friction, speeds up response time, or saves your team repetitive work.',
  },
  {
    number: '04',
    title: 'Clean Ownership After Launch',
    description: 'You leave with a site, assets, and systems you can actually control once the project goes live.',
  },
]

const differentiators = [
  'Live work on the homepage instead of placeholder mockups',
  'Named client stories across multiple industries',
  'Direct communication that keeps decisions fast and specific',
  'Copy, hierarchy, design, and conversion thinking shaped together',
  'Performance and responsiveness treated as product quality',
  'Post-launch refinement still possible after handoff',
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
          <SectionBadge className="mb-4">Why It Lands</SectionBadge>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-4">
            Why Serious Businesses
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
                <span className="text-gradient">without agency theater.</span>
              </h3>
              <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
                The best projects feel stronger because strategy, proof, copy, and build quality
                are all pulling in the same direction before the design gets flashy.
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
            <div className="text-[11px] uppercase tracking-[0.32em] text-gray-400 font-semibold mb-6">What Keeps It Credible</div>
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
