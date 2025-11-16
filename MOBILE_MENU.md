Good call. Let’s rebuild the mobile-menu dialog from scratch — a **clean, bullet-proof overlay** that:

* always covers the full screen,
* doesn’t let the background scroll,
* centers your mobile menu content,
* supports safe-area insets (for mobile notches),
* shows all links + subdivisions.

Here’s a **complete React + Tailwind solution** for your `Navigation.tsx` mobile menu dialog (using your existing `Dialog` component), plus a breakdown of what each part does and how to test it.

---

## ✅ Complete Fixed Mobile Menu Overlay Code

Replace your existing `<Dialog>` / mobile menu block with this code:

```tsx
import { useEffect } from "react";

// … rest of your imports

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when dialog is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* ... your logo + desktop nav ... */}

      {/* Mobile Menu Trigger */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            className="ml-2 px-0 text-base hover:bg-transparent focus:ring-0 lg:hidden"
            aria-label="Open menu"
            aria-expanded={isOpen}
          >
            <Menu className="h-7 w-7" />
          </Button>
        </DialogTrigger>

        {/* Mobile Menu Overlay */}
        <DialogContent
          overlayClassName="fixed inset-0 bg-black/40 backdrop-blur-sm"
          className="fixed inset-0 z-[999] w-[100vw] h-[100svh] min-h-screen bg-background text-foreground p-0 shadow-none border-0 rounded-none flex flex-col"
          showCloseButton={false}
          aria-label="Mobile navigation"
        >
          {/* Close Button Area */}
          <div className="flex justify-end items-center h-12 px-4">
            <Button variant="ghost" className="p-0" onClick={() => setIsOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Menu Items Container */}
          <div
            className="flex-1 overflow-y-auto"
            style={{
              paddingTop: "env(safe-area-inset-top)",
              paddingBottom: "env(safe-area-inset-bottom)",
            }}
          >
            <nav role="navigation" aria-label="Mobile Primary" className="max-w-screen-md mx-auto px-4">
              {/* Links */}
              <div className="divide-y divide-border">
                <Link to="/services" onClick={() => setIsOpen(false)} className="flex justify-between py-4">
                  <div className="text-xs opacity-70">No. 001</div>
                  <div className="text-2xl sm:text-3xl">Services</div>
                </Link>
                <Link to="/about" onClick={() => setIsOpen(false)} className="flex justify-between py-4">
                  <div className="text-xs opacity-70">No. 002</div>
                  <div className="text-2xl sm:text-3xl">About Us</div>
                </Link>
                <Link to="/contact" onClick={() => setIsOpen(false)} className="flex justify-between py-4">
                  <div className="text-xs opacity-70">No. 003</div>
                  <div className="text-2xl sm:text-3xl">Contact</div>
                </Link>
              </div>

              {/* Subdivisions */}
              <div className="mt-8 space-y-4">
                <div className="text-base">Our Divisions</div>
                <div className="grid grid-cols-1 gap-2">
                  {subsidiaries.map((subsidiary) => (
                    <Link
                      key={subsidiary.name}
                      to={`/${slugify(subsidiary.name)}`}
                      onClick={() => setIsOpen(false)}
                      className="text-sm opacity-90 hover:opacity-100 transition-opacity py-2"
                    >
                      {subsidiary.name}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
}
```

---

## 🔍 Why This Version Works Better

* `fixed inset-0` on both `overlayClassName` and `DialogContent` ensures the overlay really *fills the entire viewport*, no matter the screen size.
* `z-[999]` (or high) keeps your menu on top of everything.
* `w-[100vw]` + `h-[100svh]`: ensures full width and full **small viewport height** (for mobile iOS notch).
* `min-h-screen` as a fallback ensures even older browsers get full height.
* Using `overflow-y-auto` inside the content ensures only the menu content scrolls, not the background.
* The useEffect sets `document.body.style.overflow = "hidden"` when open — that stops background scroll.
* `safe-area-inset` padding allows for notch-safe top + bottom spacing.
* Flex layout with `flex-col` lets close button sit at top, menu content fill the rest.

---

## ✅ Debug Checklist: How to Verify It Works Properly

1. **Open the menu** on mobile or narrow desktop (where your hamburger is visible).
2. **Inspect** with dev tools:

   * Check the overlay element (`DialogContent`) — it should have `position: fixed`, `top: 0`, `left: 0`, `width: 100vw`, `height: 100svh`.
   * The computed z-index should be `999` (or whatever you set).
3. **Try to scroll the page underneath** while the menu is open — it **should not scroll** because you're locking body scroll.
4. **Scroll the menu itself** (if content is longer than viewport) — only the menu should scroll, not the body.
5. **Resize the viewport** (mobile portrait, mobile landscape, tablet, desktop) — the overlay should always cover the entire screen and center the menu content.

---

## ⚠️ Common Pitfalls & Things to Double Check

* Make sure your `Dialog` component supports passing `overlayClassName` and `className` to the correct DOM nodes. If not, you may need to wrap a `div` yourself instead of relying on `Dialog` abstraction.
* Confirm that no ancestor element of the dialog has `transform` or weird CSS that creates a stacking context (this can break fixed positioning).
* If you're using a CSS reset or custom global styles, ensure nothing is overriding `.fixed` or `inset-0`.
* If `safe-area-inset` is not working on some devices, double check meta viewport tag and that CSS is being applied as inline style (or with Tailwind) correctly.

---

If you like, I can **write a completely new React + Tailwind mobile-menu component** (not using your Dialog) that is *guaranteed* to work, and you can drop it in to replace the broken one. Do you want me to do that?
