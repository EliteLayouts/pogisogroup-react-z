import Link from "next/link";
import { Building2, Sparkles, HardHat, Shield, Zap, Palette, Plane, Truck, Mail, Phone, MapPin } from "lucide-react";

const subsidiaries = [
  { name: "Pogiso Cleaning", icon: Building2, domain: "pogisocleaning.co.za" },
  { name: "Pogiso Hygiene", icon: Sparkles, domain: "pogisohygiene.co.za" },
  { name: "Pogiso Construction", icon: HardHat, domain: "pogisosconstruction.co.za" },
  { name: "Pogiso Security", icon: Shield, domain: "pogisosecurity.co.za" },
  { name: "Pogiso Energy", icon: Zap, domain: "pogisosenergy.co.za" },
  { name: "Pogiso Marketing", icon: Palette, domain: "pogisosmarketing.co.za" },
  { name: "Pogiso's Tours", icon: Plane, domain: "pogisostours.co.za" },
  { name: "Pogiso Logistics", icon: Truck, domain: "pogisoslogistics.co.za" }
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="site-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-slate-700 to-slate-600 flex items-center justify-center">
                <span className="text-white font-bold">PG</span>
              </div>
              <span className="font-bold text-xl">Pogiso Group</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              A premier South African conglomerate delivering excellence across eight specialized industries. 
              Level 1 BEE certified with 100% Black Ownership, serving nationwide with pride and precision.
            </p>
            <div className="flex space-x-4">
              <div className="bg-slate-800 px-3 py-1 rounded-full text-xs font-medium">
                Level 1 BEE
              </div>
              <div className="bg-slate-800 px-3 py-1 rounded-full text-xs font-medium">
                100% Black Owned
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-slate-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-slate-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-slate-300 hover:text-white transition-colors">Group Services</Link></li>
              <li><Link href="/contact" className="text-slate-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Our Divisions */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Our Divisions</h3>
            <ul className="space-y-2 text-sm">
              {subsidiaries.slice(0, 4).map((subsidiary) => (
                <li key={subsidiary.name}>
                  <Link 
                    href={`/${subsidiary.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-slate-300 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <subsidiary.icon className="h-3 w-3" />
                    {subsidiary.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="h-4 w-4" />
                <span>+27 12 345 6789</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="h-4 w-4" />
                <span>info@pogisogroup.co.za</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="h-4 w-4" />
                <span>South Africa</span>
              </div>
            </div>
            <div className="pt-4">
              <p className="text-xs text-slate-400">
                Operating across all 9 provinces of South Africa
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              © 2024 Pogiso Group. All rights reserved. | Level 1 BEE Contributor | 100% Black Owned
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
