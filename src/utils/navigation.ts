const NAV_OFFSET = 88

interface ScrollOptions {
  behavior?: ScrollBehavior
  updateHash?: boolean
}

export function scrollToHash(hash: string, options: ScrollOptions = {}) {
  if (!hash.startsWith('#')) return false

  const element = document.querySelector<HTMLElement>(hash)
  if (!element) return false

  const top = element.getBoundingClientRect().top + window.scrollY - NAV_OFFSET

  window.scrollTo({
    top: Math.max(0, top),
    behavior: options.behavior ?? 'smooth',
  })

  if (options.updateHash !== false && window.location.hash !== hash) {
    window.history.pushState({}, '', hash)
  }

  return true
}

export function navigateToHref(href: string) {
  if (href.startsWith('#')) {
    return scrollToHash(href)
  }

  window.location.href = href
  return true
}

