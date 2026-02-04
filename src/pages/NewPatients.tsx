import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const medicalConditionOptions = [
  "Heart disease / Heart problems",
  "High blood pressure",
  "History of heart attack",
  "Irregular heartbeat (arrhythmia)",
  "Congestive heart failure (CHF)",
  "Stroke (past or recent)",
  "Seizure disorder",
  "Dementia / Alzheimer's",
  "Parkinson's disease",
  "COPD",
  "Asthma",
  "Requires oxygen",
  "Tracheostomy",
  "Diabetes",
  "Kidney disease",
  "Dialysis patient",
  "Difficulty walking",
  "Wheelchair dependent",
  "Bedbound",
  "Recent fall or fracture",
  "Amputation",
  "Recent surgery",
  "Recent hospitalization",
  "Wound care",
  "IV / PICC line / catheter",
  "Feeding tube",
  "Cancer",
  "Bariatric patient",
  "Pregnancy",
  "Other (specify below)",
];

const transportTypes = [
  "Stretcher / BLS Transport",
  "Wheelchair Transport",
  "Ambulatory",
];

const NewPatients = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    patientFirstName: "",
    patientLastName: "",
    patientDOB: "",
    patientPhone: "",
    patientEmail: "",
    transportType: "",
    medicalCondition: "",
    otherConditions: "",
    insuranceProvider: "",
    insurancePolicyNumber: "",
    notes: "",
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
      title: "Registration Submitted",
      description: "Thank you! Our dispatch team will contact you to confirm details.",
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
                Registration Received!
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Thank you for registering. Our dispatch team will contact you to confirm details and scheduling.
              </p>
              <div className="bg-muted rounded-xl p-6 mb-8">
                <p className="text-foreground font-semibold mb-2">For immediate assistance:</p>
                <a href="tel:8327555533" className="text-primary text-2xl font-bold hover:underline">
                  832-755-5533
                </a>
              </div>
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
        <section className="bg-secondary text-secondary-foreground py-12 px-4">
          <div className="container-max text-center">
            <h1 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              New Patient Registration
            </h1>
            <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto">
              Welcome to Alert Medical Response. Complete our secure intake form to schedule your first transport.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-muted">
          <div className="container-max max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* New Patient Card */}
              <div className="bg-card rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-4">
                  First Time Patients
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  All new patients must complete our secure intake form below before their first scheduled transport. This helps us provide safe, personalized care.
                </p>
              </div>

              {/* Returning Patients Card */}
              <div className="bg-card rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-4">
                  Returning Patients
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Already registered? You can request transportation or contact dispatch directly for scheduling assistance.
                </p>
                <div className="flex flex-col gap-3">
                  <Link
                    to="/request-transportation"
                    className="cta-secondary inline-flex items-center justify-center"
                  >
                    Request Transportation
                  </Link>
                  <a
                    href="tel:8327555533"
                    className="text-center text-primary font-semibold hover:underline"
                  >
                    Call Dispatch: 832-755-5533
                  </a>
                </div>
              </div>
            </div>

            {/* New Patient Form */}
            <div className="bg-card rounded-2xl shadow-xl p-6 md:p-8 mb-8">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6 text-center">
                New Patient Intake Form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Patient Information */}
                <div className="space-y-6">
                  <h3 className="font-heading font-semibold text-lg text-foreground border-b border-border pb-2">
                    Patient Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="patientFirstName">First Name *</Label>
                      <Input
                        id="patientFirstName"
                        name="patientFirstName"
                        value={formData.patientFirstName}
                        onChange={handleChange}
                        required
                        className="mt-1 bg-background"
                      />
                    </div>
                    <div>
                      <Label htmlFor="patientLastName">Last Name *</Label>
                      <Input
                        id="patientLastName"
                        name="patientLastName"
                        value={formData.patientLastName}
                        onChange={handleChange}
                        required
                        className="mt-1 bg-background"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="patientDOB">Date of Birth *</Label>
                      <Input
                        id="patientDOB"
                        name="patientDOB"
                        type="date"
                        value={formData.patientDOB}
                        onChange={handleChange}
                        required
                        className="mt-1 bg-background"
                      />
                    </div>
                    <div>
                      <Label htmlFor="patientPhone">Phone Number *</Label>
                      <Input
                        id="patientPhone"
                        name="patientPhone"
                        type="tel"
                        value={formData.patientPhone}
                        onChange={handleChange}
                        required
                        className="mt-1 bg-background"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="patientEmail">Email Address *</Label>
                    <Input
                      id="patientEmail"
                      name="patientEmail"
                      type="email"
                      value={formData.patientEmail}
                      onChange={handleChange}
                      required
                      className="mt-1 bg-background"
                    />
                  </div>
                </div>

                {/* Transport Type */}
                <div className="space-y-4">
                  <h3 className="font-heading font-semibold text-lg text-foreground border-b border-border pb-2">
                    Transport Type
                  </h3>
                  <div>
                    <Label htmlFor="transportType">Transport Type *</Label>
                    <Select onValueChange={(value) => handleSelectChange("transportType", value)} required>
                      <SelectTrigger className="mt-1 bg-background">
                        <SelectValue placeholder="Select transport type" />
                      </SelectTrigger>
                      <SelectContent>
                        {transportTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Medical Condition */}
                <div className="space-y-4">
                  <h3 className="font-heading font-semibold text-lg text-foreground border-b border-border pb-2">
                    Medical Condition
                  </h3>
                  <div>
                    <Label htmlFor="medicalCondition">Primary Medical Condition *</Label>
                    <Select onValueChange={(value) => handleSelectChange("medicalCondition", value)} required>
                      <SelectTrigger className="mt-1 bg-background">
                        <SelectValue placeholder="Select primary condition" />
                      </SelectTrigger>
                      <SelectContent className="max-h-60">
                        {medicalConditionOptions.map((condition) => (
                          <SelectItem key={condition} value={condition}>
                            {condition}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="otherConditions">Other Conditions / Special Needs</Label>
                    <Textarea
                      id="otherConditions"
                      name="otherConditions"
                      value={formData.otherConditions}
                      onChange={handleChange}
                      placeholder="List any additional conditions or special needs"
                      className="mt-1 bg-background"
                      rows={3}
                    />
                  </div>
                </div>

                {/* Insurance Information */}
                <div className="space-y-4">
                  <h3 className="font-heading font-semibold text-lg text-foreground border-b border-border pb-2">
                    Insurance Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="insuranceProvider">Insurance Provider *</Label>
                      <Input
                        id="insuranceProvider"
                        name="insuranceProvider"
                        value={formData.insuranceProvider}
                        onChange={handleChange}
                        placeholder="Medicare, Medicaid, Blue Cross, etc."
                        required
                        className="mt-1 bg-background"
                      />
                    </div>
                    <div>
                      <Label htmlFor="insurancePolicyNumber">Policy / Member ID *</Label>
                      <Input
                        id="insurancePolicyNumber"
                        name="insurancePolicyNumber"
                        value={formData.insurancePolicyNumber}
                        onChange={handleChange}
                        required
                        className="mt-1 bg-background"
                      />
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-4">
                  <h3 className="font-heading font-semibold text-lg text-foreground border-b border-border pb-2">
                    Additional Notes <span className="text-muted-foreground font-normal text-sm">(Optional)</span>
                  </h3>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Any additional information (equipment needs, mobility aids, etc.)"
                    className="bg-background"
                    rows={3}
                  />
                </div>

                <button type="submit" className="cta-primary w-full text-lg py-4">
                  Submit Registration
                </button>
              </form>
            </div>

            {/* What to Expect */}
            <div className="bg-card rounded-2xl shadow-lg p-6 md:p-8 mb-8">
              <h2 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-4">
                What to Expect
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold text-xl">1</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Complete Form</h3>
                  <p className="text-muted-foreground text-sm">
                    Fill out the secure intake form with patient and transport details.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold text-xl">2</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Dispatch Confirms</h3>
                  <p className="text-muted-foreground text-sm">
                    Our team will contact you to confirm scheduling and details.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold text-xl">3</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Safe Transport</h3>
                  <p className="text-muted-foreground text-sm">
                    Our EMT team arrives on time for safe, comfortable transport.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-muted rounded-xl p-6 text-center">
              <p className="text-muted-foreground mb-3">
                For urgent scheduling or non-emergency ER calls, please call dispatch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="tel:8327555533" className="text-primary font-bold text-lg hover:underline">
                  832-755-5533
                </a>
                <span className="hidden sm:inline text-muted-foreground">|</span>
                <a href="mailto:info@alertmedicalresponse.net" className="text-primary font-semibold hover:underline">
                  info@alertmedicalresponse.net
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NewPatients;
