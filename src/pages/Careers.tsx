import { useState } from "react";
import { CheckCircle, Briefcase } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const positions = [
  {
    id: "emtb",
    title: "EMT-B",
    description: "Basic Emergency Medical Technician",
  },
  {
    id: "aemt",
    title: "Advanced EMT (AEMT)",
    description: "Advanced Emergency Medical Technician",
  },
  {
    id: "paramedic",
    title: "Paramedic",
    description: "Licensed Paramedic",
  },
  {
    id: "driver",
    title: "Medical Transport Driver",
    description: "EMR licensed driver",
  },
];

const Careers = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    position: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    certifications: "",
    experience: "",
    additionalInfo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({
      title: "Application Submitted",
      description: "Thank you for your interest! We will review your application and contact you soon.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow section-padding bg-muted">
          <div className="container-max max-w-2xl text-center">
            <div className="bg-card rounded-2xl shadow-xl p-8 md:p-12">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h1 className="font-heading font-bold text-3xl text-foreground mb-4">
                Application Received!
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Thank you for your interest in joining Alert Medical Response. Our team will review your application and contact you soon.
              </p>
              <a href="/" className="cta-secondary inline-flex items-center gap-2">
                Return to Home
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-secondary text-secondary-foreground py-16 px-4">
          <div className="container-max text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Join Our Team
            </h1>
            <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto">
              Alert Medical Response is hiring dedicated EMTs, Paramedics, and Medical Transport Drivers to serve Houston and Harris County.
            </p>
          </div>
        </section>

        {/* Positions */}
        <section className="section-padding bg-muted">
          <div className="container-max">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-8 text-center">
              Open Positions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {positions.map((position) => (
                <div
                  key={position.id}
                  className="bg-card rounded-xl shadow-lg p-6 text-center border-t-4 border-primary"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-1">
                    {position.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {position.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Application Form */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-card rounded-2xl shadow-xl p-6 md:p-8">
                <h2 className="font-heading font-bold text-2xl text-foreground mb-6 text-center">
                  Apply Now
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="position">Position *</Label>
                    <Select onValueChange={(value) => handleSelectChange("position", value)} required>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a position" />
                      </SelectTrigger>
                      <SelectContent>
                        {positions.map((pos) => (
                          <SelectItem key={pos.id} value={pos.id}>
                            {pos.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="certifications">Certifications *</Label>
                    <Input
                      id="certifications"
                      name="certifications"
                      value={formData.certifications}
                      onChange={handleChange}
                      placeholder="EMT-B, AEMT, Paramedic, EMR, BLS, ACLS, etc."
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="experience">Experience *</Label>
                    <Textarea
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      placeholder="Briefly describe your relevant experience"
                      required
                      className="mt-1"
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="additionalInfo">Additional Information</Label>
                    <Textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      placeholder="Any additional information you'd like to share"
                      className="mt-1"
                      rows={3}
                    />
                  </div>

                  <button type="submit" className="cta-primary w-full text-lg py-4">
                    Submit Application
                  </button>
                </form>
              </div>

              {/* Qualifications & EEO */}
              <div className="mt-8 space-y-6">
                <div className="bg-card rounded-xl shadow-lg p-6">
                  <h3 className="font-heading font-bold text-lg text-foreground mb-3">
                    Minimum Qualifications
                  </h3>
                  <ul className="text-muted-foreground text-sm space-y-2">
                    <li>• Valid Texas driver's license with clean driving record</li>
                    <li>• Current EMT-B, AEMT, Paramedic, or EMR certification (position dependent)</li>
                    <li>• CPR/BLS certification</li>
                    <li>• Ability to lift and move patients safely</li>
                    <li>• Strong communication and patient care skills</li>
                    <li>• Must pass background check and drug screening</li>
                  </ul>
                </div>

                <div className="bg-muted rounded-xl p-6 text-center">
                  <p className="text-muted-foreground text-sm">
                    <strong>Equal Opportunity Employer:</strong> Alert Medical Response is an equal opportunity employer. We do not discriminate based on race, color, religion, sex, national origin, age, disability, or any other protected status.
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

export default Careers;
