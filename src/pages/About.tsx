import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Heart, Clock, Users, Award, Truck } from "lucide-react";
import emtTeam from "@/assets/emt-team.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Every patient is treated with dignity, respect, and genuine concern for their well-being."
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Rigorous protocols and fully equipped vehicles ensure the highest standards of patient safety."
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "On-time performance you can count on for scheduled and urgent transportation needs."
    },
    {
      icon: Users,
      title: "Professional Team",
      description: "EMT-certified staff with extensive training in patient care and medical transport."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to exceeding expectations in every aspect of our service delivery."
    },
    {
      icon: Truck,
      title: "Modern Fleet",
      description: "Clean, well-maintained vehicles equipped with the latest medical transport equipment."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              About Alert Medical Response
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Your trusted partner in medical transportation across Houston and Harris County
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-display font-bold text-primary mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  At Alert Medical Response, our mission is to provide safe, reliable, and compassionate 
                  medical transportation services to the Houston community. We understand that when you 
                  or your loved ones need medical transport, you need a team you can trust.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  We are dedicated to ensuring every patient arrives at their destination safely, 
                  comfortably, and on time. Our professional EMT-led team treats each patient with 
                  the care and respect they deserve.
                </p>
                <p className="text-lg text-muted-foreground">
                  Whether it's routine dialysis transportation, hospital discharge, or facility 
                  transfers, we're here to serve you with excellence and compassion.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src={emtTeam} 
                  alt="Alert Medical Response EMT Team" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-primary text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Area Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-display font-bold text-primary mb-6">
              Serving Houston & Harris County
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Alert Medical Response proudly serves the greater Houston metropolitan area, 
              including all of Harris County. Our strategic location allows us to provide 
              prompt and efficient service to hospitals, dialysis centers, nursing homes, 
              rehabilitation facilities, and private residences throughout the region.
            </p>
            <div className="bg-muted rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                Our Location
              </h3>
              <p className="text-muted-foreground">
                6776 Southwest Fwy, Suite 350<br />
                Houston, TX 77072
              </p>
              <p className="text-accent font-semibold mt-4">
                Dispatch: <a href="tel:8327555533" className="hover:underline">832-755-5533</a>
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-display font-bold mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Contact us today to learn more about our services or to schedule your first transport.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:8327555533"
                className="inline-flex items-center justify-center bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Call 832-755-5533
              </a>
              <a 
                href="/new-patients"
                className="inline-flex items-center justify-center bg-accent text-accent-foreground font-semibold px-8 py-4 rounded-lg hover:bg-accent/90 transition-colors text-lg"
              >
                New Patient Registration
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
