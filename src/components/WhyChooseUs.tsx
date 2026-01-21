import { CheckCircle2 } from "lucide-react";
import emtTeam from "@/assets/emt-team.jpg";

const reasons = [
  "EMT-Led Professional Team",
  "Houston & Harris County Focused",
  "Reliable Scheduling",
  "Clean, Fully Equipped Medical Vehicles",
  "Compassionate Patient Care",
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8 bg-background">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content - Left Side */}
          <div className="order-2 lg:order-1">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6">
              Why Choose Alert Medical Response
            </h2>

            {/* Single column list matching reference */}
            <div className="flex flex-col gap-3">
              {reasons.map((reason, index) => (
                <div
                  key={reason}
                  className="flex items-center gap-3 animate-slide-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-base text-foreground leading-snug">
                    {reason}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image - Right Side */}
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={emtTeam}
                alt="Alert Medical Response EMT Team"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />
            </div>
            {/* Accent decoration */}
            <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-primary/20 rounded-2xl -z-10" />
            <div className="absolute -top-3 -left-3 w-14 h-14 bg-secondary/20 rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
