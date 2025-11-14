import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Droplets, Package, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, Users, Award, Star, Shield } from "lucide-react";

const services = [
  {
    title: "Corporate Hygiene Packages",
    description: "Comprehensive hygiene solutions tailored for corporate environments and office buildings",
    features: [
      "Customized hygiene plans",
      "Regular maintenance schedules",
      "Quality assurance checks",
      "Emergency response services",
      "Staff training programs",
      "Compliance reporting"
    ],
    icon: Sparkles,
    color: "blue"
  },
  {
    title: "Sanitary Bin Services",
    description: "Professional sanitary waste disposal and management for all facility types",
    features: [
      "Feminine hygiene units",
      "Diaper disposal units",
      "Medical waste bins",
      "Sanitary bag dispensers",
      "Regular collection service",
      "Disinfection and deodorizing"
    ],
    icon: Package,
    color: "pink"
  },
  {
    title: "Washroom Services",
    description: "Complete washroom hygiene solutions ensuring clean and comfortable facilities",
    features: [
      "Hand soap dispensers",
      "Hand dryer services",
      "Toilet roll dispensers",
      "Air freshener systems",
      "Surface disinfection",
      "Floor cleaning services"
    ],
    icon: Droplets,
    color: "cyan"
  },
  {
    title: "Hygiene Consumables",
    description: "Premium quality hygiene products and consumables for all your facility needs",
    features: [
      "Hand care products",
      "Paper products",
      "Cleaning chemicals",
      "Personal protective equipment",
      "Waste management supplies",
      "Eco-friendly options"
    ],
    icon: Package,
    color: "green"
  }
];

const benefits = [
  {
    icon: Shield,
    title: "Health & Safety Compliant",
    description: "All services meet and exceed health and safety regulations"
  },
  {
    icon: Users,
    title: "Expert Technicians",
    description: "Trained professionals specializing in hygiene services"
  },
  {
    icon: Clock,
    title: "Reliable Service",
    description: "Consistent, on-time service with minimal disruption"
  },
  {
    icon: Award,
    title: "Quality Products",
    description: "Premium, eco-friendly hygiene products and solutions"
  }
];

const serviceAreas = [
  "Office Buildings", "Retail Centers", "Healthcare Facilities", "Educational Institutions",
  "Restaurants & Food Service", "Hotels & Hospitality", "Government Buildings", "Shopping Malls",
  "Manufacturing Facilities", "Transport Hubs", "Sports Facilities", "Entertainment Venues"
];

const consumables = [
  "Hand Soap & Sanitizers", "Paper Towels & Tissues", "Toilet Paper", "Hand Creams",
  "Cleaning Chemicals", "Disinfectants", "Waste Bags", "Air Fresheners",
  "Protective Gloves", "Face Masks", "Surface Wipes", "Floor Care Products"
];

export default function PogisoHygienePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-900 via-cyan-800 to-cyan-900 text-white py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20">
              Pogiso Hygiene Division
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Professional Hygiene
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Excellence Redefined
              </span>
            </h1>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Delivering world-class hygiene solutions across corporate, commercial, and public spaces. 
              Your trusted partner for maintaining the highest standards of cleanliness and health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-cyan-900 hover:bg-cyan-50">
                Get Free Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cyan-900">
                View Product Catalog
              </Button>
            </div>
          </div>
        </div>
        
        {/* Domain Badge */}
        <div className="text-center mt-8">
          <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
            Visit our dedicated site: pogisohygiene.co.za
          </Badge>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Our Hygiene Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive hygiene solutions tailored to your specific facility requirements
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className={`h-16 w-16 rounded-full bg-${service.color}-100 flex items-center justify-center mb-4 group-hover:bg-${service.color}-200 transition-colors`}>
                    <service.icon className={`h-8 w-8 text-${service.color}-600`} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Why Choose Pogiso Hygiene?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The trusted choice for businesses seeking exceptional hygiene services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto h-16 w-16 rounded-full bg-cyan-100 flex items-center justify-center mb-4">
                    <benefit.icon className="h-8 w-8 text-cyan-600" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consumables Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Premium Hygiene Consumables
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              High-quality products to maintain optimal hygiene standards
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardHeader className="text-center">
                <div className="mx-auto h-20 w-20 rounded-full bg-cyan-100 flex items-center justify-center mb-4">
                  <Package className="h-10 w-10 text-cyan-600" />
                </div>
                <CardTitle className="text-2xl">Complete Product Range</CardTitle>
                <p className="text-muted-foreground">
                  All your hygiene needs under one roof with premium quality products
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {consumables.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    Eco-friendly and sustainable options available
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized hygiene solutions for diverse sectors and facility types
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardHeader className="text-center">
                <div className="mx-auto h-20 w-20 rounded-full bg-cyan-100 flex items-center justify-center mb-4">
                  <Sparkles className="h-10 w-10 text-cyan-600" />
                </div>
                <CardTitle className="text-2xl">Comprehensive Coverage</CardTitle>
                <p className="text-muted-foreground">
                  We provide specialized hygiene services for all types of facilities
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    Serving clients across all 9 provinces of South Africa
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Ready to elevate your facility's hygiene standards? Contact our team today 
                for a free assessment and customized hygiene solution.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-cyan-100 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+27 12 345 6790</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-cyan-100 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">hygiene@pogisogroup.co.za</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-cyan-100 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Service Areas</h3>
                    <p className="text-muted-foreground">All 9 Provinces, South Africa</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="https://pogisohygiene.co.za" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                    Visit Our Dedicated Website
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <Card className="p-8 bg-gradient-to-br from-cyan-50 to-cyan-100">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Request Free Assessment</CardTitle>
                <p className="text-muted-foreground">
                  Get a customized hygiene solution tailored to your facility needs
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Company Name</label>
                    <div className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"></div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Contact Person</label>
                    <div className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"></div>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Email Address</label>
                  <div className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"></div>
                </div>
                <div>
                  <label className="text-sm font-medium">Phone Number</label>
                  <div className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"></div>
                </div>
                <div>
                  <label className="text-sm font-medium">Facility Type</label>
                  <div className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"></div>
                </div>
                <div>
                  <label className="text-sm font-medium">Message</label>
                  <div className="mt-1 h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"></div>
                </div>
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
                  Submit Request
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900 to-cyan-800 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Elevate Your Hygiene Standards Today
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust Pogiso Hygiene for their professional 
            hygiene needs. Experience excellence in every service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-cyan-900 hover:bg-cyan-50">
                Schedule Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cyan-900">
                Explore Other Divisions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}