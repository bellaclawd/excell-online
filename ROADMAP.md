# Excell Online 10/10 Roadmap

This roadmap turns the UX audit into a build plan with exact implementation targets.

## Sprint 1: Trust + Conversion

Goal: remove the biggest trust leaks and make the primary lead path honest and usable.

- [x] Make the contact flow real or truthful
  Files:
  - [public/contact.php](/Volumes/Storage/Developer/Projects/excell-online/site/public/contact.php)
  - [src/components/sections/Contact.tsx](/Volumes/Storage/Developer/Projects/excell-online/site/src/components/sections/Contact.tsx)
- [x] Standardize CTA language around one honest primary action
  Files:
  - [src/config/site.ts](/Volumes/Storage/Developer/Projects/excell-online/site/src/config/site.ts)
  - [src/components/layout/Navbar.tsx](/Volumes/Storage/Developer/Projects/excell-online/site/src/components/layout/Navbar.tsx)
  - [src/components/sections/Hero.tsx](/Volumes/Storage/Developer/Projects/excell-online/site/src/components/sections/Hero.tsx)
  - [src/components/sections/AISection.tsx](/Volumes/Storage/Developer/Projects/excell-online/site/src/components/sections/AISection.tsx)
  - [src/components/sections/About.tsx](/Volumes/Storage/Developer/Projects/excell-online/site/src/components/sections/About.tsx)
  - [src/components/sections/CTABanner.tsx](/Volumes/Storage/Developer/Projects/excell-online/site/src/components/sections/CTABanner.tsx)
- [x] Fix hidden-section anchor scrolling under the fixed navbar
  Files:
  - [src/utils/navigation.ts](/Volumes/Storage/Developer/Projects/excell-online/site/src/utils/navigation.ts)
  - [src/index.css](/Volumes/Storage/Developer/Projects/excell-online/site/src/index.css)
  - [src/App.tsx](/Volumes/Storage/Developer/Projects/excell-online/site/src/App.tsx)
- [x] Remove weak trust signals
  Files:
  - [src/components/layout/Footer.tsx](/Volumes/Storage/Developer/Projects/excell-online/site/src/components/layout/Footer.tsx)
  - [src/components/sections/Contact.tsx](/Volumes/Storage/Developer/Projects/excell-online/site/src/components/sections/Contact.tsx)
- [x] Fix critical accessibility issues found in browser audit
  Files:
  - [src/components/sections/Testimonials.tsx](/Volumes/Storage/Developer/Projects/excell-online/site/src/components/sections/Testimonials.tsx)
  - [src/components/sections/Contact.tsx](/Volumes/Storage/Developer/Projects/excell-online/site/src/components/sections/Contact.tsx)
- [x] Add missing social/share assets
  Files:
  - [index.html](/Volumes/Storage/Developer/Projects/excell-online/site/index.html)
  - [public/og-image.png](/Volumes/Storage/Developer/Projects/excell-online/site/public/og-image.png)
  - [public/favicon-32.png](/Volumes/Storage/Developer/Projects/excell-online/site/public/favicon-32.png)
  - [public/favicon-16.png](/Volumes/Storage/Developer/Projects/excell-online/site/public/favicon-16.png)

## Sprint 2: Proof + Positioning

Goal: make the site feel obviously credible and sharply differentiated.

- Replace the trust marquee with fewer, stronger proof signals
  Files:
  - [src/components/sections/TrustBar.tsx](/Volumes/Storage/Developer/Projects/excell-online/site/src/components/sections/TrustBar.tsx)
- Upgrade portfolio cards into mini case studies with outcomes
  Files:
  - [src/data/portfolio.ts](/Volumes/Storage/Developer/Projects/excell-online/site/src/data/portfolio.ts)
  - [src/components/sections/Portfolio.tsx](/Volumes/Storage/Developer/Projects/excell-online/site/src/components/sections/Portfolio.tsx)
- Rewrite testimonials so they pair with visible proof
  Files:
  - [src/data/testimonials.ts](/Volumes/Storage/Developer/Projects/excell-online/site/src/data/testimonials.ts)
  - [src/components/sections/Testimonials.tsx](/Volumes/Storage/Developer/Projects/excell-online/site/src/components/sections/Testimonials.tsx)
- Add founder/team credibility
  Files:
  - [src/components/sections/About.tsx](/Volumes/Storage/Developer/Projects/excell-online/site/src/components/sections/About.tsx)

## Sprint 3: Story + Visual Range

Goal: reduce repetition and make the experience feel more premium than templated.

- Compress duplicate messaging across services, AI, why-us, and about
  Files:
  - [src/components/sections/Services.tsx](/Volumes/Storage/Developer/Projects/excell-online/site/src/components/sections/Services.tsx)
  - [src/components/sections/AISection.tsx](/Volumes/Storage/Developer/Projects/excell-online/site/src/components/sections/AISection.tsx)
  - [src/components/sections/WhyUs.tsx](/Volumes/Storage/Developer/Projects/excell-online/site/src/components/sections/WhyUs.tsx)
  - [src/components/sections/About.tsx](/Volumes/Storage/Developer/Projects/excell-online/site/src/components/sections/About.tsx)
- Add stronger visual contrast between sections
  Files:
  - [src/index.css](/Volumes/Storage/Developer/Projects/excell-online/site/src/index.css)
  - Section components listed above
- Make the AI story outcome-led instead of platform-led
  Files:
  - [src/components/sections/Services.tsx](/Volumes/Storage/Developer/Projects/excell-online/site/src/components/sections/Services.tsx)
  - [src/components/sections/AISection.tsx](/Volumes/Storage/Developer/Projects/excell-online/site/src/components/sections/AISection.tsx)

## Sprint 4: Expansion + Depth

Goal: move beyond a single landing page into a more established service business site.

- Add dedicated pages for services, AI agents, and case studies
- Expand sitemap and SEO surface area
- Add privacy/support/legal pages as needed

## Assumptions

- No live booking URL was configured during Sprint 1, so the primary CTA stays project-start focused until `VITE_BOOKING_URL` is provided.
- No reliable public phone number or social URLs were configured, so Sprint 1 removes those trust leaks instead of shipping placeholders.
