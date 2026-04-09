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
    id: 'poketdex',
    title: 'PoketDex',
    client: 'PoketDex',
    category: 'SaaS & Web App',
    tags: ['Web App', 'Database', 'Pokémon TCG'],
    metric: 'SaaS Launch',
    image: '/poketdex.jpg',
    url: 'https://www.poketdex.io',
    summary: 'Collector-first product UX for browsing cards, prices, and collection data without losing clarity.',
    focus: 'Shows Excell can handle dense product interfaces while keeping hierarchy clean and mobile-friendly.',
    brief: 'A collector-focused platform for browsing cards, pricing data, and collection information in a way that still feels organized and quick to scan.',
    challenge: 'Trading-card data can become visually noisy fast. The experience needed to support enthusiasts, not intimidate them.',
    approach: [
      'Keep the hierarchy anchored around the cards first, then layer data and actions in a way that still feels approachable.',
      'Make filtering, browsing, and collection context feel lightweight instead of overwhelming on both desktop and mobile.',
      'Balance product depth with enough restraint that the app still feels polished, not cluttered.',
    ],
    proofPoints: [
      'Dense product UX that still scans clearly',
      'Strong example of app-style hierarchy, not just marketing design',
      'Shows mobile-friendly handling of image-heavy data',
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
