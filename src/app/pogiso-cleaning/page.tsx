import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Sparkles, Home, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, Users, Award, Star } from "lucide-react";

const services = [
  {
    title: "Corporate Cleaning",
    description: "Professional cleaning solutions for office buildings, corporate headquarters, and business centers",
    features: [
      "Daily office cleaning",
      "Window and glass cleaning",
      "Carpet and floor maintenance",
      "Washroom hygiene services",
      "Waste management",
      "Pest control integration"
    ],
    icon: Building2,
    color: "blue"
  },
  {
    title: "Industrial Cleaning",
    description: "Specialized cleaning services for factories, warehouses, and industrial facilities",
    features: [
      "Heavy machinery cleaning",
      "Factory floor maintenance",
      "High-pressure cleaning",
      "Chemical spill cleanup",
      "Industrial waste disposal",
      "Safety compliance cleaning"
    ],
    icon: Building2,
    color: "orange"
  },
  {
    title: "Residential Cleaning",
    description: "Comprehensive home cleaning services for apartments, houses, and residential complexes",
    features: [
      "Regular home cleaning",
      "Deep cleaning services",
      "Move-in/move-out cleaning",
      "Post-construction cleanup",
      "Window and facade cleaning",
      "Garden and outdoor cleaning"
    ],
    icon: Home,
    color: "green"
  },
  {
    title: "Hygiene-Aligned Services",
    description: "Health-focused cleaning solutions meeting the highest hygiene standards",
    features: [
      "Medical facility cleaning",
      "Food service sanitation",
      "School and educational cleaning",
      "Retail space hygiene",
      "Healthcare compliance",
      "Disinfection and sterilization"
    ],
    icon: Sparkles,
    color: "purple"
  }
];

const benefits = [
  {
    icon: Award,
    title: "Industry Certified",
    description: "Fully certified with industry-leading standards and best practices"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Trained professionals with extensive experience in all cleaning sectors"
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock service to fit your schedule and minimize disruption"
  },
  {
    icon: Star,
    title: "Quality Guaranteed",
    description: "Committed to excellence with satisfaction guaranteed on all services"
  }
];

const serviceAreas = [
  "Office Buildings", "Retail Centers", "Healthcare Facilities", "Educational Institutions",
  "Industrial Plants", "Warehouses", "Residential Complexes", "Hotels & Hospitality",
  "Government Buildings", "Shopping Malls", "Manufacturing Facilities", "Transport Hubs"
];

export default function PogisoCleaningPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20">
              Pogiso Cleaning Division
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Professional Cleaning
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Excellence Redefined
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Delivering world-class cleaning solutions across corporate, industrial, and residential sectors. 
              Your trusted partner for pristine environments and unmatched hygiene standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                View Our Portfolio
              </Button>
            </div>
          </div>
        </div>
        
        {/* Domain Badge */}
        <div className="text-center mt-8">
          <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
            Visit our dedicated site: pogisocleaning.co.za
          </Badge>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Our Cleaning Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive cleaning solutions tailored to your specific needs and industry requirements
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
              Why Choose Pogiso Cleaning?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The trusted choice for businesses and homes seeking exceptional cleaning services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
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

      {/* Service Areas */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized cleaning solutions for diverse sectors and facility types
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardHeader className="text-center">
                <div className="mx-auto h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Building2 className="h-10 w-10 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Comprehensive Coverage</CardTitle>
                <p className="text-muted-foreground">
                  We provide specialized cleaning services for all types of facilities
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
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Ready to experience the Pogiso Cleaning difference? Contact our team today 
                for a free consultation and customized cleaning solution.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+27 12 345 6789</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">cleaning@pogisogroup.co.za</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Service Areas</h3>
                    <p className="text-muted-foreground">All 9 Provinces, South Africa</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="https://pogisocleaning.co.za" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Visit Our Dedicated Website
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Request Free Quote</CardTitle>
                <p className="text-muted-foreground">
                  Get a customized cleaning solution tailored to your needs
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
                  <label className="text-sm font-medium">Service Type</label>
                  <div className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"></div>
                </div>
                <div>
                  <label className="text-sm font-medium">Message</label>
                  <div className="mt-1 h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"></div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Submit Request
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Transform Your Space Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust Pogiso Cleaning for their professional 
            cleaning needs. Experience excellence in every clean.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                Explore Other Divisions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}