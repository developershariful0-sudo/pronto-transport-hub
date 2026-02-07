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
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
            Medical Transportation Services in Houston
          </h1>
          <p className="text-base md:text-lg text-secondary-foreground/90 mb-6 leading-relaxed">
            Reliable non-emergency medical transportation for patients, families, and healthcare facilities throughout Houston and Harris County.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/new-patients"
              className="cta-primary flex items-center justify-center gap-2"
            >
              <span>Request Transportation</span>
            </Link>
            <a
              href="tel:8327555533"
              className="cta-outline flex items-center justify-center gap-2"
            >
              <span>Call Dispatch</span>
            </a>
          </div>

          {/* Trust Line */}
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-secondary-foreground/90">
            <span>Serving Houston & Harris County</span>
            <span className="hidden sm:inline">•</span>
            <span>EMT-Staffed</span>
            <span className="hidden sm:inline">•</span>
            <span>On-Time Transport</span>
            <span className="hidden sm:inline">•</span>
            <span>In Service Since 2008</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
