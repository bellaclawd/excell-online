import { motion } from 'framer-motion'
import { ArrowRight, Clock3, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react'
import SectionBadge from '../ui/SectionBadge'
import Button from '../ui/Button'
import { siteConfig } from '../../config/site'
import { testimonials } from '../../data/testimonials'
import { navigateToHref, scrollToHash } from '../../utils/navigation'

const proofNotes = [
  {
    icon: TrendingUp,
    title: 'Outcome-focused',
    description: 'The strongest projects are measured by what changes after launch, not just how good the mockups looked.',
  },
  {
    icon: ShieldCheck,
    title: 'Trust-led',
    description: 'In legal, property, and security work especially, the interface has to feel dependable before it feels impressive.',
  },
  {
    icon: Clock3,
    title: 'Operationally useful',
    description: 'Automation and product work only matter when they reduce friction, save time, or make the next step clearer.',
  },
]

export default function ResultsSnapshot() {
  const featuredResults = testimonials.slice(0, 4)

  return (
    <section id="results" className="py-24" style={{ background: '#0d0d0d' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <SectionBadge className="mb-4">Outcome Snapshot</SectionBadge>
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-end">
            <div>
              <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white leading-tight">
                Proof that goes beyond
                <br />
                <span className="text-gradient">a polished first impression.</span>
              </h2>
            </div>
            <div>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                The site now shows live work and case-study detail. This section makes the next
                layer explicit: what changed for real businesses after the build, redesign, or
                automation went live.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid xl:grid-cols-[0.95fr_1.05fr] gap-6 items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[28px] p-7 sm:p-8"
            style={{
              background: 'linear-gradient(135deg, rgba(36,11,15,0.98) 0%, rgba(118,21,34,0.88) 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 0 56px rgba(229,19,45,0.16)',
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                <Sparkles size={18} className="text-white" />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.28em] text-red-200/85 font-semibold">
                  What The Best Projects Share
                </div>
                <div className="font-heading font-bold text-white text-xl mt-2">
                  Better trust, cleaner action, fewer weak points.
                </div>
              </div>
            </div>

            <p className="text-white/90 text-base leading-relaxed">
              Different industries, different deliverables, same idea: the site or workflow should
              feel easier to trust and easier to act on as soon as someone lands on it.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mt-7">
              {proofNotes.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-2xl p-4"
                  style={{
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <div className="w-9 h-9 rounded-xl bg-black/20 border border-white/10 flex items-center justify-center mb-4">
                    <Icon size={16} className="text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-white text-sm mb-2">{title}</h3>
                  <p className="text-xs text-red-50/85 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <Button variant="ghost" onClick={() => scrollToHash('#testimonials')}>
                Read client stories
              </Button>
              <Button onClick={() => navigateToHref(siteConfig.primaryCtaHref)}>
                {siteConfig.primaryCtaLabel}
                <ArrowRight size={15} />
              </Button>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {featuredResults.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl p-6"
                style={{
                  background: '#161616',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.28em] text-red-400 font-semibold mb-3">
                      {item.industry}
                    </div>
                    <div className="font-heading font-bold text-white text-3xl sm:text-4xl leading-none">
                      {item.resultValue}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mt-3 max-w-xs">
                      {item.resultSummary}
                    </p>
                  </div>
                  <span className="px-3 py-1.5 rounded-full text-xs font-medium text-gray-300 border border-white/10 bg-white/[0.04]">
                    {item.company}
                  </span>
                </div>

                <div
                  className="rounded-xl px-4 py-4 mt-6"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <div className="text-[10px] uppercase tracking-[0.28em] text-red-300 font-semibold mb-2">
                    Context
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.engagement}
                  </p>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed mt-5">
                  “{item.quote}”
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
