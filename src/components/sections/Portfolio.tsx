import { motion } from 'framer-motion'
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
          <p className="text-gray-400 text-lg max-w-xl">
            Real projects. Real results. See how we've helped Toronto businesses grow online.
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
              className="group relative rounded-2xl overflow-hidden cursor-pointer h-[400px] block"
              style={{ border: '1px solid rgba(255,255,255,0.07)' }}
              whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
            >
              {/* Photo background */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              {/* Gradient overlay */}
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

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading font-bold text-white text-xl mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{item.category}</p>
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
              className="group relative rounded-2xl overflow-hidden cursor-pointer h-[280px] block"
              style={{ border: '1px solid rgba(255,255,255,0.07)' }}
              whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
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
