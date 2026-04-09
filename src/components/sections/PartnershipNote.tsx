import { motion } from 'framer-motion'
import { ArrowRight, CheckCheck, MessageCircleMore, ShieldCheck, Sparkles } from 'lucide-react'
import SectionBadge from '../ui/SectionBadge'
import Button from '../ui/Button'
import { siteConfig } from '../../config/site'
import { navigateToHref } from '../../utils/navigation'

const whatYouGet = [
  'Direct communication instead of getting bounced through layers',
  'Straight answers about scope, tradeoffs, and what is actually worth doing',
  'A site or workflow that is designed to feel sharper and convert cleaner',
]

const whatHelps = [
  'One clear decision-maker on your side',
  'Access to the best proof, projects, and context you already have',
  'Fast approvals when the direction feels right',
]

const principles = [
  {
    icon: MessageCircleMore,
    title: 'No pressure first conversation',
    description: 'The first goal is clarity, not a hard sell.',
  },
  {
    icon: ShieldCheck,
    title: 'Honest recommendations',
    description: 'Sometimes the right answer is a tighter fix, not a bigger project.',
  },
  {
    icon: Sparkles,
    title: 'Polish that supports trust',
    description: 'Taste matters, but only if it helps the business feel more credible.',
  },
]

export default function PartnershipNote() {
  return (
    <section id="working-together" className="py-24" style={{ background: '#0a0a0a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionBadge className="mb-4">Working Together</SectionBadge>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white leading-tight">
              What the relationship
              <br />
              <span className="text-gradient">should actually feel like.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mt-5">
              By this point on the page, the right question is not just “can they build?”
              It&apos;s “will this feel clear, honest, and easy to move through when the work starts?”
            </p>

            <div
              className="rounded-[24px] p-6 sm:p-7 mt-8"
              style={{
                background: 'linear-gradient(135deg, rgba(34,11,15,0.95) 0%, rgba(95,18,29,0.85) 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 0 44px rgba(229,19,45,0.12)',
              }}
            >
              <div className="text-[11px] uppercase tracking-[0.28em] text-red-200/85 font-semibold mb-3">
                Studio Note
              </div>
              <p className="text-white text-lg leading-relaxed">
                You should know what is being solved, what decisions matter, and what happens next
                without chasing updates or decoding agency language. That is the bar.
              </p>
              <Button className="mt-6" variant="ghost" onClick={() => navigateToHref(siteConfig.primaryCtaHref)}>
                {siteConfig.primaryCtaLabel}
                <ArrowRight size={15} />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
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
                <div className="text-[11px] uppercase tracking-[0.28em] text-red-400 font-semibold mb-4">
                  What You Get From Us
                </div>
                <div className="space-y-3">
                  {whatYouGet.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full border border-brand/20 bg-brand/10 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCheck size={12} className="text-brand-light" />
                      </span>
                      <p className="text-sm text-gray-300 leading-relaxed">{item}</p>
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
                <div className="text-[11px] uppercase tracking-[0.28em] text-red-400 font-semibold mb-4">
                  What Helps The Work Move
                </div>
                <div className="space-y-3">
                  {whatHelps.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCheck size={12} className="text-white" />
                      </span>
                      <p className="text-sm text-gray-300 leading-relaxed">{item}</p>
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
