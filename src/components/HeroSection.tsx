import { Users, Award, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Users, value: "10,000+", label: "Active Learners" },
    { icon: BookOpen, value: "100+", label: "Expert Courses" },
    { icon: Award, value: "95%", label: "Success Rate" },
  ];

  return (
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center pt-24 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Enhanced SVG Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="dots" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="2" fill="#3b82f6" opacity="0.6"/>
            </pattern>
            <pattern id="waves" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M0,100 Q50,50 100,100 T200,100 L200,200 L0,200 Z" fill="none" stroke="#8b5cf6" strokeWidth="2" opacity="0.4"/>
            </pattern>
            <pattern id="circles" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="20" fill="none" stroke="#06b6d4" strokeWidth="1" opacity="0.3"/>
            </pattern>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"#dbeafe", stopOpacity:0.6}} />
              <stop offset="50%" style={{stopColor:"#e0e7ff", stopOpacity:0.4}} />
              <stop offset="100%" style={{stopColor:"#f3e8ff", stopOpacity:0.6}} />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#bgGradient)" />
          <rect width="100%" height="100%" fill="url(#dots)" />
          <rect width="100%" height="100%" fill="url(#waves)" />
          <rect width="100%" height="100%" fill="url(#circles)" />
        </svg>
      </div>

      {/* Animated Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Circles - Optimized for performance */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-400/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-purple-400/20 rounded-full animate-float-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 bg-indigo-400/20 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-20 right-10 w-14 h-14 bg-cyan-400/20 rounded-full animate-float-slow" style={{animationDelay: '1s'}}></div>
        
        {/* Floating Geometric Shapes - Optimized */}
        <div className="absolute top-32 right-32 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rotate-45 animate-spin" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-40 left-32 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-600 rotate-12 animate-spin" style={{animationDuration: '6s'}}></div>
        <div className="absolute top-60 left-1/4 w-10 h-10 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full animate-pulse" style={{animationDuration: '3s'}}></div>
        
        {/* Running Swiggles */}
        <div className="absolute top-1/4 left-0 w-32 h-32 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full animate-pulse">
            <path d="M10,50 Q30,20 50,50 T90,50" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.6"/>
          </svg>
        </div>
        <div className="absolute bottom-1/4 right-0 w-40 h-40 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full animate-pulse" style={{animationDelay: '1s'}}>
            <path d="M10,30 Q50,70 90,30" stroke="#8b5cf6" strokeWidth="2" fill="none" opacity="0.6"/>
          </svg>
        </div>
        
        {/* Moving Dots */}
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-500 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-2/3 left-1/2 w-2 h-2 bg-indigo-500 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Large Container with Text and Image */}
          <div className="bg-gradient-to-br from-white/90 to-blue-50/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 border border-blue-300/50 shadow-2xl ring-1 ring-blue-200/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Left Side - Text Content */}
              <div className="order-2 lg:order-1">
                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 md:mb-6 leading-tight">
                  Learn from the
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight animate-pulse">
                    Subject Matter Experts
                  </span>
                </h1>

                {/* Subheading */}
                <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 md:mb-8 font-medium leading-relaxed">
                  Connect with subject matter experts and academics in cutting-edge fields. 
                  <span className="text-gray-800 font-bold">Gain practical knowledge</span> through hands-on demonstrations and real-world exercises.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className={`transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                      }`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <div className="flex flex-col items-center gap-1 sm:gap-2 p-2 sm:p-3">
                        <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-lg">
                          <stat.icon className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                        </div>
                        <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">{stat.value}</div>
                        <div className="text-xs sm:text-xs font-medium text-gray-600 text-center leading-tight">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center"
                    alt="Learning and Education"
                    className="w-full h-auto rounded-xl md:rounded-2xl shadow-2xl border border-blue-200"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl md:rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;