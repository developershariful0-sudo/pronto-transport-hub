import { 
  Bed, 
  Accessibility, 
  Heart, 
  Building, 
  ArrowLeftRight, 
  Home,
  Phone,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Bed,
    title: "Stretcher Transport (BLS)",
    description: "Basic Life Support transport for patients requiring stretcher assistance. Our trained EMTs provide safe, comfortable transportation between home, hospitals, and medical facilities.",
    features: [
      "Professional EMT staff on every transport",
      "Fully equipped ambulance",
      "Oxygen and monitoring equipment available",
      "Smooth, patient-centered care",
    ],
  },
  {
    icon: Accessibility,
    title: "Wheelchair Transport",
    description: "Door-to-door wheelchair transportation for medical appointments, procedures, and routine visits. We provide ADA-compliant vehicles with professional assistance.",
    features: [
      "ADA-compliant vehicles",
      "Door-through-door service",
      "Trained transport specialists",
      "Flexible scheduling",
    ],
  },
  {
    icon: Heart,
    title: "Dialysis Transportation",
    description: "Reliable recurring transport to and from dialysis centers across Harris County. We understand the importance of consistent, on-time arrivals for dialysis patients.",
    features: [
      "Recurring schedule options",
      "On-time guarantee",
      "Comfortable climate-controlled vehicles",
      "Patient condition monitoring",
    ],
  },
  {
    icon: Building,
    title: "Hospital Discharge",
    description: "Safe transport home or to another facility following hospital discharge. We coordinate with hospital staff to ensure smooth, timely transitions.",
    features: [
      "Hospital coordination",
      "Same-day service available",
      "Patient belongings handling",
      "Family communication",
    ],
  },
  {
    icon: ArrowLeftRight,
    title: "Facility-to-Facility Transfers",
    description: "Professional transportation between hospitals, rehab centers, nursing homes, and specialty clinics. We handle inter-facility transfers with care and precision.",
    features: [
      "Hospital to rehab transfers",
      "Nursing home transfers",
      "Medical records handling",
      "Insurance coordination",
    ],
  },
  {
    icon: Home,
    title: "Nursing Homes & Assisted Living",
    description: "Scheduled and on-demand transportation for long-term care residents. We partner with facilities to provide reliable, compassionate transport services.",
    features: [
      "Facility partnerships",
      "Scheduled recurring trips",
      "On-demand availability",
      "Specialized care training",
    ],
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-secondary text-secondary-foreground py-16 px-4">
          <div className="container-max text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
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
            <div className="space-y-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="bg-card rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    {/* Icon & Title */}
                    <div className="bg-secondary/5 p-8 flex flex-col justify-center">
                      <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                        <service.icon className="w-8 h-8 text-secondary" />
                      </div>
                      <h2 className="font-heading font-bold text-2xl text-foreground">
                        {service.title}
                      </h2>
                    </div>

                    {/* Description & Features */}
                    <div className="lg:col-span-2 p-8">
                      <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-foreground">
                            <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-background">
          <div className="container-max text-center">
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
              Ready to Schedule Your Transport?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Contact our dispatch team 24/7 or complete our new patient registration form to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8327555533" className="cta-primary flex items-center justify-center gap-2 text-lg">
                <Phone className="w-5 h-5" />
                <span>Call 832-755-5533</span>
              </a>
              <Link to="/new-patients" className="cta-secondary flex items-center justify-center gap-2 text-lg">
                <span>Register Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
