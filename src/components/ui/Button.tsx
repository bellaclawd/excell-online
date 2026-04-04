import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'ghost' | 'outline-red'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  href?: string
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const variants = {
    primary: 'bg-brand hover:bg-brand-light text-white font-semibold rounded-lg transition-all duration-200',
    ghost: 'text-white font-semibold rounded-lg transition-all duration-200 border border-white/15 hover:border-brand/50 hover:text-brand-light',
    'outline-red': 'text-brand font-semibold rounded-lg transition-all duration-200 border border-brand/40 hover:border-brand hover:bg-brand/10',
  }

  const base = `inline-flex items-center gap-2 ${sizes[size]} ${variants[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.02, y: -1 },
    whileTap: disabled ? {} : { scale: 0.98 },
    transition: { duration: 0.15 },
  }

  if (href) {
    return (
      <motion.a href={href} className={base} {...motionProps}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={base}
      {...motionProps}
    >
      {children}
    </motion.button>
  )
}
