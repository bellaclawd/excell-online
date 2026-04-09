export interface PortfolioItem {
  id: string
  title: string
  client: string
  category: string
  tags: string[]
  metric: string
  image: string
  url: string
  summary: string
  focus: string
  brief: string
  challenge: string
  approach: string[]
  proofPoints: string[]
  featured?: boolean
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'cardtrove',
    title: 'CardTrove.io',
    client: 'CardTrove',
    category: 'SaaS & Web App',
    tags: ['Web App', 'Portfolio Tracking', 'Pokemon TCG'],
    metric: 'Collector SaaS',
    image: '/cardtrove.jpg',
    url: 'https://www.cardtrove.io',
    summary: 'Collector-first product UX for tracking card portfolios, pricing, and inventory without drowning the user in data.',
    focus: 'Shows Excell can shape a niche collector tool into a clearer SaaS experience with stronger hierarchy and mobile readability.',
    brief: 'A Pokemon card portfolio tracker built for collectors who want cleaner oversight of their collection, market pricing, and day-to-day product workflows.',
    challenge: 'Collector products can become visually noisy fast when pricing, grading support, collection data, and future marketplace features all compete for attention.',
    approach: [
      'Anchor the interface around the collection first, then layer portfolio value, card details, and actions in a way that still feels approachable.',
      'Keep product workflows clean enough for repeat use, especially on mobile where collectors need quick scanning instead of dense dashboards.',
      'Balance hobby energy with enough restraint that the product still feels polished, modern, and trustworthy.',
    ],
    proofPoints: [
      'Dense collector data that still scans clearly',
      'A stronger example of product UX, not just marketing-page design',
      'Shows mobile-friendly handling of image-heavy portfolio tracking',
    ],
    featured: true,
  },
  {
    id: 'secureuploads',
    title: 'SecureUploads.ca',
    client: 'SecureUploads.ca',
    category: 'SaaS & Security',
    tags: ['SaaS', 'File Sharing', 'Privacy'],
    metric: 'Security UX',
    image: '/secureuploads.jpg',
    url: 'https://secureuploads.ca',
    summary: 'Trust-first interface for sensitive file sharing with a calmer upload flow and clearer security cues.',
    focus: 'Shows security-heavy products can still feel approachable, premium, and simple to use.',
    brief: 'A privacy-focused file-sharing experience built to feel reassuring from the first interaction, not only technically secure behind the scenes.',
    challenge: 'Security products often lean too hard on technical language and friction-heavy flows, which can make everyday users hesitate.',
    approach: [
      'Use calmer visual language and clearer upload states so the product feels safe without becoming intimidating.',
      'Surface privacy cues and interface clarity early so trust is earned before the user has to read deep documentation.',
      'Keep the core action simple and predictable even in a more sensitive workflow.',
    ],
    proofPoints: [
      'Trust-building security UX without heavy jargon',
      'A cleaner upload experience for a sensitive workflow',
      'Premium feel in a category that often looks overly technical',
    ],
    featured: true,
  },
  {
    id: 'jokers',
    title: 'The Jokers Paintball',
    client: 'The Jokers Paintball',
    category: 'Sports & Recreation',
    tags: ['Web Design', 'Branding', 'E-Commerce'],
    metric: 'Brand Refresh',
    image: '/jokers-paintball.jpg',
    url: 'https://jokerspaintball.com',
    summary: 'High-energy recreation site that brings the brand forward fast and makes the next action obvious.',
    focus: 'Shows how Excell carries bold art direction through to booking and conversion structure.',
    brief: 'A more energetic brand-led site for a recreation business that needed excitement, personality, and clearer action paths to work together.',
    challenge: 'Bold brands can lose momentum online when the visuals dominate but the navigation and conversion flow stay messy.',
    approach: [
      'Lean into high-energy art direction without losing the structure needed for quick orientation and booking.',
      'Use stronger visual contrast and brand cues to make the site feel memorable on first impression.',
      'Keep the next action obvious so the design supports business outcomes instead of distracting from them.',
    ],
    proofPoints: [
      'Bold visual identity carried through to conversion flow',
      'A stronger entertainment and recreation brand expression',
      'Proof that high-energy design can still feel intentional',
    ],
  },
  {
    id: 'renodecks',
    title: 'RenoDecks.ca',
    client: 'RenoDecks.ca',
    category: 'Home Services',
    tags: ['Web Design', 'SEO', 'Lead Gen'],
    metric: 'Lead-Gen Site',
    image: '/renodecks.jpg',
    url: 'https://renodecks.ca',
    summary: 'Service-business site structured around visual proof, scope clarity, and quote intent.',
    focus: 'Shows home-service websites can feel polished without sacrificing trust or lead-gen clarity.',
    brief: 'A service-business website centered on project proof, scope confidence, and a more convincing path toward quote requests.',
    challenge: 'Home-service sites often look interchangeable, which makes trust and differentiation harder when buyers are comparing multiple providers quickly.',
    approach: [
      'Put proof and scope clarity closer to the top of the journey so visitors understand what the business does well sooner.',
      'Use a more polished visual system than the category norm while keeping the interface straightforward and practical.',
      'Support quote intent with clearer structure instead of relying on generic contractor-site patterns.',
    ],
    proofPoints: [
      'Stronger visual trust for a local service business',
      'Lead-gen structure without template-like presentation',
      'Good example of proof-first service-page thinking',
    ],
  },
]
