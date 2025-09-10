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
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top Section: Prolearn Branding */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg shadow-lg">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold text-white">Prolearn</span>
          </div>
          <p className="text-slate-300 text-xs mb-2 leading-relaxed">
            Empowering learners worldwide with expert knowledge and practical skills.
          </p>
          <div className="flex gap-2">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="p-2 rounded-lg bg-blue-600 hover:bg-purple-600 text-white transition-all duration-300 transform hover:scale-110"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-4 gap-6 mb-6">
          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-3 text-base">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-700">
          <div className="flex flex-row justify-center items-center gap-6">
            <p className="text-sm text-white">
              © 2025 Prolearn. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-white">
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Privacy</a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;