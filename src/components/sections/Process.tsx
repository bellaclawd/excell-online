import { motion } from 'framer-motion'
import { ArrowRight, CheckCheck, Code2, FileSearch, LayoutTemplate, Rocket } from 'lucide-react'
import SectionBadge from '../ui/SectionBadge'
import Button from '../ui/Button'
import { siteConfig } from '../../config/site'
import { navigateToHref } from '../../utils/navigation'

const deliveryStandards = [
  'Reply within 1 business day',
  'Shared milestones and clearer approvals',
  'Launch support included',
]

const steps = [
  {
    number: '01',
    label: 'Strategy & Scope',
    timeframe: 'Days 1-3',
    icon: FileSearch,
    title: 'Audit the offer, audience, and friction first',
    description: 'We start by clarifying what the site needs to communicate, where buyers are hesitating, and what the next step should be.',
    deliverable: 'Outcome: aligned priorities, tighter scope, and a clear success target before design starts.',
  },
  {
    number: '02',
    label: 'Direction & Design',
    timeframe: 'Week 1-2',
    icon: LayoutTemplate,
    title: 'Shape the hierarchy, messaging, and interface',
    description: 'Wireframes, visual direction, and proof placement are worked out before the build gets deep, which keeps the project cleaner.',
    deliverable: 'Outcome: approved layouts, content direction, and a stronger first-impression system.',
  },
  {
    number: '03',
    label: 'Build & QA',
    timeframe: 'Week 2-5',
    icon: Code2,
    title: 'Build the responsive experience with real checkpoints',
    description: 'Development, content integration, and testing move together so we can catch issues early instead of piling them up at the end.',
    deliverable: 'Outcome: a working staging link, live progress, and fewer surprises in the final stretch.',
  },
  {
    number: '04',
    label: 'Launch & Refine',
    timeframe: 'Launch week',
    icon: Rocket,
    title: 'Go live with support and next-step clarity',
    description: 'Final QA, metadata, forms, analytics, and launch support are handled together, then we clean up early feedback after release.',
    deliverable: 'Outcome: a calmer launch, better handoff, and less post-launch guesswork.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24" style={{ background: '#101010' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.88fr_1.12fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-28"
          >
            <SectionBadge className="mb-4">How Engagements Run</SectionBadge>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-4 leading-tight">
              Clear steps.
              <br />
              <span className="text-gradient">Cleaner execution.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              The best projects feel calm. You know what is being solved, what is being reviewed,
              and what happens next without chasing updates or wondering who owns the next move.
            </p>

            <div className="space-y-3 mt-8">
              {deliveryStandards.map((item) => (
                <div
                  key={item}
                  className="rounded-xl px-4 py-3 flex items-center gap-3 text-sm text-gray-300 border border-white/8 bg-white/[0.03]"
                >
                  <CheckCheck size={16} className="text-brand shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div
              className="rounded-2xl p-5 mt-8"
              style={{
                background: 'rgba(229,19,45,0.08)',
                border: '1px solid rgba(229,19,45,0.2)',
              }}
            >
              <div className="text-[11px] uppercase tracking-[0.28em] text-red-300 font-semibold mb-3">
                What This Usually Means
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                Less back-and-forth, fewer awkward revisions at the end, and a site that launches
                with stronger proof and cleaner next steps.
              </p>
              <Button
                className="mt-5"
                variant="ghost"
                onClick={() => navigateToHref(siteConfig.primaryCtaHref)}
              >
                {siteConfig.primaryCtaLabel}
                <ArrowRight size={15} />
              </Button>
            </div>
          </motion.div>

          <div className="space-y-4">
            {steps.map(({ number, label, timeframe, icon: Icon, title, description, deliverable }, i) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl p-6 sm:p-7"
                style={{
                  background: '#161616',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-brand" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-[11px] uppercase tracking-[0.28em] text-red-400 font-semibold">
                          {number}
                        </span>
                        <span className="text-[11px] uppercase tracking-[0.24em] text-gray-500 font-semibold">
                          {label}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-white text-xl mt-3 max-w-2xl">
                        {title}
                      </h3>
                    </div>
                  </div>
                  <span className="px-3 py-1.5 rounded-full text-xs font-medium text-gray-300 border border-white/10 bg-white/[0.04]">
                    {timeframe}
                  </span>
                </div>

                <div className="grid md:grid-cols-[1fr_0.85fr] gap-6 mt-6">
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {description}
                  </p>
                  <div
                    className="rounded-xl px-4 py-4"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <div className="text-[10px] uppercase tracking-[0.28em] text-red-300 font-semibold mb-2">
                      Deliverable
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {deliverable}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
