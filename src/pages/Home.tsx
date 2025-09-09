import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { GraduationCap, Wrench, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        
        {/* Featured Courses Section */}
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-12 shadow-lg border-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 backdrop-blur-sm rounded-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-8">Featured Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Course 1 */}
                <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-foreground mb-3">Advanced React Development</h3>
                  <p className="text-muted-foreground mb-4">Master modern React patterns, hooks, and performance optimization techniques.</p>
                  <p className="text-primary font-medium mb-3">By John Smith</p>
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-foreground font-medium">4.9</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">View Course</Button>
                </Card>

                {/* Course 2 */}
                <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-foreground mb-3">Data Science Fundamentals</h3>
                  <p className="text-muted-foreground mb-4">Learn Python, statistics, and machine learning from industry experts.</p>
                  <p className="text-primary font-medium mb-3">By Dr. Sarah Johnson</p>
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-foreground font-medium">4.8</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">View Course</Button>
                </Card>

                {/* Course 3 */}
                <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-foreground mb-3">Digital Marketing Mastery</h3>
                  <p className="text-muted-foreground mb-4">Comprehensive guide to modern digital marketing strategies and tools.</p>
                  <p className="text-primary font-medium mb-3">By Mike Chen</p>
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-foreground font-medium">4.7</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">View Course</Button>
                </Card>
              </div>
              <div className="text-center">
                <Button className="bg-primary hover:bg-primary/90 px-8 py-3 text-lg">View All Courses</Button>
              </div>
            </Card>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Card className="p-12 shadow-lg border-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 backdrop-blur-sm rounded-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Why Choose ProLearn?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
                  <div className="mb-3">
                    <GraduationCap className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Learn from the Best</h3>
                  <p className="text-sm text-muted-foreground">Engage with subject matter experts and academics in cutting-edge fields. Our instructors are carefully selected experts with proven track records.</p>
                </Card>
                <Card className="p-6 shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
                  <div className="mb-3">
                    <Wrench className="w-10 h-10 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Practical Knowledge</h3>
                  <p className="text-sm text-muted-foreground">Gain hands-on experience through demonstrations and exercises. Learn by doing, not just reading theory.</p>
                </Card>
                <Card className="p-6 shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
                  <div className="mb-3">
                    <Users className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Join Our Community</h3>
                  <p className="text-sm text-muted-foreground">Connect with like-minded individuals and expand your network. Build lasting professional relationships.</p>
                </Card>
              </div>
            </Card>
          </div>
        </section>
        
        {/* Our Impact Section */}
        <section className="py-12 bg-gradient-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Card className="p-12 shadow-lg border-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 backdrop-blur-sm rounded-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Our Impact</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6 shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
                  <div className="text-3xl font-bold text-primary mb-1">10,000+</div>
                  <div className="text-sm text-muted-foreground">Students Enrolled</div>
                </Card>
                <Card className="p-6 shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
                  <div className="text-3xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Expert Instructors</div>
                </Card>
                <Card className="p-6 shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
                  <div className="text-3xl font-bold text-primary mb-1">200+</div>
                  <div className="text-sm text-muted-foreground">Courses Available</div>
                </Card>
                <Card className="p-6 shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
                  <div className="text-3xl font-bold text-primary mb-1">95%</div>
                  <div className="text-sm text-muted-foreground">Completion Rate</div>
                </Card>
              </div>
            </Card>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
              Ready to Start Learning?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who are already advancing their careers with ProLearn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-white/90 font-semibold px-8 py-3 text-lg transition-all duration-200 hover:scale-105">
                Get Started Today
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3 text-lg transition-all duration-200 hover:scale-105">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
