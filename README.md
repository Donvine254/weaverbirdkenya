# Weaverbird Garments Manufacturers Ltd — Website

A fast, responsive marketing website for **Weaverbird Garments Manufacturers Ltd**, a Kenyan uniform and apparel manufacturer founded in 1996. The site showcases products, manufacturing capabilities, branch locations, and a quote request flow.

- **Live preview:** https://id-preview--24f83c8d-9f2b-4587-be61-acf624ce11a3.lovable.app
- **Published site:** https://weaverbirdkenya.lovable.app

---

## Tech stack

| Layer | Technology |
| --- | --- |
| Framework | [TanStack Start](https://tanstack.com/start) (React 19, file-based routing, SSR/SSG ready) |
| Build tool | Vite 7 |
| Styling | Tailwind CSS v4 with CSS theme variables |
| UI primitives | shadcn/ui (Sheet, Sonner/toasts) |
| Icons | Lucide React |
| Maps | Leaflet + React-Leaflet (OpenStreetMap tiles) |
| Forms & validation | React Hook Form, Zod, @hookform/resolvers |
| Charts | Recharts |
| Carousel | Embla Carousel |

---

## Features

- **Home page** with hero, stats bar, product grid, "Why Choose Us" features, animated manufacturing process, industries served, trusted-by logo marquee, and CTA banner.
- **About Us** page with company story, mission/vision/values, leadership, and stats.
- **Branches** store locator with a searchable sidebar, detail panel, and an interactive multi-marker Leaflet map.
- **Contact Us** page with contact-method cards, social links, factory location card, and a link to the branch locator.
- **Request a Quote** page with a multi-section form, dynamic garment rows, branding options, and a generated quote reference; submissions open the user's mail client via `mailto:`.
- **Shared Header & Footer** used across all pages, with a mobile Sheet drawer and scroll-aware hide/show behavior.
- **SEO** — route-specific `<title>`, `<meta>`, OpenGraph/Twitter tags, canonical links, `robots.txt`, `sitemap.xml`, web manifest, and Organization JSON-LD.
- **Accessibility & UX** — accessibility widget, cookie-consent banner, newsletter signup toast, focus/hover states, and responsive layouts.

---

## Project structure

```text
src/
├── assets/                 # Images and static data arrays
│   ├── uniforms.ts         # Product catalogue
│   └── industries.ts       # Industries served
├── components/
│   ├── home/               # Home-page sections
│   │   ├── hero.tsx
│   │   ├── stats-bar.tsx
│   │   ├── products.tsx
│   │   ├── features.tsx
│   │   ├── manufacturing.tsx
│   │   ├── industries.tsx
│   │   ├── trusted-by.tsx
│   │   └── cta-banner.tsx
│   ├── layout/
│   │   ├── header.tsx      # Sticky, scroll-aware navbar + mobile Sheet
│   │   └── footer.tsx      # 4-column footer + newsletter
│   ├── branches-map.tsx    # Leaflet map for /branches
│   ├── newsletter-section.tsx
│   ├── cookie-consent.tsx
│   ├── accessibility-widget.tsx
│   ├── not-found.tsx       # 404 page
│   ├── tiktok-icon.tsx
│   └── ui/                 # shadcn/ui components in use
│       ├── sheet.tsx
│       └── sonner.tsx
├── data/
│   ├── branches.ts         # 13 branch + HQ locations
│   └── products.ts
├── lib/
│   ├── utils.ts
│   └── ...                 # Error handling, config, example server functions
├── routes/                 # TanStack Start file-based routes
│   ├── __root.tsx          # Root layout, SEO defaults, providers
│   ├── index.tsx           # Home
│   ├── about.tsx
│   ├── branches.tsx
│   ├── contact.tsx
│   ├── quote.tsx
│   └── sitemap[.]xml.ts    # Dynamic sitemap
├── styles.css              # Tailwind v4 theme, design tokens, marquee animation
├── router.tsx
├── server.ts               # SSR error wrapper
└── start.ts                # Start app config
```

---

## Routes

| Route | File | Purpose |
| --- | --- | --- |
| `/` | `src/routes/index.tsx` | Home page |
| `/about` | `src/routes/about.tsx` | Company story, mission, values, leadership |
| `/branches` | `src/routes/branches.tsx` | Branch list, search, map |
| `/contact` | `src/routes/contact.tsx` | Contact methods, social links, factory card |
| `/quote` | `src/routes/quote.tsx` | Quote request form |
| `/sitemap.xml` | `src/routes/sitemap[.]xml.ts` | Dynamic XML sitemap |

---

## Design system

The site uses a custom Tailwind v4 theme defined in `src/styles.css`.

- **Primary green:** deep forest green (`oklch(0.13 0.05 155)` to `oklch(0.28 0.08 155)`)
- **Accent red:** brand red (`oklch(0.66 0.22 25)`)
- **Display font:** Poppins
- **Body font:** Inter
- **Cursive accent:** Italianno
- **Utilities:** `.animate-marquee` for the trusted-by logo strip

---

## Development

### Requirements

- [Bun](https://bun.sh/) (recommended) or Node.js 20+

### Install dependencies

```bash
bun install
```

### Run the dev server

```bash
bun dev
```

The dev server starts at `http://localhost:8080`.

### Build for production

```bash
bun run build
```

### Lint & format

```bash
bun run lint
bun run format
```

---

## SEO

- Every route exports a `head()` object with a unique title, description, OpenGraph/Twitter tags, and canonical URL.
- `public/robots.txt` allows all crawlers and points to `/sitemap.xml`.
- `public/favicon/site.webmanifest` provides PWA metadata.
- `src/routes/__root.tsx` injects global Organization JSON-LD structured data.

---

## Deployment

This project is built and deployed through Lovable. Production builds target a serverless edge runtime via TanStack Start / Nitro.

---

## Notes

- The quote form uses a `mailto:` link so the visitor's own email client composes the request; no backend email service is required.
- Branch and product data live in `src/data/branches.ts` and `src/assets/uniforms.ts` for easy updates.
- Images are a mix of local assets in `src/assets/` and CDN-hosted photos.

---

## Contact

- **Email:** info@weaverbirdkenya.com
- **Phone:** +254 722 264 464 / 020-2051487
- **Factory & HQ:** Off Thika-Garissa Highway, along Kianjau–Athena Road, near Broadway Secondary School, Thika, Kenya
