const companies = [
  'Valenti\'s Kitchen',
  'Aura Collective',
  'Skyline Property',
  'RouteSync',
  'ClearPath Legal',
  'North Summit Realty',
  'Forge & Co.',
  'Lakeside Dental',
]

export default function TrustBar() {
  const doubled = [...companies, ...companies]

  return (
    <section
      className="py-8 relative overflow-hidden border-y"
      style={{
        background: '#111111',
        borderColor: 'rgba(255,255,255,0.06)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">
          Trusted by businesses across the GTA
        </p>
      </div>

      {/* Fade masks */}
      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, #111111, transparent)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(-90deg, #111111, transparent)' }}
        />

        <div className="flex overflow-hidden">
          <div
            className="flex gap-4 shrink-0"
            style={{ animation: 'marquee 28s linear infinite' }}
          >
            {doubled.map((name, i) => (
              <span
                key={i}
                className="shrink-0 px-4 py-2 rounded-full text-sm font-medium text-gray-400 border border-white/8 bg-white/3 whitespace-nowrap"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
