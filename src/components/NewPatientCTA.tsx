import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const NewPatientCTA = () => {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8 bg-brand-blue-light">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Card - New Patient Registration */}
          <div className="bg-card rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-3">
              New Patient Registration
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              All new patients must complete our secure intake form prior to their first scheduled transport.
            </p>
            <Link
              to="/new-patients"
              className="cta-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <span>Start Intake Form</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Card - Contact Us */}
          <div className="bg-card rounded-xl shadow-lg p-6 md:p-8 flex flex-col">
            <h2 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-3">
              Contact Us
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow">
              Have questions or need assistance? Our dispatch team is ready to help.
            </p>
            <Link
              to="/contact"
              className="cta-secondary inline-flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <span>Contact</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewPatientCTA;
