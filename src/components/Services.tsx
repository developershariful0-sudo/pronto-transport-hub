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
    description: "BLS stretcher transport for patients requiring medical monitoring and safe handling.",
  },
  {
    icon: wheelchairIcon,
    title: "Wheelchair Transport",
    description: "Safe wheelchair transportation to and from medical appointments.",
  },
  {
    icon: dialysisIcon,
    title: "Dialysis Transport",
    description: "Reliable, scheduled dialysis transportation for on-time treatment arrivals.",
  },
  {
    icon: hospitalDischargeIcon,
    title: "Hospital Discharge",
    description: "Safe and timely transportation for patients being discharged from hospitals.",
  },
  {
    icon: facilityTransferIcon,
    title: "Facility-to-Facility Transfers",
    description: "Coordinated medical transportation between healthcare facilities.",
  },
  {
    icon: nursingHomeIcon,
    title: "Nursing Homes / Rehab",
    description: "Dependable transportation for nursing homes, rehab, and assisted living.",
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
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Row */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Link
            to="/new-patients"
            className="cta-primary flex items-center justify-center"
          >
            Request Transportation
          </Link>
          <a
            href="tel:8327555533"
            className="cta-secondary flex items-center justify-center"
          >
            Call Dispatch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
