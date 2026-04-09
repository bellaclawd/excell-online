import { Building2, LayoutTemplate, ShieldCheck } from 'lucide-react'

const trustCards = [
  {
    icon: LayoutTemplate,
    eyebrow: 'Live Portfolio',
    title: 'Four real projects visitors can open right now',
    body: 'Instead of asking for blind trust, the homepage shows live work across SaaS, security, recreation, and home services.',
    items: ['PoketDex', 'SecureUploads.ca', 'The Jokers Paintball', 'RenoDecks.ca'],
  },
  {
    icon: Building2,
    eyebrow: 'Client Range',
    title: 'Named feedback from five business categories',
    body: 'Hospitality, e-commerce, property, legal, and SaaS all appear in the client story set, which helps the proof feel broader and more believable.',
    items: ['Hospitality', 'E-Commerce', 'Property', 'Legal', 'SaaS'],
  },
  {
    icon: ShieldCheck,
    eyebrow: 'Delivery Model',
    title: 'Toronto-based, senior-led, and built around trust',
    body: 'The strongest positioning here is direct access, fewer handoffs, and a sharper path from strategy to launch.',
    items: ['Toronto-based', 'Direct access', 'Senior-led', 'Launch support'],
  },
]

export default function TrustBar() {
  return (
    <section
      className="py-12 relative overflow-hidden border-y"
      style={{
        background: '#111111',
        borderColor: 'rgba(255,255,255,0.06)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">
            Proof at a glance
          </p>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mt-3">
            Real signals beat decorative trust every time.
          </h2>
          <p className="text-gray-400 leading-relaxed mt-4 max-w-2xl">
            The fastest way to feel more credible is to show live work, named client context,
            and a clear delivery model before a visitor ever reaches the form.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {trustCards.map(({ icon: Icon, eyebrow, title, body, items }) => (
            <div
              key={title}
              className="rounded-2xl p-6"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center mb-4">
                <Icon size={18} className="text-brand" />
              </div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-red-400 font-semibold mb-3">
                {eyebrow}
              </div>
              <h3 className="font-heading font-bold text-white text-xl mb-3">
                {title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-5">
                {body}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full text-xs font-medium text-gray-300 border border-white/10 bg-white/[0.04]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
