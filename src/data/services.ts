export interface Service {
  id: string
  icon: string
  title: string
  description: string
}

export const services: Service[] = [
  {
    id: 'web-design',
    icon: 'Palette',
    title: 'Web Design',
    description: 'Custom, conversion-focused designs that make your brand unforgettable. No templates — built from scratch.',
  },
  {
    id: 'web-dev',
    icon: 'Code2',
    title: 'Web Development',
    description: 'Fast, scalable websites built on modern stacks. React, Next.js, and headless CMS integrations.',
  },
  {
    id: 'ecommerce',
    icon: 'ShoppingCart',
    title: 'E-Commerce',
    description: 'Full-featured online stores built to sell. Shopify, WooCommerce, or fully custom solutions.',
  },
  {
    id: 'seo',
    icon: 'TrendingUp',
    title: 'SEO & Growth',
    description: 'Rank higher, get found faster. Technical SEO, content strategy, and local GTA optimization.',
  },
  {
    id: 'mobile',
    icon: 'Smartphone',
    title: 'Mobile Apps',
    description: 'Cross-platform mobile apps for iOS and Android. React Native and Flutter development.',
  },
  {
    id: 'branding',
    icon: 'Layers',
    title: 'Brand Identity',
    description: 'Logos, color systems, typography, and brand guidelines that make you stand out.',
  },
  {
    id: 'hosting',
    icon: 'Server',
    title: 'Hosting & DevOps',
    description: 'Managed cloud hosting, CI/CD pipelines, and 99.9% uptime SLA for your digital assets.',
  },
  {
    id: 'analytics',
    icon: 'BarChart3',
    title: 'Analytics & CRO',
    description: 'Track every click, optimize every funnel. Data-driven decisions that increase conversions.',
  },
]
