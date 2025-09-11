import { Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import ProLearnLogo from "/PROLEARN.png"; 

const Footer = () => {
  const footerLinks = {
    Platform: ["Home", "Courses", "Instructors", "About", "Contact"],
    Learn: ["Browse Courses", "Categories", "Certificates"],
    Teach: ["Become Instructor", "Teaching Guide"],
    Support: ["Contact Us", "Privacy Policy", "Terms of Service"],
  };

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Youtube, href: "#" }, 
    { icon: Instagram, href: "#" },
  ];

  return (
    <footer className="bg-slate-800 border-t border-slate-700 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
          {/* Prolearn Branding - Takes up 2 columns */}
          <div className="lg:col-span-2">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <img 
                  src={ProLearnLogo} 
                  alt="ProLearn Logo" 
                  className="h-20 w-auto object-contain"
                  style={{ maxHeight: '80px' }}
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-2xl mb-3">Prolearn</h3>
                <p className="text-slate-300 text-base leading-relaxed max-w-md">
                  Empowering learners worldwide with expert knowledge and practical skills.
                </p>
              </div>
            </div>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-3 rounded-lg bg-white hover:bg-gray-100 text-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex-shrink-0"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links - Takes up 3 columns */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold text-white mb-4 text-lg">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      {link === "Become Instructor" ? (
                        <Link
                          to="/become-instructor"
                          className="text-base text-slate-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                        >
                          {link}
                        </Link>
                      ) : link === "Home" ? (
                        <Link
                          to="/"
                          className="text-base text-slate-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                        >
                          {link}
                        </Link>
                      ) : link === "Courses" ? (
                        <Link
                          to="/courses"
                          className="text-base text-slate-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                        >
                          {link}
                        </Link>
                      ) : link === "Instructors" ? (
                        <Link
                          to="/instructors"
                          className="text-base text-slate-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                        >
                          {link}
                        </Link>
                      ) : link === "About" ? (
                        <Link
                          to="/about"
                          className="text-base text-slate-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                        >
                          {link}
                        </Link>
                      ) : link === "Contact" ? (
                        <Link
                          to="/contact"
                          className="text-base text-slate-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                        >
                          {link}
                        </Link>
                      ) : link === "Browse Courses" || link === "Categories" || link === "Certificates" ? (
                        <Link
                          to="/courses"
                          className="text-base text-slate-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                        >
                          {link}
                        </Link>
                      ) : link === "Contact Us" ? (
                        <Link
                          to="/contact"
                          className="text-base text-slate-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                        >
                          {link}
                        </Link>
                      ) : link === "Privacy Policy" ? (
                        <Link
                          to="/privacy-policy"
                          className="text-base text-slate-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                        >
                          {link}
                        </Link>
                      ) : link === "Terms of Service" ? (
                        <Link
                          to="/terms-of-service"
                          className="text-base text-slate-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                        >
                          {link}
                        </Link>
                      ) : (
                        <a
                          href="#"
                          className="text-base text-slate-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                        >
                          {link}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-700">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <p className="text-base text-slate-400">
              © 2025 Prolearn. All rights reserved.
            </p>
            <div className="flex gap-6 text-base text-slate-400">
              <Link to="/privacy-policy" className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-blue-400 transition-colors duration-300">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;