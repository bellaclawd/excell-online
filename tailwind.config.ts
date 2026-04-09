import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#E5132D',
          light: '#FF2D47',
          dark: '#B50E22',
        },
        gray: {
          300: '#CDD3DE',
          400: '#B0B8C6',
          500: '#8D97A8',
          600: '#6F7887',
        },
        surface: {
          DEFAULT: '#161616',
          dark: '#111111',
          darker: '#080808',
        },
        border: 'rgba(255,255,255,0.07)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'blob': 'blob 20s ease-in-out infinite',
        'blob-slow': 'blob 26s ease-in-out infinite reverse',
        'marquee': 'marquee 28s linear infinite',
        'marquee2': 'marquee2 28s linear infinite',
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
        'terminal-blink': 'terminal-blink 1s step-end infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -20px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 15px) scale(0.96)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(229,19,45,0.1)' },
          '50%': { boxShadow: '0 0 45px rgba(229,19,45,0.25)' },
        },
        'terminal-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      boxShadow: {
        'red-glow': '0 0 40px rgba(229,19,45,0.15)',
        'red-glow-lg': '0 0 80px rgba(229,19,45,0.2)',
      },
    },
  },
  plugins: [],
}

export default config
