import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Building2, CheckCircle, ArrowRight, Send, MessageSquare, Clock } from "lucide-react";
import { slugify } from "@/lib/slug";

const subsidiaries = [
  {
    name: "Pogiso Cleaning",
    phone: "+27 12 345 6789",
    email: "cleaning@pogisogroup.co.za",
    icon: Building2,
    color: "blue"
  },
  {
    name: "Pogiso Hygiene",
    phone: "+27 12 345 6790",
    email: "hygiene@pogisogroup.co.za",
    icon: Building2,
    color: "cyan"
  },
  {
    name: "Pogiso Construction",
    phone: "+27 12 345 6791",
    email: "construction@pogisogroup.co.za",
    icon: Building2,
    color: "orange"
  },
  {
    name: "Pogiso Security",
    phone: "+27 12 345 6792",
    email: "security@pogisogroup.co.za",
    icon: Building2,
    color: "red"
  },
  {
    name: "Pogiso Energy",
    phone: "+27 12 345 6793",
    email: "energy@pogisogroup.co.za",
    icon: Building2,
    color: "yellow"
  },
  {
    name: "Pogiso Marketing",
    phone: "+27 12 345 6794",
    email: "marketing@pogisogroup.co.za",
    icon: Building2,
    color: "purple"
  },
  {
    name: "Pogiso's Tours",
    phone: "+27 12 345 6795",
    email: "tours@pogisogroup.co.za",
    icon: Building2,
    color: "indigo"
  },
  {
    name: "Pogiso Logistics",
    phone: "+27 12 345 6796",
    email: "logistics@pogisogroup.co.za",
    icon: Building2,
    color: "green"
  }
];

const contactInfo = [
  {
    icon: Phone,
    title: "General Inquiries",
    details: "+27 12 345 6789",
    description: "Monday to Friday, 8:00 AM - 5:00 PM"
  },
  {
    icon: Mail,
    title: "Email Support",
    details: "info@pogisogroup.co.za",
    description: "We respond within 24 hours"
  },
  {
    icon: MapPin,
    title: "Head Office",
    details: "Johannesburg, South Africa",
    description: "Operating across all 9 provinces"
  }
];

const inquiryTypes = [
  "General Inquiry",
  "Business Partnership",
  "Service Request",
  "Career Opportunities",
  "Media Inquiry",
  "Investor Relations",
  "Complaint",
  "Feedback"
];

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20">
              Contact Pogiso Group
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Get in Touch
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                We're Here to Help
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Connect with our expert team across all divisions. Whether you need general information 
              or specific services, we're ready to assist with your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              How to Reach Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to connect with our team
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <contact.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{contact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-blue-600 mb-2">{contact.details}</p>
                  <p className="text-sm text-muted-foreground">{contact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subsidiary Contacts */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Division-Specific Contacts
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Reach out directly to our specialized divisions for specific services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subsidiaries.map((subsidiary, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <div className={`mx-auto h-12 w-12 rounded-full bg-${subsidiary.color}-100 flex items-center justify-center mb-4`}>
                    <subsidiary.icon className={`h-6 w-6 text-${subsidiary.color}-600`} />
                  </div>
                  <CardTitle className="text-lg">{subsidiary.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{subsidiary.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="truncate">{subsidiary.email}</span>
                  </div>
                  <Link href={`/${slugify(subsidiary.name)}`}> 
                    <Button variant="outline" size="sm" className="w-full mt-2">
                      Visit Division
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Send Us a Message
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium">First Name *</label>
                    <div className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"></div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Last Name *</label>
                    <div className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium">Email Address *</label>
                    <div className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"></div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Phone Number</label>
                    <div className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"></div>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium">Company Name</label>
                  <div className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"></div>
                </div>
                
                <div>
                  <label className="text-sm font-medium">Inquiry Type *</label>
                  <div className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"></div>
                </div>
                
                <div>
                  <label className="text-sm font-medium">Preferred Division</label>
                  <div className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"></div>
                </div>
                
                <div>
                  <label className="text-sm font-medium">Message *</label>
                  <div className="mt-1 h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"></div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded border border-input"></div>
                  <label className="text-sm text-muted-foreground">
                    I agree to be contacted by Pogiso Group regarding my inquiry
                  </label>
                </div>
                
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </div>
            </div>
            
            <div className="space-y-8">
              {/* Quick Contact Cards */}
              <Card className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-blue-600" />
                    Quick Contact Options
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Emergency Support</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      For urgent security or facility issues
                    </p>
                    <p className="font-semibold text-blue-600">+27 12 345 6792 (Security)</p>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Business Inquiries</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      For partnerships and business opportunities
                    </p>
                    <p className="font-semibold text-green-600">business@pogisogroup.co.za</p>
                  </div>
                  
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Media Inquiries</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      For press and media related questions
                    </p>
                    <p className="font-semibold text-purple-600">media@pogisogroup.co.za</p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Response Times */}
              <Card className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    Response Times
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium">Email Inquiries</p>
                      <p className="text-sm text-muted-foreground">Within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium">Phone Calls</p>
                      <p className="text-sm text-muted-foreground">Immediate during business hours</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium">Service Requests</p>
                      <p className="text-sm text-muted-foreground">Within 48 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Find Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our headquarters and service locations across South Africa
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  Head Office
                </CardTitle>
                <CardDescription>
                  Johannesburg, Gauteng Province
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Address</h4>
                  <p className="text-muted-foreground">
                    Pogiso Group Headquarters<br />
                    123 Business Avenue<br />
                    Johannesburg, 2000<br />
                    South Africa
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Operating Hours</h4>
                  <p className="text-muted-foreground">
                    Monday - Friday: 8:00 AM - 5:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Service Coverage</h4>
                  <p className="text-muted-foreground">
                    We provide services across all 9 provinces of South Africa with local teams 
                    and infrastructure to ensure prompt service delivery.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-96 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-600 font-medium">Interactive Map</p>
                  <p className="text-sm text-slate-500 mt-2">
                    Google Maps integration showing our locations
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Connect with our team today and discover how Pogiso Group can help your business 
            thrive with our comprehensive range of services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-50">
              Contact Sales Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Request Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
