import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Instructors = () => {
  useEffect(() => {
    // Force scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Featured Instructors Section */}
        <section className="py-16 pt-32 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 relative overflow-hidden">
          {/* Enhanced Background decorative elements with animations */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1000ms'}}></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '500ms'}}></div>
            
            {/* Floating instructor icons - Optimized */}
            <div className="absolute top-24 right-16 animate-float" style={{animationDelay: '400ms'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-white text-2xl">👨‍🏫</span>
              </div>
            </div>
            <div className="absolute bottom-24 left-16 animate-float-slow" style={{animationDelay: '800ms'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-white text-2xl">👩‍🏫</span>
              </div>
            </div>
            <div className="absolute top-1/3 right-8 animate-float" style={{animationDelay: '1200ms'}}>
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🎓</span>
              </div>
            </div>
            
            {/* Animated teaching elements */}
            <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping" style={{animationDelay: '300ms'}}></div>
            <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rotate-45 animate-spin" style={{animationDuration: '5s'}}></div>
            <div className="absolute top-3/4 left-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full animate-pulse" style={{animationDelay: '600ms'}}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                Meet Our Expert Instructors
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Learn from industry veterans and certified professionals
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Instructor 1 */}
              <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center p-6">
                <div className="relative">
                  <div className="mb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto shadow-lg border-2 border-blue-500">
                      <img 
                        src="/instructor image/d15df5c1-5f69-46f4-9e82-334523be6517.png" 
                        alt="Mr Manas Khare"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">Mr Manas Khare</h3>
                  <p className="text-blue-600 font-medium text-sm">AR/VR Engineer</p>
                  <p className="text-gray-600 text-xs mt-1">Google Inc</p>
                </div>
              </Card>

                {/* Instructor 2 */}
              <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center p-6">
                <div className="relative">
                  <div className="mb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto shadow-lg border-2 border-green-500">
                      <img 
                        src="/instructor image/8890a0f9-4c33-4839-91ce-b23e55933fb6.png" 
                        alt="Mr Sridhar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">Mr Sridhar</h3>
                  <p className="text-green-600 font-medium text-sm">Founder & CEO, XR developer</p>
                  <p className="text-gray-600 text-xs mt-1">Intrino Robotics & Technologies Pvt Ltd</p>
                </div>
              </Card>

                {/* Instructor 3 */}
              <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center p-6">
                <div className="relative">
                  <div className="mb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto shadow-lg border-2 border-purple-500">
                      <img 
                        src="/instructor image/6a288f03-bff6-40a7-8ab0-2d80bfe3a971.png" 
                        alt="Mr. Stalin Mani"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">Mr. Stalin Mani</h3>
                  <p className="text-purple-600 font-medium text-sm">Principal XR Architect</p>
                  <p className="text-gray-600 text-xs mt-1">Intrino Technologies</p>
                </div>
              </Card>

                {/* Instructor 4 */}
              <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center p-6">
                <div className="relative">
                  <div className="mb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto shadow-lg border-2 border-orange-500">
                      <img 
                        src="/instructor image/bb1938ab-192a-4081-90f0-72225a5ab773.png" 
                        alt="Mr. Premkumar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">Mr. Premkumar</h3>
                  <p className="text-orange-600 font-medium text-sm">Senior XR Developer</p>
                  <p className="text-gray-600 text-xs mt-1">Intrino Technologies</p>
                </div>
              </Card>

                {/* Instructor 5 */}
              <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center p-6">
                <div className="relative">
                  <div className="mb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto shadow-lg border-2 border-cyan-500">
                      <img 
                        src="/instructor image/a6f7740d-b36a-4bbd-98bc-6952c2ec573e.png" 
                        alt="Dr Meena Kannan"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-cyan-600 transition-colors">Dr Meena Kannan</h3>
                  <p className="text-cyan-600 font-medium text-sm">AR/VR Developer, Ass Prof</p>
                  <p className="text-gray-600 text-xs mt-1">KCT</p>
                </div>
              </Card>

                {/* Instructor 6 */}
              <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center p-6">
                <div className="relative">
                  <div className="mb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto shadow-lg border-2 border-indigo-500">
                      <img 
                        src="/instructor image/ce1ac961-286e-4b8c-8249-cc59f008997d.png" 
                        alt="Mr. Balaji"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">Mr. Balaji</h3>
                  <p className="text-indigo-600 font-medium text-sm">XR Developer</p>
                  <p className="text-gray-600 text-xs mt-1">Intrino Technologies</p>
                </div>
              </Card>

                {/* Instructor 7 */}
              <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center p-6">
                <div className="relative">
                  <div className="mb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto shadow-lg border-2 border-emerald-500">
                      <img 
                        src="/instructor image/253ff3f1-c6ce-464f-bff3-98922aa950b3.png" 
                        alt="Mr Alekh Johari"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">Mr Alekh Johari</h3>
                  <p className="text-emerald-600 font-medium text-sm">FOUNDER</p>
                  <p className="text-gray-600 text-xs mt-1">ANEMOI SOLUTION</p>
                </div>
              </Card>

                {/* Instructor 8 */}
              <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center p-6">
                <div className="relative">
                  <div className="mb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto shadow-lg border-2 border-rose-500">
                      <img 
                        src="/instructor image/a3e46b7b-b8ab-4809-96e8-aeb66e0604a5.png" 
                        alt="Dr Veera Talukdar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-rose-600 transition-colors">Dr Veera Talukdar</h3>
                  <p className="text-rose-600 font-medium text-sm">AI Solutions Architect for AR/VR</p>
                  <p className="text-gray-600 text-xs mt-1">PDF, IIT Bombay</p>
                </div>
              </Card>

                {/* Instructor 9 */}
              <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center p-6">
                <div className="relative">
                  <div className="mb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto shadow-lg border-2 border-yellow-500">
                      <img 
                        src="/instructor image/508731e2-626a-4add-a79a-b72c80dc88c1.png" 
                        alt="Dr Mangal Raj"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors">Dr Mangal Raj</h3>
                  <p className="text-yellow-600 font-medium text-sm">Expert Extended reality</p>
                  <p className="text-gray-600 text-xs mt-1">PhD from IIIT</p>
                </div>
              </Card>
              </div>
          </div>
        </section>

        {/* How to Become an Instructor Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 right-20 w-40 h-40 bg-blue-200/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-32 h-32 bg-purple-200/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1000ms'}}></div>
            <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-indigo-200/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '500ms'}}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                How to Become an Instructor
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join our community of expert instructors and share your knowledge with learners worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto shadow-lg">
                      1
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">Apply Online</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Submit your application with your credentials, experience, and course proposal through our online portal.
                  </p>
                </div>
              </Card>

              {/* Step 2 */}
              <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto shadow-lg">
                      2
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">Expert Review</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our expert panel reviews your application, credentials, and teaching methodology to ensure quality standards.
                  </p>
                </div>
              </Card>

              {/* Step 3 */}
              <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto shadow-lg">
                      3
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">Training & Setup</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Complete our instructor training program and set up your course materials using our platform tools.
                  </p>
                </div>
              </Card>

              {/* Step 4 */}
              <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto shadow-lg">
                      4
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">Start Teaching</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Launch your course and start teaching students while earning competitive compensation for your expertise.
                  </p>
                </div>
                </Card>
            </div>

            {/* Requirements Section */}
            <div className="mt-16 bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Instructor Requirements</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  To become a ProLearn instructor, you should meet the following criteria:
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-700">Minimum 3+ years of professional experience in your field</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                      </div>
                    <p className="text-gray-700">Relevant certifications or degrees in your subject area</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-700">Strong communication and presentation skills</p>
              </div>
            </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-700">Passion for teaching and helping others learn</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-700">Ability to create engaging and practical course content</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-700">Commitment to maintaining high-quality educational standards</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Link to="/become-instructor">
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    Apply to Become an Instructor
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Instructors;