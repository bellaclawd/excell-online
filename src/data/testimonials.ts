export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  location: string
  industry: string
  engagement: string
  quote: string
  highlight: string
  initials: string
  stars: number
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Marco Valenti',
    role: 'Owner',
    company: "Valenti's Kitchen",
    location: 'Yorkville, Toronto',
    industry: 'Hospitality',
    engagement: 'Website redesign + AI booking flow',
    quote: "Excell Online completely transformed our online presence. Our new website and AI booking system drove a 340% increase in online orders within the first three months. The team understood our brand immediately and delivered beyond expectations.",
    highlight: '+340% online orders after launch',
    initials: 'MV',
    stars: 5,
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'Founder',
    company: 'Aura Collective',
    location: 'Liberty Village, Toronto',
    industry: 'E-Commerce',
    engagement: 'Brand-led commerce redesign',
    quote: "Our e-commerce conversion rate jumped from 1.2% to 3.8% after the redesign. Excell Online didn't just build a website — they built a revenue engine. The attention to detail and post-launch support has been exceptional.",
    highlight: 'Conversion jumped from 1.2% to 3.8%',
    initials: 'PS',
    stars: 5,
  },
  {
    id: '3',
    name: 'David Chen',
    role: 'Managing Director',
    company: 'Skyline Property Group',
    location: 'Scarborough, Toronto',
    industry: 'Property',
    engagement: 'Tenant communication automation',
    quote: "The AI agents Excell built now handle our tenant communications around the clock. What used to take our team hours every day is fully automated. It's been a game-changer for our property management operations.",
    highlight: 'AI agents handling all tenant communications',
    initials: 'DC',
    stars: 5,
  },
  {
    id: '4',
    name: 'Ayesha Khalid',
    role: 'Principal',
    company: 'ClearPath Legal',
    location: 'Mississauga, ON',
    industry: 'Legal',
    engagement: 'Trust-first website redesign',
    quote: "We needed a website that conveyed trust and professionalism. Excell Online delivered exactly that — and then some. Our client intake has increased significantly and the site reflects exactly who we are as a firm.",
    highlight: 'Professional redesign that drives client intake',
    initials: 'AK',
    stars: 5,
  },
  {
    id: '5',
    name: 'James Okonkwo',
    role: 'CEO',
    company: 'RouteSync',
    location: 'Toronto, ON',
    industry: 'SaaS',
    engagement: 'Custom logistics platform build',
    quote: "Excell built our entire logistics platform from scratch — real-time tracking, driver dashboards, client portals. The technical depth of their team is outstanding. They delivered on time and under budget.",
    highlight: 'Full custom logistics platform, on time & under budget',
    initials: 'JO',
    stars: 5,
  },
]
