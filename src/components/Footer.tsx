import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <img src={logo} alt="Alert Medical Response" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Professional medical transportation services serving Houston and Harris County. Safe, reliable, and compassionate care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Home</Link>
              <Link to="/services" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Our Services</Link>
              <Link to="/new-patients" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">New Patients</Link>
              <Link to="/facilities" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Facilities</Link>
              <Link to="/contact" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Our Services</h4>
            <nav className="flex flex-col gap-2 text-secondary-foreground/80 text-sm">
              <span>Stretcher Transport (BLS)</span>
              <span>Wheelchair Transport</span>
              <span>Dialysis Transportation</span>
              <span>Hospital Discharge</span>
              <span>Facility-to-Facility</span>
              <span>Nursing Homes & Assisted Living</span>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <a href="tel:8327555533" className="flex items-center gap-3 text-secondary-foreground hover:text-primary-foreground transition-colors">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="font-semibold">832-755-5533</span>
              </a>
              <a href="mailto:Alertmedicalr@yahoo.com" className="flex items-center gap-3 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>Alertmedicalr@yahoo.com</span>
              </a>
              <div className="flex items-start gap-3 text-secondary-foreground/80">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>6776 Southwest Fwy, Suite 350<br />Houston, TX 77072</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/60 text-sm">
            © {new Date().getFullYear()} Alert Medical Response. All rights reserved.
          </p>
          <p className="text-secondary-foreground/60 text-sm">
            Serving Houston & Harris County
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
