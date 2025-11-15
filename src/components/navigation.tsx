"use client";

import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { slugify } from "@/lib/slug";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown, Building2, Sparkles, HardHat, Shield, Zap, Palette, Plane, Truck } from "lucide-react";
import { getLogoForPath, getLogoForPathVariant } from "@/lib/logos";
import { useLocation } from "react-router-dom";

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


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="site-container flex h-20 items-center">
        <div className="flex items-center flex-1">
          <Link to="/" className="flex items-center w-[250px] pt-5" aria-label="Go to home">
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
                style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
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
        <nav className="hidden mm:flex flex-1 items-center justify-center gap-6 mm:gap-10 lg:gap-12 text-sm whitespace-nowrap" aria-label="Primary">
            <Link to="/" className="transition-colors hover:text-foreground/80 text-foreground">
              Home
            </Link>
            <Link to="/about" className="transition-colors hover:text-foreground/80 text-foreground whitespace-nowrap">
              About Us
            </Link>
            <Link to="/services" className="transition-colors hover:text-foreground/80 text-foreground whitespace-nowrap">
              Services
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-auto p-0 text-sm hover:bg-transparent whitespace-nowrap">
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
            <Link to="/contact" className="transition-colors hover:text-foreground/80 text-foreground whitespace-nowrap">
              Contact
            </Link>
        </nav>
        
        <div className="flex flex-1 items-center justify-end">
          <Link to="/contact" className="hidden mm:inline-flex">
            <Button className="bg-slate-800 hover:bg-slate-700">Get Quote</Button>
          </Link>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                className="ml-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 mm:hidden"
                aria-label="Open menu"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
                aria-haspopup="menu"
              >
                <Menu className="h-7 w-7" />
              </Button>
            </DialogTrigger>
          <DialogContent className="p-0 bg-background/95 w-screen h-screen max-w-none fixed inset-0 translate-x-0 translate-y-0 overflow-x-hidden rounded-none border-0 shadow-none gap-0 flex flex-col" showCloseButton={false} aria-label="Mobile navigation" id="mobile-menu">
              <div className="sticky top-0 flex items-center justify-end px-0 py-0 border-b">
                <Button
                  variant="ghost"
                  className="px-0"
                  aria-label="Close menu"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <div className="px-0 overflow-y-auto flex-1 min-h-0">
                <div className="flex flex-col items-center text-center space-y-4 text-base">
                  <Link to="/" onClick={() => setIsOpen(false)} className="text-foreground transition-colors hover:text-foreground/80">
                    Home
                  </Link>
                  <Link to="/about" onClick={() => setIsOpen(false)} className="text-foreground transition-colors hover:text-foreground/80">
                    About Us
                  </Link>
                  <Link to="/services" onClick={() => setIsOpen(false)} className="text-foreground transition-colors hover:text-foreground/80">
                    Services
                  </Link>
                  <div className="space-y-2">
                    <div className="font-medium text-sm text-foreground/80 text-center">Our Divisions:</div>
                    {subsidiaries.map((subsidiary) => (
                      <Link
                        key={subsidiary.name}
                        to={`/${slugify(subsidiary.name)}`}
                        onClick={() => setIsOpen(false)}
                        className="block text-center text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {subsidiary.name}
                      </Link>
                    ))}
                  </div>
                  <Link to="/contact" onClick={() => setIsOpen(false)} className="text-foreground transition-colors hover:text-foreground/80">
                    Contact
                  </Link>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
