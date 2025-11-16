# UI/UX Redesign Plan

## Objectives
- Establish consistent responsive behavior across all breakpoints.
- Normalize spacing and scaling in the header/navigation.
- Implement an accessible, full-screen mobile overlay menu with smooth transitions.
- Preserve brand identity and logo fidelity.

## Architecture Overview
- Layout primitives: CSS Flexbox and Grid via Tailwind utilities.
- Component library: Radix UI + shadcn-styled components.
- Routing: `react-router-dom`.
- Styling: Tailwind CSS with rem-based scales.

## Breakpoints
- `sm: 640px`
- `md: 920px` (primary switch from mobile → desktop nav)
- `lg: 1024px`
- `xl: 1280px`
- `2xl: 1536px`
- `mm: 836px` (optional intermediate tuning)

## Header / Navigation
- Logo: fixed width `250px`, header height `64px`, object-contain.
- Desktop nav: inline items, responsive gap: `gap-4 md:gap-6 lg:gap-8 xl:gap-10`.
- Interactive targets: minimum `44px` height using `px-2 py-2` or `min-h-[44px]`.
- Focus styling: `focus-visible` rings with offset for WCAG compliance.
- CTA: `Get Quote` remains on the right, visible from `md` and up.

## Mobile Overlay Menu
- Uses Radix `Dialog` with overlay and content layers at `z-[60]/z-[70]`.
- Full-screen fixed container: `w-screen h-screen fixed inset-0`.
- Animations: fade + zoom via data-state classes, GPU-friendly.
- Accessible controls: `aria-label`, keyboard close, focus trap.
- Navigation list: `text-lg` with `space-y-6`, each item `px-6 py-3`.

## Spacing System
- Base spacing uses Tailwind rem scale for fluidity.
- Horizontal rhythm via `gap` utilities for groups; vertical rhythm via `space-y`.
- Container padding via `.site-container` (`px-4 sm:px-6 lg:px-8`).

## Security & Performance
- No inline secrets or unsafe eval.
- `will-change` on overlay/content for smooth animations.
- Backface visibility and `translateZ(0)` on logo to avoid jitter.

## Risks & Mitigations
- Breakpoint changes may affect layout: keep both `md` and `mm` for tuning.
- Heavy font sizes on mobile: use `clamp()` to bound text scaling where needed.

## Deliverables
- Updated navigation behavior and spacing.
- Mobile overlay menu meeting accessibility and performance standards.
- QA report and spacing style guide.

