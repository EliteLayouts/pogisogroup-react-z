import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Target, Eye, Heart, MapPin, CheckCircle, TrendingUp, Building2, Mail, Phone } from "lucide-react";
import Link from "next/link";

const milestones = [
  {
    year: "2009",
    title: "Foundation",
    description: "Pogiso Group was established with a vision to create a unified conglomerate serving multiple industries."
  },
  {
    year: "2012",
    title: "First Expansion",
    description: "Launched our first subsidiary divisions in cleaning and hygiene services."
  },
  {
    year: "2015",
    title: "Diversification",
    description: "Expanded into construction, security, and energy sectors."
  },
  {
    year: "2018",
    title: "National Reach",
    description: "Established operations across all 9 provinces of South Africa."
  },
  {
    year: "2021",
    title: "Digital Transformation",
    description: "Launched marketing and logistics divisions with enhanced digital capabilities."
  },
  {
    year: "2024",
    title: "Excellence Recognition",
    description: "Achieved Level 1 BEE certification and 100% Black Ownership status."
  }
];

const values = [
  {
    icon: Eye,
    title: "Our Vision",
    description: "To be South Africa's most trusted conglomerate, delivering excellence across all industries we serve while driving meaningful economic transformation."
  },
  {
    icon: Target,
    title: "Our Mission",
    description: "To provide world-class services through our specialized subsidiaries, creating value for clients, employees, and communities while maintaining the highest standards of quality and integrity."
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "Excellence, Integrity, Transformation, Innovation, and Customer-Centricity guide everything we do. We are committed to sustainable growth and positive impact."
  }
];

const provinces = [
  "Western Cape", "Eastern Cape", "Northern Cape", "Free State", 
  "KwaZulu-Natal", "North West", "Gauteng", "Mpumalanga", "Limpopo"
];

const beeBenefits = [
  "Level 1 BEE Contributor Status",
  "100% Black Ownership",
  "30% Black Women Ownership",
  "Skills Development Programs",
  "Enterprise Development Initiatives",
  "Socio-Economic Development Projects"
];

const whyChooseUs = [
  {
    title: "Integrated Service Excellence",
    description: "Eight specialized divisions working in harmony to deliver comprehensive solutions across all your business needs.",
    icon: Building2
  },
  {
    title: "Proven Track Record",
    description: "15+ years of successful project delivery with hundreds of satisfied clients across all sectors.",
    icon: TrendingUp
  },
  {
    title: "National Coverage",
    description: "Full operational capacity across all 9 provinces with local expertise and national standards.",
    icon: MapPin
  },
  {
    title: "Expert Team",
    description: "Over 1000 skilled professionals committed to delivering exceptional service quality.",
    icon: Users
  }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20">
              About Pogiso Group
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Our Story of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Excellence & Growth
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              From humble beginnings to becoming South Africa's premier conglomerate, 
              our journey reflects unwavering commitment to quality, transformation, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Led by visionaries committed to excellence and transformation
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-slate-100 to-slate-200 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-slate-300 mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-16 w-16 text-slate-600" />
                    </div>
                    <Badge className="bg-slate-800 text-white">Group CEO</Badge>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl">Tumi Madisakwane</CardTitle>
                    <p className="text-muted-foreground">Group Chief Executive Officer</p>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Tumi Madisakwane leads Pogiso Group with a vision for transformative growth and operational excellence. 
                      With over 20 years of executive leadership experience across multiple industries, Tumi has been instrumental 
                      in shaping the Group's strategic direction and expansion into new markets.
                    </p>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Under her leadership, Pogiso Group has achieved remarkable growth, expanding from a single service provider 
                      to a diversified conglomerate with eight specialized subsidiaries operating nationwide. Tumi is passionate about 
                      economic transformation and has championed numerous initiatives to empower previously disadvantaged communities.
                    </p>
                    <div className="flex gap-4">
                      <div className="text-sm">
                        <span className="font-medium">Focus:</span> Strategic Growth & Transformation
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Experience:</span> 20+ Years
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Values */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Our Guiding Principles
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The foundation of everything we do at Pogiso Group
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones that shaped our success story
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200"></div>
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-center mb-8 last:mb-0">
                  <div className="absolute left-8 w-4 h-4 bg-blue-600 rounded-full -translate-x-1/2"></div>
                  <div className="ml-20">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline" className="text-blue-600 border-blue-600">
                        {milestone.year}
                      </Badge>
                      <h3 className="text-xl font-semibold">{milestone.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* National Footprint */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              National Footprint
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Serving clients across all 9 provinces of South Africa
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardHeader className="text-center">
                <div className="mx-auto h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <MapPin className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Nationwide Coverage</CardTitle>
                <p className="text-muted-foreground">
                  Our operations span the entire country, ensuring consistent service delivery wherever you are
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {provinces.map((province, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>{province}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    Each province has dedicated teams and infrastructure to ensure rapid response and local expertise
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* BEE Status */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              BEE Certification & Transformation
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Committed to meaningful economic transformation in South Africa
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-2xl">Level 1 BEE Status</CardTitle>
                </div>
                <p className="text-muted-foreground">
                  Pogiso Group is proud to be a Level 1 BEE contributor, demonstrating our commitment 
                  to economic transformation and empowerment.
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {beeBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-8 bg-gradient-to-br from-slate-100 to-slate-200">
              <CardHeader>
                <CardTitle className="text-2xl">100% Black Owned</CardTitle>
                <p className="text-muted-foreground">
                  Our ownership structure reflects our commitment to true economic transformation.
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-slate-900 mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">Black Ownership</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-slate-900 mb-1">30%</div>
                    <div className="text-sm text-muted-foreground">Black Women Ownership</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-slate-900 mb-1">135%</div>
                    <div className="text-sm text-muted-foreground">BEE Procurement Recognition</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Why Companies Choose Pogiso Group
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The trusted partner for businesses seeking excellence and reliability
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((reason, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <reason.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/contact">
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800">
                Partner With Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}