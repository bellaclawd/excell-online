import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import { siteConfig } from '../../config/site'
import { navigateToHref } from '../../utils/navigation'

export default function CTABanner() {
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
          className="rounded-[28px] px-8 py-12 sm:px-12 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(36,11,15,0.98) 0%, rgba(121,18,33,0.95) 55%, rgba(229,19,45,0.86) 100%)',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 0 60px rgba(229,19,45,0.18)',
          }}
        >
          <div className="flex flex-wrap justify-center gap-2 mb-6">
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
            Ready for a site that looks sharper
            <br />
            and converts cleaner?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            We&apos;ll look at the trust gaps, friction points, and fastest wins first. Clear next
            steps, no bloated pitch.
          </p>
          <Button
            variant="ghost"
            size="lg"
            onClick={() => navigateToHref(siteConfig.primaryCtaHref)}
            className="bg-white text-[#E5132D] border-white hover:bg-white/90 hover:text-[#B50E22] font-semibold"
          >
            {siteConfig.primaryCtaLabel}
            <ArrowRight size={16} />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
