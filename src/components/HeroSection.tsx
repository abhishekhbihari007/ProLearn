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
     <section id="home" className="relative min-h-[75vh] flex items-center justify-center pt-12 overflow-hidden w-full">
      {/* Enhanced Background Pattern with SVG Graphics - Full Screen Coverage */}
      <div className="absolute top-0 left-0 h-full opacity-100 z-[-1]" style={{width: '100vw', left: '50%', transform: 'translateX(-50%)', minWidth: '100vw'}}>
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          {/* Floating animated circles */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1000ms'}}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-200/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '500ms'}}></div>
          
          {/* Floating animated icons */}
          <div className="absolute top-32 right-20 animate-float" style={{animationDelay: '300ms', animation: 'float 3s ease-in-out infinite'}}>
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-xl">💻</span>
            </div>
          </div>
          <div className="absolute bottom-32 left-20 animate-float-slow" style={{animationDelay: '700ms', animation: 'float-slow 4s ease-in-out infinite'}}>
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-xl">🎓</span>
            </div>
          </div>
          <div className="absolute top-1/3 right-1/3 animate-float" style={{animationDelay: '1000ms', animation: 'float 3s ease-in-out infinite'}}>
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-lg">🚀</span>
            </div>
          </div>
          
          {/* Animated geometric shapes */}
          <div className="absolute top-40 left-1/3 w-6 h-6 bg-blue-400/30 rotate-45 animate-spin" style={{animationDuration: '8s'}}></div>
          <div className="absolute bottom-40 right-1/3 w-8 h-8 bg-purple-400/30 rounded-full animate-ping" style={{animationDelay: '500ms'}}></div>
          <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-indigo-400/30 rotate-12 animate-bounce" style={{animationDelay: '1200ms'}}></div>
          
          {/* Additional floating elements */}
          <div className="absolute top-1/2 right-10 w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full animate-float-fast" style={{animationDelay: '1500ms', animation: 'float-fast 2s ease-in-out infinite'}}></div>
          <div className="absolute bottom-1/3 left-1/2 w-12 h-12 bg-gradient-to-r from-pink-400/20 to-purple-500/20 rounded-full animate-float" style={{animationDelay: '2000ms', animation: 'float 3s ease-in-out infinite'}}></div>
          
          {/* Glowing elements */}
          <div className="absolute top-16 left-1/2 w-20 h-20 bg-blue-500/10 rounded-full animate-glow" style={{animationDelay: '800ms', animation: 'glow 1.5s ease-in-out infinite alternate'}}></div>
          <div className="absolute bottom-16 right-1/2 w-24 h-24 bg-purple-500/10 rounded-full animate-glow" style={{animationDelay: '1600ms', animation: 'glow 1.5s ease-in-out infinite alternate'}}></div>
          
          {/* Small blinking and floating circles */}
          <div className="absolute top-24 left-1/4 w-3 h-3 bg-blue-400/60 rounded-full animate-pulse animate-float" style={{animationDelay: '200ms'}}></div>
          <div className="absolute top-40 right-1/3 w-2 h-2 bg-purple-400/50 rounded-full animate-pulse animate-float-slow" style={{animationDelay: '800ms'}}></div>
          <div className="absolute bottom-32 left-1/3 w-4 h-4 bg-indigo-400/55 rounded-full animate-pulse animate-float" style={{animationDelay: '1200ms'}}></div>
          <div className="absolute bottom-48 right-1/4 w-2.5 h-2.5 bg-pink-400/45 rounded-full animate-pulse animate-float-fast" style={{animationDelay: '600ms'}}></div>
          <div className="absolute top-1/2 left-1/6 w-3.5 h-3.5 bg-cyan-400/50 rounded-full animate-pulse animate-float" style={{animationDelay: '1000ms'}}></div>
          <div className="absolute top-1/3 right-1/6 w-2 h-2 bg-blue-500/60 rounded-full animate-pulse animate-float-slow" style={{animationDelay: '400ms'}}></div>
          <div className="absolute bottom-1/4 left-2/3 w-3 h-3 bg-purple-500/55 rounded-full animate-pulse animate-float" style={{animationDelay: '1400ms'}}></div>
          <div className="absolute top-2/3 right-2/3 w-2.5 h-2.5 bg-indigo-500/45 rounded-full animate-pulse animate-float-fast" style={{animationDelay: '1600ms'}}></div>
          
          {/* Additional blinking and floating circles with different sizes and colors */}
          <div className="absolute top-16 left-1/8 w-1.5 h-1.5 bg-yellow-400/70 rounded-full animate-pulse animate-float" style={{animationDelay: '300ms'}}></div>
          <div className="absolute top-56 right-1/8 w-5 h-5 bg-green-400/40 rounded-full animate-pulse animate-float-slow" style={{animationDelay: '1100ms'}}></div>
          <div className="absolute bottom-16 left-1/5 w-1 h-1 bg-red-400/80 rounded-full animate-pulse animate-float-fast" style={{animationDelay: '700ms'}}></div>
          <div className="absolute bottom-56 right-1/5 w-6 h-6 bg-orange-400/35 rounded-full animate-pulse animate-float" style={{animationDelay: '1300ms'}}></div>
          <div className="absolute top-1/4 left-1/12 w-2.5 h-2.5 bg-teal-400/55 rounded-full animate-pulse animate-float-slow" style={{animationDelay: '500ms'}}></div>
          <div className="absolute top-3/4 right-1/12 w-1.5 h-1.5 bg-lime-400/65 rounded-full animate-pulse animate-float" style={{animationDelay: '900ms'}}></div>
          <div className="absolute bottom-1/3 left-1/4 w-4.5 h-4.5 bg-violet-400/45 rounded-full animate-pulse animate-float-fast" style={{animationDelay: '1500ms'}}></div>
          <div className="absolute top-1/6 right-1/4 w-3.5 h-3.5 bg-amber-400/50 rounded-full animate-pulse animate-float" style={{animationDelay: '1700ms'}}></div>
          <div className="absolute bottom-1/6 left-3/4 w-2 h-2 bg-emerald-400/60 rounded-full animate-pulse animate-float-slow" style={{animationDelay: '100ms'}}></div>
          <div className="absolute top-5/6 right-3/4 w-4 h-4 bg-rose-400/40 rounded-full animate-pulse animate-float" style={{animationDelay: '1900ms'}}></div>
        </div>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            {/* Full background gradient */}
            <linearGradient id="fullBackground" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"#dbeafe", stopOpacity:0.6}} />
              <stop offset="30%" style={{stopColor:"#e0e7ff", stopOpacity:0.5}} />
              <stop offset="60%" style={{stopColor:"#f3e8ff", stopOpacity:0.4}} />
              <stop offset="100%" style={{stopColor:"#fce7f3", stopOpacity:0.3}} />
            </linearGradient>
            {/* Wavy Lines Pattern */}
            <pattern id="wavy-lines" width="200" height="100" patternUnits="userSpaceOnUse">
              <path d="M0,50 Q50,20 100,50 T200,50" fill="none" stroke="#c7d2fe" strokeWidth="2" opacity="0.6"/>
              <path d="M0,70 Q50,40 100,70 T200,70" fill="none" stroke="#ddd6fe" strokeWidth="1.5" opacity="0.5"/>
            </pattern>
            {/* Geometric Shapes Pattern */}
            <pattern id="geometric-shapes" width="120" height="120" patternUnits="userSpaceOnUse">
              <rect x="20" y="20" width="8" height="8" fill="#c7d2fe" opacity="0.4" rx="2"/>
              <circle cx="80" cy="40" r="4" fill="#ddd6fe" opacity="0.4"/>
              <rect x="60" y="80" width="6" height="6" fill="#c7d2fe" opacity="0.3" rx="1"/>
              <circle cx="30" cy="90" r="3" fill="#ddd6fe" opacity="0.4"/>
            </pattern>
            {/* Gradient for decorative elements */}
            <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"#c7d2fe", stopOpacity:0.3}} />
              <stop offset="50%" style={{stopColor:"#ddd6fe", stopOpacity:0.2}} />
              <stop offset="100%" style={{stopColor:"#e0e7ff", stopOpacity:0.3}} />
            </linearGradient>
          </defs>
          
          {/* Full background gradient */}
          <rect width="100%" height="100%" fill="url(#fullBackground)" />
          
          {/* Base patterns */}
          <rect width="100%" height="100%" fill="url(#wavy-lines)" />
          <rect width="100%" height="100%" fill="url(#geometric-shapes)" />
          
          {/* Decorative SVG Elements - Complete Full Background Coverage */}
          {/* Large floating circles - distributed across full area including edges */}
          <circle cx="2%" cy="5%" r="60" fill="#c7d2fe" opacity="0.3"/>
          <circle cx="98%" cy="8%" r="80" fill="#ddd6fe" opacity="0.25"/>
          <circle cx="5%" cy="95%" r="50" fill="#e0e7ff" opacity="0.3"/>
          <circle cx="95%" cy="92%" r="70" fill="#f3e8ff" opacity="0.25"/>
          <circle cx="50%" cy="3%" r="45" fill="#fce7f3" opacity="0.2"/>
          <circle cx="25%" cy="50%" r="55" fill="#c7d2fe" opacity="0.3"/>
          <circle cx="75%" cy="50%" r="65" fill="#ddd6fe" opacity="0.25"/>
          <circle cx="1%" cy="60%" r="40" fill="#e0e7ff" opacity="0.3"/>
          <circle cx="99%" cy="40%" r="50" fill="#f3e8ff" opacity="0.25"/>
          <circle cx="10%" cy="25%" r="35" fill="#ddd6fe" opacity="0.2"/>
          <circle cx="90%" cy="35%" r="45" fill="#c7d2fe" opacity="0.25"/>
          <circle cx="8%" cy="75%" r="40" fill="#e0e7ff" opacity="0.3"/>
          <circle cx="92%" cy="65%" r="55" fill="#ddd6fe" opacity="0.2"/>
          <circle cx="15%" cy="45%" r="30" fill="#c7d2fe" opacity="0.25"/>
          <circle cx="85%" cy="55%" r="35" fill="#e0e7ff" opacity="0.2"/>
          <circle cx="3%" cy="35%" r="25" fill="#ddd6fe" opacity="0.3"/>
          <circle cx="97%" cy="25%" r="30" fill="#c7d2fe" opacity="0.25"/>
          <circle cx="7%" cy="85%" r="35" fill="#e0e7ff" opacity="0.2"/>
          <circle cx="93%" cy="75%" r="40" fill="#ddd6fe" opacity="0.25"/>
          
          {/* Abstract curved paths - covering full width */}
          <path d="M0% 20% Q25% 10% 50% 20% T100% 20%" fill="none" stroke="#c7d2fe" strokeWidth="2" opacity="0.3"/>
          <path d="M0% 80% Q25% 90% 50% 80% T100% 80%" fill="none" stroke="#ddd6fe" strokeWidth="1.5" opacity="0.25"/>
          
          {/* Floating geometric elements - distributed across full area including edges */}
          <rect x="2%" y="35%" width="40" height="40" fill="#c7d2fe" opacity="0.2" rx="8" transform="rotate(15 2% 35%)"/>
          <rect x="78%" y="65%" width="30" height="30" fill="#ddd6fe" opacity="0.25" rx="6" transform="rotate(-20 78% 65%)"/>
          <rect x="20%" y="10%" width="25" height="25" fill="#e0e7ff" opacity="0.2" rx="5" transform="rotate(30 20% 10%)"/>
          <rect x="70%" y="20%" width="35" height="35" fill="#c7d2fe" opacity="0.15" rx="7" transform="rotate(-15 70% 20%)"/>
          <rect x="35%" y="80%" width="30" height="30" fill="#ddd6fe" opacity="0.2" rx="6" transform="rotate(25 35% 80%)"/>
          <rect x="88%" y="88%" width="20" height="20" fill="#e0e7ff" opacity="0.15" rx="4" transform="rotate(-30 88% 88%)"/>
          
          {/* Polygons - scattered across full background including edges */}
          <polygon points="92%,12% 98%,16% 95%,26% 85%,22%" fill="#c7d2fe" opacity="0.2"/>
          <polygon points="12%,78% 22%,82% 17%,92% 7%,88%" fill="#ddd6fe" opacity="0.2"/>
          
          {/* Connecting lines - minimal for clean look */}
          <line x1="2%" y1="15%" x2="98%" y2="25%" stroke="#c7d2fe" strokeWidth="1.5" opacity="0.2"/>
          <line x1="5%" y1="85%" x2="95%" y2="75%" stroke="#ddd6fe" strokeWidth="1.5" opacity="0.15"/>
          
          {/* Dotted paths - minimal for clean look */}
          <path d="M0% 30% Q25% 20% 50% 30% T100% 30%" fill="none" stroke="#c7d2fe" strokeWidth="1.5" opacity="0.2" strokeDasharray="5,5"/>
          <path d="M0% 70% Q25% 80% 50% 70% T100% 70%" fill="none" stroke="#ddd6fe" strokeWidth="1.5" opacity="0.2" strokeDasharray="3,7"/>
        </svg>
      </div>

      <div className="relative max-w-[88.4rem] mx-auto px-4 sm:px-6 lg:px-8 py-6 z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Main Content Card */}
          <div className="bg-white rounded-3xl p-8 md:p-10 lg:p-12 shadow-2xl border border-gray-100/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Left Side - Text Content */}
              <div className="order-2 lg:order-1">
                {/* Main Heading */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-5 md:mb-7 leading-tight">
                  Learn from the
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight animate-pulse">
                    Subject Matter Experts
                  </span>
                </h1>

                {/* Subheading */}
                <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-7 md:mb-9 font-medium leading-relaxed">
                  Connect with subject matter experts and academics in cutting-edge fields. 
                  <span className="text-gray-800 font-bold">Gain practical knowledge</span> through hands-on demonstrations and real-world exercises.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 sm:gap-6">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className={`transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                      }`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <div className="flex flex-col items-center gap-3">
                        <div className="bg-blue-600 p-3 rounded-xl shadow-md">
                          <stat.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="text-xl md:text-2xl font-bold text-gray-800">{stat.value}</div>
                        <div className="text-sm font-medium text-gray-600 text-center leading-tight">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&h=750&fit=crop&crop=center"
                    alt="Learning and Education"
                    className="w-full h-auto rounded-3xl shadow-xl"
                  />
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