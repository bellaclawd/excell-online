import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import SectionBadge from '../ui/SectionBadge'
import { faqItems } from '../../data/faq'

export default function FAQ() {
  const [open, setOpen] = useState<string | null>(null)

  const toggle = (id: string) => setOpen((prev) => (prev === id ? null : id))

  return (
    <section id="faq" className="py-24" style={{ background: '#111111' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center"
        >
          <SectionBadge className="mb-4">FAQ</SectionBadge>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-4">
            Questions? We've Got{' '}
            <span className="text-gradient">Answers.</span>
          </h2>
          <p className="text-gray-400">
            Everything you need to know before we get started.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="space-y-2"
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
                className="rounded-xl overflow-hidden"
                style={{
                  background: '#161616',
                  border: `1px solid ${isOpen ? 'rgba(229,19,45,0.25)' : 'rgba(255,255,255,0.07)'}`,
                  borderBottom: isOpen ? '1px solid rgba(229,19,45,0.35)' : undefined,
                  transition: 'border-color 0.2s',
                }}
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-heading font-semibold text-white text-sm sm:text-base">
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
                      <div className="px-6 pb-5 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
