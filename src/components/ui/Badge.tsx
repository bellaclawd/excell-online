import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'red' | 'green' | 'gray' | 'white'
  className?: string
}

export default function Badge({ children, variant = 'red', className = '' }: BadgeProps) {
  const variants = {
    red: 'bg-brand/10 border border-brand/25 text-brand-light',
    green: 'bg-emerald-500/10 border border-emerald-500/25 text-emerald-400',
    gray: 'bg-white/5 border border-white/10 text-gray-400',
    white: 'bg-white/5 border border-white/10 text-white',
  }

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
