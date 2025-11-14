import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plane, Car, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, Award, Star, Map } from "lucide-react";

const services = [
  {
    title: "Shuttle Transport",
    description: "Reliable shuttle services for corporate clients and special events",
    features: [
      "Airport transfers",
      "Hotel shuttles",
      "Event transportation",
      "Corporate shuttles",
      "Group transport",
      "Scheduled services"
    ],
    icon: Car,
    color: "blue"
  },
  {
    title: "Corporate Travel",
    description: "Professional travel solutions for business and corporate needs",
    features: [
      "Business travel",
      "Conference transport",
      "Executive transport",
      "Team travel",
      "VIP services",
      "Travel coordination"
    ],
    icon: Users,
    color: "green"
  },
  {
    title: "Luxury Tours",
    description: "Premium tour experiences showcasing the best of South Africa",
    features: [
      "City tours",
      "Cultural experiences",
      "Wildlife tours",
      "Wine tours",
      "Custom itineraries",
      "Luxury vehicles"
    ],
    icon: Plane,
    color: "purple"
  }
];

const fleet = [
  {
    type: "Luxury Sedans",
    capacity: "4 passengers",
    features: ["Leather seats", "Climate control", "WiFi", "Refreshments"]
  },
  {
    type: "SUVs",
    capacity: "6-7 passengers",
    features: ["Spacious interior", "Luggage space", "Premium sound", "Safety features"]
  },
  {
    type: "Mini Buses",
    capacity: "12-16 passengers",
    features: ["Group comfort", "Luggage capacity", "PA system", "Entertainment"]
  },
  {
    type: "Luxury Coaches",
    capacity: "20-40 passengers",
    features: ["Premium seating", "Restroom", "Kitchenette", "Entertainment system"]
  }
];

const benefits = [
  {
    icon: Award,
    title: "Professional Service",
    description: "Experienced drivers and tour guides"
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Dedicated to exceptional customer experience"
  },
  {
    icon: Clock,
    title: "Punctual & Reliable",
    description: "Always on time with dependable service"
  },
  {
    icon: Star,
    title: "Luxury Fleet",
    description: "Well-maintained premium vehicles"
  }
];

export default function PogisosToursPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 text-white py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20">
              Pogiso's Tours Division
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Premium Transport
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Journeys That Inspire
              </span>
            </h1>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Delivering world-class transport and tour services across shuttle, corporate travel, and luxury experiences. 
              Your trusted partner for comfortable and memorable journeys.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-indigo-900 hover:bg-indigo-50">
                Book Your Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-900">
                View Fleet
              </Button>
            </div>
          </div>
        </div>
        
        {/* Domain Badge */}
        <div className="text-center mt-8">
          <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
            Visit our dedicated site: pogisostours.co.za
          </Badge>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Our Transport Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive transport solutions tailored to your travel needs
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

      {/* Fleet Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Our Premium Fleet
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Modern, well-maintained vehicles for comfortable and safe journeys
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fleet.map((vehicle, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                    <Car className="h-8 w-8 text-indigo-600" />
                  </div>
                  <CardTitle className="text-lg">{vehicle.type}</CardTitle>
                  <Badge variant="outline">{vehicle.capacity}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {vehicle.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        <span>{feature}</span>
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
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Why Choose Pogiso's Tours?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The trusted choice for premium transport and tour services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                    <benefit.icon className="h-8 w-8 text-indigo-600" />
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
                Start Your Journey
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Ready to experience premium transport services? Contact our team today 
                for booking and customized travel solutions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+27 12 345 6795</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">tours@pogisogroup.co.za</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Service Areas</h3>
                    <p className="text-muted-foreground">All 9 Provinces, South Africa</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="https://pogisostours.co.za" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                    Visit Our Dedicated Website
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <Card className="p-8 bg-gradient-to-br from-indigo-50 to-indigo-100">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Book Your Journey</CardTitle>
                <p className="text-muted-foreground">
                  Get a quote for your transport or tour needs
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Full Name</label>
                    <div className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"></div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Contact Number</label>
                    <div className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"></div>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Email Address</label>
                  <div className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"></div>
                </div>
                <div>
                  <label className="text-sm font-medium">Service Type</label>
                  <div className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"></div>
                </div>
                <div>
                  <label className="text-sm font-medium">Travel Details</label>
                  <div className="mt-1 h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"></div>
                </div>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                  Submit Booking Request
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 to-indigo-800 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Travel in Comfort Today
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust Pogiso's Tours for their 
            transport and travel needs. Experience excellence in every journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-indigo-900 hover:bg-indigo-50">
                Book Your Transport
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-900">
                Explore Other Divisions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}