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

const services = [
  {
    icon: Bed,
    title: "Stretcher Transport (BLS)",
    description: "Safe transport for patients requiring stretcher assistance between home, hospital and medical facilities.",
  },
  {
    icon: Accessibility,
    title: "Wheelchair Transport",
    description: "Door-to-door wheelchair transportation for appointments, procedures, and routine medical visits.",
  },
  {
    icon: Heart,
    title: "Dialysis Transportation",
    description: "Reliable recurring transport to and from dialysis centers across Harris County.",
  },
  {
    icon: Building,
    title: "Hospital Discharge",
    description: "Safe transport home or to another facility following hospital discharge.",
  },
  {
    icon: ArrowLeftRight,
    title: "Facility-to-Facility Transfers",
    description: "Transportation between hospitals, rehab centers, nursing homes and specialty clinics.",
  },
  {
    icon: Home,
    title: "Nursing Homes & Assisted Living",
    description: "Scheduled and on-demand transportation for long-term care residents.",
  },
];

const Services = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive medical transportation solutions for patients, families, and healthcare facilities throughout Houston and Harris County.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <service.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
