import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, Users, TrendingUp, Shield } from "lucide-react";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    // Force scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* About Section */}
        <section className="py-20 pt-32 bg-gradient-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Prolearn</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're on a mission to transform education by bringing together the world's best minds
                and most eager learners in one collaborative platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-primary p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <Target className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Our Mission</h3>
                    <p className="text-muted-foreground">To democratize education by connecting world-class experts with eager learners worldwide.</p>
                  </div>
                </div>
              </div>
              <div className="bg-card p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-primary p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <Users className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Community First</h3>
                    <p className="text-muted-foreground">Building a supportive network where knowledge flows freely and connections flourish.</p>
                  </div>
                </div>
              </div>
              <div className="bg-card p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-primary p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <TrendingUp className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Innovation & Growth</h3>
                    <p className="text-muted-foreground">Staying at the forefront of educational technology to deliver cutting-edge learning experiences.</p>
                  </div>
                </div>
              </div>
              <div className="bg-card p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-primary p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <Shield className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Quality Assured</h3>
                    <p className="text-muted-foreground">Every instructor is vetted, every course is reviewed, ensuring exceptional educational standards.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-primary/5 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Team</h3>
                  <p className="text-muted-foreground mb-6">
                    Meet our team of dedicated professionals who are passionate about education and 
                    knowledge sharing. We work tirelessly to ensure that every learning experience 
                    on Prolearn exceeds expectations.
                  </p>
                  <p className="text-muted-foreground">
                    From curriculum designers to tech innovators, our diverse team brings together 
                    expertise from education, technology, and business to create the ultimate 
                    learning platform.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-primary mb-1">50+</div>
                    <div className="text-sm text-muted-foreground">Team Members</div>
                  </div>
                  <div className="bg-card p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-secondary mb-1">15+</div>
                    <div className="text-sm text-muted-foreground">Countries</div>
                  </div>
                  <div className="bg-card p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-accent mb-1">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </div>
                  <div className="bg-card p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-success mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">Commitment</div>
                  </div>
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

export default About;
