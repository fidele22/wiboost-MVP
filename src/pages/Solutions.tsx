import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Wifi, Router, Shield, Zap, Target, Home, Building, 
  CheckCircle, ArrowLeft, Star, TrendingUp, Users, 
  Smartphone, Laptop, Tv, Clock, Signal
} from "lucide-react";
import { Link } from "react-router-dom";

const Solutions = () => {
  const productCategories = [
    {
      id: "home",
      name: "Home Solutions",
      description: "Perfect for residential use",
      icon: Home,
      products: [
        {
          name: "Wi-Fi Extender Basic",
          price: "$49",
          coverage: "Up to 1,500 sq ft",
          speeds: "Up to 300 Mbps",
          devices: "15+ devices",
          features: ["Easy setup", "WPA3 security", "Ethernet port", "LED indicators"],
          bestFor: "Small homes, apartments",
          rating: 4.5
        },
        {
          name: "Wi-Fi Extender Pro",
          price: "$89",
          coverage: "Up to 3,000 sq ft",
          speeds: "Up to 1200 Mbps",
          devices: "30+ devices",
          features: ["Dual-band", "MU-MIMO", "Beamforming", "Smart roaming"],
          bestFor: "Medium to large homes",
          rating: 4.8,
          popular: true
        },
        {
          name: "Mesh Network System",
          price: "$149",
          coverage: "Up to 5,000 sq ft",
          speeds: "Up to 2400 Mbps",
          devices: "50+ devices",
          features: ["Tri-band", "AI optimization", "Parental controls", "Guest network"],
          bestFor: "Large homes, smart homes",
          rating: 4.9
        }
      ]
    },
    {
      id: "business",
      name: "Business Solutions",
      description: "Enterprise-grade performance",
      icon: Building,
      products: [
        {
          name: "Enterprise Wi-Fi System",
          price: "$299",
          coverage: "Up to 10,000 sq ft",
          speeds: "Up to 6000 Mbps",
          devices: "100+ devices",
          features: ["Wi-Fi 6E", "Network analytics", "Cloud management", "24/7 support"],
          bestFor: "Small offices",
          rating: 4.7
        },
        {
          name: "Commercial Mesh Network",
          price: "$599",
          coverage: "Up to 25,000 sq ft",
          speeds: "Up to 9600 Mbps",
          devices: "200+ devices",
          features: ["Scalable architecture", "Advanced security", "Load balancing", "VPN support"],
          bestFor: "Medium businesses",
          rating: 4.8
        }
      ]
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Instant Setup",
      description: "Get connected in under 5 minutes with our guided setup app"
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "WPA3 encryption and automatic security updates"
    },
    {
      icon: Target,
      title: "Smart Placement",
      description: "AI-powered recommendations for optimal extender positioning"
    },
    {
      icon: TrendingUp,
      title: "Performance Monitoring",
      description: "Real-time analytics and automatic optimization"
    }
  ];

  const comparisonData = [
    { feature: "Coverage Area", basic: "1,500 sq ft", pro: "3,000 sq ft", mesh: "5,000 sq ft" },
    { feature: "Max Speed", basic: "300 Mbps", pro: "1200 Mbps", mesh: "2400 Mbps" },
    { feature: "Concurrent Devices", basic: "15", pro: "30", mesh: "50+" },
    { feature: "Dual Band", basic: "❌", pro: "✅", mesh: "✅" },
    { feature: "Tri Band", basic: "❌", pro: "❌", mesh: "✅" },
    { feature: "MU-MIMO", basic: "❌", pro: "✅", mesh: "✅" },
    { feature: "Beamforming", basic: "❌", pro: "✅", mesh: "✅" },
    { feature: "Smart Roaming", basic: "❌", pro: "✅", mesh: "✅" },
    { feature: "Parental Controls", basic: "❌", pro: "Basic", mesh: "Advanced" },
    { feature: "Guest Network", basic: "❌", pro: "✅", mesh: "✅" },
    { feature: "Mobile App", basic: "Basic", pro: "Advanced", mesh: "Premium" },
    { feature: "Cloud Management", basic: "❌", pro: "❌", mesh: "✅" },
    { feature: "Warranty", basic: "1 year", pro: "2 years", mesh: "3 years" }
  ];

  const useCases = [
    {
      title: "Remote Work Setup",
      description: "Ensure stable connectivity for video calls and file uploads",
      icon: Laptop,
      requirements: ["Low latency", "Stable connection", "Upload optimization"],
      recommendation: "Wi-Fi Extender Pro"
    },
    {
      title: "Smart Home Integration",
      description: "Connect multiple IoT devices without performance degradation",
      icon: Home,
      requirements: ["High device capacity", "Network segmentation", "Always-on connectivity"],
      recommendation: "Mesh Network System"
    },
    {
      title: "Streaming & Gaming",
      description: "Eliminate buffering and reduce lag for entertainment",
      icon: Tv,
      requirements: ["High bandwidth", "QoS prioritization", "Low latency"],
      recommendation: "Wi-Fi Extender Pro"
    },
    {
      title: "Large Family Home",
      description: "Support multiple users across different rooms simultaneously",
      icon: Users,
      requirements: ["Wide coverage", "Device prioritization", "Parental controls"],
      recommendation: "Mesh Network System"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" asChild>
                <Link to="/">
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </Button>
              <div>
                <h1 className="text-2xl font-bold">Wi-Fi Solutions</h1>
                <p className="text-muted-foreground">Find the perfect Wi-Fi extender for your needs</p>
              </div>
            </div>
            <Button asChild>
              <Link to="/analyzer">Test Your Network</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your Perfect Wi-Fi Solution
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            From basic coverage extension to advanced mesh networks, we have the right solution 
            for every home and business need.
          </p>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <feature.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Product Categories */}
        <Tabs defaultValue="home" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            {productCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                <category.icon className="h-4 w-4" />
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {productCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">{category.name}</h3>
                <p className="text-lg text-muted-foreground">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.products.map((product, index) => (
                  <Card key={index} className={`relative ${product.popular ? 'border-primary shadow-lg' : ''}`}>
                    {product.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                        Most Popular
                      </Badge>
                    )}
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-xl">{product.name}</CardTitle>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{product.rating}</span>
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-primary">{product.price}</div>
                      <CardDescription className="text-base">{product.bestFor}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Coverage:</span>
                          <p className="font-semibold">{product.coverage}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Max Speed:</span>
                          <p className="font-semibold">{product.speeds}</p>
                        </div>
                        <div className="col-span-2">
                          <span className="text-muted-foreground">Devices:</span>
                          <p className="font-semibold">{product.devices}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {product.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button className="w-full" variant={product.popular ? "default" : "outline"}>
                        Choose This Solution
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Use Cases Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Find Your Perfect Use Case</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Different scenarios require different solutions. Find the right fit for your specific needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="p-6">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <useCase.icon className="h-8 w-8 text-primary" />
                    <CardTitle className="text-xl">{useCase.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {useCase.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-primary" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2">
                    <Badge variant="secondary" className="text-sm">
                      Recommended: {useCase.recommendation}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="py-16 bg-muted/30 -mx-4 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Detailed Feature Comparison</h3>
              <p className="text-lg text-muted-foreground">
                Compare all features side-by-side to make the best decision
              </p>
            </div>
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b">
                      <tr>
                        <th className="text-left p-4 font-semibold">Feature</th>
                        <th className="text-center p-4 font-semibold">Basic</th>
                        <th className="text-center p-4 font-semibold bg-primary/5">Pro</th>
                        <th className="text-center p-4 font-semibold">Mesh</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, index) => (
                        <tr key={index} className="border-b last:border-b-0">
                          <td className="p-4 font-medium">{row.feature}</td>
                          <td className="p-4 text-center text-sm">{row.basic}</td>
                          <td className="p-4 text-center text-sm bg-primary/5">{row.pro}</td>
                          <td className="p-4 text-center text-sm">{row.mesh}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16">
          <h3 className="text-3xl font-bold mb-6">Ready to Boost Your Wi-Fi?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Still not sure which solution is right for you? Start with our network analyzer 
            to get personalized recommendations based on your current setup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/analyzer">
                <Signal className="h-4 w-4 mr-2" />
                Analyze My Network
              </Link>
            </Button>
            <Button size="lg" variant="outline">
              Contact Sales
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Solutions;