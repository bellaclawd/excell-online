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
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F5F5] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <AISection />
        <Portfolio />
        <WhyUs />
        <Process />
        <Testimonials />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
