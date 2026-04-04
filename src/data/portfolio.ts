export interface PortfolioItem {
  id: string
  title: string
  category: string
  tags: string[]
  metric: string
  image: string
  featured?: boolean
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'valentis',
    title: "Valenti's Kitchen",
    category: 'Restaurant & Hospitality',
    tags: ['Web Design', 'Online Ordering', 'SEO'],
    metric: '+340% Online Orders',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    featured: true,
  },
  {
    id: 'aura',
    title: 'Aura Collective',
    category: 'Fashion & E-Commerce',
    tags: ['E-Commerce', 'Shopify', 'Brand Identity'],
    metric: '1.2% → 3.8% CVR',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80',
    featured: true,
  },
  {
    id: 'skyline',
    title: 'Skyline Property Group',
    category: 'Real Estate',
    tags: ['Web App', 'AI Agents', 'Automation'],
    metric: '60% Less Admin Time',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
  },
  {
    id: 'routesync',
    title: 'RouteSync',
    category: 'Logistics & Tech',
    tags: ['Custom Platform', 'Dashboard', 'API'],
    metric: '2× Delivery Efficiency',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
]
