import { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'

const lines = [
  { text: '$ openclaw deploy --agent lead-intake', type: 'cmd' },
  { text: '  Compiling agent runtime...', type: 'info' },
  { text: '  Loading AI model weights...', type: 'info' },
  { text: '  ✓ Agent compiled successfully', type: 'success' },
  { text: '  Connecting to webhook endpoints...', type: 'info' },
  { text: '  ✓ 3 webhooks registered', type: 'success' },
  { text: '  ✓ CRM integration active', type: 'success' },
  { text: '  ✓ Email notifications enabled', type: 'success' },
  { text: '$ openclaw status', type: 'cmd' },
  { text: '  ● lead-intake       RUNNING', type: 'live' },
  { text: '  ● customer-support  RUNNING', type: 'live' },
  { text: '  ● scheduler         RUNNING', type: 'live' },
  { text: '  Uptime: 99.97%  |  Handled: 1,248 tasks', type: 'info' },
]

export default function TerminalAnimation() {
  const [visibleLines, setVisibleLines] = useState<number>(0)
  const [charIndex, setCharIndex] = useState<number>(0)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!inView) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setVisibleLines(lines.length)
      setCharIndex(lines[lines.length - 1].text.length)
      return
    }

    let lineIdx = 0
    let charIdx = 0
    let timeout: ReturnType<typeof setTimeout>

    const type = () => {
      if (lineIdx >= lines.length) {
        timeout = setTimeout(() => {
          setVisibleLines(0)
          setCharIndex(0)
          lineIdx = 0
          charIdx = 0
          type()
        }, 3000)
        return
      }

      const currentLine = lines[lineIdx].text
      if (charIdx <= currentLine.length) {
        setVisibleLines(lineIdx + 1)
        setCharIndex(charIdx)
        charIdx++
        timeout = setTimeout(type, charIdx === currentLine.length ? 120 : 22)
      } else {
        lineIdx++
        charIdx = 0
        timeout = setTimeout(type, 80)
      }
    }

    timeout = setTimeout(type, 600)
    return () => clearTimeout(timeout)
  }, [inView])

  const getLineColor = (type: string) => {
    switch (type) {
      case 'cmd': return 'text-white'
      case 'success': return 'text-emerald-400'
      case 'live': return 'text-emerald-400'
      case 'info': return 'text-gray-400'
      default: return 'text-gray-400'
    }
  }

  return (
    <div ref={ref} className="rounded-xl overflow-hidden border border-white/10" style={{ background: '#0a0a0a' }}>
      {/* macOS window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10" style={{ background: '#111111' }}>
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
        <span className="ml-2 text-xs text-gray-500 font-mono">openclaw — bash</span>
      </div>

      {/* Terminal content */}
      <div className="p-5 font-mono text-sm min-h-[280px] space-y-1">
        {lines.slice(0, visibleLines).map((line, i) => {
          const isCurrentLine = i === visibleLines - 1
          const displayText = isCurrentLine ? line.text.slice(0, charIndex) : line.text

          return (
            <div key={i} className={`${getLineColor(line.type)} leading-relaxed`}>
              {displayText}
              {isCurrentLine && charIndex < line.text.length && (
                <span className="inline-block w-2 h-4 bg-brand ml-0.5 animate-[terminal-blink_1s_step-end_infinite]" />
              )}
            </div>
          )
        })}
        {visibleLines === 0 && (
          <span className="inline-block w-2 h-4 bg-brand animate-[terminal-blink_1s_step-end_infinite]" />
        )}
      </div>
    </div>
  )
}
