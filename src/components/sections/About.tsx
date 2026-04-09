import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Gauge, Handshake, Sparkles, XCircle } from 'lucide-react'
import SectionBadge from '../ui/SectionBadge'
import Button from '../ui/Button'
import { siteConfig } from '../../config/site'
import { navigateToHref, scrollToHash } from '../../utils/navigation'

const bestFit = [
  'Established businesses that have outgrown a generic or outdated site',
  'Founders who care about trust, tone, and how the brand feels in the first 10 seconds',
  'Teams with a real offer and real proof that needs sharper presentation',
  'Projects where fast decisions and direct communication matter',
]

const notIdeal = [
  'Anyone shopping for the cheapest possible build with no room for strategy',
  'Projects looking for trend-heavy AI gimmicks without workflow value',
  'Engagements that require heavy stakeholder churn for simple decisions',
  'Businesses that are not ready to supply content, proof, or a clear owner',
]

const principles = [
  {
    icon: Handshake,
    title: 'Direct Collaboration',
    description: 'Fewer handoffs, faster answers, and tighter quality from concept to launch.',
  },
  {
    icon: Gauge,
    title: 'Clarity Before Complexity',
    description: 'Offer, hierarchy, proof, and conversion friction get solved before anything flashy.',
  },
  {
    icon: Sparkles,
    title: 'Polish With a Purpose',
    description: 'The goal is not just to look better. It is to feel more trustworthy and convert more cleanly.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24" style={{ background: '#0b0b0b' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionBadge className="mb-5">Who We&apos;re Best For</SectionBadge>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-4 leading-tight">
              Best for businesses that need
              <br />
              <span className="text-gradient">more than a prettier homepage.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Excell Online is strongest when a business already has something real to sell and
              needs the site, product, or workflow to communicate it with more confidence.
            </p>
            <div className="space-y-4 mt-6 text-gray-400 leading-relaxed max-w-xl">
              <p>
                That usually means clearer positioning, stronger proof, cleaner calls to action,
                and fewer places where a serious buyer starts to hesitate.
              </p>
              <p>
                The work can include websites, apps, and AI-supported operations, but the common
                thread is always the same: make the experience feel sharper, more trustworthy, and
                easier to act on.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {['Toronto-based', 'Senior-led', 'Trust-first', 'Direct communication'].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-full text-xs font-medium text-gray-300 border border-white/10 bg-white/[0.04]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button onClick={() => navigateToHref(siteConfig.primaryCtaHref)}>
                {siteConfig.primaryCtaLabel}
                <ArrowRight size={15} />
              </Button>
              <Button variant="ghost" onClick={() => scrollToHash('#faq')}>
                Read Common Questions
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div
                className="rounded-2xl p-6"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <CheckCircle2 size={18} className="text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.28em] text-emerald-400 font-semibold">
                      Great Fit
                    </div>
                    <h3 className="font-heading font-bold text-white text-xl mt-2">
                      When this tends to work best
                    </h3>
                  </div>
                </div>
                <div className="space-y-3">
                  {bestFit.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl px-4 py-3 text-sm text-gray-300 leading-relaxed border border-white/8 bg-white/[0.03]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="rounded-2xl p-6"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <XCircle size={18} className="text-gray-400" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.28em] text-gray-400 font-semibold">
                      Probably Not
                    </div>
                    <h3 className="font-heading font-bold text-white text-xl mt-2">
                      When another route makes more sense
                    </h3>
                  </div>
                </div>
                <div className="space-y-3">
                  {notIdeal.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl px-4 py-3 text-sm text-gray-300 leading-relaxed border border-white/8 bg-white/[0.03]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {principles.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-2xl p-5"
                  style={{
                    background: '#141414',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-brand" />
                  </div>
                  <h3 className="font-heading font-semibold text-white text-sm mb-2">{title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
