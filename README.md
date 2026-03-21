# More Time Has Passed

A starter Next.js project for a content site built around surprising timeline comparisons.

## What this skeleton includes

- App Router pages for home, random fact, category pages, and fact detail pages
- Structured fact dataset in `data/facts.json`
- Validation script to catch duplicate slugs and invalid date order
- Scheduled GitHub Action that can add new facts and push updates automatically
- Placeholder content blocks for future personalized merchandise and Etsy-driven CTAs
- `robots.ts` and `sitemap.ts` for basic SEO scaffolding

## Local setup

1. Install Node.js 20+
2. Run:

```bash
npm install
npm run dev
```


3. Open `http://localhost:3000`

## Build commands

```bash
npm run validate:facts
npm run generate:facts
npm run build
```

## Deployment target

Recommended: Cloudflare Pages via Git integration.

### Cloudflare Pages settings

- Framework preset: Next.js
- Build command: `npm run build`
- Build output directory: `.next`

If Cloudflare asks for the production branch, use your default branch.

## Before first production deploy

Replace these placeholders:

- `https://example.com` in `app/layout.js`, `app/robots.js`, and `app/sitemap.js`
- Privacy page copy
- Contact page copy
- Footer copy if desired

## Content model

Each fact entry must include:

- `slug`
- `category`
- `title`
- `titleDate`
- `earlierEvent`
- `earlierDate`
- `description`
- `tags`
- `sources`
- `featured`
- `merchEligible`

## Suggested next upgrades

1. Replace the demo generator with a reviewed candidate pipeline
2. Add Open Graph image generation
3. Add analytics
4. Add Search Console verification
5. Add personalization flow for birth year / anniversary year
6. Add Etsy product CTA blocks
7. Add a newsletter form

## Revenue path

1. Build indexable fact pages
2. Grow archive and internal linking
3. Add one light ad placement after traffic exists
4. Add personalized product funnel to Etsy
5. Expand into milestone-specific landing pages
