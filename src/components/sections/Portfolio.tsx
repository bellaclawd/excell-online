import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionBadge from '../ui/SectionBadge'
import { portfolioItems } from '../../data/portfolio'

export default function Portfolio() {
  const featured = portfolioItems.filter((p) => p.featured)
  const regular = portfolioItems.filter((p) => !p.featured)

  return (
    <section id="portfolio" className="py-24" style={{ background: '#080808' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            A tighter proof set that shows product UX, trust-heavy interfaces, bold brand work,
            and service-business lead generation without resorting to filler mockups.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Featured items — taller */}
          {featured.map((item, i) => (
            <motion.a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer h-[440px] sm:h-[400px] block"
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
                  background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)',
                }}
              />

              {/* Metric badge */}
              <div className="absolute top-4 left-4">
                <span
                  className="px-3 py-1.5 rounded-full text-xs font-bold text-white"
                  style={{ background: '#E5132D', boxShadow: '0 0 16px rgba(229,19,45,0.5)' }}
                >
                  {item.metric}
                </span>
              </div>

              <div className="absolute top-4 right-4">
                <span className="w-10 h-10 rounded-full border border-white/15 bg-black/25 text-white flex items-center justify-center backdrop-blur-sm">
                  <ArrowUpRight size={16} />
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading font-bold text-white text-xl mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{item.category}</p>
                <p className="text-gray-200 text-sm leading-relaxed mb-4 max-w-xl">{item.summary}</p>
                <div
                  className="rounded-xl px-4 py-3 mb-4"
                  style={{ background: 'rgba(10,10,10,0.45)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <div className="text-[10px] uppercase tracking-[0.28em] text-red-300 font-semibold mb-2">
                    What This Project Proves
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {item.focus}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-xs text-gray-300 border border-white/15 bg-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="inline-flex items-center gap-2 text-xs text-white/80 mt-4">
                  Open live project
                  <ArrowUpRight size={12} />
                </div>
              </div>
            </motion.a>
          ))}

          {/* Regular items — shorter */}
          {regular.map((item, i) => (
            <motion.a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i + 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer h-[340px] sm:h-[320px] block"
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
                  background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.4) 55%, rgba(0,0,0,0.1) 100%)',
                }}
              />

              <div className="absolute top-4 left-4">
                <span
                  className="px-3 py-1.5 rounded-full text-xs font-bold text-white"
                  style={{ background: '#E5132D', boxShadow: '0 0 16px rgba(229,19,45,0.5)' }}
                >
                  {item.metric}
                </span>
              </div>

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
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full text-xs text-gray-300 border border-white/15 bg-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
