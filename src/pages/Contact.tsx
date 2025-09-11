import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Send, 
  Clock, 
  Globe, 
  Users, 
  Star,
  CheckCircle,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube
} from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  useEffect(() => {
    // Force scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      value: "prolearntraininginstitute@gmail.com",
      action: "Send Email",
      description: "Get help with your account, courses, or technical issues",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Phone,
      title: "Phone Support",
      value: "+91 98765 43210",
      action: "Call Now",
      description: "Speak directly with our support team",
      color: "from-green-500 to-green-600",
    },
    {
      icon: MapPin,
      title: "Visit Our Office",
      value: "Tech Park, Sector 5, Gurgaon, Haryana 122001",
      action: "Get Directions",
      description: "Come visit us for in-person assistance",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const faqs = [
    {
      question: "How quickly do you respond to inquiries?",
      answer: "We typically respond to all inquiries within 24 hours during business days."
    },
    {
      question: "Do you offer phone support?",
      answer: "Yes, we provide phone support during business hours (9 AM - 6 PM, Mon-Fri)."
    },
    {
      question: "Can I visit your office?",
      answer: "Absolutely! We welcome visitors during business hours. Please call ahead to schedule an appointment."
    },
    {
      question: "What's the best way to get technical support?",
      answer: "For technical issues, email support is usually the fastest way to get help with detailed troubleshooting."
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Basic form validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email address",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative py-6 pt-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1000ms'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2000ms'}}></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-2">
              <Badge className="mb-2 bg-blue-100 text-blue-700 hover:bg-blue-200">
                <MessageSquare className="w-4 h-4 mr-2" />
                We're Here to Help
              </Badge>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 leading-tight">
                Get in 
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"> Touch</span>
              </h1>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Have questions about our courses, need technical support, or want to learn more about Prolearn? 
                Our team is ready to help you succeed in your learning journey.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form Section */}
        <section className="py-4 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-4">
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-foreground mb-2">Contact Information</h2>
                  <p className="text-sm text-muted-foreground">
                    Choose the best way to reach us based on your needs
                  </p>
                </div>
                
                {contactInfo.map((info, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className={`bg-gradient-to-r ${info.color} p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-foreground mb-3 text-sm">{info.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{info.description}</p>
                          <p className="font-medium text-foreground mb-3 text-sm">{info.value}</p>
                          <Button variant="link" size="sm" className="p-0 h-auto text-blue-600 hover:text-blue-700 group-hover:translate-x-1 transition-transform text-sm">
                            {info.action}
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-5">
                    <div className="mb-4">
                      <h2 className="text-xl font-bold text-foreground mb-2">Send us a Message</h2>
                      <p className="text-sm text-muted-foreground">
                        Fill out the form below and we'll get back to you within 24 hours
                      </p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-3">
                            Your Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                            className="w-full h-10 border-2 focus:border-blue-500 transition-colors text-sm"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-3">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="john@example.com"
                            className="w-full h-10 border-2 focus:border-blue-500 transition-colors text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-3">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="How can we help you?"
                          className="w-full h-10 border-2 focus:border-blue-500 transition-colors text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-3">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Tell us more about your inquiry..."
                          rows={5}
                          className="w-full border-2 focus:border-blue-500 transition-colors resize-none text-sm"
                        />
                      </div>
                      <Button 
                        type="submit" 
                        variant="default" 
                        size="lg" 
                        className="w-full h-10 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold group text-sm"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Quick answers to common questions about contacting us
              </p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground mb-3 text-lg">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-6">Why Choose Prolearn Support?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <div className="bg-green-100 p-4 rounded-full mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">24/7 Response</h3>
                  <p className="text-muted-foreground text-center">We respond to all inquiries within 24 hours</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-blue-100 p-4 rounded-full mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Expert Support</h3>
                  <p className="text-muted-foreground text-center">Our team consists of education and tech experts</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-purple-100 p-4 rounded-full mb-4">
                    <Star className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">5-Star Service</h3>
                  <p className="text-muted-foreground text-center">Rated excellent by thousands of students</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
