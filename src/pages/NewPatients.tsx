import { useState } from "react";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const NewPatients = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    // Requestor Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
    // Pickup Location
    pickupAddress1: "",
    pickupAddress2: "",
    pickupCity: "",
    pickupState: "TX",
    pickupZip: "",
    pickupCrossStreet: "",
    // Date & Time
    dateNeeded: "",
    timeNeeded: "",
    // Destination
    destAddress1: "",
    destAddress2: "",
    destCity: "",
    destState: "TX",
    destZip: "",
    // Patient Info
    patientFirstName: "",
    patientLastName: "",
    patientGender: "",
    medicalCondition: "",
    reasonForTransport: "",
    // Physician Info
    physicianFirstName: "",
    physicianLastName: "",
    physicianPhone: "",
    // Insurance
    insuranceType: "",
    insurancePolicyNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to a HIPAA-compliant backend
    setIsSubmitted(true);
    toast({
      title: "Form Submitted",
      description: "Our dispatch team will contact you shortly to confirm your transport request.",
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
                Request Submitted!
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Thank you for submitting your intake form. Our dispatch team will contact you shortly to confirm your transport request.
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
        <section className="bg-secondary text-secondary-foreground py-16 px-4">
          <div className="container-max text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              New Patient Registration
            </h1>
            <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto mb-6">
              Complete this secure intake form to schedule your first transport. Our team will contact you to confirm details.
            </p>
            <a href="tel:8327555533" className="cta-primary inline-flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Need Help? Call 832-755-5533</span>
            </a>
          </div>
        </section>

        {/* Form */}
        <section className="section-padding bg-muted">
          <div className="container-max max-w-4xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Requestor Information */}
              <div className="bg-card rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="font-heading font-bold text-xl text-foreground mb-6 pb-4 border-b border-border">
                  Requestor Information
                </h2>
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
                  <div className="md:col-span-2">
                    <Label htmlFor="notes">Notes / Special Needs</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Bariatric, equipment needs, oxygen, etc."
                      className="mt-1"
                      rows={3}
                    />
                  </div>
                </div>
              </div>

              {/* Pickup Location */}
              <div className="bg-card rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="font-heading font-bold text-xl text-foreground mb-6 pb-4 border-b border-border">
                  Pickup Location
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <Label htmlFor="pickupAddress1">Address Line 1 *</Label>
                    <Input
                      id="pickupAddress1"
                      name="pickupAddress1"
                      value={formData.pickupAddress1}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="pickupAddress2">Address Line 2</Label>
                    <Input
                      id="pickupAddress2"
                      name="pickupAddress2"
                      value={formData.pickupAddress2}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="pickupCity">City *</Label>
                    <Input
                      id="pickupCity"
                      name="pickupCity"
                      value={formData.pickupCity}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="pickupState">State *</Label>
                    <Input
                      id="pickupState"
                      name="pickupState"
                      value={formData.pickupState}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="pickupZip">ZIP Code *</Label>
                    <Input
                      id="pickupZip"
                      name="pickupZip"
                      value={formData.pickupZip}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="pickupCrossStreet">Closest Cross Street</Label>
                    <Input
                      id="pickupCrossStreet"
                      name="pickupCrossStreet"
                      value={formData.pickupCrossStreet}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* Date & Time */}
              <div className="bg-card rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="font-heading font-bold text-xl text-foreground mb-6 pb-4 border-b border-border">
                  Date & Time
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="dateNeeded">Date Ambulance is Needed *</Label>
                    <Input
                      id="dateNeeded"
                      name="dateNeeded"
                      type="date"
                      value={formData.dateNeeded}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="timeNeeded">Pickup Time Requested *</Label>
                    <Input
                      id="timeNeeded"
                      name="timeNeeded"
                      type="time"
                      value={formData.timeNeeded}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* Destination */}
              <div className="bg-card rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="font-heading font-bold text-xl text-foreground mb-6 pb-4 border-b border-border">
                  Destination Location
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <Label htmlFor="destAddress1">Address Line 1 *</Label>
                    <Input
                      id="destAddress1"
                      name="destAddress1"
                      value={formData.destAddress1}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="destAddress2">Address Line 2</Label>
                    <Input
                      id="destAddress2"
                      name="destAddress2"
                      value={formData.destAddress2}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="destCity">City *</Label>
                    <Input
                      id="destCity"
                      name="destCity"
                      value={formData.destCity}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="destState">State *</Label>
                    <Input
                      id="destState"
                      name="destState"
                      value={formData.destState}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="destZip">ZIP Code *</Label>
                    <Input
                      id="destZip"
                      name="destZip"
                      value={formData.destZip}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* Patient Information */}
              <div className="bg-card rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="font-heading font-bold text-xl text-foreground mb-6 pb-4 border-b border-border">
                  Patient Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="patientFirstName">Patient First Name</Label>
                    <Input
                      id="patientFirstName"
                      name="patientFirstName"
                      value={formData.patientFirstName}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="patientLastName">Patient Last Name</Label>
                    <Input
                      id="patientLastName"
                      name="patientLastName"
                      value={formData.patientLastName}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="patientGender">Gender</Label>
                    <Select onValueChange={(value) => handleSelectChange("patientGender", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="medicalCondition">Medical Condition</Label>
                    <Input
                      id="medicalCondition"
                      name="medicalCondition"
                      value={formData.medicalCondition}
                      onChange={handleChange}
                      placeholder="Oxygen, EKG, IV, suction, etc."
                      className="mt-1"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="reasonForTransport">Reason for Ambulance Request</Label>
                    <Textarea
                      id="reasonForTransport"
                      name="reasonForTransport"
                      value={formData.reasonForTransport}
                      onChange={handleChange}
                      className="mt-1"
                      rows={3}
                    />
                  </div>
                </div>
              </div>

              {/* Physician Information */}
              <div className="bg-card rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="font-heading font-bold text-xl text-foreground mb-6 pb-4 border-b border-border">
                  Physician Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="physicianFirstName">Physician First Name</Label>
                    <Input
                      id="physicianFirstName"
                      name="physicianFirstName"
                      value={formData.physicianFirstName}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="physicianLastName">Physician Last Name</Label>
                    <Input
                      id="physicianLastName"
                      name="physicianLastName"
                      value={formData.physicianLastName}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="physicianPhone">Physician Phone</Label>
                    <Input
                      id="physicianPhone"
                      name="physicianPhone"
                      type="tel"
                      value={formData.physicianPhone}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* Insurance Information */}
              <div className="bg-card rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="font-heading font-bold text-xl text-foreground mb-6 pb-4 border-b border-border">
                  Insurance Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="insuranceType">Insurance Type</Label>
                    <Input
                      id="insuranceType"
                      name="insuranceType"
                      value={formData.insuranceType}
                      onChange={handleChange}
                      placeholder="Medicare, Medicaid, Private, etc."
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="insurancePolicyNumber">Policy Number</Label>
                    <Input
                      id="insurancePolicyNumber"
                      name="insurancePolicyNumber"
                      value={formData.insurancePolicyNumber}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="text-center">
                <button type="submit" className="cta-primary text-lg px-12 py-4 inline-flex items-center gap-2">
                  Submit Request
                  <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-muted-foreground text-sm mt-4">
                  By submitting, you agree to our privacy policy. Your information is secure and HIPAA-compliant.
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NewPatients;
