export interface PortfolioItem {
  id: string
  title: string
  category: string
  tags: string[]
  metric: string
  image: string
  url: string
  summary: string
  focus: string
  featured?: boolean
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'poketdex',
    title: 'PoketDex',
    category: 'SaaS & Web App',
    tags: ['Web App', 'Database', 'Pokémon TCG'],
    metric: 'SaaS Launch',
    image: '/poketdex.jpg',
    url: 'https://www.poketdex.io',
    summary: 'Collector-first product UX for browsing cards, prices, and collection data without losing clarity.',
    focus: 'Shows Excell can handle dense product interfaces while keeping hierarchy clean and mobile-friendly.',
    featured: true,
  },
  {
    id: 'secureuploads',
    title: 'SecureUploads.ca',
    category: 'SaaS & Security',
    tags: ['SaaS', 'File Sharing', 'Privacy'],
    metric: 'Security UX',
    image: '/secureuploads.jpg',
    url: 'https://secureuploads.ca',
    summary: 'Trust-first interface for sensitive file sharing with a calmer upload flow and clearer security cues.',
    focus: 'Shows security-heavy products can still feel approachable, premium, and simple to use.',
    featured: true,
  },
  {
    id: 'jokers',
    title: 'The Jokers Paintball',
    category: 'Sports & Recreation',
    tags: ['Web Design', 'Branding', 'E-Commerce'],
    metric: 'Brand Refresh',
    image: '/jokers-paintball.jpg',
    url: 'https://jokerspaintball.com',
    summary: 'High-energy recreation site that brings the brand forward fast and makes the next action obvious.',
    focus: 'Shows how Excell carries bold art direction through to booking and conversion structure.',
  },
  {
    id: 'renodecks',
    title: 'RenoDecks.ca',
    category: 'Home Services',
    tags: ['Web Design', 'SEO', 'Lead Gen'],
    metric: 'Lead-Gen Site',
    image: '/renodecks.jpg',
    url: 'https://renodecks.ca',
    summary: 'Service-business site structured around visual proof, scope clarity, and quote intent.',
    focus: 'Shows home-service websites can feel polished without sacrificing trust or lead-gen clarity.',
  },
]
