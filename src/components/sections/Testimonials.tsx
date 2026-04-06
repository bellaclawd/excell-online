import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'
import SectionBadge from '../ui/SectionBadge'
import { testimonials } from '../../data/testimonials'

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const current = testimonials[active]

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive((a) => (a + 1) % testimonials.length)

  return (
    <section id="testimonials" className="py-24" style={{ background: '#0f0a0b' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <SectionBadge className="mb-4">Client Stories</SectionBadge>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-4">
            Toronto Businesses{' '}
            <span className="text-gradient">Love Working With Us</span>
          </h2>
        </motion.div>

        {/* Featured testimonial card */}
        <div className="max-w-4xl mx-auto">
          <div
            className="relative p-8 sm:p-10 rounded-2xl mb-6"
            style={{
              background: 'rgba(22,22,22,0.85)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.07)',
              boxShadow: '0 0 40px rgba(229,19,45,0.12)',
            }}
          >
            {/* Quote icon */}
            <div
              className="absolute top-8 right-8 opacity-10"
              style={{ color: '#E5132D' }}
            >
              <Quote size={56} />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: current.stars }).map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Highlight badge */}
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-5"
                  style={{ background: 'rgba(229,19,45,0.2)', border: '1px solid rgba(229,19,45,0.35)' }}
                >
                  {current.highlight}
                </span>

                {/* Quote */}
                <blockquote className="text-white text-lg sm:text-xl leading-relaxed mb-8 font-medium">
                  "{current.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-heading font-bold text-white text-sm shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #B50E22, #E5132D)',
                    }}
                  >
                    {current.initials}
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-white">{current.name}</div>
                    <div className="text-gray-400 text-sm">
                      {current.role}, {current.company}
                    </div>
                    <div className="text-gray-400 text-xs mt-0.5">{current.location}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between">
            {/* Avatar strip */}
            <div className="flex items-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setActive(i)}
                  className="transition-all duration-200"
                  aria-label={`View testimonial from ${t.name}`}
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-heading font-bold text-xs transition-all duration-200"
                    style={{
                      background: i === active
                        ? 'linear-gradient(135deg, #B50E22, #E5132D)'
                        : 'rgba(255,255,255,0.08)',
                      border: i === active ? '2px solid #E5132D' : '2px solid transparent',
                      color: i === active ? '#fff' : '#9CA3AF',
                      transform: i === active ? 'scale(1.15)' : 'scale(1)',
                    }}
                  >
                    {t.initials}
                  </div>
                </button>
              ))}
            </div>

            {/* Prev / Next */}
            <div className="flex items-center gap-3">
              {/* Dot indicators */}
              <div className="flex gap-1.5 mr-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="w-2 h-2 rounded-full transition-all duration-200"
                    style={{
                      background: i === active ? '#E5132D' : 'rgba(255,255,255,0.2)',
                      transform: i === active ? 'scale(1.3)' : 'scale(1)',
                    }}
                  />
                ))}
              </div>

              <button
                onClick={prev}
                className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(229,19,45,0.5)'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.1)'
                }}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(229,19,45,0.5)'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.1)'
                }}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
