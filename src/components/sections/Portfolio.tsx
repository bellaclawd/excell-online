import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import SectionBadge from '../ui/SectionBadge'
import Button from '../ui/Button'
import CaseStudyModal from '../ui/CaseStudyModal'
import { portfolioItems, type PortfolioItem } from '../../data/portfolio'

const CASE_STUDY_PARAM = 'case-study'

function getCaseStudyFromUrl() {
  const params = new URLSearchParams(window.location.search)
  const id = params.get(CASE_STUDY_PARAM)

  if (!id) {
    return null
  }

  return portfolioItems.find((item) => item.id === id) ?? null
}

function updateCaseStudyUrl(id: string | null, mode: 'push' | 'replace') {
  const url = new URL(window.location.href)

  if (id) {
    url.searchParams.set(CASE_STUDY_PARAM, id)
    if (!url.hash) {
      url.hash = '#portfolio'
    }
  } else {
    url.searchParams.delete(CASE_STUDY_PARAM)
  }

  window.history[mode === 'push' ? 'pushState' : 'replaceState']({}, '', url)
}

export default function Portfolio() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<PortfolioItem | null>(() => {
    if (typeof window === 'undefined') {
      return null
    }

    return getCaseStudyFromUrl()
  })
  const featured = portfolioItems.filter((p) => p.featured)
  const regular = portfolioItems.filter((p) => !p.featured)

  useEffect(() => {
    const syncFromUrl = () => {
      setActiveCaseStudy(getCaseStudyFromUrl())
    }

    window.addEventListener('popstate', syncFromUrl)
    return () => window.removeEventListener('popstate', syncFromUrl)
  }, [])

  useEffect(() => {
    if (!activeCaseStudy) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [activeCaseStudy])

  const openCaseStudy = (item: PortfolioItem) => {
    setActiveCaseStudy(item)
    updateCaseStudyUrl(item.id, 'push')
  }

  const closeCaseStudy = () => {
    setActiveCaseStudy(null)
    updateCaseStudyUrl(null, 'replace')
  }

  return (
    <>
      <section id="portfolio" className="py-24" style={{ background: '#080808' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14"
          >
            <SectionBadge className="mb-4">Our Work</SectionBadge>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-4">
              Work That{' '}
              <span className="text-gradient">Speaks for Itself</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
              Explore the live build or read the case-study breakdown without leaving the page.
              The goal is not just to show polished work, but to show what each project proves.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featured.map((item, i) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-2xl overflow-hidden h-[470px] sm:h-[430px]"
                style={{ border: '1px solid rgba(255,255,255,0.07)' }}
                whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
              >
                <img
                  src={item.image}
                  alt={`${item.title} preview`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.52) 52%, rgba(0,0,0,0.12) 100%)',
                  }}
                />

                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span
                    className="px-3 py-1.5 rounded-full text-xs font-bold text-white"
                    style={{ background: '#E5132D', boxShadow: '0 0 16px rgba(229,19,45,0.5)' }}
                  >
                    {item.metric}
                  </span>
                  <span className="px-3 py-1.5 rounded-full text-xs font-medium text-gray-200 border border-white/12 bg-black/25 backdrop-blur-sm">
                    {item.client}
                  </span>
                </div>

                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    type="button"
                    onClick={() => openCaseStudy(item)}
                    aria-label={`Read the ${item.title} case study`}
                    className="w-10 h-10 rounded-full border border-white/15 bg-black/25 text-white flex items-center justify-center backdrop-blur-sm hover:border-white/30 transition-colors"
                  >
                    <ArrowUpRight size={16} />
                  </button>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading font-bold text-white text-xl mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{item.category}</p>
                  <p className="text-gray-200 text-sm leading-relaxed mb-4 max-w-xl">{item.summary}</p>
                  <div
                    className="rounded-xl px-4 py-3 mb-4"
                    style={{ background: 'rgba(10,10,10,0.48)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <div className="text-[10px] uppercase tracking-[0.28em] text-red-300 font-semibold mb-2">
                      What This Project Proves
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {item.focus}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-xs text-gray-300 border border-white/15 bg-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button size="sm" onClick={() => openCaseStudy(item)}>
                      Read case study
                    </Button>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white border border-white/15 bg-white/[0.04] hover:border-brand/50 hover:text-brand-light transition-colors"
                    >
                      Visit live site
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}

            {regular.map((item, i) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i + 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-2xl overflow-hidden h-[390px] sm:h-[360px]"
                style={{ border: '1px solid rgba(255,255,255,0.07)' }}
                whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
              >
                <img
                  src={item.image}
                  alt={`${item.title} preview`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.5) 58%, rgba(0,0,0,0.1) 100%)',
                  }}
                />

                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span
                    className="px-3 py-1.5 rounded-full text-xs font-bold text-white"
                    style={{ background: '#E5132D', boxShadow: '0 0 16px rgba(229,19,45,0.5)' }}
                  >
                    {item.metric}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => openCaseStudy(item)}
                  aria-label={`Read the ${item.title} case study`}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full border border-white/15 bg-black/25 text-white flex items-center justify-center backdrop-blur-sm hover:border-white/30 transition-colors"
                >
                  <ArrowUpRight size={16} />
                </button>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-heading font-bold text-white text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-xs mb-2.5">{item.category}</p>
                  <p className="text-gray-200 text-xs leading-relaxed mb-3 max-w-md">{item.summary}</p>
                  <div className="mb-3">
                    <div className="text-[10px] uppercase tracking-[0.28em] text-red-300 font-semibold mb-1.5">
                      What It Proves
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed max-w-md">
                      {item.focus}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full text-xs text-gray-300 border border-white/15 bg-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => openCaseStudy(item)}
                      className="inline-flex items-center gap-2 text-sm text-white font-semibold hover:text-brand-light transition-colors"
                    >
                      Read case study
                      <ArrowUpRight size={13} />
                    </button>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      Visit live site
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CaseStudyModal item={activeCaseStudy} onClose={closeCaseStudy} />
    </>
  )
}
