import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import stretcherIcon from "@/assets/icons/stretcher-icon.png";
import wheelchairIcon from "@/assets/icons/wheelchair-icon.png";
import dialysisIcon from "@/assets/icons/dialysis-icon.png";
import hospitalDischargeIcon from "@/assets/icons/hospital-discharge-icon.png";
import facilityTransferIcon from "@/assets/icons/facility-transfer-icon.png";
import nursingHomeIcon from "@/assets/icons/nursing-home-icon.png";

const services = [
  {
    icon: stretcherIcon,
    title: "Stretcher Transport (BLS)",
    description: "Safe transport for patients requiring stretcher assistance between home, hospitals and medical facilities.",
  },
  {
    icon: wheelchairIcon,
    title: "Wheelchair Transport",
    description: "Door-to-door wheelchair transportation for appointments, procedures, and routine medical visits.",
  },
  {
    icon: dialysisIcon,
    title: "Dialysis Transportation",
    description: "Reliable recurring transport to and from dialysis centers across Harris County.",
  },
  {
    icon: hospitalDischargeIcon,
    title: "Hospital Discharge",
    description: "Safe transport home or to other facility following hospital discharge.",
  },
  {
    icon: facilityTransferIcon,
    title: "Facility-to-Facility Transfers",
    description: "Transportation between hospitals, rehab centers, nursing homes and specialty clinics.",
  },
  {
    icon: nursingHomeIcon,
    title: "Nursing Homes & Assisted Living",
    description: "Scheduled and on demand transportation for long-term care residents.",
  },
];

const Services = () => {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8 bg-muted">
      <div className="container-max">
        <div className="text-center mb-10">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center mb-4 overflow-hidden">
                <img 
                  src={service.icon} 
                  alt={service.title}
                  className="w-14 h-14 object-contain"
                />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:gap-2 transition-all"
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
