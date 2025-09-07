import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Globe, Monitor, Award, Users, Clock } from "lucide-react";

const ParticipantSection = () => {
  const formats = [
    {
      icon: Monitor,
      title: "Live Sessions",
      description: "Interactive real-time classes with direct instructor engagement",
      badge: "Most Popular",
    },
    {
      icon: Calendar,
      title: "Self-Paced",
      description: "Learn at your own speed with lifetime access to materials",
      badge: null,
    },
    {
      icon: Globe,
      title: "Hybrid Learning",
      description: "Combination of live sessions and self-paced modules",
      badge: "Recommended",
    },
  ];

  const benefits = [
    {
      icon: Award,
      title: "Certificates of Completion",
      description: "Earn recognized certificates to showcase your achievements",
    },
    {
      icon: Users,
      title: "Peer Community",
      description: "Connect with fellow learners and expand your professional network",
    },
    {
      icon: Clock,
      title: "Lifetime Access",
      description: "Return to course materials anytime to refresh your knowledge",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Join Our Learning Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience flexible learning formats designed to fit your schedule and learning style
          </p>
        </div>

        {/* Course Formats */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Choose Your Learning Format
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {formats.map((format, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-shadow duration-300">
                {format.badge && (
                  <Badge className="absolute -top-3 right-4 bg-accent text-accent-foreground">
                    {format.badge}
                  </Badge>
                )}
                <CardContent className="p-6">
                  <div className="bg-gradient-primary p-3 rounded-lg inline-block mb-4">
                    <format.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{format.title}</h4>
                  <p className="text-sm text-muted-foreground">{format.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            What You'll Get
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-primary p-4 rounded-full inline-block mb-4">
                  <benefit.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h4>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-accent overflow-hidden">
          <CardContent className="p-8 md:p-12 text-center text-accent-foreground">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Learning Journey?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of learners who are advancing their careers with Prolearn
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Browse Courses
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                View Success Stories
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-8 text-sm">
              <div>
                <span className="font-bold text-2xl">30-Day</span>
                <p className="opacity-90">Money-back guarantee</p>
              </div>
              <div className="h-12 w-px bg-white/20"></div>
              <div>
                <span className="font-bold text-2xl">24/7</span>
                <p className="opacity-90">Student support</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ParticipantSection;