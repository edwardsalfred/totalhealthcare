# Total Healthcare Clinic LLC — Website

Premium scroll-animated website built around the original brand identity (split-color caduceus, navy + crimson palette).

## Local development

```bash
cd site
python -m http.server 8765
# open http://localhost:8765
```

## Deploy

This repo ships ready for both Netlify and Vercel:

- **Netlify** — `netlify.toml` pins publish dir to `site/` with cache headers for `/assets/*`.
- **Vercel** — `vercel.json` sets `outputDirectory: "site"`.

```bash
# Vercel CLI (after `npm i -g vercel`)
vercel

# Netlify drop-in: just connect repo or drag the `site/` folder.
```

## Project structure

```
totalhealthcareclinic/
├── netlify.toml
├── vercel.json
├── README.md
├── research/                       # Discovery & strategy docs
│   ├── 01-client-brand.md
│   ├── 02-competitor-analysis.md
│   ├── 03-build-brief.md
│   └── 04-quality-audit.md
└── site/                           # Publish directory
    ├── index.html                  # Homepage (single-page application)
    ├── competitive-analysis.html   # Confidential client report (noindex)
    ├── 404.html
    ├── robots.txt
    ├── sitemap.xml
    ├── css/styles.css
    ├── js/main.js
    └── assets/
        ├── founders/logo-original.png
        └── portfolio/*             # All client images, self-hosted
```

## Brand system

| Token | Hex | Use |
|-------|-----|-----|
| Navy | `#2A1F5E` | Headlines, primary CTAs, footer |
| Crimson | `#B22A2A` | Accents, hover states, key buttons |
| Paper | `#FAF7F2` | Primary background |
| Cream | `#F2EBDF` | Alternating sections, cards |
| Ink | `#0E0A2A` | Body text |
| Mute | `#6F6580` | Captions, labels |

- **Headings:** Fraunces (Google Fonts)
- **Body:** Inter

## Form integration TODO

The booking form in `index.html` (`#booking-form`) currently shows a JS-only success state. Wire it up to a real handler before launch:

- Netlify Forms: add `netlify` attribute to `<form>`.
- Vercel: post to a serverless function in `api/book.ts`.
- Email-only fallback: replace with `mailto:` action.

## Placeholders left for client

1. **Real provider portraits** — drop images into `site/assets/founders/` and update `index.html` `<section id="why">` and the about block.
2. **Real patient testimonials** — replace the placeholder quote in the navy testimonial section.
3. **Provider names + credentials** — currently no individual clinicians named on the page.
4. **3D / video hero asset** — placeholder is the inline caduceus SVG. Replace with WebGL/Lottie/looping video if desired (480 × 640 recommended).
5. **Confirm accepted insurance list** — current list is a high-confidence assumption based on Mississippi market norms.

## Confidential report

`site/competitive-analysis.html` is a client-facing competitive analysis report. It is excluded from `robots.txt` and carries a `noindex` meta tag. Print directly to PDF from the browser for client delivery.

## Site by [Chatbot Boy AI](https://www.chatbotboy.ai/)
