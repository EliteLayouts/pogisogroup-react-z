import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Brush, Shirt, Calendar, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, Users, Award, Star, Megaphone } from "lucide-react";

const services = [
  {
    title: "Branding & Creative",
    description: "Complete brand identity and creative design solutions for modern businesses",
    features: [
      "Logo design",
      "Brand strategy",
      "Visual identity",
      "Marketing collateral",
      "Brand guidelines",
      "Creative campaigns"
    ],
    icon: Brush,
    color: "purple"
  },
  {
    title: "Corporate Apparel",
    description: "Professional branded clothing and uniforms for corporate teams",
    features: [
      "Custom uniforms",
      "Corporate wear",
      "Safety apparel",
      "Promotional clothing",
      "Team branding",
      "Quality embroidery"
    ],
    icon: Shirt,
    color: "blue"
  },
  {
    title: "Events & Activations",
    description: "Comprehensive event management and brand activation services",
    features: [
      "Event planning",
      "Brand activations",
      "Corporate events",
      "Product launches",
      "Exhibition management",
      "On-site support"
    ],
    icon: Calendar,
    color: "green"
  }
];

const portfolio = [
  {
    title: "Corporate Rebranding",
    category: "Branding",
    description: "Complete brand transformation for leading financial institution"
  },
  {
    title: "Uniform Program",
    category: "Corporate Apparel",
    description: "Designed and supplied uniforms for 500+ employees"
  },
  {
    title: "Product Launch",
    category: "Events",
    description: "Managed successful product launch for tech company"
  }
];

const benefits = [
  {
    icon: Award,
    title: "Creative Excellence",
    description: "Award-winning designs and creative solutions"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Talented designers and marketing professionals"
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Projects delivered on schedule with quality assurance"
  },
  {
    icon: Star,
    title: "Client Focused",
    description: "Dedicated to achieving client objectives"
  }
];

export default function PogisoMarketingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20">
              Pogiso Marketing Division
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Creative Excellence
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                Brands That Inspire
              </span>
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Delivering world-class marketing solutions across branding, creative design, and events. 
              Your trusted partner for building memorable brands and experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50">
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900">
                Get Creative Consultation
              </Button>
            </div>
          </div>
        </div>
        
        {/* Domain Badge */}
        <div className="text-center mt-8">
          <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
            Visit our dedicated site: pogisosmarketing.co.za
          </Badge>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Our Marketing Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive marketing solutions tailored to your brand needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
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

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Our Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing our creative excellence through successful projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                  <Palette className="h-16 w-16 text-purple-600" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    {project.category}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Why Choose Pogiso Marketing?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The trusted choice for creative marketing and branding excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <benefit.icon className="h-8 w-8 text-purple-600" />
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

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Elevate Your Brand
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Ready to transform your brand presence? Contact our team today 
                for creative consultation and customized marketing solutions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+27 12 345 6794</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">marketing@pogisogroup.co.za</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Service Areas</h3>
                    <p className="text-muted-foreground">All 9 Provinces, South Africa</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="https://pogisosmarketing.co.za" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                    Visit Our Dedicated Website
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <Card className="p-8 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Creative Consultation</CardTitle>
                <p className="text-muted-foreground">
                  Get expert advice for your marketing and branding needs
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
                  <label className="text-sm font-medium">Service Interest</label>
                  <div className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"></div>
                </div>
                <div>
                  <label className="text-sm font-medium">Project Details</label>
                  <div className="mt-1 h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"></div>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Submit Request
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-purple-800 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Transform Your Brand Today
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust Pogiso Marketing for their 
            creative and branding needs. Experience excellence in every project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50">
                Start Creative Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900">
                Explore Other Divisions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}