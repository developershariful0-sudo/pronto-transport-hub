import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NewPatients = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-secondary text-secondary-foreground py-12 px-4">
          <div className="container-max text-center">
            <h1 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              New Patient Registration
            </h1>
            <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto">
              Welcome to Alert Medical Response. Complete our secure intake form to schedule your first transport.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-muted">
          <div className="container-max max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* New Patient Card */}
              <div className="bg-card rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-4">
                  First Time Patients
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  All new patients must complete our secure intake form before their first scheduled transport. This helps us provide safe, personalized care.
                </p>
                <Link
                  to="/request-transportation"
                  className="cta-primary inline-flex items-center justify-center w-full"
                >
                  Start Intake Form
                </Link>
              </div>

              {/* Returning Patients Card */}
              <div className="bg-card rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-4">
                  Returning Patients
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Already registered? You can request transportation or contact dispatch directly for scheduling assistance.
                </p>
                <div className="flex flex-col gap-3">
                  <Link
                    to="/request-transportation"
                    className="cta-secondary inline-flex items-center justify-center"
                  >
                    Request Transportation
                  </Link>
                  <a
                    href="tel:8327555533"
                    className="text-center text-primary font-semibold hover:underline"
                  >
                    Call Dispatch: 832-755-5533
                  </a>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-card rounded-2xl shadow-lg p-6 md:p-8 mb-8">
              <h2 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-4">
                What to Expect
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold text-xl">1</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Complete Form</h3>
                  <p className="text-muted-foreground text-sm">
                    Fill out the secure intake form with patient and transport details.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold text-xl">2</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Dispatch Confirms</h3>
                  <p className="text-muted-foreground text-sm">
                    Our team will contact you to confirm scheduling and details.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold text-xl">3</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Safe Transport</h3>
                  <p className="text-muted-foreground text-sm">
                    Our EMT team arrives on time for safe, comfortable transport.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-muted rounded-xl p-6 text-center">
              <p className="text-muted-foreground mb-3">
                For urgent scheduling or non-emergency ER calls, please call dispatch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="tel:8327555533" className="text-primary font-bold text-lg hover:underline">
                  832-755-5533
                </a>
                <span className="hidden sm:inline text-muted-foreground">|</span>
                <a href="mailto:info@alertmedicalresponse.net" className="text-secondary font-semibold hover:underline">
                  info@alertmedicalresponse.net
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NewPatients;
