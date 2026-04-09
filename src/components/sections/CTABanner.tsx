import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import { siteConfig } from '../../config/site'
import { navigateToHref } from '../../utils/navigation'

export default function CTABanner() {
  const nextStepNotes = [
    'You get clear feedback on trust gaps, friction points, and the fastest wins first.',
    'The first conversation is strategy-focused, not a bloated sales deck.',
    'If there is not a strong fit, we will say so quickly and directly.',
  ]

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: '#080808' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 18% 45%, rgba(229,19,45,0.18) 0%, transparent 42%), radial-gradient(circle at 82% 55%, rgba(120,15,30,0.2) 0%, transparent 40%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[28px] px-8 py-10 sm:px-12"
          style={{
            background: 'linear-gradient(135deg, rgba(24,10,13,0.98) 0%, rgba(81,17,26,0.95) 45%, rgba(141,21,35,0.92) 100%)',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 0 60px rgba(229,19,45,0.18)',
          }}
        >
          <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-8 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Senior-led', 'Strategy-first', 'No-pressure intro'].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full text-xs font-medium text-white/85 border border-white/15 bg-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">
                Ready for a site that feels
                <br />
                more credible the moment it loads?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl leading-relaxed">
                We start by tightening the offer, proof, and conversion friction before any project
                gets buried under presentation or process theater.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={() => navigateToHref(siteConfig.primaryCtaHref)}
                  className="bg-white text-[#E5132D] border-white hover:bg-white/90 hover:text-[#B50E22] font-semibold"
                >
                  {siteConfig.primaryCtaLabel}
                  <ArrowRight size={16} />
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  href="/work/index.html"
                  className="border-white/20 text-white hover:border-white/35 hover:text-white bg-transparent"
                >
                  Browse Case Studies
                </Button>
              </div>
            </div>

            <div
              className="rounded-[24px] p-6 sm:p-7"
              style={{
                background: 'rgba(9,9,9,0.26)',
                border: '1px solid rgba(255,255,255,0.12)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="text-[11px] uppercase tracking-[0.28em] text-red-100/85 font-semibold mb-4">
                What Happens Next
              </div>
              <div className="space-y-3">
                {nextStepNotes.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-xl px-4 py-4 text-sm text-white/85 leading-relaxed border border-white/10 bg-white/[0.06]"
                  >
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-bold text-white bg-white/10 mr-3">
                      0{index + 1}
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-white/65 leading-relaxed mt-5">
                Typical response time: within 1 business day. Clear next steps, no obligation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
