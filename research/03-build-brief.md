# Total Healthcare Clinic — Website Build Brief

## Design Direction

### Color palette
- **Navy `#2A1F5E`** — primary. Used for headlines, primary CTAs, footer band, navigation.
- **Crimson `#B22A2A`** — accent. Used for accents, hover states, key inline emphasis (the caduceus's red half), final CTA buttons.
- **Paper `#FAF7F2`** — primary background.
- **Cream `#F2EBDF`** — alternating section background, card surfaces.
- **Ink `#0E0A2A`** — body text (dark navy, not pure black).
- **Mute `#6F6580`** — labels, captions, secondary text.

### Typography
- **Headings: Fraunces** (Google Fonts, opsz axis) — opsz allows large display weight that matches the logo wordmark
- **Body: Inter** — 16/24 base, scale up to 18/28 on lead paragraphs

### Photography & assets
- The split-color caduceus is the hero animation focal point
- Real provider portraits (placeholders left for client to drop in)
- Soft natural-light imagery for sections — no over-clinical fluorescent shots
- Subtle paper-grain texture overlay throughout

### Animations
- Hero: caduceus reveals via scroll, with parallax + glow
- Section reveals via IntersectionObserver fade/translate
- Service cards: stagger-fade on enter, lift+shadow on hover
- Stats counters: count-up on scroll into view
- Hover micro-interactions on every interactive element
- `prefers-reduced-motion: reduce` collapses all motion

## Site Architecture

For scope and maintainability with auto-mode constraints, the rebuild ships as a **single high-density homepage** + **competitive-analysis report** + clearly designed structure for the team to expand into per-service pages later. Architecture:

- `index.html` — Hero, About, Services (8-card grid), Provider Trust, Why Choose Us / Stats, Testimonials placeholder, Insurance & Hours, FAQ, Contact / Book
- `competitive-analysis.html` — already built
- `404.html` — branded
- `robots.txt`, `sitemap.xml`

The single-page approach packs every conversion lever onto one well-architected page and outperforms a thin 3–5 page Weebly competitor on first paint.

### Navigation
6 items max:
- Logo (left)
- About · Services · Providers · Insurance · Contact (center)
- Book Appointment (right, prominent)

Mobile: hamburger drawer with full-screen panel + close on link tap, Escape, resize.

### CTA strategy
- **Primary:** "Book Appointment" — repeats in nav, hero, after about, after each service grid, in footer (5+ instances)
- **Secondary:** "Call (601) 321-9453" — visible but never dominant

## Content Framework

### Headline (3 options — picking #1)
1. **"Whole-family healthcare in the heart of Jackson."** ← chosen — direct, family-rooted, location-anchored
2. "Your health is your wealth — and we're protecting it."
3. "From newborns to grandparents — one trusted clinic for everyone."

### Sub-headline
"From wellness exams and immunizations to DOT physicals, IV hydration, and weight loss — Total Healthcare Clinic is your full-service primary care home in Jackson, MS."

### Section copy direction
- **About:** Lead with mission ("everyone deserves a primary care home"), mention Terry Road location, family-practice positioning
- **Services:** 8 cards (one per service), each 1 sentence + a "Learn more" link
- **Why us:** "Same-week appointments. Real people. Local roots."
- **Insurance:** Transparent list of accepted plans + self-pay welcome
- **FAQ:** 6 high-intent questions ("Do you take walk-ins?", "Do you do DOT physicals?", etc.)

### SEO targets
- `<title>`: "Total Healthcare Clinic LLC — Primary Care in Jackson, MS"
- `<meta description>`: "Family medical clinic on Terry Road in Jackson, MS. Wellness exams, DOT physicals, IV hydration, weight loss, immunizations & more."
- Schema: `MedicalClinic` JSON-LD with full address, hours, phone, services

## Conversion Playbook
- **Primary goal:** Appointment book
- **Lead capture:** Contact form on Contact section + booking CTA throughout
- **Social proof plan:** Three testimonial placeholders with clear "[CLIENT TO PROVIDE]" markup, plus stats band (years serving, patients welcomed, services offered) using counter animations
- **Trust signals:** Hours visible, address visible, phone clickable, insurance section, FAQ, accreditation placeholders

## Tech Stack
- Vanilla HTML/CSS/JS — single page + report + 404
- GSAP + ScrollTrigger (CDN) for scroll animations
- Inter + Fraunces via Google Fonts
- Lucide icons (inline SVG)
- Responsive: mobile-first, breakpoint at 720px, secondary at 380px
- `netlify.toml` + `vercel.json` ship publish dir = `site/`

## Decision: Approved (auto mode)

Per auto-mode directive, proceeding directly to build.
