# Products Page

Create a new `/products` route that renders the full product catalogue from `products.categories` in `src/data/products.ts` (9 categories: School Uniforms, Corporate Wear, Workwear & Overalls, Medical Wear, Hospitality Wear, T-Shirts & Polos, Jumpers/Sweaters/Fleece, Tracksuits & Sportswear, Shukas & Heritage, Promotional Items).

## What you'll see

1. **Hero** — reuse the existing `PageHero` component, passing the provided banner image URL (`nabth0lum2fljecqgqfw.jpg`) as the `image` prop, with "Our Products" eyebrow/icon, title, and a short subtitle.

2. **Category sections** — one section per category, starting with School Uniforms:
   - Category name (h2) + pitch text
   - Category banner image (each category already has a `banner` URL in the data) rendered as a rounded feature image
   - Tags row (fabrics/features) as small chips with the `tagsLabel`
   - A product grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` (max 4 per row on large screens)
   - Each product card: placeholder image (a branded div with the garment icon + name initial since all `image` fields are empty — a subtle green/gradient placeholder, no broken images), product name, and description text
   - Alternate section backgrounds (white / muted) for rhythm, matching the site's green/red design tokens

3. **CTA** — a closing "Get a Quote" banner linking to `/quote`.

4. **Navigation & SEO**
   - Add "Products" link to the header nav (and footer/sitemap entry in `src/routes/sitemap[.]xml.ts`).
   - Route `head()` with unique title, description, og:title, og:description.

## Files

- **New:** `src/routes/products.tsx` — the page (PageHero + mapped category sections + CTA).
- **Edit:** `src/components/layout/header.tsx` — add Products nav link.
- **Edit:** `src/routes/sitemap[.]xml.ts` — add `/products`.
- **Maybe edit:** `src/components/layout/footer.tsx` — add Products link if the footer has a page-links column.

## Technical notes

- Data comes from `products.categories` (the detailed export with banner/tags/products), not the short `ProductCategories` list.
- All product `image` fields are empty strings, so cards render a designed placeholder (icon + brand gradient) instead of `<img>`; if a URL is later added, it will render the image.
- No backend work; fully static page.
