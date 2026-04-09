import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Check, ArrowRight } from 'lucide-react'
import SectionBadge from '../ui/SectionBadge'
import Button from '../ui/Button'
import { contactExpectations, siteConfig } from '../../config/site'

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
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000+',
]

interface FormState {
  name: string
  email: string
  phone: string
  service: string
  budget: string
  message: string
  company: string
}

type SubmitStatus = 'idle' | 'submitting' | 'submitted' | 'fallback' | 'error'

type SubmitError = Error & {
  fallback?: boolean
}

const initialFormState: FormState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  budget: '',
  message: '',
  company: '',
}

function makeSubmitError(message: string, fallback = false): SubmitError {
  const error = new Error(message) as SubmitError
  error.fallback = fallback
  return error
}

function buildMailtoHref(form: FormState) {
  const subject = encodeURIComponent(
    `${siteConfig.businessName} project inquiry${form.service ? ` - ${form.service}` : ''}`,
  )
  const body = encodeURIComponent(
    [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || 'Not provided'}`,
      `Service: ${form.service || 'Not selected'}`,
      `Budget: ${form.budget || 'Not selected'}`,
      '',
      'Project details:',
      form.message,
    ].join('\n'),
  )

  return `${siteConfig.emailHref}?subject=${subject}&body=${body}`
}

async function submitToEndpoint(form: FormState) {
  let response: Response

  try {
    response = await fetch(siteConfig.contactEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        ...form,
        submittedAt: new Date().toISOString(),
        source: window.location.href,
      }),
    })
  } catch {
    throw makeSubmitError('Direct submission is unavailable right now.', true)
  }

  const responseText = await response.text()
  const contentType = response.headers.get('content-type') || ''

  if (!contentType.includes('application/json')) {
    throw makeSubmitError('This environment cannot submit directly.', true)
  }

  let payload: { ok?: boolean; error?: string; errors?: Record<string, string> }

  try {
    payload = JSON.parse(responseText)
  } catch {
    throw makeSubmitError('The contact endpoint returned an invalid response.', true)
  }

  if (!response.ok || !payload.ok) {
    const fieldErrors = payload.errors ? Object.values(payload.errors).join(' ') : ''
    throw makeSubmitError(payload.error || fieldErrors || 'We could not send your message.')
  }
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialFormState)
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const contactInfo = [
    ...(siteConfig.phone
      ? [
          {
            icon: Phone,
            label: 'Phone',
            value: siteConfig.phone,
            href: siteConfig.phoneHref,
          },
        ]
      : []),
    {
      icon: Mail,
      label: 'Email',
      value: siteConfig.email,
      href: siteConfig.emailHref,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: siteConfig.location,
      href: '',
    },
  ]

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const resetForm = () => {
    setForm(initialFormState)
    setStatus('idle')
    setErrorMessage('')
  }

  const handleFallback = () => {
    window.location.href = buildMailtoHref(form)
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      await submitToEndpoint(form)
      setStatus('submitted')
      setForm(initialFormState)
      return
    } catch (error) {
      const submitError = error as SubmitError

      if (submitError.fallback) {
        handleFallback()
        setStatus('fallback')
        return
      }

      setErrorMessage(submitError.message || 'We could not send your message.')
      setStatus('error')
    }
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 text-center"
        >
          <SectionBadge className="mb-4">Start a Project</SectionBadge>
          <h2 className="font-heading font-extrabold text-5xl sm:text-6xl lg:text-7xl text-white mb-4 leading-[1.05]">
            Ready for a
            <br />
            <span className="text-gradient">Clearer Next Step?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-lg mx-auto">
            Tell us where the site, product, or workflow needs to improve. We&apos;ll follow up
            with the clearest next step for your project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-3 mb-8">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
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
                        className="text-sm font-medium text-white hover:text-brand-light transition-colors"
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

            <div
              className="p-6 rounded-xl"
              style={{ background: '#161616', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <h3 className="font-heading font-semibold text-white text-sm mb-4">What to Expect</h3>
              <ul className="space-y-3">
                {contactExpectations.map((expectation) => (
                  <li key={expectation} className="flex items-center gap-3 text-sm text-gray-400">
                    <div className="w-4 h-4 rounded-full bg-brand/15 border border-brand/30 flex items-center justify-center shrink-0">
                      <Check size={10} className="text-brand" />
                    </div>
                    {expectation}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {status === 'submitted' || status === 'fallback' || status === 'error' ? (
              <div
                aria-live="polite"
                className="h-full min-h-[420px] flex flex-col items-center justify-center text-center p-8 rounded-2xl"
                style={{
                  background: '#161616',
                  border: `1px solid ${
                    status === 'error' ? 'rgba(255,255,255,0.12)' : 'rgba(229,19,45,0.25)'
                  }`,
                  boxShadow: status === 'error' ? 'none' : '0 0 40px rgba(229,19,45,0.1)',
                }}
              >
                <div className="w-16 h-16 rounded-full bg-brand/15 border border-brand/30 flex items-center justify-center mb-6">
                  <Check size={28} className="text-brand" />
                </div>
                <h3 className="font-heading font-bold text-white text-2xl mb-3">
                  {status === 'submitted' && 'Message sent.'}
                  {status === 'fallback' && 'Your email app should open now.'}
                  {status === 'error' && 'We could not send your message.'}
                </h3>
                <p className="text-gray-400 leading-relaxed max-w-sm mb-6">
                  {status === 'submitted' &&
                    "Thanks for reaching out. Your message was sent successfully and we'll reply within 1 business day."}
                  {status === 'fallback' &&
                    `Direct submission is unavailable in this environment, so we opened an email draft to ${siteConfig.email} with your project details.`}
                  {status === 'error' &&
                    (errorMessage || `Please email ${siteConfig.email} directly and we'll take it from there.`)}
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {status !== 'submitted' && (
                    <Button onClick={handleFallback}>
                      Email Us Directly
                      <ArrowRight size={16} />
                    </Button>
                  )}
                  <Button variant="ghost" onClick={resetForm}>
                    Send Another Message
                  </Button>
                </div>
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
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs text-gray-400 mb-1.5 font-medium">
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs text-gray-400 mb-1.5 font-medium">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-xs text-gray-400 mb-1.5 font-medium">
                    Phone (optional)
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    placeholder="Your phone number"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <label htmlFor="contact-service" className="block text-xs text-gray-400 mb-1.5 font-medium">
                      Service
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className={inputClass}
                      style={{ ...inputStyle, appearance: 'none', paddingRight: '2.5rem' }}
                    >
                      <option value="" disabled>Select a service</option>
                      {services.map((service) => <option key={service} value={service}>{service}</option>)}
                    </select>
                    <div className="pointer-events-none absolute right-3 top-[2.15rem] text-gray-500">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                  <div className="relative">
                    <label htmlFor="contact-budget" className="block text-xs text-gray-400 mb-1.5 font-medium">
                      Budget Range
                    </label>
                    <select
                      id="contact-budget"
                      name="budget"
                      required
                      value={form.budget}
                      onChange={handleChange}
                      className={inputClass}
                      style={{ ...inputStyle, appearance: 'none', paddingRight: '2.5rem' }}
                    >
                      <option value="" disabled>Select budget</option>
                      {budgets.map((budget) => <option key={budget} value={budget}>{budget}</option>)}
                    </select>
                    <div className="pointer-events-none absolute right-3 top-[2.15rem] text-gray-500">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-xs text-gray-400 mb-1.5 font-medium">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
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
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-semibold text-white transition-all duration-200"
                  style={{
                    background: '#E5132D',
                    boxShadow: status === 'submitting' ? 'none' : '0 0 24px rgba(229,19,45,0.4)',
                    opacity: status === 'submitting' ? 0.7 : 1,
                  }}
                  whileHover={status === 'submitting' ? {} : { scale: 1.01, y: -1 }}
                  whileTap={status === 'submitting' ? {} : { scale: 0.99 }}
                >
                  {status === 'submitting' ? (
                    <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <ArrowRight size={16} />
                    </>
                  )}
                </motion.button>
                <p className="text-xs text-gray-500 text-center">
                  Prefer email? <a href={siteConfig.emailHref} className="text-gray-300 hover:text-white transition-colors">{siteConfig.email}</a> ·{' '}
                  <a href="/privacy.html" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
