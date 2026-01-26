import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Facilities", path: "/facilities" },
    { name: "New Patients", path: "/new-patients" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-max">
        <div className="flex items-center justify-between h-16 md:h-18 px-4 md:px-8">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Alert Medical Response" className="h-10 md:h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${isActive(link.path) ? "text-primary font-semibold" : ""}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:8327555533" className="text-foreground font-semibold hover:text-primary transition-colors">
              832-755-5533
            </a>
            <Link to="/new-patients" className="cta-primary">
              Request Transportation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <nav className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link py-2 ${isActive(link.path) ? "text-primary font-semibold" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a href="tel:8327555533" className="text-foreground font-semibold text-center py-2 mt-2">
                Dispatch: 832-755-5533
              </a>
              <Link to="/new-patients" className="cta-primary flex items-center justify-center mt-2" onClick={() => setIsMenuOpen(false)}>
                Request Transportation
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
