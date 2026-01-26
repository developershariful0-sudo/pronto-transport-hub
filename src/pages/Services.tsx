import { 
  Bed, 
  Accessibility, 
  Heart, 
  Building, 
  ArrowLeftRight, 
  Home,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Bed,
    title: "Stretcher / BLS Transport",
    description: "Basic Life Support transport for patients requiring stretcher assistance and medical monitoring during transport.",
    features: [
      "Professional EMT staff on every transport",
      "Fully equipped ambulance",
      "Oxygen and monitoring equipment available",
    ],
  },
  {
    icon: Accessibility,
    title: "Wheelchair Transport",
    description: "Door-to-door wheelchair transportation for medical appointments, procedures, and routine visits.",
    features: [
      "ADA-compliant vehicles",
      "Door-through-door service",
      "Trained transport specialists",
    ],
  },
  {
    icon: Heart,
    title: "Dialysis Transport",
    description: "Reliable recurring transport to and from dialysis centers. We understand the importance of on-time arrivals.",
    features: [
      "Recurring schedule options",
      "On-time guarantee",
      "Comfortable climate-controlled vehicles",
    ],
  },
  {
    icon: Building,
    title: "Hospital Discharge",
    description: "Safe transport home or to post-acute care facilities following hospital discharge.",
    features: [
      "Hospital coordination",
      "Same-day service available",
      "Patient belongings handling",
    ],
  },
  {
    icon: ArrowLeftRight,
    title: "Facility-to-Facility Transfers",
    description: "Professional transportation between hospitals, rehab centers, nursing homes, and specialty clinics.",
    features: [
      "Hospital to rehab transfers",
      "Nursing home transfers",
      "Medical records handling",
    ],
  },
  {
    icon: Home,
    title: "Nursing Homes / Rehab",
    description: "Scheduled and on-demand transportation for long-term care residents and rehab patients.",
    features: [
      "Facility partnerships",
      "Scheduled recurring trips",
      "On-demand availability",
    ],
  },
  {
    icon: Home,
    title: "Assisted Living",
    description: "Dependable transportation services for assisted living communities for medical visits and facility transfers.",
    features: [
      "Comfortable transport",
      "Professional assistance",
      "Flexible scheduling",
    ],
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-secondary text-secondary-foreground py-12 px-4">
          <div className="container-max text-center">
            <h1 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Our Services
            </h1>
            <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto">
              Comprehensive medical transportation solutions for patients, families, and healthcare facilities throughout Houston and Harris County.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="section-padding bg-muted">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-card rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <h2 className="font-heading font-bold text-xl text-foreground pt-2">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-foreground text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Service Area */}
            <div className="mt-10 bg-card rounded-xl shadow-lg p-6 text-center">
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">Service Area</h3>
              <p className="text-muted-foreground">
                Houston & Harris County including Katy, Sugar Land, Pasadena, Pearland, Cypress, and Spring.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-background">
          <div className="container-max text-center">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
              Ready to Schedule Your Transport?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Contact our dispatch team 24/7 or complete our request form to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/request-transportation" className="cta-primary flex items-center justify-center gap-2">
                Request Transportation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:8327555533" className="cta-secondary flex items-center justify-center">
                Call Dispatch: 832-755-5533
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
