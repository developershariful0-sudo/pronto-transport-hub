import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-max py-10 md:py-14 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Column 1 – Brand & Short Description */}
          <div>
            <img src={logo} alt="Alert Medical Response" className="h-10 w-auto mb-3 brightness-0 invert" />
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Professional medical transportation serving Houston and Harris County since 2008.
            </p>
          </div>

          {/* Column 2 – Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-base mb-3">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-sm">Home</Link>
              <Link to="/services" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-sm">Services</Link>
              <Link to="/new-patients" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-sm">New Patient Registration</Link>
              <Link to="/contact" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-sm">Contact</Link>
            </nav>
          </div>

          {/* Column 3 – Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-base mb-3">Contact Info</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a href="tel:8327555533" className="text-secondary-foreground hover:text-primary-foreground transition-colors font-semibold">
                Dispatch: 832-755-5533
              </a>
              <a href="mailto:info@alertmedicalresponse.net" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                info@alertmedicalresponse.net
              </a>
              <a href="mailto:dispatch@alertmedicalresponse.net" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                dispatch@alertmedicalresponse.net
              </a>
              <span className="text-secondary-foreground/80">
                6776 Southwest Fwy, Suite 350<br />
                Houston, TX 77072
              </span>
              <span className="text-secondary-foreground/80 mt-1">
                Service Area: Houston & Harris County
              </span>
            </div>
          </div>
        </div>

        {/* Urgent Note */}
        <div className="border-t border-secondary-foreground/20 mt-6 pt-4">
          <p className="text-secondary-foreground/70 text-sm text-center mb-4">
            For urgent scheduling or non-emergency ER calls, please call dispatch.
          </p>
        </div>

        {/* Footer CTA */}
        <div className="border-t border-secondary-foreground/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/60 text-sm">
              © {new Date().getFullYear()} Alert Medical Response. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/new-patients"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 text-sm text-center"
              >
                Request Transportation
              </Link>
              <a
                href="tel:8327555533"
                className="bg-card text-foreground hover:bg-card/90 font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 text-sm text-center"
              >
                Call Dispatch: 832-755-5533
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
