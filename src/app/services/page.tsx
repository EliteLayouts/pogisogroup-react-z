import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Sparkles, HardHat, Shield, Zap, Palette, Plane, Truck, ArrowRight, CheckCircle, Star, Clock, Users } from "lucide-react";
import { slugify } from "@/lib/slug";

const serviceCategories = [
  {
    title: "Facility Management",
    description: "Comprehensive solutions for maintaining and optimizing your physical infrastructure",
    services: [
      { name: "Corporate Cleaning", division: "Pogiso Cleaning" },
      { name: "Industrial Cleaning", division: "Pogiso Cleaning" },
      { name: "Hygiene Services", division: "Pogiso Hygiene" },
      { name: "Washroom Management", division: "Pogiso Hygiene" }
    ],
    icon: Building2,
    color: "blue"
  },
  {
    title: "Infrastructure & Construction",
    description: "End-to-end construction and infrastructure development services",
    services: [
      { name: "Commercial Construction", division: "Pogiso Construction" },
      { name: "Industrial Projects", division: "Pogiso Construction" },
      { name: "Renovations", division: "Pogiso Construction" },
      { name: "Infrastructure Development", division: "Pogiso Construction" }
    ],
    icon: HardHat,
    color: "orange"
  },
  {
    title: "Security & Safety",
    description: "Advanced security solutions to protect your assets and people",
    services: [
      { name: "Guard Services", division: "Pogiso Security" },
      { name: "CCTV Surveillance", division: "Pogiso Security" },
      { name: "Access Control", division: "Pogiso Security" },
      { name: "Risk Management", division: "Pogiso Security" }
    ],
    icon: Shield,
    color: "red"
  },
  {
    title: "Energy & Power Solutions",
    description: "Sustainable and reliable energy solutions for modern businesses",
    services: [
      { name: "Solar Installation", division: "Pogiso Energy" },
      { name: "Backup Power Systems", division: "Pogiso Energy" },
      { name: "Energy Management", division: "Pogiso Energy" },
      { name: "Power Infrastructure", division: "Pogiso Energy" }
    ],
    icon: Zap,
    color: "yellow"
  },
  {
    title: "Marketing & Branding",
    description: "Creative solutions to elevate your brand and reach your audience",
    services: [
      { name: "Brand Strategy", division: "Pogiso Marketing" },
      { name: "Graphic Design", division: "Pogiso Marketing" },
      { name: "Corporate Apparel", division: "Pogiso Marketing" },
      { name: "Event Management", division: "Pogiso Marketing" }
    ],
    icon: Palette,
    color: "purple"
  },
  {
    title: "Transport & Logistics",
    description: "Efficient transportation and supply chain management solutions",
    services: [
      { name: "Road Freight", division: "Pogiso Logistics" },
      { name: "Shuttle Services", division: "Pogiso's Tours" },
      { name: "Corporate Travel", division: "Pogiso's Tours" },
      { name: "Supply Chain Solutions", division: "Pogiso Logistics" }
    ],
    icon: Truck,
    color: "green"
  }
];

const divisions = [
  {
    name: "Pogiso Cleaning",
    icon: Building2,
    description: "Professional cleaning services for corporate and industrial facilities",
    domain: "pogisocleaning.co.za",
    features: ["Corporate Cleaning", "Industrial Services", "Specialized Solutions", "Eco-Friendly Products"],
    color: "blue"
  },
  {
    name: "Pogiso Hygiene",
    icon: Sparkles,
    description: "Comprehensive hygiene and washroom management solutions",
    domain: "pogisohygiene.co.za",
    features: ["Sanitary Services", "Washroom Solutions", "Hygiene Products", "Regular Maintenance"],
    color: "cyan"
  },
  {
    name: "Pogiso Construction",
    icon: HardHat,
    description: "Commercial and industrial construction excellence",
    domain: "pogisosconstruction.co.za",
    features: ["Building Projects", "Infrastructure", "Renovations", "Project Management"],
    color: "orange"
  },
  {
    name: "Pogiso Security",
    icon: Shield,
    description: "Advanced security solutions for comprehensive protection",
    domain: "pogisosecurity.co.za",
    features: ["Guard Services", "CCTV Systems", "Access Control", "Risk Assessment"],
    color: "red"
  },
  {
    name: "Pogiso Energy",
    icon: Zap,
    description: "Sustainable energy and power solutions for modern businesses",
    domain: "pogisosenergy.co.za",
    features: ["Solar Systems", "Backup Power", "Energy Management", "Consultation"],
    color: "yellow"
  },
  {
    name: "Pogiso Marketing",
    icon: Palette,
    description: "Creative marketing, branding and design services",
    domain: "pogisosmarketing.co.za",
    features: ["Brand Strategy", "Design Services", "Corporate Apparel", "Digital Marketing"],
    color: "purple"
  },
  {
    name: "Pogiso's Tours",
    icon: Plane,
    description: "Premium transport, shuttle and tour services",
    domain: "pogisostours.co.za",
    features: ["Shuttle Services", "Corporate Travel", "Luxury Tours", "Fleet Management"],
    color: "indigo"
  },
  {
    name: "Pogiso Logistics",
    icon: Truck,
    description: "Efficient logistics and supply chain management",
    domain: "pogisoslogistics.co.za",
    features: ["Road Freight", "Transport Management", "Supply Chain", "Warehousing"],
    color: "green"
  }
];

const benefits = [
  {
    icon: Star,
    title: "Integrated Excellence",
    description: "All divisions work together to provide seamless, comprehensive solutions"
  },
  {
    icon: Clock,
    title: "Single Point of Contact",
    description: "One relationship manager for all your service needs across divisions"
  },
  {
    icon: Users,
    title: "Expert Teams",
    description: "Specialized professionals in each division ensuring quality delivery"
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20">
              Group Services Overview
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Comprehensive Solutions
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Across All Industries
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Pogiso Group delivers world-class services through eight specialized divisions, 
              covering every aspect of modern business operations from facilities to logistics.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Organized service categories delivering excellence across all business sectors
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className={`h-16 w-16 rounded-full bg-${category.color}-100 flex items-center justify-center mb-4 group-hover:bg-${category.color}-200 transition-colors`}>
                    <category.icon className={`h-8 w-8 text-${category.color}-600`} />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.services.map((service, idx) => (
                      <div key={idx} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>{service.name}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {service.division}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Division CTA Tiles */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Our Specialized Divisions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Click below to explore each division's comprehensive service offerings
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {divisions.map((division, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center mb-4 group-hover:from-blue-50 group-hover:to-blue-100 transition-colors">
                    <division.icon className="h-8 w-8 text-slate-700 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <CardTitle className="text-lg">{division.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {division.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2 mb-4">
                    {division.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link to={`/${slugify(division.name)}`}>
                    <Button variant="outline" className="w-full group-hover:bg-slate-900 group-hover:text-white transition-colors">
                      Explore Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <div className="mt-3 text-center">
                    <span className="text-xs text-muted-foreground">{division.domain}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Why Choose Our Integrated Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the power of unified service delivery across all business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let our expert teams across all divisions provide the comprehensive solutions 
            your business needs to thrive in today's competitive landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                Get Custom Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                Learn About Our Expertise
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
