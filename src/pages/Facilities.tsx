import { Phone, ArrowRight, Building2, Hospital, Home, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Facilities = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-secondary text-secondary-foreground py-16 px-4">
          <div className="container-max text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              For Healthcare Facilities
            </h1>
            <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto">
              Streamlined transportation requests for hospitals, nursing homes, dialysis centers, and healthcare facilities across Harris County.
            </p>
          </div>
        </section>

        {/* Facility Types */}
        <section className="section-padding bg-muted">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-card rounded-xl shadow-lg p-6 border-l-4 border-primary">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Hospital className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground">Hospitals</h3>
                </div>
                <p className="text-muted-foreground">
                  Fast, reliable discharge transportation. We coordinate with case managers and discharge planners to ensure smooth patient transitions.
                </p>
              </div>

              <div className="bg-card rounded-xl shadow-lg p-6 border-l-4 border-secondary">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Home className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground">Nursing Homes</h3>
                </div>
                <p className="text-muted-foreground">
                  Scheduled and on-demand transportation for skilled nursing facilities and assisted living communities.
                </p>
              </div>

              <div className="bg-card rounded-xl shadow-lg p-6 border-l-4 border-primary">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground">Dialysis Centers</h3>
                </div>
                <p className="text-muted-foreground">
                  Reliable recurring transport for dialysis patients. We understand the critical nature of on-time arrivals for treatment schedules.
                </p>
              </div>

              <div className="bg-card rounded-xl shadow-lg p-6 border-l-4 border-secondary">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground">Rehab & Specialty</h3>
                </div>
                <p className="text-muted-foreground">
                  Inter-facility transfers between rehab centers, specialty clinics, and other healthcare providers.
                </p>
              </div>
            </div>

            {/* Request Transportation */}
            <div className="bg-card rounded-2xl shadow-xl p-8 md:p-12 text-center">
              <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
                Request Transportation
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                For fast transportation requests, contact our dispatch team directly or use our partner portal. 
                Our team is available 24/7 to handle your facility's transportation needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="tel:8327555533" className="cta-primary flex items-center justify-center gap-2 text-lg">
                  <Phone className="w-5 h-5" />
                  <span>Call Dispatch: 832-755-5533</span>
                </a>
              </div>

              <div className="bg-muted rounded-xl p-6 max-w-xl mx-auto">
                <h3 className="font-semibold text-foreground mb-3">What to Have Ready:</h3>
                <ul className="text-muted-foreground text-left space-y-2">
                  <li>• Patient name and date of birth</li>
                  <li>• Pickup and destination addresses</li>
                  <li>• Requested pickup date and time</li>
                  <li>• Transport type (stretcher, wheelchair)</li>
                  <li>• Special equipment needs (oxygen, etc.)</li>
                  <li>• Insurance information</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-background">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
                  Partner with Alert Medical Response
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  We work closely with healthcare facilities across Harris County to provide reliable, professional medical transportation services. 
                  Contact us to discuss partnership opportunities and dedicated account management.
                </p>
                <div className="space-y-4">
                  <p className="flex items-center gap-3 text-foreground">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>Dispatch: <a href="tel:8327555533" className="text-primary font-semibold">832-755-5533</a></span>
                  </p>
                  <p className="flex items-center gap-3 text-foreground">
                    <Building2 className="w-5 h-5 text-secondary" />
                    <span>Billing: aramatbilling1@yahoo.com</span>
                  </p>
                </div>
              </div>

              <div className="bg-card rounded-2xl shadow-xl p-8">
                <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                  Quick Contact for Facilities
                </h3>
                <p className="text-muted-foreground mb-6">
                  For general inquiries, partnership discussions, or to set up a facility account, please contact us.
                </p>
                <Link to="/contact" className="cta-secondary w-full flex items-center justify-center gap-2">
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Facilities;
