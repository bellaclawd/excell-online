export interface PortfolioItem {
  id: string
  title: string
  category: string
  tags: string[]
  metric: string
  image: string
  url: string
  featured?: boolean
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'poketdex',
    title: 'PoketDex',
    category: 'SaaS & Web App',
    tags: ['Web App', 'Database', 'Pokémon TCG'],
    metric: 'Live Project',
    image: '/poketdex.jpg',
    url: 'https://www.poketdex.io',
    featured: true,
  },
  {
    id: 'secureuploads',
    title: 'SecureUploads.ca',
    category: 'SaaS & Security',
    tags: ['SaaS', 'File Sharing', 'Privacy'],
    metric: 'Live Project',
    image: '/secureuploads.jpg',
    url: 'https://secureuploads.ca',
    featured: true,
  },
  {
    id: 'jokers',
    title: 'The Jokers Paintball',
    category: 'Sports & Recreation',
    tags: ['Web Design', 'Branding', 'E-Commerce'],
    metric: 'Live Project',
    image: '/jokers-paintball.jpg',
    url: 'https://jokerspaintball.com',
  },
  {
    id: 'renodecks',
    title: 'RenoDecks.ca',
    category: 'Home Services',
    tags: ['Web Design', 'SEO', 'Lead Gen'],
    metric: 'Live Project',
    image: '/renodecks.jpg',
    url: 'https://renodecks.ca',
  },
]
