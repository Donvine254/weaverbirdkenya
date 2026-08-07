# Reusable Page Hero Component

## Goal
Make the hero/header sections on About, Contact, Branches and Services identical in height, layout and behaviour by extracting a single reusable component.

## What will change
1. Create `src/components/page-hero.tsx` that accepts:
   - `eyebrow`: string
   - `icon`: Lucide icon component
   - `title`: ReactNode (allows highlighted word)
   - `subtitle`: string
   - optional `className` for extra padding tweaks
2. Replace the inline `PageHero` functions in:
   - `src/routes/about.tsx`
   - `src/routes/contact.tsx`
   - `src/routes/branches.tsx`
   - `src/routes/services.tsx`
3. Keep the same factory background image, gradient overlay, typography and vertical padding (`py-20 lg:py-28`) so all four pages render the same hero height.

## Technical details
- Component lives in `src/components/page-hero.tsx`.
- Background image URL and gradient values are hard-coded inside the component to match the existing About/Contact/Branches heroes.
- Uses `React.ComponentType<{ className?: string; style?: React.CSSProperties }>` for the icon prop, consistent with other typed icon usage in the project.
- No business logic changes; purely presentation refactor.

## Verification
- Build the project (`bun run build`) to confirm no type or import errors.
- Visually check the four routes render heroes of equal height and identical spacing.
