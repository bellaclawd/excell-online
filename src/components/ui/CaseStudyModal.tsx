import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ExternalLink, Link2, X } from 'lucide-react'
import { getCaseStudyPath, type PortfolioItem } from '../../data/portfolio'

interface CaseStudyModalProps {
  item: PortfolioItem | null
  onClose: () => void
}

export default function CaseStudyModal({ item, onClose }: CaseStudyModalProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!item) {
      return undefined
    }

    setCopied(false)

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (!dialogRef.current || event.key !== 'Tab') {
        return
      }

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )

      const items = Array.from(focusable).filter((element) => !element.hasAttribute('disabled'))

      if (items.length === 0) {
        return
      }

      const first = items[0]
      const last = items[items.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [item, onClose])

  const copyCaseStudyLink = async () => {
    if (!item) {
      return
    }

    const url = new URL(getCaseStudyPath(item), window.location.origin)

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url.toString())
      } else {
        window.prompt('Copy this case study link', url.toString())
      }
    } catch {
      window.prompt('Copy this case study link', url.toString())
    }

    setCopied(true)
  }

  return (
    <AnimatePresence>
      {item && (
        <>
          <motion.button
            type="button"
            aria-label="Close case study"
            className="fixed inset-0 z-[70] bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <div className="fixed inset-0 z-[71] overflow-y-auto px-4 py-6 sm:px-6 sm:py-10">
            <motion.div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={`case-study-title-${item.id}`}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-5xl mx-auto rounded-[28px] overflow-hidden"
              style={{
                background: '#111111',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 32px 80px rgba(0,0,0,0.45)',
              }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative h-[260px] sm:h-[320px]">
                <img
                  src={item.image}
                  alt={`${item.title} case study preview`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(8,8,8,0.96) 0%, rgba(8,8,8,0.55) 45%, rgba(8,8,8,0.18) 100%)',
                  }}
                />

                <div className="absolute inset-x-0 top-0 p-5 sm:p-6 flex items-start justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 rounded-full text-xs font-semibold text-white border border-white/10 bg-black/25 backdrop-blur-sm">
                      {item.client}
                    </span>
                    <span
                      className="px-3 py-1.5 rounded-full text-xs font-bold text-white"
                      style={{ background: '#E5132D', boxShadow: '0 0 16px rgba(229,19,45,0.35)' }}
                    >
                      {item.metric}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close case study modal"
                    autoFocus
                    className="w-11 h-11 rounded-full border border-white/15 bg-black/30 text-white hover:border-white/30 transition-colors flex items-center justify-center backdrop-blur-sm"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="text-[11px] uppercase tracking-[0.28em] text-red-300 font-semibold mb-3">
                    {item.category}
                  </div>
                  <h3
                    id={`case-study-title-${item.id}`}
                    className="font-heading font-bold text-3xl sm:text-4xl text-white max-w-3xl"
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-2xl mt-4">
                    {item.brief}
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 p-6 sm:p-8">
                <div className="space-y-6">
                  <section>
                    <div className="text-[11px] uppercase tracking-[0.28em] text-red-400 font-semibold mb-3">
                      Snapshot
                    </div>
                    <div className="grid sm:grid-cols-3 gap-3">
                      {item.snapshot.map((entry) => (
                        <div
                          key={entry.label}
                          className="rounded-xl px-4 py-4 border border-white/8 bg-white/[0.03]"
                        >
                          <div className="text-[10px] uppercase tracking-[0.24em] text-gray-500 font-semibold mb-2">
                            {entry.label}
                          </div>
                          <p className="text-sm text-gray-300 leading-relaxed">{entry.value}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <div className="text-[11px] uppercase tracking-[0.28em] text-red-400 font-semibold mb-3">
                      The Challenge
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {item.challenge}
                    </p>
                  </section>

                  <section>
                    <div className="text-[11px] uppercase tracking-[0.28em] text-red-400 font-semibold mb-3">
                      Approach
                    </div>
                    <div className="space-y-3">
                      {item.approach.map((point) => (
                        <div
                          key={point}
                          className="rounded-xl px-4 py-4 text-sm text-gray-300 leading-relaxed border border-white/8 bg-white/[0.03]"
                        >
                          {point}
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <div className="text-[11px] uppercase tracking-[0.28em] text-red-400 font-semibold mb-3">
                      What Shipped
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.deliverables.map((deliverable) => (
                        <span
                          key={deliverable}
                          className="px-3 py-1.5 rounded-full text-xs font-medium text-gray-300 border border-white/10 bg-white/[0.04]"
                        >
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </section>
                </div>

                <div className="space-y-5">
                  <section
                    className="rounded-2xl p-5"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <div className="text-[11px] uppercase tracking-[0.28em] text-red-300 font-semibold mb-3">
                      What This Project Proves
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {item.focus}
                    </p>
                  </section>

                  <section
                    className="rounded-2xl p-5"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <div className="text-[11px] uppercase tracking-[0.28em] text-red-300 font-semibold mb-3">
                      Proof Highlights
                    </div>
                    <div className="space-y-3">
                      {item.proofPoints.map((point) => (
                        <div key={point} className="flex items-start gap-3 text-sm text-gray-300">
                          <span className="w-6 h-6 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center shrink-0 mt-0.5">
                            <ArrowUpRight size={12} className="text-brand-light" />
                          </span>
                          <span className="leading-relaxed">{point}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section
                    className="rounded-2xl p-5"
                    style={{
                      background: 'rgba(229,19,45,0.08)',
                      border: '1px solid rgba(229,19,45,0.2)',
                    }}
                  >
                    <div className="text-[11px] uppercase tracking-[0.28em] text-red-300 font-semibold mb-3">
                      Explore Further
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed mb-5">
                      Use this quick preview for the headline takeaways, then open the full case
                      study if you want the deeper write-up and standalone shareable page.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={getCaseStudyPath(item)}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-white font-semibold border border-white/12 bg-white/[0.05] hover:border-white/20 transition-colors"
                      >
                        Open full case study
                        <ArrowUpRight size={15} />
                      </a>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-brand hover:bg-brand-light text-white font-semibold transition-colors"
                      >
                        Visit live project
                        <ExternalLink size={15} />
                      </a>
                    </div>

                    <button
                      type="button"
                      onClick={copyCaseStudyLink}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-white font-semibold border border-white/12 bg-white/[0.05] hover:border-white/20 transition-colors mt-3"
                    >
                      <Link2 size={15} />
                      {copied ? 'Link copied' : 'Copy full case study link'}
                    </button>

                    <div className="flex flex-wrap gap-2 mt-5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 rounded-full text-xs font-medium text-gray-300 border border-white/10 bg-white/[0.04]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
