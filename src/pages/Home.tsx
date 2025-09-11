import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { Star, Quote, Play, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    // Force scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="flex flex-col items-center">
        <HeroSection />
        
        {/* Featured Courses Section */}
        <section className="py-16 bg-white relative overflow-hidden w-full">
          {/* Enhanced Background decorative elements with animations */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1000ms'}}></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-200/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '500ms'}}></div>
            
            {/* Floating animated icons - Optimized */}
            <div className="absolute top-32 right-20 animate-float" style={{animationDelay: '300ms'}}>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">💻</span>
              </div>
            </div>
            <div className="absolute bottom-32 left-20 animate-float-slow" style={{animationDelay: '700ms'}}>
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🎓</span>
              </div>
            </div>
            <div className="absolute top-1/3 right-1/3 animate-float" style={{animationDelay: '1000ms'}}>
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-lg">🚀</span>
              </div>
            </div>
            
            {/* Animated geometric shapes */}
            <div className="absolute top-40 left-1/3 w-6 h-6 bg-blue-400/30 rotate-45 animate-spin" style={{animationDuration: '8s'}}></div>
            <div className="absolute bottom-40 right-1/3 w-8 h-8 bg-purple-400/30 rounded-full animate-ping" style={{animationDelay: '500ms'}}></div>
            <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-indigo-400/40 rotate-12 animate-pulse" style={{animationDelay: '300ms'}}></div>
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
        <section className="py-16 bg-white relative overflow-hidden w-full">
          {/* Enhanced Background decorative elements with animations */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 right-20 w-40 h-40 bg-purple-200/30 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-10 left-20 w-32 h-32 bg-indigo-200/30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1000ms'}}></div>
            <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-pink-200/30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '500ms'}}></div>
            
            {/* Floating educational icons - Optimized */}
            <div className="absolute top-20 left-16 animate-float" style={{animationDelay: '200ms'}}>
              <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-white text-2xl">📚</span>
              </div>
            </div>
            <div className="absolute bottom-20 right-16 animate-float-slow" style={{animationDelay: '600ms'}}>
              <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-white text-2xl">🎯</span>
              </div>
            </div>
            <div className="absolute top-1/2 left-8 animate-float" style={{animationDelay: '1000ms'}}>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">⭐</span>
              </div>
            </div>
            
            {/* Animated learning elements */}
            <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping" style={{animationDelay: '300ms'}}></div>
            <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rotate-45 animate-spin" style={{animationDuration: '6s'}}></div>
            <div className="absolute top-3/4 left-1/2 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse" style={{animationDelay: '700ms'}}></div>
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
                    <div className="w-full h-48 bg-cover bg-center rounded-lg mb-4" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&crop=center')"
                    }}>
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
                    <div className="w-full h-48 bg-cover bg-center rounded-lg mb-4" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=center')"
                    }}>
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
                    <div className="w-full h-48 bg-cover bg-center rounded-lg mb-4" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop&crop=center')"
                    }}>
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
        <section className="py-16 bg-white relative overflow-hidden w-full">
          {/* Enhanced Background decorative elements with animations */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-36 h-36 bg-emerald-200/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-44 h-44 bg-teal-200/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1000ms'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-cyan-200/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '500ms'}}></div>
            
            {/* Success Achievement Illustration */}
            <div className="absolute top-20 right-20 w-32 h-32 opacity-20 animate-float">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <linearGradient id="successGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:"#10b981", stopOpacity:0.8}} />
                    <stop offset="100%" style={{stopColor:"#059669", stopOpacity:0.6}} />
                  </linearGradient>
                </defs>
                {/* Background */}
                <rect width="200" height="200" fill="#a7f3d0" rx="20"/>
                
                {/* Steps */}
                <rect x="20" y="140" width="40" height="20" fill="#1f2937" rx="2"/>
                <rect x="15" y="135" width="10" height="5" fill="#ffffff" opacity="0.7"/>
                <rect x="25" y="135" width="10" height="5" fill="#ffffff" opacity="0.7"/>
                <rect x="35" y="135" width="10" height="5" fill="#ffffff" opacity="0.7"/>
                
                <rect x="50" y="120" width="40" height="20" fill="#ffffff" rx="2"/>
                <circle cx="60" cy="130" r="3" fill="#1f2937"/>
                <circle cx="70" cy="130" r="3" fill="#1f2937"/>
                <circle cx="80" cy="130" r="3" fill="#1f2937"/>
                
                <rect x="80" y="100" width="40" height="20" fill="#1f2937" rx="2"/>
                
                <rect x="110" y="80" width="40" height="20" fill="#ffffff" rx="2"/>
                <rect x="115" y="85" width="30" height="2" fill="#1f2937"/>
                <rect x="115" y="90" width="30" height="2" fill="#1f2937"/>
                <rect x="115" y="95" width="30" height="2" fill="#1f2937"/>
                
                {/* Person */}
                <circle cx="130" cy="60" r="12" fill="#ffffff" stroke="#1f2937" strokeWidth="2"/>
                <circle cx="127" cy="57" r="2" fill="#1f2937"/>
                <circle cx="133" cy="57" r="2" fill="#1f2937"/>
                <path d="M125 65 Q130 68 135 65" stroke="#1f2937" strokeWidth="2" fill="none"/>
                <path d="M120 70 Q130 75 140 70" stroke="#1f2937" strokeWidth="2" fill="none"/>
                
                {/* Body */}
                <rect x="125" y="72" width="10" height="15" fill="#ffffff" stroke="#1f2937" strokeWidth="2"/>
                <rect x="120" y="87" width="20" height="8" fill="#1f2937" rx="2"/>
                <rect x="120" y="95" width="20" height="12" fill="#6b7280" rx="2"/>
                
                {/* Flag */}
                <rect x="140" y="50" width="15" height="10" fill="#1f2937"/>
                <path d="M140 50 Q145 52 150 50" stroke="#ffffff" strokeWidth="1" fill="none"/>
                <line x1="140" y1="50" x2="140" y2="70" stroke="#1f2937" strokeWidth="2"/>
                
                {/* Clouds */}
                <ellipse cx="40" cy="40" rx="15" ry="8" fill="#ffffff" opacity="0.8"/>
                <ellipse cx="50" cy="35" rx="12" ry="6" fill="#ffffff" opacity="0.8"/>
                <ellipse cx="45" cy="45" rx="10" ry="5" fill="#ffffff" opacity="0.8"/>
                
                <ellipse cx="160" cy="30" rx="12" ry="6" fill="#ffffff" opacity="0.8"/>
                <ellipse cx="170" cy="25" rx="10" ry="5" fill="#ffffff" opacity="0.8"/>
                <ellipse cx="165" cy="35" rx="8" ry="4" fill="#ffffff" opacity="0.8"/>
              </svg>
            </div>
            
            {/* Floating success icons - Optimized */}
            <div className="absolute top-24 right-24 animate-float" style={{animationDelay: '300ms'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-white text-2xl">🏆</span>
              </div>
            </div>
            <div className="absolute bottom-24 left-24 animate-float-slow" style={{animationDelay: '700ms'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-white text-2xl">📊</span>
              </div>
            </div>
            <div className="absolute top-1/3 left-12 animate-float" style={{animationDelay: '1000ms'}}>
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🎯</span>
              </div>
            </div>
            
            {/* Animated success elements */}
            <div className="absolute top-1/4 right-1/4 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping" style={{animationDelay: '200ms'}}></div>
            <div className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-gradient-to-r from-teal-400 to-cyan-500 rotate-45 animate-spin" style={{animationDuration: '7s'}}></div>
            <div className="absolute top-2/3 right-1/3 w-6 h-6 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full animate-pulse" style={{animationDelay: '500ms'}}></div>
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
                  <div className="w-full h-32 bg-cover bg-center rounded-lg mb-4" style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop&crop=center')"
                  }}>
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">10,000+</div>
                  <div className="text-gray-600 font-medium">Students Enrolled</div>
                  <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mx-auto mt-3"></div>
                </div>
                </Card>
              
              <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-full h-32 bg-cover bg-center rounded-lg mb-4" style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop&crop=center')"
                  }}>
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">500+</div>
                  <div className="text-gray-600 font-medium">Expert Instructors</div>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mt-3"></div>
                </div>
                </Card>
              
              <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-full h-32 bg-cover bg-center rounded-lg mb-4" style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=200&fit=crop&crop=center')"
                  }}>
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">200+</div>
                  <div className="text-gray-600 font-medium">Courses Available</div>
                  <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mt-3"></div>
                </div>
                </Card>
              
              <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-full h-32 bg-cover bg-center rounded-lg mb-4" style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=300&h=200&fit=crop&crop=center')"
                  }}>
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">95%</div>
                  <div className="text-gray-600 font-medium">Completion Rate</div>
                  <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mt-3"></div>
                </div>
                </Card>
              </div>
          </div>
        </section>


        {/* Testimonials Section */}
        <section className="py-16 bg-white relative overflow-hidden w-full">
          {/* Enhanced Background decorative elements with animations */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 right-20 w-36 h-36 bg-rose-200/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-40 h-40 bg-pink-200/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1000ms'}}></div>
            <div className="absolute top-1/2 right-1/3 w-28 h-28 bg-orange-200/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '500ms'}}></div>
            
            {/* Floating testimonial icons - Optimized */}
            <div className="absolute top-24 left-20 animate-float" style={{animationDelay: '500ms'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-white text-2xl">💬</span>
              </div>
            </div>
            <div className="absolute bottom-24 right-20 animate-float-slow" style={{animationDelay: '900ms'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-white text-2xl">⭐</span>
              </div>
            </div>
            <div className="absolute top-1/3 left-8 animate-float" style={{animationDelay: '1300ms'}}>
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">❤️</span>
              </div>
            </div>
            
            {/* Animated testimonial elements */}
            <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping" style={{animationDelay: '400ms'}}></div>
            <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-gradient-to-r from-pink-400 to-rose-500 rotate-45 animate-spin" style={{animationDuration: '6s'}}></div>
            <div className="absolute top-2/3 right-1/3 w-4 h-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-pulse" style={{animationDelay: '800ms'}}></div>
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
