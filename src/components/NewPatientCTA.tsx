import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const NewPatientCTA = () => {
  return (
    <section className="section-padding bg-brand-blue-light">
      <div className="container-max">
        <div className="bg-card rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Text */}
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                New Patient Registration
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                All new patients must complete our secure intake form prior to their first scheduled transport. 
                Our team will contact you to confirm your appointment and answer any questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/new-patients"
                  className="cta-secondary flex items-center justify-center gap-2"
                >
                  <span>Register Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:8327555533"
                  className="cta-primary flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>832-755-5533</span>
                </a>
              </div>
            </div>

            {/* Right: Contact Info */}
            <div className="bg-muted rounded-xl p-6 md:p-8">
              <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                Contact Information
              </h3>
              <div className="space-y-4 text-foreground">
                <p>
                  <span className="font-semibold">Dispatch:</span>{" "}
                  <a href="tel:8327555533" className="text-primary hover:underline">
                    832-755-5533
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  <a href="mailto:Alertmedicalr@yahoo.com" className="text-primary hover:underline">
                    Alertmedicalr@yahoo.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Address:</span><br />
                  6776 Southwest Fwy, Suite 350<br />
                  Houston, TX 77072
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewPatientCTA;
