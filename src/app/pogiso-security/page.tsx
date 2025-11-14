import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Camera, Lock, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, Award, Star, AlertTriangle } from "lucide-react";

const services = [
  {
    title: "Guarding Services",
    description: "Professional security personnel providing comprehensive protection for your assets and people",
    features: [
      "Armed and unarmed guards",
      "Mobile patrol units",
      "VIP protection services",
      "Event security",
      "Access point control",
      "Emergency response teams"
    ],
    icon: Users,
    color: "red"
  },
  {
    title: "Access Control",
    description: "Advanced access management systems ensuring secure entry and exit points",
    features: [
      "Biometric systems",
      "Card access control",
      "Vehicle access management",
      "Visitor management systems",
      "Turnstile solutions",
      "Integration with existing systems"
    ],
    icon: Lock,
    color: "blue"
  },
  {
    title: "CCTV & Monitoring",
    description: "State-of-the-art surveillance systems with 24/7 monitoring capabilities",
    features: [
      "HD camera installation",
      "Remote monitoring services",
      "Video analytics",
      "Cloud storage solutions",
      "Mobile app access",
      "System maintenance"
    ],
    icon: Camera,
    color: "purple"
  },
  {
    title: "Risk Management",
    description: "Comprehensive risk assessment and management solutions for all security needs",
    features: [
      "Security audits",
      "Risk assessments",
      "Security planning",
      "Crisis management",
      "Incident response planning",
      "Security consulting"
    ],
    icon: AlertTriangle,
    color: "orange"
  }
];

const benefits = [
  {
    icon: Award,
    title: "PSIRA Registered",
    description: "Fully registered with Private Security Industry Regulatory Authority"
  },
  {
    icon: Users,
    title: "Trained Professionals",
    description: "Highly trained and experienced security personnel"
  },
  {
    icon: Clock,
    title: "24/7 Protection",
    description: "Round-the-clock security monitoring and response"
  },
  {
    icon: Star,
    title: "Advanced Technology",
    description: "Latest security technology and equipment"
  }
];

const serviceAreas = [
  "Commercial Properties", "Industrial Facilities", "Retail Centers", "Residential Complexes",
  "Government Buildings", "Healthcare Facilities", "Educational Institutions", "Event Venues",
  "Construction Sites", "Warehouses", "Financial Institutions", "Transport Hubs"
];

export default function PogisoSecurityPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20">
              Pogiso Security Division
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Comprehensive Security
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                Protection Guaranteed
              </span>
            </h1>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Delivering world-class security solutions across guarding, surveillance, and risk management. 
              Your trusted partner for complete peace of mind and asset protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-900 hover:bg-red-50">
                Security Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-900">
                View Solutions
              </Button>
            </div>
          </div>
        </div>
        
        {/* Domain Badge */}
        <div className="text-center mt-8">
          <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
            Visit our dedicated site: pogisosecurity.co.za
          </Badge>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Our Security Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive security solutions tailored to your specific protection needs
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
              Why Choose Pogiso Security?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The trusted choice for professional security services and protection
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto h-16 w-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <benefit.icon className="h-8 w-8 text-red-600" />
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
              Industries We Protect
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized security solutions for diverse sectors and facility types
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardHeader className="text-center">
                <div className="mx-auto h-20 w-20 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <Shield className="h-10 w-10 text-red-600" />
                </div>
                <CardTitle className="text-2xl">Comprehensive Protection</CardTitle>
                <p className="text-muted-foreground">
                  We provide specialized security services for all types of facilities
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
                Secure Your Assets Today
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Ready to enhance your security posture? Contact our team today 
                for a comprehensive security assessment and customized protection plan.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Emergency Hotline</h3>
                    <p className="text-muted-foreground">+27 12 345 6792</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">security@pogisogroup.co.za</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Service Areas</h3>
                    <p className="text-muted-foreground">All 9 Provinces, South Africa</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="https://pogisosecurity.co.za" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    Visit Our Dedicated Website
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <Card className="p-8 bg-gradient-to-br from-red-50 to-red-100">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Security Assessment</CardTitle>
                <p className="text-muted-foreground">
                  Get a comprehensive security evaluation for your facility
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
                  <label className="text-sm font-medium">Security Needs</label>
                  <div className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"></div>
                </div>
                <div>
                  <label className="text-sm font-medium">Message</label>
                  <div className="mt-1 h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"></div>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  Submit Request
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900 to-red-800 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Protect What Matters Most
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust Pogiso Security for their 
            professional security needs. Experience peace of mind with every service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-red-900 hover:bg-red-50">
                Schedule Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-900">
                Explore Other Divisions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}