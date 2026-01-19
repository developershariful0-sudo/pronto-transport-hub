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
        <section className="bg-secondary text-secondary-foreground py-16 px-4">
          <div className="container-max text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Contact Us
            </h1>
            <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto">
              Have questions? Need to schedule a transport? We're here to help 24/7.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="section-padding bg-muted">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                  Get in Touch
                </h2>
                
                <div className="space-y-6 mb-8">
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

                  <a href="mailto:Alertmedicalr@yahoo.com" className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-secondary font-medium">Alertmedicalr@yahoo.com</p>
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.123456789!2d-95.52!3d29.71!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQyJzM2LjAiTiA5NcKwMzEnMTIuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
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
                    <a href="/new-patients" className="text-primary hover:underline">
                      New Patient Registration
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
                        className="mt-1"
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
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1"
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
                        className="mt-1"
                      />
                    </div>

                    <button type="submit" className="cta-primary w-full flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
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
