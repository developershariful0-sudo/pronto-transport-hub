import { Check } from "lucide-react";
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
    <section className="section-padding bg-background">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-8">
              Why Choose Alert Medical Response
            </h2>

            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div
                  key={reason}
                  className="flex items-center gap-4 animate-slide-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-lg text-foreground font-medium">
                    {reason}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-muted rounded-xl">
              <p className="text-muted-foreground leading-relaxed">
                At Alert Medical Response, we understand that medical transportation isn't just about getting from point A to point B. 
                It's about providing safe, dignified care during a vulnerable time. Our trained EMT professionals 
                treat every patient with the respect and attention they deserve.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={emtTeam}
                alt="Alert Medical Response EMT Team"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
            </div>
            {/* Accent decoration */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary/20 rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
