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
    title: "Stretcher / BLS Transport",
    description: "Our Basic Life Support (BLS) stretcher transport is designed for patients who require medical monitoring and safe handling during transport.",
  },
  {
    icon: wheelchairIcon,
    title: "Wheelchair Transport",
    description: "We provide safe and dependable wheelchair transportation for patients who need assistance with mobility while traveling to and from medical appointments.",
  },
  {
    icon: dialysisIcon,
    title: "Dialysis Transportation",
    description: "We provide reliable, scheduled dialysis transportation to ensure patients arrive on time for treatment and return home safely after each session.",
  },
  {
    icon: hospitalDischargeIcon,
    title: "Hospital Discharge Transportation",
    description: "We provide safe and timely transportation for patients being discharged from hospitals to home or post-acute care facilities.",
  },
  {
    icon: facilityTransferIcon,
    title: "Facility-to-Facility Transfers",
    description: "We provide coordinated medical transportation between hospitals, nursing homes, rehabilitation centers, and other healthcare facilities.",
  },
  {
    icon: nursingHomeIcon,
    title: "Nursing Homes & Assisted Living",
    description: "We provide dependable transportation services for nursing homes and assisted living communities for medical visits and facility transfers.",
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
