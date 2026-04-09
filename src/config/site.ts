const bookingUrl = import.meta.env.VITE_BOOKING_URL?.trim() || ''
const contactEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT?.trim() || '/contact.php'
const contactPhone = import.meta.env.VITE_CONTACT_PHONE?.trim() || ''

function normalizeUrl(value: string | undefined) {
  return value?.trim() || ''
}

export const siteConfig = {
  businessName: 'Excell Online',
  location: 'Toronto, Ontario, Canada',
  email: 'hello@excellonline.ca',
  emailHref: 'mailto:hello@excellonline.ca',
  phone: contactPhone,
  phoneHref: contactPhone ? `tel:${contactPhone.replace(/[^+\d]/g, '')}` : '',
  bookingUrl,
  contactEndpoint,
  primaryCtaLabel: bookingUrl ? 'Book a Strategy Call' : 'Start Your Project',
  primaryCtaHref: bookingUrl || '#contact',
  projectCtaLabel: 'Tell Us About Your Project',
  socialLinks: [
    { label: 'Twitter', href: normalizeUrl(import.meta.env.VITE_SOCIAL_X_URL) },
    { label: 'LinkedIn', href: normalizeUrl(import.meta.env.VITE_SOCIAL_LINKEDIN_URL) },
    { label: 'Instagram', href: normalizeUrl(import.meta.env.VITE_SOCIAL_INSTAGRAM_URL) },
    { label: 'Facebook', href: normalizeUrl(import.meta.env.VITE_SOCIAL_FACEBOOK_URL) },
  ].filter((item) => item.href),
} as const

export const contactExpectations = bookingUrl
  ? [
      'Response within 1 business day',
      'Free 30-minute strategy call',
      'Clear scope and next steps',
      'No obligation - ever',
    ]
  : [
      'Response within 1 business day',
      'A tailored next-step recommendation',
      'Clear scope and next steps',
      'No obligation - ever',
    ]

export function isExternalUrl(href: string) {
  return /^https?:\/\//.test(href) || href.startsWith('mailto:') || href.startsWith('tel:')
}

