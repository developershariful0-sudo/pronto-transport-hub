import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-ambulance.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[500px] md:min-h-[550px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Alert Medical Response Ambulance"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max w-full px-4 md:px-8">
        <div className="max-w-2xl text-secondary-foreground animate-fade-in">
          <h1 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
            Reliable Medical Transportation Services in Houston
          </h1>
          <p className="text-base md:text-lg text-secondary-foreground/90 mb-6 leading-relaxed">
            Stretcher (BLS), wheelchair, dialysis and facility transfers throughout Harris County. 
            Professional EMT Staff. Safe. On-time. Compassionate care.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:8327555533"
              className="cta-primary flex items-center justify-center gap-2"
            >
              <span>Call Now 832-755-5533</span>
            </a>
            <Link
              to="/new-patients"
              className="cta-outline flex items-center justify-center gap-2"
            >
              <span>Request Transport</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-sm text-secondary-foreground/80">
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
