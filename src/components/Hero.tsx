import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-ambulance.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Alert Medical Response Ambulance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max w-full px-4 md:px-8">
        <div className="max-w-2xl text-secondary-foreground animate-fade-in">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Reliable Medical Transportation Services in Houston
          </h1>
          <p className="text-lg md:text-xl text-secondary-foreground/90 mb-8 leading-relaxed">
            Stretcher (BLS), wheelchair, dialysis and facility transfers throughout Harris County. 
            Professional EMT Staff. Safe. On-time. Compassionate care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:8327555533"
              className="cta-primary flex items-center justify-center gap-2 text-lg"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now 832-755-5533</span>
            </a>
            <Link
              to="/new-patients"
              className="cta-outline flex items-center justify-center gap-2 text-lg"
            >
              <span>Request Transport</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm text-secondary-foreground/80">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Serving Houston & Harris County
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Professional EMT Staff
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              On-Time Transport
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
