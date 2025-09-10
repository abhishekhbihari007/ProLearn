import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { GraduationCap, Wrench, Users, Star, Quote, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        
        {/* Featured Courses Section */}
        <section className="py-4 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8 shadow-lg border-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 backdrop-blur-sm rounded-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-6">Featured Certification Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* Course 1 */}
                <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-foreground mb-3">AI & Designing Technology</h3>
                  <p className="text-muted-foreground mb-4">Apply AI to product, graphic, and UX/UI design processes. Master AI-powered design tools and automated layout generation.</p>
                  <p className="text-primary font-medium mb-3">By Dr. Ananya Gupta</p>
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-foreground font-medium">4.9</span>
                    <span className="text-sm text-muted-foreground ml-2">• Certification Course</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">₹4,999</span>
                    <span className="text-sm text-muted-foreground">12 months</span>
                  </div>
                  <Link to="/courses">
                    <Button className="w-full bg-primary hover:bg-primary/90">Get Certified</Button>
                  </Link>
                </Card>

                {/* Course 2 */}
                <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-foreground mb-3">AI & Arts</h3>
                  <p className="text-muted-foreground mb-4">Explore the intersection of artificial intelligence and creative arts. Master generative art algorithms and AI-assisted composition.</p>
                  <p className="text-primary font-medium mb-3">By Vikram Singh</p>
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-foreground font-medium">4.8</span>
                    <span className="text-sm text-muted-foreground ml-2">• Certification Course</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">₹4,999</span>
                    <span className="text-sm text-muted-foreground">12 months</span>
                  </div>
                  <Link to="/courses">
                    <Button className="w-full bg-primary hover:bg-primary/90">Get Certified</Button>
                  </Link>
                </Card>

                {/* Course 3 */}
                <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-foreground mb-3">AI & Business</h3>
                  <p className="text-muted-foreground mb-4">Learn how to integrate AI into business strategies and operations. Master AI-driven decision making and automation.</p>
                  <p className="text-primary font-medium mb-3">By Suresh Mehta</p>
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-foreground font-medium">4.8</span>
                    <span className="text-sm text-muted-foreground ml-2">• Certification Course</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">₹4,999</span>
                    <span className="text-sm text-muted-foreground">12 months</span>
                  </div>
                  <Link to="/courses">
                    <Button className="w-full bg-primary hover:bg-primary/90">Get Certified</Button>
                  </Link>
                </Card>
              </div>
              <div className="text-center">
                <Link to="/courses">
                  <Button className="bg-primary hover:bg-primary/90 px-8 py-3 text-lg">View All Certification Courses</Button>
                </Link>
              </div>
            </Card>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-4 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Card className="p-8 shadow-lg border-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 backdrop-blur-sm rounded-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Why Choose ProLearn?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
                  <div className="mb-3">
                    <GraduationCap className="w-10 h-10 text-primary" />
                  </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Industry-Recognized Certifications</h3>
                <p className="text-sm text-muted-foreground">All our courses lead to professional certifications that are recognized by top companies. Boost your career with verified credentials.</p>
                </Card>
                <Card className="p-6 shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
                  <div className="mb-3">
                    <Wrench className="w-10 h-10 text-secondary" />
                  </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Certification-Focused Learning</h3>
                <p className="text-sm text-muted-foreground">Our curriculum is designed specifically for certification success. Practice exams, real-world projects, and expert guidance ensure you pass with confidence.</p>
                </Card>
                <Card className="p-6 shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
                  <div className="mb-3">
                    <Users className="w-10 h-10 text-accent" />
                  </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Certified Professional Network</h3>
                <p className="text-sm text-muted-foreground">Join thousands of certified professionals who have advanced their careers. Connect with certified peers and industry experts.</p>
                </Card>
              </div>
            </Card>
          </div>
        </section>
        
        {/* Our Impact Section */}
        <section className="py-4 bg-gradient-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Card className="p-8 shadow-lg border-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 backdrop-blur-sm rounded-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Impact</h2>
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

        {/* Featured Instructors Section */}
        <section className="py-4 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8 shadow-lg border-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 backdrop-blur-sm rounded-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-6">Meet Our Expert Instructors</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Instructor 1 */}
                <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center text-black text-2xl font-bold mx-auto mb-4 border-2 border-blue-200">
                    R
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Rahul</h3>
                  <p className="text-primary font-medium mb-2">Technology & Emerging Tech Expert</p>
                  <div className="flex flex-wrap justify-center gap-1 mb-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">AI & Arts</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Add up</span>
                    <span className="px-2 py-1 bg-cyan-100 text-cyan-800 text-xs rounded-full">AR/VR Engineering</span>
                  </div>
                  <div className="flex items-center justify-center mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground ml-2">4.9 (2,340 students)</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    8+ years experience at Google, Facebook. Expert in React, Node.js, and modern web development.
                  </p>
                  <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Award className="w-3 h-3 mr-1" />
                      12 Courses
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-3 h-3 mr-1" />
                      5 Years
                    </div>
                  </div>
                </Card>

                {/* Instructor 2 */}
                <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center text-black text-2xl font-bold mx-auto mb-4 border-2 border-green-200">
                    H
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Harish</h3>
                  <p className="text-primary font-medium mb-2">AI & Healthcare Specialist</p>
                  <div className="flex flex-wrap justify-center gap-1 mb-3">
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">AI & Designing</span>
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-800 text-xs rounded-full">AI & Data Analytics</span>
                    <span className="px-2 py-1 bg-rose-100 text-rose-800 text-xs rounded-full">Medical Coding</span>
                    <span className="px-2 py-1 bg-lime-100 text-lime-800 text-xs rounded-full">Bioentrepreneurship</span>
                  </div>
                  <div className="flex items-center justify-center mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground ml-2">4.8 (1,890 students)</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    PhD in Machine Learning, 10+ years at Microsoft. Specializes in Python, ML, and AI applications.
                  </p>
                  <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Award className="w-3 h-3 mr-1" />
                      8 Courses
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-3 h-3 mr-1" />
                      6 Years
                    </div>
                  </div>
                </Card>

                {/* Instructor 3 */}
                <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center text-black text-2xl font-bold mx-auto mb-4 border-2 border-purple-200">
                    S
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Sathya</h3>
                  <p className="text-primary font-medium mb-2">Business & Agriculture Expert</p>
                  <div className="flex flex-wrap justify-center gap-1 mb-3">
                    <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">AI & Business</span>
                    <span className="px-2 py-1 bg-cyan-100 text-cyan-800 text-xs rounded-full">AR/VR Engineering</span>
                    <span className="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded-full">Digital Marketing</span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Agri Entrepreneurship</span>
                  </div>
                  <div className="flex items-center justify-center mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground ml-2">4.7 (1,650 students)</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Former Marketing Director at Apple. Expert in SEO, SEM, social media, and growth marketing strategies.
                  </p>
                  <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Award className="w-3 h-3 mr-1" />
                      6 Courses
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-3 h-3 mr-1" />
                      4 Years
                    </div>
                  </div>
                </Card>
              </div>
            </Card>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-4 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8 shadow-lg border-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 backdrop-blur-sm rounded-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-6">What Our Students Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Testimonial 1 */}
                <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-primary mr-2" />
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "ProLearn transformed my career! The Medical Coding course was exceptional, and I landed my dream job as a Medical Coder within 3 months."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      P
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Priya Sharma</p>
                      <p className="text-sm text-muted-foreground">Medical Coder</p>
                    </div>
                  </div>
                </Card>

                {/* Testimonial 2 - Updated */}
                <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-primary mr-2" />
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "The AI & Blockchain course exceeded my expectations. The instructors are industry experts who provide real-world insights and practical knowledge."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      A
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Arjun Patel</p>
                      <p className="text-sm text-muted-foreground">Blockchain Developer</p>
                    </div>
                  </div>
                </Card>

                {/* Testimonial 3 - Updated */}
                <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-primary mr-2" />
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "Amazing learning experience! The Precision Agriculture course and community support helped me master modern farming techniques and start my own agri-business."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      R
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Rajesh Kumar</p>
                      <p className="text-sm text-muted-foreground">Agri-Entrepreneur</p>
                    </div>
                  </div>
                </Card>
              </div>
            </Card>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Home;
