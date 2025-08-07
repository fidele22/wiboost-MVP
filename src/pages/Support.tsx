import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  ArrowLeft, Search, MessageCircle, Phone, Mail, Clock,
  HelpCircle, Wrench, BookOpen, Video, Download,
  CheckCircle, AlertCircle, Router, Wifi, Shield
} from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Support = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const supportCategories = [
    { id: "all", name: "All Topics", count: 24 },
    { id: "setup", name: "Setup & Installation", count: 8 },
    { id: "troubleshooting", name: "Troubleshooting", count: 12 },
    { id: "features", name: "Features & Settings", count: 6 },
    { id: "technical", name: "Technical Issues", count: 5 }
  ];

  const faqData = [
    {
      category: "setup",
      question: "How do I set up my Wi-Fi extender for the first time?",
      answer: "Setting up your Wi-Fi extender is simple: 1) Plug in the extender halfway between your router and the dead zone area. 2) Wait for the power LED to turn solid green. 3) Connect to the extender's setup network from your device. 4) Open your web browser and follow the setup wizard. 5) Choose your main network and enter the password. The entire process takes about 5 minutes."
    },
    {
      category: "setup",
      question: "Where should I place my Wi-Fi extender for optimal performance?",
      answer: "For best results, place your extender: 1) Halfway between your router and the area with poor coverage. 2) In an open area, not inside cabinets or behind furniture. 3) Away from interference sources like microwaves, baby monitors, or metal objects. 4) At a similar height to your router. 5) Use our mobile app's placement assistant for personalized recommendations."
    },
    {
      category: "troubleshooting",
      question: "My extender shows connected but I have no internet access. What should I do?",
      answer: "This usually indicates a connection issue between the extender and your main router: 1) Check that your main router has internet connectivity. 2) Move the extender closer to the router temporarily. 3) Restart both the router and extender. 4) Reset the extender and reconfigure it. 5) Check for interference from other devices. If the problem persists, contact our support team."
    },
    {
      category: "troubleshooting",
      question: "Why are my internet speeds slower when connected to the extender?",
      answer: "Some speed reduction is normal with extenders, but here's how to minimize it: 1) Ensure optimal placement (not too far from the router). 2) Use the 5 GHz band when possible for better speeds. 3) Update your extender's firmware. 4) Check for interference from other devices. 5) Consider upgrading to a mesh system for better performance. Our Pro models maintain up to 80% of original speeds."
    },
    {
      category: "features",
      question: "How do I enable guest network on my Wi-Fi extender?",
      answer: "To set up a guest network: 1) Connect to your extender's admin panel via web browser. 2) Navigate to Wireless Settings > Guest Network. 3) Enable the guest network feature. 4) Set a network name (SSID) and password. 5) Configure access restrictions if needed. 6) Save the settings. Guest networks provide secure access for visitors without sharing your main network password."
    },
    {
      category: "features",
      question: "Can I use multiple extenders with the same router?",
      answer: "Yes, you can use multiple extenders to cover larger areas: 1) Set up each extender individually. 2) Space them strategically to avoid overlap. 3) Use different channels if possible to reduce interference. 4) Monitor performance to ensure optimal coverage. For very large homes, consider our Mesh Network System which is specifically designed for seamless multi-device coverage."
    },
    {
      category: "technical",
      question: "How do I update my extender's firmware?",
      answer: "Keep your extender updated for best performance: 1) Connect to the extender's admin panel. 2) Go to Administration > Firmware Update. 3) Check current version and available updates. 4) Download and install updates (don't power off during update). 5) Many newer models support automatic updates. Check our website's support section for the latest firmware versions for your model."
    },
    {
      category: "technical",
      question: "What do the different LED indicators mean?",
      answer: "LED indicators show your extender's status: Power LED - Solid green: Ready, Blinking green: Starting up, Red: Error. Wi-Fi LED - Solid blue: Good connection to router, Blinking blue: Connecting, Red: Poor connection. Ethernet LED - Solid green: Active connection, Off: No connection. Refer to your model's manual for specific indicator meanings as they may vary."
    }
  ];

  const contactOptions = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageCircle,
      availability: "24/7",
      responseTime: "< 2 minutes",
      action: "Start Chat"
    },
    {
      title: "Phone Support",
      description: "Speak directly with a technical expert",
      icon: Phone,
      availability: "Mon-Fri 8AM-8PM EST",
      responseTime: "< 5 minutes",
      action: "Call Now"
    },
    {
      title: "Email Support",
      description: "Send detailed questions and get comprehensive answers",
      icon: Mail,
      availability: "24/7",
      responseTime: "< 4 hours",
      action: "Send Email"
    }
  ];

  const resources = [
    {
      title: "Quick Start Guide",
      description: "Step-by-step setup instructions",
      icon: BookOpen,
      type: "PDF",
      size: "2.3 MB"
    },
    {
      title: "Video Tutorials",
      description: "Watch setup and troubleshooting videos",
      icon: Video,
      type: "Video",
      duration: "15 min"
    },
    {
      title: "Mobile Setup App",
      description: "Download our app for easy configuration",
      icon: Download,
      type: "App",
      platforms: "iOS & Android"
    },
    {
      title: "Advanced Configuration Guide",
      description: "In-depth settings and optimization",
      icon: Wrench,
      type: "PDF",
      size: "5.1 MB"
    }
  ];

  const handleContactSubmit = () => {
    toast.success("Support request submitted! We'll get back to you within 4 hours.");
  };

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
                <h1 className="text-2xl font-bold">Support Center</h1>
                <p className="text-muted-foreground">Get help with your Wi-Fi extender</p>
              </div>
            </div>
            <Button asChild>
              <Link to="/analyzer">Network Analyzer</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">How can we help you today?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Find answers to common questions, download resources, or contact our expert support team
          </p>
          
          {/* Search */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search for help articles, setup guides, troubleshooting..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-6 text-lg"
              />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <option.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-lg">{option.title}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {option.availability}
                  </div>
                  <Badge variant="secondary">Response: {option.responseTime}</Badge>
                  <Button className="w-full mt-4">{option.action}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Main Content */}
        <Tabs defaultValue="faq" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          {/* FAQ Tab */}
          <TabsContent value="faq" className="space-y-8">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Category Filter */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Categories</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {supportCategories.map((category) => (
                      <Button
                        key={category.id}
                        variant={selectedCategory === category.id ? "default" : "ghost"}
                        className="w-full justify-between"
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        {category.name}
                        <Badge variant="secondary">{category.count}</Badge>
                      </Button>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* FAQ Content */}
              <div className="lg:col-span-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                    <CardDescription>
                      {filteredFAQs.length} questions found
                      {searchQuery && ` for "${searchQuery}"`}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {filteredFAQs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                    
                    {filteredFAQs.length === 0 && (
                      <div className="text-center py-12">
                        <HelpCircle className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                        <h3 className="text-lg font-semibold mb-2">No results found</h3>
                        <p className="text-muted-foreground mb-4">
                          Try adjusting your search terms or browse different categories
                        </p>
                        <Button variant="outline" onClick={() => setSearchQuery("")}>
                          Clear Search
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {resources.map((resource, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <resource.icon className="h-8 w-8 text-primary" />
                      <CardTitle className="text-xl">{resource.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <Badge variant="outline">{resource.type}</Badge>
                      {resource.size && <span>Size: {resource.size}</span>}
                      {resource.duration && <span>Duration: {resource.duration}</span>}
                      {resource.platforms && <span>{resource.platforms}</span>}
                    </div>
                    <Button className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Download / View
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Resources */}
            <Card>
              <CardHeader>
                <CardTitle>Additional Resources</CardTitle>
                <CardDescription>
                  More tools and information to help you get the most out of your Wi-Fi extender
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Router className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">Network Analyzer</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Test your current network performance and get optimization recommendations
                    </p>
                    <Button variant="outline" asChild>
                      <Link to="/analyzer">Try Analyzer</Link>
                    </Button>
                  </div>
                  <div className="text-center">
                    <Wifi className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">Coverage Calculator</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Calculate how many extenders you need for your home size
                    </p>
                    <Button variant="outline">Calculate Coverage</Button>
                  </div>
                  <div className="text-center">
                    <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">Security Checker</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Verify your network security settings and get recommendations
                    </p>
                    <Button variant="outline">Check Security</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>
                    Can't find what you're looking for? Our support team is here to help.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input placeholder="Email Address" type="email" />
                  <Input placeholder="Subject" />
                  <Textarea 
                    placeholder="Describe your issue or question in detail..."
                    rows={6}
                  />
                  <Button className="w-full" onClick={handleContactSubmit}>
                    Send Message
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Get in Touch</CardTitle>
                    <CardDescription>
                      Multiple ways to reach our support team
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold">Phone Support</p>
                        <p className="text-sm text-muted-foreground">1-800-WIFI-PRO (1-800-943-4776)</p>
                        <p className="text-xs text-muted-foreground">Mon-Fri 8AM-8PM EST</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold">Email Support</p>
                        <p className="text-sm text-muted-foreground">support@wifiextenderpro.com</p>
                        <p className="text-xs text-muted-foreground">Response within 4 hours</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MessageCircle className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold">Live Chat</p>
                        <p className="text-sm text-muted-foreground">Available 24/7</p>
                        <p className="text-xs text-muted-foreground">Average response time: 2 minutes</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Before You Contact Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Have your model number ready</p>
                          <p className="text-sm text-muted-foreground">Usually found on the device label</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Try our Network Analyzer</p>
                          <p className="text-sm text-muted-foreground">May identify and solve your issue automatically</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Check the FAQ section</p>
                          <p className="text-sm text-muted-foreground">Most common issues are covered there</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Support;