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
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center pt-8 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
              <svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f8fafc;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#e2e8f0;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#cbd5e1;stop-opacity:1" />
                  </linearGradient>
                </defs>
                <rect width="1920" height="1080" fill="url(#bg)"/>
                <rect x="300" y="200" width="600" height="400" fill="#1f2937" rx="8"/>
                <rect x="320" y="220" width="560" height="360" fill="#111827" rx="4"/>
                <text x="400" y="280" fill="#f9fafb" font-family="Arial" font-size="24" font-weight="bold">AI &amp; Machine Learning</text>
                <text x="400" y="320" fill="#f9fafb" font-family="Arial" font-size="20">&bull; Neural Networks</text>
                <text x="400" y="350" fill="#f9fafb" font-family="Arial" font-size="20">&bull; Deep Learning</text>
                <text x="400" y="380" fill="#f9fafb" font-family="Arial" font-size="20">&bull; Data Science</text>
                <text x="400" y="410" fill="#f9fafb" font-family="Arial" font-size="20">&bull; Python Programming</text>
                <text x="400" y="440" fill="#f9fafb" font-family="Arial" font-size="20">&bull; TensorFlow &amp; PyTorch</text>
                <text x="400" y="470" fill="#f9fafb" font-family="Arial" font-size="20">&bull; Computer Vision</text>
                <text x="400" y="500" fill="#f9fafb" font-family="Arial" font-size="20">&bull; Natural Language Processing</text>
                <rect x="200" y="650" width="200" height="100" fill="#8b5cf6" opacity="0.3" rx="8"/>
                <rect x="210" y="660" width="180" height="80" fill="#7c3aed" opacity="0.4" rx="4"/>
                <rect x="250" y="680" width="100" height="60" fill="#374151" rx="4"/>
                <rect x="260" y="690" width="80" height="40" fill="#1f2937" rx="2"/>
                <rect x="1000" y="300" width="120" height="80" fill="#3b82f6" opacity="0.2" rx="4"/>
                <rect x="1150" y="300" width="120" height="80" fill="#3b82f6" opacity="0.2" rx="4"/>
                <rect x="1300" y="300" width="120" height="80" fill="#3b82f6" opacity="0.2" rx="4"/>
                <rect x="1000" y="400" width="120" height="80" fill="#3b82f6" opacity="0.2" rx="4"/>
                <rect x="1150" y="400" width="120" height="80" fill="#3b82f6" opacity="0.2" rx="4"/>
                <rect x="1300" y="400" width="120" height="80" fill="#3b82f6" opacity="0.2" rx="4"/>
                <rect x="1050" y="320" width="20" height="40" fill="#dc2626" opacity="0.6"/>
                <rect x="1075" y="320" width="20" height="40" fill="#059669" opacity="0.6"/>
                <rect x="1100" y="320" width="20" height="40" fill="#7c3aed" opacity="0.6"/>
                <rect x="1200" y="320" width="20" height="40" fill="#dc2626" opacity="0.6"/>
                <rect x="1225" y="320" width="20" height="40" fill="#059669" opacity="0.6"/>
                <rect x="1250" y="320" width="20" height="40" fill="#7c3aed" opacity="0.6"/>
                <rect x="1020" y="330" width="60" height="40" fill="#374151" opacity="0.7" rx="2"/>
                <rect x="1170" y="330" width="60" height="40" fill="#374151" opacity="0.7" rx="2"/>
                <rect x="1320" y="330" width="60" height="40" fill="#374151" opacity="0.7" rx="2"/>
                <circle cx="150" cy="150" r="25" fill="#3b82f6" opacity="0.3"/>
                <text x="140" y="160" fill="#1e40af" font-family="Arial" font-size="20" font-weight="bold">📚</text>
                <circle cx="1700" cy="200" r="25" fill="#10b981" opacity="0.3"/>
                <text x="1690" y="210" fill="#059669" font-family="Arial" font-size="20" font-weight="bold">💻</text>
                <circle cx="150" cy="800" r="25" fill="#8b5cf6" opacity="0.3"/>
                <text x="140" y="810" fill="#7c3aed" font-family="Arial" font-size="20" font-weight="bold">🎓</text>
                <circle cx="1700" cy="850" r="25" fill="#f59e0b" opacity="0.3"/>
                <text x="1690" y="860" fill="#d97706" font-family="Arial" font-size="20" font-weight="bold">🔬</text>
                <rect x="50" y="100" width="4" height="200" fill="#fbbf24" opacity="0.4" transform="rotate(15 52 200)"/>
                <rect x="80" y="80" width="4" height="180" fill="#fbbf24" opacity="0.4" transform="rotate(15 82 170)"/>
                <rect x="110" y="60" width="4" height="160" fill="#fbbf24" opacity="0.4" transform="rotate(15 112 140)"/>
                <rect x="0" y="750" width="1920" height="330" fill="#f1f5f9"/>
                <rect x="1600" y="100" width="80" height="60" fill="#1e40af" opacity="0.2" rx="8"/>
                <text x="1620" y="140" fill="#1e40af" font-family="Arial" font-size="16" font-weight="bold">AI Lab</text>
                <rect x="1600" y="180" width="80" height="60" fill="#059669" opacity="0.2" rx="8"/>
                <text x="1610" y="220" fill="#059669" font-family="Arial" font-size="16" font-weight="bold">Data Lab</text>
              </svg>
            `)}')`
          }}
        ></div>
        
        {/* Light overlay for better text readability */}
        <div className="absolute inset-0 bg-white/20"></div>
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30"></div>
      </div>
      
      {/* Animated mesh gradient overlay */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-purple-600/10 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-emerald-500/5 via-transparent to-orange-500/10 animate-pulse delay-1000"></div>
      </div>
      
      {/* Floating geometric shapes with enhanced animations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-emerald-500/15 to-teal-600/20 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/3 -right-20 w-64 h-64 bg-gradient-to-bl from-orange-500/15 to-pink-500/15 rounded-full blur-2xl animate-float delay-500"></div>
        
        {/* Medium floating elements */}
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-xl animate-pulse delay-300"></div>
        <div className="absolute bottom-32 right-1/3 w-40 h-40 bg-gradient-to-tl from-purple-400/15 to-pink-500/15 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-full blur-lg animate-pulse delay-1200"></div>
        
        {/* Small accent particles */}
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-gradient-to-br from-yellow-400/25 to-orange-500/25 rounded-full blur-md animate-bounce delay-200"></div>
        <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-sm animate-bounce delay-800"></div>
        <div className="absolute top-3/4 right-1/5 w-20 h-20 bg-gradient-to-br from-violet-400/20 to-purple-500/20 rounded-full blur-lg animate-bounce delay-1500"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/3 right-1/5 w-8 h-8 bg-gradient-to-br from-blue-500/30 to-indigo-600/30 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-1/3 left-1/5 w-6 h-6 bg-gradient-to-br from-emerald-500/25 to-teal-600/25 rotate-12 animate-spin delay-1000" style={{animationDuration: '15s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-10 h-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full animate-ping delay-500"></div>
        
        {/* Decorative Learning Image with enhanced positioning */}
        <div className="absolute top-1/2 right-16 transform -translate-y-1/2 opacity-15 animate-float">
          <img 
            src="/hero-decoration.svg" 
            alt="Learning decoration" 
            className="w-40 h-40 lg:w-48 lg:h-48"
          />
        </div>
      </div>
      
      {/* Glassmorphism overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/10"></div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* Enhanced Main Heading with better gradients */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-4 leading-tight">
            Learn from the
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight animate-pulse">
              Subject Matter Experts
            </span>
          </h1>

          {/* Enhanced Subheading with better typography */}
          <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto mb-6 font-medium leading-relaxed">
            Connect with subject matter experts and academics in cutting-edge fields. 
            <span className="text-slate-700 font-semibold">Gain practical knowledge</span> through hands-on demonstrations and real-world exercises.
          </p>

          {/* Enhanced Stats with glassmorphism cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`transition-all duration-700 delay-${index * 200} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="flex flex-col items-center gap-3 p-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg hover:bg-white/15 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-xl shadow-lg">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm font-medium text-slate-600 text-center">{stat.label}</div>
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