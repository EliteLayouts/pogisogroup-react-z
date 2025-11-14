import "./globals.css";
import "@/assets/css/logo.scss";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Helmet } from "react-helmet-async";
import { logoMap } from "@/lib/logos";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Helmet>
        <title>Pogiso Group - Unified Excellence Across Industries</title>
        <meta name="description" content="Pogiso Group is a premier South African conglomerate offering world-class services in cleaning, hygiene, construction, security, energy, marketing, tours, and logistics. Level 1 BEE certified with 100% Black Ownership." />
        <meta name="keywords" content="Pogiso Group,BEE certified,South Africa,cleaning,hygiene,construction,security,energy,marketing,tours,logistics" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        {logoMap["pogiso-group"].webpLight && (
          <link rel="preload" as="image" href={logoMap["pogiso-group"].webpLight!} type="image/webp" />
        )}
        <link rel="preload" as="image" href={logoMap["pogiso-group"].light} />
      </Helmet>
      <Navigation />
      <main className="min-h-screen antialiased bg-background text-foreground">
        {children}
      </main>
      <Footer />
      <Toaster />
    </>
  );
}
