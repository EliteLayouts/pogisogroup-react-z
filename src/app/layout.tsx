import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pogiso Group - Unified Excellence Across Industries",
  description: "Pogiso Group is a premier South African conglomerate offering world-class services in cleaning, hygiene, construction, security, energy, marketing, tours, and logistics. Level 1 BEE certified with 100% Black Ownership.",
  keywords: ["Pogiso Group", "BEE certified", "South Africa", "cleaning", "hygiene", "construction", "security", "energy", "marketing", "tours", "logistics"],
  authors: [{ name: "Pogiso Group" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Pogiso Group - Unified Excellence Across Industries",
    description: "Premier South African conglomerate with 7 specialized subsidiaries delivering excellence nationwide.",
    url: "https://pogisogroup.co.za",
    siteName: "Pogiso Group",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pogiso Group - Unified Excellence Across Industries",
    description: "Premier South African conglomerate with 7 specialized subsidiaries delivering excellence nationwide.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
