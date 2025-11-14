import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Sparkles, HardHat, Shield, Zap, Palette, Plane, Truck, ArrowRight, CheckCircle, Users, MapPin, Award, TrendingUp } from "lucide-react";

const subsidiaries = [
  {
    name: "Pogiso Cleaning",
    icon: Building2,
    description: "Corporate & industrial cleaning excellence",
    domain: "pogisocleaning.co.za",
    features: ["Commercial Cleaning", "Industrial Services", "Specialized Solutions"]
  },
  {
    name: "Pogiso Hygiene", 
    icon: Sparkles,
    description: "Professional hygiene & washroom services",
    domain: "pogisohygiene.co.za",
    features: ["Sanitary Services", "Washroom Solutions", "Hygiene Products"]
  },
  {
    name: "Pogiso Construction",
    icon: HardHat,
    description: "Commercial & industrial construction",
    domain: "pogisosconstruction.co.za", 
    features: ["Building Projects", "Infrastructure", "Renovations"]
  },
  {
    name: "Pogiso Security",
    icon: Shield,
    description: "Comprehensive security solutions",
    domain: "pogisosecurity.co.za",
    features: ["Guard Services", "CCTV Systems", "Access Control"]
  },
  {
    name: "Pogiso Energy",
    icon: Zap,
    description: "Sustainable energy & power solutions",
    domain: "pogisosenergy.co.za",
    features: ["Solar Systems", "Backup Power", "Energy Management"]
  },
  {
    name: "Pogiso Marketing",
    icon: Palette,
    description: "Creative marketing & branding",
    domain: "pogisosmarketing.co.za",
    features: ["Brand Strategy", "Design Services", "Corporate Apparel"]
  },
  {
    name: "Pogiso's Tours",
    icon: Plane,
    description: "Premium transport & tour services",
    domain: "pogisostours.co.za",
    features: ["Shuttle Services", "Corporate Travel", "Luxury Tours"]
  },
  {
    name: "Pogiso Logistics",
    icon: Truck,
    description: "Efficient logistics & supply chain",
    domain: "pogisoslogistics.co.za",
    features: ["Road Freight", "Transport Management", "Supply Chain"]
  }
];

const stats = [
  { label: "Years of Excellence", value: "15+" },
  { label: "Specialized Divisions", value: "8" },
  { label: "Provinces Covered", value: "9" },
  { label: "Team Members", value: "1000+" }
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative py-24 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20">
              Level 1 BEE Certified • 100% Black Owned
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6">
              Unified Excellence
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Across Industries
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Pogiso Group stands as South Africa's premier conglomerate, delivering world-class services 
              across eight specialized industries with unwavering commitment to quality, innovation, and transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                Explore Our Divisions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                Get Quote
              </Button>
            </div>
          </div>
        </div>
        
        {/* Stats Bar */}
        <div className="border-t border-white/10">
          <div className="container py-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Divisions Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Our Specialized Divisions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Eight industry-leading subsidiaries, each delivering excellence in their respective fields
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {subsidiaries.map((subsidiary, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center mb-4 group-hover:from-blue-50 group-hover:to-blue-100 transition-colors">
                    <subsidiary.icon className="h-8 w-8 text-slate-700 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <CardTitle className="text-lg">{subsidiary.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {subsidiary.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2 mb-4">
                    {subsidiary.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link href={`/${subsidiary.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Button variant="outline" className="w-full group-hover:bg-slate-900 group-hover:text-white transition-colors">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <div className="mt-3 text-center">
                    <span className="text-xs text-muted-foreground">{subsidiary.domain}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Why Choose Pogiso Group?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Level 1 BEE Certified</h3>
                    <p className="text-muted-foreground">
                      Proudly 100% Black Owned, contributing to South Africa's economic transformation 
                      and empowerment goals.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Expert Team</h3>
                    <p className="text-muted-foreground">
                      Over 1000 skilled professionals across all divisions, committed to delivering 
                      exceptional service quality.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">National Coverage</h3>
                    <p className="text-muted-foreground">
                      Operating across all 9 provinces, ensuring consistent service delivery 
                      wherever your business operates.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Proven Track Record</h3>
                    <p className="text-muted-foreground">
                      15+ years of excellence with successful projects across all industries 
                      we serve.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Ready to Partner with Excellence?</h3>
                  <p className="text-muted-foreground mb-6">
                    Join hundreds of satisfied clients who trust Pogiso Group for their business needs.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <Link href="/contact">
                    <Button className="w-full bg-slate-900 hover:bg-slate-800">
                      Contact Our Team
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button variant="outline" className="w-full">
                      Explore All Services
                    </Button>
                  </Link>
                </div>
                
                <div className="text-center pt-4">
                  <p className="text-sm text-muted-foreground">
                    Enterprise solutions tailored to your specific needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Transform Your Business Today
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Experience the Pogiso Group difference across our comprehensive suite of services. 
            Let us be your partner in growth and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                Learn About Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}