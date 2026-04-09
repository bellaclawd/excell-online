import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import TrustBar from './components/sections/TrustBar'
import Services from './components/sections/Services'
import AISection from './components/sections/AISection'
import Portfolio from './components/sections/Portfolio'
import WhyUs from './components/sections/WhyUs'
import Process from './components/sections/Process'
import Testimonials from './components/sections/Testimonials'
import About from './components/sections/About'
import PartnershipNote from './components/sections/PartnershipNote'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'
import CTABanner from './components/sections/CTABanner'
import { scrollToHash } from './utils/navigation'

export default function App() {
  useEffect(() => {
    if (window.location.hash) {
      requestAnimationFrame(() => {
        scrollToHash(window.location.hash, { behavior: 'auto', updateHash: false })
      })
    }

    const onHashChange = () => {
      if (window.location.hash) {
        scrollToHash(window.location.hash, { updateHash: false })
      }
    }

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F5F5] overflow-x-hidden">
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-brand focus:text-white focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <Services />
        <AISection />
        <Portfolio />
        <CTABanner />
        <WhyUs />
        <Process />
        <Testimonials />
        <About />
        <PartnershipNote />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
