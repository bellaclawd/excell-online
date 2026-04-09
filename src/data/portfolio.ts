import portfolioContent from './portfolio-content.json'

export interface PortfolioSnapshot {
  label: string
  value: string
}

export interface PortfolioItem {
  id: string
  title: string
  client: string
  category: string
  tags: string[]
  metric: string
  image: string
  url: string
  caseStudyPath: string
  summary: string
  focus: string
  brief: string
  challenge: string
  approach: string[]
  proofPoints: string[]
  snapshot: PortfolioSnapshot[]
  deliverables: string[]
  featured?: boolean
}

export const legacyPortfolioAliases: Record<string, string> = {
  poketdex: 'cardtrove',
}

export function resolvePortfolioId(id: string) {
  return legacyPortfolioAliases[id] ?? id
}

export function getCaseStudyPath(item: PortfolioItem) {
  return item.caseStudyPath
}

export const portfolioItems = portfolioContent as PortfolioItem[]
