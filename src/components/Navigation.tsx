import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/instructors", label: "Instructors" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/PROLEARN.png" 
              alt="ProLearn Logo" 
              className="h-36 w-auto object-contain filter-none bg-transparent"
              style={{ backgroundColor: 'transparent' }}
              onError={(e) => {
                const target = e.currentTarget;
                const fallback = target.nextElementSibling as HTMLElement;
                if (target && fallback) {
                  target.style.display = 'none';
                  fallback.style.display = 'flex';
                }
              }}
            />
            <div className="hidden items-center gap-2">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg shadow-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-lg font-bold text-foreground">Prolearn</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`transition-colors duration-200 font-bold text-sm ${
                    isActive 
                      ? "text-gray-600 bg-primary/10 px-3 py-2 rounded-lg" 
                      : "text-gray-600 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/signin">
              <Button className="bg-orange-200 text-orange-600 hover:bg-orange-300 hover:text-orange-700 font-bold text-sm transition-all duration-200 hover:scale-105">Sign In</Button>
            </Link>
            <Link to="/signup">
              <Button variant="hero" className="font-bold text-sm hover:scale-105 transition-transform duration-200">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`px-4 py-2 rounded-md transition-colors font-bold text-sm ${
                      isActive 
                        ? "text-gray-600 bg-primary/10" 
                        : "text-gray-600 hover:text-primary hover:bg-muted"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="flex flex-col gap-2 px-4 pt-4 border-t border-border">
                <Link to="/signin" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-orange-200 text-orange-600 hover:bg-orange-300 hover:text-orange-700 font-bold text-sm transition-all duration-200 hover:scale-105">Sign In</Button>
                </Link>
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="hero" className="w-full font-bold text-sm hover:scale-105 transition-transform duration-200">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;