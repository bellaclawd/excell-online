import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Check, ArrowRight } from 'lucide-react'
import SectionBadge from '../ui/SectionBadge'
import Button from '../ui/Button'

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '(416) 555-0192',
    href: 'tel:+14165550192',
    isAction: false,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@excellonline.ca',
    href: 'mailto:hello@excellonline.ca',
    isAction: false,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Toronto, Ontario, Canada',
    href: null,
    isAction: false,
  },
]

const expectations = [
  'Response within 1 business day',
  'Free 30-minute strategy call',
  'Detailed proposal with fixed pricing',
  'No obligation — ever',
]

const services = [
  'Web Design & Development',
  'E-Commerce',
  'AI Agents',
  'Mobile App',
  'SEO & Growth',
  'Brand Identity',
  'Other',
]

const budgets = [
  'Under $5,000',
  '$5,000 – $10,000',
  '$10,000 – $25,000',
  '$25,000 – $50,000',
  '$50,000+',
]

interface FormState {
  name: string
  email: string
  phone: string
  service: string
  budget: string
  message: string
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  const inputClass = [
    'w-full px-4 py-3 rounded-lg text-sm text-white placeholder-gray-600',
    'outline-none transition-all duration-200',
    'focus:border-brand/60 focus:ring-2 focus:ring-brand/20',
  ].join(' ')
  const inputStyle = {
    background: 'rgba(22,22,22,0.8)',
    border: '1px solid rgba(255,255,255,0.1)',
  }

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ background: '#050505' }}
    >
      {/* Red radial glow top center */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '600px',
          height: '300px',
          top: '-60px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'radial-gradient(ellipse at center, rgba(229,19,45,0.2) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 text-center"
        >
          <SectionBadge className="mb-4">Let's Build</SectionBadge>
          <h2 className="font-heading font-extrabold text-5xl sm:text-6xl lg:text-7xl text-white mb-4 leading-[1.05]">
            Ready to Build
            <br />
            <span className="text-gradient">Something Incredible?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-lg mx-auto">
            Tell us what you're building. We'll tell you exactly how we can help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-3 mb-8">
              {contactInfo.map(({ icon: Icon, label, value, href, isAction }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-4 rounded-xl"
                  style={{ background: '#161616', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div className="w-10 h-10 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-brand" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs mb-0.5">{label}</div>
                    {href ? (
                      <a
                        href={href}
                        className={`text-sm font-medium ${isAction ? 'text-brand-light hover:text-brand' : 'text-white hover:text-brand-light'} transition-colors`}
                        onClick={isAction ? (e) => { e.preventDefault() } : undefined}
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-white">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* What to expect */}
            <div
              className="p-6 rounded-xl"
              style={{ background: '#161616', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <h3 className="font-heading font-semibold text-white text-sm mb-4">What to Expect</h3>
              <ul className="space-y-3">
                {expectations.map((exp) => (
                  <li key={exp} className="flex items-center gap-3 text-sm text-gray-400">
                    <div className="w-4 h-4 rounded-full bg-brand/15 border border-brand/30 flex items-center justify-center shrink-0">
                      <Check size={10} className="text-brand" />
                    </div>
                    {exp}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {submitted ? (
              <div
                className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 rounded-2xl"
                style={{
                  background: '#161616',
                  border: '1px solid rgba(229,19,45,0.25)',
                  boxShadow: '0 0 40px rgba(229,19,45,0.1)',
                }}
              >
                <div className="w-16 h-16 rounded-full bg-brand/15 border border-brand/30 flex items-center justify-center mb-6">
                  <Check size={28} className="text-brand" />
                </div>
                <h3 className="font-heading font-bold text-white text-2xl mb-3">
                  Message Received!
                </h3>
                <p className="text-gray-400 leading-relaxed max-w-sm">
                  Thanks for reaching out. We'll review your project and get back to you within 1 business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 p-8 rounded-2xl"
                style={{
                  background: '#161616',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5 font-medium">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5 font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5 font-medium">Phone (optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your phone number"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="block text-xs text-gray-400 mb-1.5 font-medium">Service</label>
                    <select
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className={inputClass}
                      style={{ ...inputStyle, appearance: 'none', paddingRight: '2.5rem' }}
                    >
                      <option value="" disabled>Select a service</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <div className="pointer-events-none absolute right-3 top-[2.15rem] text-gray-500">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                  <div className="relative">
                    <label className="block text-xs text-gray-400 mb-1.5 font-medium">Budget Range</label>
                    <select
                      name="budget"
                      required
                      value={form.budget}
                      onChange={handleChange}
                      className={inputClass}
                      style={{ ...inputStyle, appearance: 'none', paddingRight: '2.5rem' }}
                    >
                      <option value="" disabled>Select budget</option>
                      {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                    <div className="pointer-events-none absolute right-3 top-[2.15rem] text-gray-500">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5 font-medium">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your project..."
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    style={inputStyle}
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-semibold text-white transition-all duration-200"
                  style={{
                    background: '#E5132D',
                    boxShadow: loading ? 'none' : '0 0 24px rgba(229,19,45,0.4)',
                    opacity: loading ? 0.7 : 1,
                  }}
                  whileHover={loading ? {} : { scale: 1.01, y: -1 }}
                  whileTap={loading ? {} : { scale: 0.99 }}
                >
                  {loading ? (
                    <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <ArrowRight size={16} />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
