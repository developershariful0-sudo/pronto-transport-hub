import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon!",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-secondary text-secondary-foreground py-12 px-4">
          <div className="container-max text-center">
            <h1 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Contact Us for Scheduling or Questions
            </h1>
            <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto">
              Have questions? Need to schedule a transport? We're here to help 24/7.
            </p>
          </div>
        </section>

        {/* Quick Contact Info Bar */}
        <section className="bg-muted py-6 px-4">
          <div className="container-max">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-center">
              <a href="tel:8327555533" className="flex items-center gap-2 text-primary font-bold text-lg hover:underline">
                <Phone className="w-5 h-5 text-primary" />
                832-755-5533
              </a>
              <a href="mailto:info@alertmedicalresponse.net" className="flex items-center gap-2 text-primary font-semibold hover:underline">
                <Mail className="w-5 h-5" />
                info@alertmedicalresponse.net
              </a>
              <span className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                6776 Southwest Fwy, Suite 350, Houston, TX 77072
              </span>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="section-padding bg-background">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Contact Info */}
              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                  Get in Touch
                </h2>
                
                <div className="space-y-4 mb-8">
                  <a href="tel:8327555533" className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">24/7 Dispatch</h3>
                      <p className="text-primary text-xl font-bold">832-755-5533</p>
                      <p className="text-muted-foreground text-sm">Click to call</p>
                    </div>
                  </a>

                  <a href="mailto:info@alertmedicalresponse.net" className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-secondary font-medium">info@alertmedicalresponse.net</p>
                      <p className="text-muted-foreground text-sm">We respond within 24 hours</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-md">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Office Address</h3>
                      <p className="text-muted-foreground">
                        6776 Southwest Fwy, Suite 350<br />
                        Houston, TX 77072
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-md">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Hours of Operation</h3>
                      <p className="text-muted-foreground">
                        Dispatch: 24/7<br />
                        Office: Mon-Fri 8am-5pm
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-xl overflow-hidden shadow-lg h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.5!2d-95.52!3d29.71!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c3d47a6b5555%3A0x1234567890!2s6776+Southwest+Fwy%2C+Houston%2C+TX+77072!5e0!3m2!1sen!2sus!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Alert Medical Response Location"
                  />
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="bg-card rounded-2xl shadow-xl p-6 md:p-8">
                  <h2 className="font-heading font-bold text-2xl text-foreground mb-2">
                    Send us a Message
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    For general inquiries only. For transport requests, please use our{" "}
                    <a href="/request-transportation" className="text-primary hover:underline">
                      Request Transportation
                    </a>{" "}
                    form.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 bg-background"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 bg-background"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="mt-1 bg-background"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="mt-1 bg-background"
                      />
                    </div>

                    <button type="submit" className="cta-primary w-full flex items-center justify-center gap-2">
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Privacy Notice */}
                <div className="mt-6 bg-primary/5 border border-primary/20 rounded-xl p-4">
                  <h3 className="font-semibold text-foreground text-sm mb-2 whitespace-nowrap">Your Privacy Is Important to Us</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Messages sent through this page are kept confidential and reviewed only by our authorized team. We follow HIPAA guidelines to protect your personal and medical information and use it only to assist with scheduling or answering your questions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
