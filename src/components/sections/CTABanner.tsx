import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button'

export default function CTABanner() {
  const handleScroll = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{ background: '#E5132D' }}
    >
      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0,0,0,0.2) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">
            Like what you see?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Let's build something just as impressive for your business. Free strategy call, no strings attached.
          </p>
          <Button
            variant="ghost"
            size="lg"
            onClick={handleScroll}
            className="bg-white text-[#E5132D] border-white hover:bg-white/90 hover:text-[#B50E22] font-semibold"
          >
            Start Your Project
            <ArrowRight size={16} />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
