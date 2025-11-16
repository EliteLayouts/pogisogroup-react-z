"use client";

import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { slugify } from "@/lib/slug";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown, Building2, Sparkles, HardHat, Shield, Zap, Palette, Plane, Truck } from "lucide-react";
import { getLogoForPath, getLogoForPathVariant } from "@/lib/logos";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const subsidiaries = [
  {
    name: "Pogiso Cleaning",
    domain: "pogisocleaning.co.za",
    icon: Building2,
    description: "Corporate & industrial cleaning services"
  },
  {
    name: "Pogiso Hygiene",
    domain: "pogisohygiene.co.za", 
    icon: Sparkles,
    description: "Washroom services & sanitary solutions"
  },
  {
    name: "Pogiso Construction",
    domain: "pogisosconstruction.co.za",
    icon: HardHat,
    description: "Commercial & industrial construction"
  },
  {
    name: "Pogiso Security",
    domain: "pogisosecurity.co.za",
    icon: Shield,
    description: "Guarding, CCTV & access control"
  },
  {
    name: "Pogiso Energy",
    domain: "pogisosenergy.co.za",
    icon: Zap,
    description: "Solar & backup power solutions"
  },
  {
    name: "Pogiso Marketing",
    domain: "pogisosmarketing.co.za",
    icon: Palette,
    description: "Branding, design & corporate apparel"
  },
  {
    name: "Pogiso's Tours",
    domain: "pogisostours.co.za",
    icon: Plane,
    description: "Shuttle transport & luxury tours"
  },
  {
    name: "Pogiso Logistics",
    domain: "pogisoslogistics.co.za",
    icon: Truck,
    description: "Road freight & supply chain solutions"
  }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const useEnhancedLogo = useMemo(() => new URLSearchParams(location.search).get("logo") === "enhanced", [location.search]);
  const currentLogo = useMemo(() => getLogoForPathVariant(location.pathname, useEnhancedLogo), [location.pathname, useEnhancedLogo]);
  const isActive = (path: string) => location.pathname === path;
  const navLinkClass = (path: string) => cn(
    "text-foreground transition-colors hover:text-foreground/80 whitespace-nowrap px-2 py-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    isActive(path) && "text-primary font-medium"
  );


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="site-container flex h-16 items-center">
        <div className="flex items-center flex-1">
          <Link to="/" className="flex items-center w-[250px] shrink-0" aria-label="Go to home">
            <picture>
              {currentLogo.webpLight && (
                <source srcSet={currentLogo.webpLight} type="image/webp" />
              )}
              <img
                src={currentLogo.light}
                alt={currentLogo.alt}
                className="h-16 w-[250px] object-contain"
                width={250}
                height={64}
                loading="eager"
                decoding="async"
                draggable={false}
                fetchpriority="high"
                style={{ padding: 5, backfaceVisibility: "hidden", transform: "translateZ(0)" }}
                onLoad={() => {
                  if (performance && performance.mark) {
                    performance.mark("logo-loaded");
                  }

                }}
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  if (img.dataset.fallbackApplied === "1") return;
                  img.dataset.fallbackApplied = "1";
                  const picture = img.parentElement as HTMLPictureElement | null;
                  if (picture) {
                    picture.querySelectorAll("source").forEach((s) => s.remove());
                  }
                  img.src = getLogoForPath("/").light;
                }}
              />
            </picture>
          </Link>
        </div>
        <nav className="hidden lg:flex min-w-0 flex-1 items-center justify-center gap-4 md:gap-6 lg:gap-8 xl:gap-10 text-[clamp(0.875rem,1.5vw,1rem)] whitespace-nowrap" aria-label="Primary">
            <Link to="/" className={navLinkClass('/')} aria-current={isActive('/') ? 'page' : undefined}>
              Home
            </Link>
            <Link to="/about" className={navLinkClass('/about')} aria-current={isActive('/about') ? 'page' : undefined}>
              About Us
            </Link>
            <Link to="/services" className={navLinkClass('/services')} aria-current={isActive('/services') ? 'page' : undefined}>
              Services
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-auto p-0 text-sm hover:bg-transparent whitespace-nowrap px-2 py-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background min-h-[44px]">
                  Our Divisions <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-80">
                {subsidiaries.map((subsidiary) => (
                  <DropdownMenuItem key={subsidiary.name} asChild>
                    <Link to={`/${slugify(subsidiary.name)}`} className="flex items-start gap-3 p-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                        <subsidiary.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{subsidiary.name}</div>
                        <div className="text-xs text-muted-foreground">{subsidiary.description}</div>
                        <div className="text-xs text-primary mt-1">{subsidiary.domain}</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/contact" className={navLinkClass('/contact')} aria-current={isActive('/contact') ? 'page' : undefined}>
              Contact
            </Link>
        </nav>
        
        <div className="flex flex-1 items-center justify-end">
          <Link to="/contact" className="hidden lg:inline-flex">
            <Button className="bg-slate-800 hover:bg-slate-700">Get Quote</Button>
          </Link>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                className="ml-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
                aria-label="Open menu"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
                aria-haspopup="menu"
              >
                <Menu className="h-7 w-7" />
              </Button>
            </DialogTrigger>
          <DialogContent fullscreen overlayClassName="backdrop-blur-sm bg-black/40" className="text-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out duration-300" showCloseButton={false} aria-label="Mobile navigation" id="mobile-menu">
              <DialogTitle className="sr-only">Menu</DialogTitle>
              <div className="h-full overflow-y-auto" style={{paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)'}}>
                <div className="flex min-h-full items-center" onClick={(e) => { if (e.target === e.currentTarget) setIsOpen(false) }}>
                  <nav role="navigation" aria-label="Mobile Primary" className="w-full max-w-screen-md mx-auto px-6">
                  <div className="divide-y divide-border text-center">
                    <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center justify-center py-5 min-h-[48px]" aria-current={isActive('/') ? 'page' : undefined}>
                      <div className="text-2xl sm:text-3xl leading-tight">Home</div>
                    </Link>
                    <Link to="/services" onClick={() => setIsOpen(false)} className="flex items-center justify-center py-5 min-h-[48px]" aria-current={isActive('/services') ? 'page' : undefined}>
                      <div className="text-2xl sm:text-3xl leading-tight">Services</div>
                    </Link>
                    <Link to="/about" onClick={() => setIsOpen(false)} className="flex items-center justify-center py-5 min-h-[48px]" aria-current={isActive('/about') ? 'page' : undefined}>
                      <div className="text-2xl sm:text-3xl leading-tight">About Us</div>
                    </Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)} className="flex items-center justify-center py-5 min-h-[48px]" aria-current={isActive('/contact') ? 'page' : undefined}>
                      <div className="text-2xl sm:text-3xl leading-tight">Contact</div>
                    </Link>
                  </div>
                    <div className="space-y-4 mt-8">
                      <div className="text-base">Our Divisions</div>
                    <div className="grid grid-cols-1 gap-2 text-center">
                      {subsidiaries.map((subsidiary) => (
                        <Link key={subsidiary.name} to={`/${slugify(subsidiary.name)}`} onClick={() => setIsOpen(false)} className="text-sm opacity-90 hover:opacity-100 transition-opacity py-2 min-h-[40px]">
                          {subsidiary.name}
                        </Link>
                      ))}
                    </div>
                    </div>
                  </nav>
                </div>
              </div>
          </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
