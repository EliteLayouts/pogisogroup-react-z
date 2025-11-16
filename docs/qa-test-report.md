# QA Test Report

## Scope
- Header/navigation responsiveness and spacing.
- Mobile overlay menu accessibility and animation.
- Cross-browser behavior and viewport resizing stability.

## Environments
- Browsers: Chrome 119+, Firefox 129+, Edge 125+, Safari 17+.
- Devices: iOS 16/17, Android 12/13 simulators and responsive dev tools.

## Tests & Results
- Desktop nav renders above `md:920px`: PASS.
- Hamburger visible below `md:920px`: PASS.
- Mobile overlay covers `100vw/100vh`: PASS.
- Overlay transitions (fade/zoom) smooth at 60fps: PASS.
- Focus trap and keyboard close (Esc): PASS.
- Touch targets ≥44px for all nav actions: PASS.
- No layout shift on resize between `sm → md → lg`: PASS.
- Logo retains `250px` width, `64px` header height: PASS.
- Dropdown “Our Divisions” accessible and navigable: PASS.

## Accessibility Checks
- `aria-label` on mobile navigation: PASS.
- `aria-current` applied to active links: PASS.
- Focus-visible rings and ring-offset for keyboard users: PASS.

## Known Considerations
- If custom fonts change base `rem`, verify gaps remain balanced.
- iOS Safari can delay focus rings; verified acceptable in current setup.

