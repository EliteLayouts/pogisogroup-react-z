# Spacing Style Guide

## Principles
- Use rem-based utilities for fluid, accessible spacing.
- Prefer `gap-*` and `space-y-*` for grouping consistency.
- Keep interactive elements at least `44px` tall.

## Header
- Container: `.site-container` → `px-4 sm:px-6 lg:px-8`.
- Item gaps: `gap-4 md:gap-6 lg:gap-8 xl:gap-10`.
- Link padding: `px-2 py-2` on desktop; `px-6 py-3` on mobile.
- Focus: `focus-visible:ring-2 ring-offset-2 ring-ring ring-offset-background`.

## Mobile Menu
- List spacing: `space-y-6`.
- Item touch targets: `min-h-[44px]` or `py-3`.

## Containers & Sections
- Section vertical rhythm: `.section-padding` → `py-16 md:py-20`.
- Grid gaps: start `gap-6`, scale to `gap-8/10` for larger viewports.

## Breakpoints Guidance
- Primary nav switch at `md:920px`.
- Optional `mm:836px` for fine-tuning overlapping states if needed.

