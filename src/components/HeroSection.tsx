import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, Award, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Users, value: "10,000+", label: "Active Learners" },
    { icon: BookOpen, value: "500+", label: "Expert Courses" },
    { icon: Award, value: "95%", label: "Success Rate" },
  ];

  return (
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.svg')",
        }}
      ></div>
      
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        {/* Decorative Learning Image */}
        <div className="absolute top-1/2 right-20 transform -translate-y-1/2 opacity-20 animate-float">
          <img 
            src="/hero-decoration.svg" 
            alt="Learning decoration" 
            className="w-32 h-32 lg:w-40 lg:h-40"
          />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary-light/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
            <span className="text-sm text-muted-foreground">New courses added weekly</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Learn from the
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Subject Matter Experts
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            Connect with subject matter experts and academics in cutting-edge fields. 
            Gain practical knowledge through hands-on demonstrations and real-world exercises.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="hero" size="lg" className="group">
              Start Learning Today
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`transition-all duration-700 delay-${index * 200} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-gradient-primary p-3 rounded-lg">
                    <stat.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;