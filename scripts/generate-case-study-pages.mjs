import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const siteRoot = path.resolve(__dirname, '..')
const dataPath = path.join(siteRoot, 'src', 'data', 'portfolio-content.json')
const workDir = path.join(siteRoot, 'public', 'work')
const siteUrl = 'https://excellonline.ca'

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function renderTags(tags) {
  return tags
    .map((tag) => `<span class="pill">${escapeHtml(tag)}</span>`)
    .join('')
}

function renderList(items, className = 'feature-list') {
  return `<ul class="${className}">${items
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join('')}</ul>`
}

function renderSnapshots(item) {
  return item.snapshot
    .map(
      (entry) => `
        <article class="snapshot-card">
          <div class="eyebrow">${escapeHtml(entry.label)}</div>
          <p>${escapeHtml(entry.value)}</p>
        </article>
      `,
    )
    .join('')
}

function renderProjectCards(items) {
  return items
    .map(
      (item) => `
        <article class="library-card">
          <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)} preview" loading="lazy" />
          <div class="library-card__body">
            <div class="eyebrow">${escapeHtml(item.category)}</div>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.summary)}</p>
            <div class="pill-row">${renderTags(item.tags)}</div>
            <div class="card-actions">
              <a class="button button-primary" href="${escapeHtml(item.caseStudyPath)}">Open case study</a>
              <a class="button button-secondary" href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">Visit live site</a>
            </div>
          </div>
        </article>
      `,
    )
    .join('')
}

function pageHead({ title, description, canonical, image }) {
  return `
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="robots" content="index, follow" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${escapeHtml(canonical)}" />
    <meta property="og:image" content="${escapeHtml(image)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${escapeHtml(image)}" />
    <link rel="canonical" href="${escapeHtml(canonical)}" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="/case-study.css" />
    <title>${escapeHtml(title)}</title>
  `
}

function renderCaseStudyPage(item, allItems) {
  const description = `${item.title} case study - ${item.summary}`
  const canonical = `${siteUrl}${item.caseStudyPath}`
  const image = `${siteUrl}${item.image}`
  const otherProjects = allItems.filter((entry) => entry.id !== item.id)

  return `<!doctype html>
<html lang="en">
  <head>
    ${pageHead({
      title: `${item.title} Case Study | Excell Online`,
      description,
      canonical,
      image,
    })}
  </head>
  <body>
    <div class="page-bg"></div>
    <header class="page-shell">
      <nav class="topbar">
        <a class="brand" href="/">
          <span class="brand-mark" aria-hidden="true"></span>
          <span>Excell Online</span>
        </a>
        <div class="topbar-links">
          <a href="/">Homepage</a>
          <a href="/work/index.html">Case Study Library</a>
          <a href="/#contact">Start a Project</a>
        </div>
      </nav>

      <section class="hero-grid">
        <div class="hero-copy">
          <div class="eyebrow">${escapeHtml(item.category)}</div>
          <h1>${escapeHtml(item.title)}</h1>
          <p class="hero-summary">${escapeHtml(item.brief)}</p>
          <div class="pill-row">
            <span class="pill pill-accent">${escapeHtml(item.metric)}</span>
            ${renderTags(item.tags)}
          </div>
          <div class="hero-actions">
            <a class="button button-primary" href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">Visit live project</a>
            <a class="button button-secondary" href="/#contact">Start a project like this</a>
          </div>
        </div>

        <div class="hero-media">
          <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)} hero preview" />
          <div class="focus-card">
            <div class="eyebrow">What this build proves</div>
            <p>${escapeHtml(item.focus)}</p>
          </div>
        </div>
      </section>

      <section class="snapshot-grid">
        ${renderSnapshots(item)}
      </section>
    </header>

    <main class="page-shell page-main">
      <section class="content-grid">
        <div class="content-main">
          <article class="panel">
            <div class="eyebrow">The challenge</div>
            <h2>What needed to feel better immediately</h2>
            <p>${escapeHtml(item.challenge)}</p>
          </article>

          <article class="panel">
            <div class="eyebrow">Approach</div>
            <h2>The decisions that shaped the experience</h2>
            <div class="approach-grid">
              ${item.approach
                .map((point) => `<div class="approach-card"><p>${escapeHtml(point)}</p></div>`)
                .join('')}
            </div>
          </article>
        </div>

        <aside class="content-side">
          <article class="panel">
            <div class="eyebrow">What shipped</div>
            <h2>Scope at a glance</h2>
            ${renderList(item.deliverables)}
          </article>

          <article class="panel panel-accent">
            <div class="eyebrow">Proof highlights</div>
            <h2>Why this case study matters</h2>
            ${renderList(item.proofPoints)}
          </article>
        </aside>
      </section>

      <section class="panel panel-wide">
        <div class="section-head">
          <div>
            <div class="eyebrow">Keep exploring</div>
            <h2>More work in the library</h2>
          </div>
          <a class="button button-secondary" href="/work/index.html">View all case studies</a>
        </div>
        <div class="library-grid compact">
          ${renderProjectCards(otherProjects)}
        </div>
      </section>
    </main>

    <footer class="page-shell footer-bar">
      <p>Toronto-based, senior-led, and built around trust.</p>
      <div class="topbar-links">
        <a href="/privacy.html">Privacy</a>
        <a href="/accessibility.html">Accessibility</a>
      </div>
    </footer>
  </body>
</html>`
}

function renderIndexPage(items) {
  return `<!doctype html>
<html lang="en">
  <head>
    ${pageHead({
      title: 'Case Study Library | Excell Online',
      description: 'Full case studies from Excell Online across SaaS, security, recreation, and home services.',
      canonical: `${siteUrl}/work/index.html`,
      image: `${siteUrl}/og-image.png`,
    })}
  </head>
  <body>
    <div class="page-bg"></div>
    <header class="page-shell">
      <nav class="topbar">
        <a class="brand" href="/">
          <span class="brand-mark" aria-hidden="true"></span>
          <span>Excell Online</span>
        </a>
        <div class="topbar-links">
          <a href="/">Homepage</a>
          <a href="/#portfolio">Portfolio</a>
          <a href="/#contact">Start a Project</a>
        </div>
      </nav>

      <section class="hero-grid hero-grid--index">
        <div class="hero-copy">
          <div class="eyebrow">Case Study Library</div>
          <h1>Proof that goes deeper than a homepage card.</h1>
          <p class="hero-summary">
            Live builds are helpful. Dedicated case studies are where the trust really compounds.
            This library shows how Excell handles SaaS UX, security-heavy experiences, bold brand
            work, and lead-generation websites without falling back on the same template every time.
          </p>
          <div class="hero-actions">
            <a class="button button-primary" href="/#contact">Start your project</a>
            <a class="button button-secondary" href="/">Back to homepage</a>
          </div>
        </div>

        <div class="panel statement-card">
          <div class="eyebrow">What clients are really buying</div>
          <h2>Clearer trust. Cleaner action. Stronger first impressions.</h2>
          <p>
            The most valuable projects here are not just prettier. They remove hesitation, sharpen
            hierarchy, and make the next step feel easier for the visitor on the other side.
          </p>
          ${renderList(
            [
              'Senior-led project thinking instead of handoff-heavy delivery',
              'More proof-forward page structure for service businesses',
              'Product UX that stays readable even when the interface gets dense',
            ],
            'feature-list statement-list',
          )}
        </div>
      </section>
    </header>

    <main class="page-shell page-main">
      <section class="library-grid">
        ${renderProjectCards(items)}
      </section>
    </main>

    <footer class="page-shell footer-bar">
      <p>Excell Online case studies. Built in Toronto.</p>
      <div class="topbar-links">
        <a href="/privacy.html">Privacy</a>
        <a href="/accessibility.html">Accessibility</a>
      </div>
    </footer>
  </body>
</html>`
}

async function main() {
  const raw = await readFile(dataPath, 'utf8')
  const portfolioItems = JSON.parse(raw)

  await mkdir(workDir, { recursive: true })

  for (const item of portfolioItems) {
    const page = renderCaseStudyPage(item, portfolioItems)
    await writeFile(path.join(workDir, `${item.id}.html`), page)
  }

  await writeFile(path.join(workDir, 'index.html'), renderIndexPage(portfolioItems))
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
