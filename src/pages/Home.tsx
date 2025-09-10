import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { GraduationCap, Wrench, Users, Star, Quote, Award, BookOpen, Play, Clock, TrendingUp } from "lucide-react";
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
        <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/20 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-200/20 rounded-full blur-xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                Featured Certification Courses
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Master cutting-edge technologies with industry-recognized certifications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Course 1 - AI & Designing Technology */}
              <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-6">
                  <div className="mb-4">
                    <div className="w-full h-48 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&h=300&fit=crop&crop=center')"
                    }}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="text-white text-center relative z-10">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Play className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-sm font-medium">Technology</p>
                      </div>
                      <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                        TRENDING
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">AI & Designing Technology</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">Apply AI to product, graphic, and UX/UI design processes. Master AI-powered design tools and automated layout generation.</p>
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                      AG
                    </div>
                    <div>
                      <p className="text-primary font-medium text-sm">Dr. Ananya Gupta</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-gray-700 font-medium">4.9</span>
                    <span className="text-sm text-gray-500 ml-2">• 3,240 students</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">₹1,999</span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      6 months
                    </div>
                  </div>
                  <Link to="/courses">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg">
                      Get Certified
                    </Button>
                  </Link>
                </div>
              </Card>

              {/* Course 2 - AI & Data Analytics */}
              <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-6">
                  <div className="mb-4">
                    <div className="w-full h-48 bg-gradient-to-br from-emerald-600 via-cyan-600 to-blue-700 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center')"
                    }}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="text-white text-center relative z-10">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <TrendingUp className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-sm font-medium">AI & Data</p>
                      </div>
                      <div className="absolute top-3 right-3 bg-green-400 text-green-900 px-2 py-1 rounded-full text-xs font-bold">
                        TRENDING
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors">AI & Data Analytics</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">Master data analysis with AI tools. Learn machine learning algorithms, statistical modeling, and data visualization techniques.</p>
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                      AG
                    </div>
                    <div>
                      <p className="text-primary font-medium text-sm">Dr. Ananya Gupta</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-gray-700 font-medium">4.9</span>
                    <span className="text-sm text-gray-500 ml-2">• 2,230 students</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">₹1,999</span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      7 months
                    </div>
                  </div>
                  <Link to="/courses">
                    <Button className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg">
                      Get Certified
                    </Button>
                  </Link>
                </div>
              </Card>

              {/* Course 3 - Medical Coding */}
              <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-6">
                  <div className="mb-4">
                    <div className="w-full h-48 bg-gradient-to-br from-rose-600 via-pink-600 to-red-700 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop&crop=center')"
                    }}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="text-white text-center relative z-10">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Play className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-sm font-medium">Healthcare</p>
                      </div>
                      <div className="absolute top-3 right-3 bg-rose-400 text-rose-900 px-2 py-1 rounded-full text-xs font-bold">
                        TRENDING
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-rose-600 transition-colors">Medical Coding</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">Learn medical coding standards, healthcare billing systems, and insurance claim processing for healthcare careers.</p>
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                      PS
                    </div>
                    <div>
                      <p className="text-primary font-medium text-sm">Dr. Priya Sharma</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-gray-700 font-medium">4.8</span>
                    <span className="text-sm text-gray-500 ml-2">• 2,780 students</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">₹999</span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      3 months
                    </div>
                  </div>
                  <Link to="/courses">
                    <Button className="w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg">
                      Get Certified
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
            <div className="text-center mt-12">
                <Link to="/courses">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  View All Certification Courses
                </Button>
                </Link>
              </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 right-20 w-40 h-40 bg-purple-200/30 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 left-20 w-32 h-32 bg-indigo-200/30 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-pink-200/30 rounded-full blur-2xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Why Choose ProLearn?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience the difference with our comprehensive learning platform
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <GraduationCap className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">Industry-Recognized Certifications</h3>
                  <p className="text-gray-600 leading-relaxed">All our courses lead to professional certifications that are recognized by top companies. Boost your career with verified credentials.</p>
                </div>
                </Card>
              
              <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <Wrench className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors">Certification-Focused Learning</h3>
                  <p className="text-gray-600 leading-relaxed">Our curriculum is designed specifically for certification success. Practice exams, real-world projects, and expert guidance ensure you pass with confidence.</p>
                </div>
                </Card>
              
              <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors">Certified Professional Network</h3>
                  <p className="text-gray-600 leading-relaxed">Join thousands of certified professionals who have advanced their careers. Connect with certified peers and industry experts.</p>
                </div>
                </Card>
              </div>
          </div>
        </section>
        
        {/* Our Impact Section */}
        <section className="py-16 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-36 h-36 bg-emerald-200/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 right-20 w-44 h-44 bg-teal-200/20 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-cyan-200/20 rounded-full blur-2xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                Our Impact
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Transforming lives through quality education and certification
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">10,000+</div>
                  <div className="text-gray-600 font-medium">Students Enrolled</div>
                  <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mx-auto mt-3"></div>
                </div>
                </Card>
              
              <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">500+</div>
                  <div className="text-gray-600 font-medium">Expert Instructors</div>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mt-3"></div>
                </div>
                </Card>
              
              <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">200+</div>
                  <div className="text-gray-600 font-medium">Courses Available</div>
                  <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mt-3"></div>
                </div>
                </Card>
              
              <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">95%</div>
                  <div className="text-gray-600 font-medium">Completion Rate</div>
                  <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mt-3"></div>
                </div>
                </Card>
              </div>
          </div>
        </section>

        {/* Featured Instructors Section */}
        <section className="py-16 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/20 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-200/20 rounded-full blur-2xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 bg-clip-text text-transparent mb-4">
                Meet Our Expert Instructors
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Learn from industry veterans and certified professionals
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Instructor 1 */}
              <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto shadow-lg border-4 border-white">
                      R
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">Rahul</h3>
                  <p className="text-blue-600 font-medium mb-4">Technology & Emerging Tech Expert</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">AI & Arts</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full font-medium">AR/VR Engineering</span>
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-800 text-xs rounded-full font-medium">Web Development</span>
                  </div>
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">4.9 (2,340 students)</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                    8+ years experience at Google, Facebook. Expert in React, Node.js, and modern web development.
                  </p>
                  <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
                    <div className="flex items-center">
                      <Award className="w-4 h-4 mr-1" />
                      12 Courses
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      5 Years
                    </div>
                    </div>
                  </div>
                </Card>

              {/* Instructor 2 */}
              <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto shadow-lg border-4 border-white">
                      H
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">Harish</h3>
                  <p className="text-green-600 font-medium mb-4">AI & Healthcare Specialist</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">AI & Designing</span>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs rounded-full font-medium">Data Analytics</span>
                    <span className="px-3 py-1 bg-rose-100 text-rose-800 text-xs rounded-full font-medium">Medical Coding</span>
                    <span className="px-3 py-1 bg-lime-100 text-lime-800 text-xs rounded-full font-medium">Bioentrepreneurship</span>
                  </div>
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">4.8 (1,890 students)</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                    PhD in Machine Learning, 10+ years at Microsoft. Specializes in Python, ML, and AI applications.
                  </p>
                  <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
                    <div className="flex items-center">
                      <Award className="w-4 h-4 mr-1" />
                      8 Courses
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      6 Years
                    </div>
                  </div>
                </div>
              </Card>

              {/* Instructor 3 */}
              <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto shadow-lg border-4 border-white">
                      S
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">Sathya</h3>
                  <p className="text-purple-600 font-medium mb-4">Business & Agriculture Expert</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full font-medium">AI & Business</span>
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-800 text-xs rounded-full font-medium">AR/VR Engineering</span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-800 text-xs rounded-full font-medium">Digital Marketing</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full font-medium">Agri Entrepreneurship</span>
                  </div>
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">4.7 (1,650 students)</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                    Former Marketing Director at Apple. Expert in SEO, SEM, social media, and growth marketing strategies.
                  </p>
                  <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
                    <div className="flex items-center">
                      <Award className="w-4 h-4 mr-1" />
                      6 Courses
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      4 Years
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 right-20 w-36 h-36 bg-rose-200/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 left-20 w-40 h-40 bg-pink-200/20 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 right-1/3 w-28 h-28 bg-orange-200/20 rounded-full blur-2xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-orange-600 bg-clip-text text-transparent mb-4">
                What Our Students Say
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real stories from our successful graduates
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <Quote className="w-8 h-8 text-blue-500 mr-3" />
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed">
                    "ProLearn transformed my career! The Medical Coding course was exceptional, and I landed my dream job as a Medical Coder within 3 months."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4 shadow-lg">
                      P
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Priya Sharma</p>
                      <p className="text-sm text-gray-500">Medical Coder</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Testimonial 2 */}
              <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <Quote className="w-8 h-8 text-green-500 mr-3" />
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed">
                    "The AI & Blockchain course exceeded my expectations. The instructors are industry experts who provide real-world insights and practical knowledge."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold mr-4 shadow-lg">
                      A
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Arjun Patel</p>
                      <p className="text-sm text-gray-500">Blockchain Developer</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Testimonial 3 */}
              <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <Quote className="w-8 h-8 text-purple-500 mr-3" />
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed">
                    "Amazing learning experience! The Precision Agriculture course and community support helped me master modern farming techniques and start my own agri-business."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold mr-4 shadow-lg">
                      R
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Rajesh Kumar</p>
                      <p className="text-sm text-gray-500">Agri-Entrepreneur</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Home;
