import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Users, Star, ArrowRight } from "lucide-react";

const Instructors = () => {
  const benefits = [
    {
      icon: Award,
      title: "Expert Recognition",
      description: "Build your reputation as a thought leader in your field",
    },
    {
      icon: Users,
      title: "Global Reach",
      description: "Connect with students from around the world",
    },
    {
      icon: BookOpen,
      title: "Flexible Teaching",
      description: "Create courses on your schedule with full creative control",
    },
    {
      icon: Star,
      title: "Premium Support",
      description: "Dedicated team to help you succeed every step of the way",
    },
  ];

  const instructorSteps = [
    {
      number: "01",
      title: "Apply to Teach",
      description: "Submit your expertise and course ideas for review",
    },
    {
      number: "02",
      title: "Create Your Course",
      description: "Use our tools and resources to build engaging content",
    },
    {
      number: "03",
      title: "Launch & Earn",
      description: "Publish your course and start earning from enrollments",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Instructor Section */}
        <section className="py-20 bg-gradient-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Instructor Benefits */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Become an Instructor
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Share your expertise with thousands of eager learners and make a lasting impact
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="bg-gradient-primary p-3 rounded-lg inline-block mb-4">
                      <benefit.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* How It Works */}
            <div className="bg-primary/5 rounded-2xl p-8 md:p-12 mb-16">
              <h3 className="text-2xl font-bold text-foreground text-center mb-12">
                How to Get Started
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {instructorSteps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-primary mb-4">{step.number}</div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">{step.title}</h4>
                    <p className="text-muted-foreground">{step.description}</p>
                    {index < instructorSteps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <ArrowRight className="h-6 w-6 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Instructor Guidelines */}
            <Card className="bg-gradient-primary text-primary-foreground overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Instructor Guidelines</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-2">
                        <span className="text-accent">✓</span>
                        <span>Proven expertise in your teaching field</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">✓</span>
                        <span>Commitment to high-quality content creation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">✓</span>
                        <span>Engaging teaching style and clear communication</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">✓</span>
                        <span>Regular interaction with students</span>
                      </li>
                    </ul>
                    <Button variant="secondary" size="lg" className="group">
                      Apply to Teach
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                      <div className="text-5xl font-bold mb-2">Up to 85%</div>
                      <div className="text-lg opacity-90">Revenue Share</div>
                      <div className="text-sm opacity-75 mt-2">for instructors</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Instructors;
