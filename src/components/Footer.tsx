import { GraduationCap, Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Platform: ["About Us", "How It Works", "Pricing", "Success Stories"],
    Learn: ["Browse Courses", "Categories", "Certificates", "Scholarships"],
    Teach: ["Become Instructor", "Teaching Guide", "Instructor Dashboard", "Resources"],
    Support: ["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"],
  };

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Youtube, href: "#" },
    { icon: Instagram, href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
          {/* Prolearn Branding - Takes up 2 columns */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl shadow-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Prolearn</span>
            </div>
            <p className="text-slate-300 text-base mb-6 leading-relaxed max-w-md">
              Empowering learners worldwide with expert knowledge and practical skills.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-3 rounded-xl bg-blue-600 hover:bg-purple-600 text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
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
                      <a
                        href="#"
                        className="text-base text-slate-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-base text-slate-400">
              © 2025 Prolearn. All rights reserved.
            </p>
            <div className="flex gap-6 text-base text-slate-400">
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;