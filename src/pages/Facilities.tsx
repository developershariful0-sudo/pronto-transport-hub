import { Link } from "react-router-dom";
import { Hospital, Home, Heart, Building2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Facilities = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-secondary text-secondary-foreground py-12 px-4">
          <div className="container-max text-center">
            <h1 className="font-heading font-bold text-3xl md:text-4xl mb-4">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-card rounded-xl shadow-lg p-6 border-l-4 border-primary">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Hospital className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground">Hospitals</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Fast, reliable discharge transportation. We coordinate with case managers and discharge planners for smooth patient transitions.
                </p>
              </div>

              <div className="bg-card rounded-xl shadow-lg p-6 border-l-4 border-secondary">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Home className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground">Nursing Homes</h3>
                </div>
                <p className="text-muted-foreground text-sm">
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
                <p className="text-muted-foreground text-sm">
                  Reliable recurring transport for dialysis patients. We understand the critical nature of on-time arrivals.
                </p>
              </div>

              <div className="bg-card rounded-xl shadow-lg p-6 border-l-4 border-secondary">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground">Rehab & Specialty</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Inter-facility transfers between rehab centers, specialty clinics, and other healthcare providers.
                </p>
              </div>
            </div>

            {/* Request Transportation CTA */}
            <div className="bg-card rounded-2xl shadow-xl p-8 md:p-10 text-center mb-10">
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
                Request Transportation
              </h2>
              <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
                For fast transportation requests, use our online form or contact our dispatch team directly. Available 24/7.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link to="/request-transportation" className="cta-primary">
                  Request Transportation
                </Link>
                <a href="tel:8327555533" className="cta-secondary">
                  Call Dispatch: 832-755-5533
                </a>
              </div>

              <div className="bg-muted rounded-xl p-6 max-w-xl mx-auto text-left">
                <h3 className="font-semibold text-foreground mb-3">What to Have Ready:</h3>
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• Patient name and date of birth</li>
                  <li>• Pickup and destination addresses</li>
                  <li>• Requested pickup date and time</li>
                  <li>• Transport type (stretcher, wheelchair)</li>
                  <li>• Special equipment needs (oxygen, etc.)</li>
                  <li>• Insurance information</li>
                </ul>
              </div>
            </div>

            {/* Portal Note */}
            <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-6 text-center">
              <p className="text-muted-foreground">
                Facilities may request a personalized customer portal and QR request page to simplify scheduling. To request portal access, contact dispatch at{" "}
                <a href="tel:8327555533" className="text-primary font-semibold">(832) 755-5533</a> or email{" "}
                <a href="mailto:info@alertmedicalresponse.net" className="text-primary font-semibold">info@alertmedicalresponse.net</a>.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-background">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
                  Partner with Alert Medical Response
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  We work closely with healthcare facilities across Harris County to provide reliable, professional medical transportation. Contact us to discuss partnership opportunities.
                </p>
                <div className="space-y-3 text-sm">
                  <p className="text-foreground">
                    <span className="font-semibold">Dispatch:</span>{" "}
                    <a href="tel:8327555533" className="text-primary font-semibold">832-755-5533</a>
                  </p>
                  <p className="text-foreground">
                    <span className="font-semibold">Email:</span>{" "}
                    <a href="mailto:info@alertmedicalresponse.net" className="text-secondary">info@alertmedicalresponse.net</a>
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Address:</span> 6776 Southwest Fwy, Suite 350, Houston, TX 77072
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Service Area:</span> Houston & Harris County (Katy, Sugar Land, Pasadena, Pearland, Cypress, Spring)
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
                <Link to="/contact" className="cta-secondary w-full flex items-center justify-center">
                  Contact Us
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
