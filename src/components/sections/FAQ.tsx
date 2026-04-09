import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Plus } from 'lucide-react'
import SectionBadge from '../ui/SectionBadge'
import Button from '../ui/Button'
import { faqItems } from '../../data/faq'
import { siteConfig } from '../../config/site'
import { navigateToHref } from '../../utils/navigation'

const reassuranceItems = [
  'Reply within 1 business day',
  'Clear recommendation before a full proposal',
  'No-pressure first conversation',
]

export default function FAQ() {
  const [open, setOpen] = useState<string | null>(faqItems[0]?.id ?? null)

  const toggle = (id: string) => setOpen((prev) => (prev === id ? null : id))

  return (
    <section id="faq" className="py-24" style={{ background: '#111111' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <SectionBadge className="mb-4">Before You Reach Out</SectionBadge>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-4">
            The questions people usually ask
            <br />
            <span className="text-gradient">before we get started.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            This section is here to make the first conversation easier, not harder. If you already
            know you want to talk, you can skip straight to the project form.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_320px] gap-6 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3"
          >
            {faqItems.map((item, i) => {
              const isOpen = open === item.id
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: '#161616',
                    border: `1px solid ${isOpen ? 'rgba(229,19,45,0.25)' : 'rgba(255,255,255,0.07)'}`,
                    transition: 'border-color 0.2s',
                  }}
                >
                  <button
                    onClick={() => toggle(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    id={`faq-btn-${item.id}`}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-heading font-semibold text-white text-sm sm:text-base max-w-2xl">
                      {item.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0"
                    >
                      <Plus
                        size={18}
                        style={{ color: isOpen ? '#E5132D' : '#6B7280' }}
                      />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div
                          id={`faq-answer-${item.id}`}
                          role="region"
                          aria-labelledby={`faq-btn-${item.id}`}
                          className="px-6 pb-6 pt-1 text-sm text-gray-400 leading-relaxed border-t border-white/5"
                        >
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-28"
          >
            <div
              className="rounded-2xl p-6"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div className="text-[11px] uppercase tracking-[0.28em] text-red-400 font-semibold mb-3">
                Need a Faster Answer?
              </div>
              <h3 className="font-heading font-bold text-white text-2xl mb-3">
                Start with the project form.
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                If the fit already feels right, the fastest move is to tell us what you are trying
                to improve. We&apos;ll come back with the clearest next step.
              </p>

              <div className="space-y-3 mt-6">
                {reassuranceItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl px-4 py-3 text-sm text-gray-300 border border-white/8 bg-white/[0.03]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <Button className="mt-6 w-full justify-center" onClick={() => navigateToHref(siteConfig.primaryCtaHref)}>
                {siteConfig.primaryCtaLabel}
                <ArrowRight size={15} />
              </Button>

              <a
                href={siteConfig.emailHref}
                className="mt-4 inline-flex text-sm text-gray-400 hover:text-white transition-colors"
              >
                Or email {siteConfig.email}
              </a>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
