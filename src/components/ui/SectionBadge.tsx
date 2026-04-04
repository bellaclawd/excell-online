import { ReactNode } from 'react'

interface SectionBadgeProps {
  children: ReactNode
  className?: string
}

export default function SectionBadge({ children, className = '' }: SectionBadgeProps) {
  return (
    <span className={`section-badge ${className}`}>
      {children}
    </span>
  )
}
