import { useState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

// Medical Conditions Checkbox Groups
const medicalConditions = {
  cardiac: {
    title: "Cardiac / Circulatory",
    options: [
      "Heart disease/heart problems",
      "High blood pressure",
      "History of heart attack",
      "Irregular heartbeat (arrhythmia)",
      "Congestive heart failure (CHF)",
    ],
  },
  neurological: {
    title: "Neurological",
    options: [
      "Stroke (past or recent)",
      "Seizure disorder",
      "Dementia/Alzheimer's",
      "Parkinson's disease",
    ],
  },
  respiratory: {
    title: "Respiratory",
    options: ["COPD", "Asthma", "Requires oxygen", "Tracheostomy"],
  },
  metabolic: {
    title: "Metabolic / Renal",
    options: ["Diabetes", "Kidney disease", "Dialysis patient"],
  },
  mobility: {
    title: "Mobility / Physical Limitations",
    options: [
      "Difficulty walking",
      "Wheelchair dependent",
      "Bedbound",
      "Recent fall or fracture",
      "Amputation",
    ],
  },
  recent: {
    title: "Recent Medical / Devices",
    options: [
      "Recent surgery",
      "Recent hospitalization",
      "Wound care",
      "IV/PICC line/catheter",
      "Feeding tube",
    ],
  },
  other: {
    title: "Other Important",
    options: ["Cancer", "Bariatric patient", "Pregnancy"],
  },
};

const transportReasons = [
  "Hospital discharge",
  "Dialysis appointment",
  "Doctor appointment",
  "Rehab or nursing facility transfer",
  "Home to facility",
  "Facility to home",
  "Facility-to-facility transfer",
  "Other (please explain)",
];

const RequestTransportation = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    // Requestor Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    // Pickup Location
    pickupAddress1: "",
    pickupAddress2: "",
    pickupCity: "",
    pickupState: "TX",
    pickupZip: "",
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
    patientDOB: "",
    patientGender: "",
    otherConditions: "",
    additionalDetails: "",
    // Physician Info (optional)
    physicianName: "",
    physicianPhone: "",
    // Insurance (required)
    insuranceType: "",
    insurancePolicyNumber: "",
    // Notes (optional)
    specialNeeds: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const toggleCondition = (condition: string) => {
    setSelectedConditions((prev) =>
      prev.includes(condition) ? prev.filter((c) => c !== condition) : [...prev, condition]
    );
  };

  const toggleReason = (reason: string) => {
    setSelectedReasons((prev) =>
      prev.includes(reason) ? prev.filter((r) => r !== reason) : [...prev, reason]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({
      title: "Request Submitted",
      description: "Our dispatch team will contact you to confirm details and scheduling.",
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
                Thank You!
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Your request has been received. Our dispatch team will contact you to confirm details and scheduling.
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
              Request Transportation
            </h1>
            <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto">
              Complete this form to request medical transportation. Our dispatch team will contact you to confirm details.
            </p>
          </div>
        </section>

        {/* Privacy Notice - Top */}
        <section className="bg-muted py-6 px-4">
          <div className="container-max max-w-4xl">
            <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-4 md:p-6">
              <h3 className="font-semibold text-foreground mb-2">Your Privacy Matters</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                All information submitted through this form is kept confidential, securely transmitted, and handled in accordance with HIPAA guidelines. Your information is used only for purposes related to scheduling and providing transportation services.
              </p>
            </div>
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
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className="mt-1 bg-background" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className="mt-1 bg-background" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="mt-1 bg-background" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required className="mt-1 bg-background" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Patient Information */}
              <div className="bg-card rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="font-heading font-bold text-xl text-foreground mb-6 pb-4 border-b border-border">
                  Patient Information
                </h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="patientFirstName">Patient First Name *</Label>
                      <Input id="patientFirstName" name="patientFirstName" value={formData.patientFirstName} onChange={handleChange} required className="mt-1 bg-background" />
                    </div>
                    <div>
                      <Label htmlFor="patientLastName">Patient Last Name *</Label>
                      <Input id="patientLastName" name="patientLastName" value={formData.patientLastName} onChange={handleChange} required className="mt-1 bg-background" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="patientDOB">Date of Birth *</Label>
                      <Input id="patientDOB" name="patientDOB" type="date" value={formData.patientDOB} onChange={handleChange} required className="mt-1 bg-background" />
                    </div>
                    <div>
                      <Label htmlFor="patientGender">Gender *</Label>
                      <Select onValueChange={(value) => handleSelectChange("patientGender", value)} required>
                        <SelectTrigger className="mt-1 bg-background">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pickup Location */}
              <div className="bg-card rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="font-heading font-bold text-xl text-foreground mb-6 pb-4 border-b border-border">
                  Pickup Location
                </h2>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="pickupAddress1">Address Line 1 *</Label>
                    <Input id="pickupAddress1" name="pickupAddress1" value={formData.pickupAddress1} onChange={handleChange} required className="mt-1 bg-background" />
                  </div>
                  <div>
                    <Label htmlFor="pickupAddress2">Address Line 2</Label>
                    <Input id="pickupAddress2" name="pickupAddress2" value={formData.pickupAddress2} onChange={handleChange} className="mt-1 bg-background" />
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="col-span-2">
                      <Label htmlFor="pickupCity">City *</Label>
                      <Input id="pickupCity" name="pickupCity" value={formData.pickupCity} onChange={handleChange} required className="mt-1 bg-background" />
                    </div>
                    <div>
                      <Label htmlFor="pickupState">State *</Label>
                      <Input id="pickupState" name="pickupState" value={formData.pickupState} onChange={handleChange} required className="mt-1 bg-background" />
                    </div>
                    <div>
                      <Label htmlFor="pickupZip">ZIP *</Label>
                      <Input id="pickupZip" name="pickupZip" value={formData.pickupZip} onChange={handleChange} required className="mt-1 bg-background" />
                    </div>
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
                    <Label htmlFor="dateNeeded">Date Needed *</Label>
                    <Input id="dateNeeded" name="dateNeeded" type="date" value={formData.dateNeeded} onChange={handleChange} required className="mt-1 bg-background" />
                  </div>
                  <div>
                    <Label htmlFor="timeNeeded">Pickup Time *</Label>
                    <Input id="timeNeeded" name="timeNeeded" type="time" value={formData.timeNeeded} onChange={handleChange} required className="mt-1 bg-background" />
                  </div>
                </div>
              </div>

              {/* Destination */}
              <div className="bg-card rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="font-heading font-bold text-xl text-foreground mb-6 pb-4 border-b border-border">
                  Destination Location
                </h2>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="destAddress1">Address Line 1 *</Label>
                    <Input id="destAddress1" name="destAddress1" value={formData.destAddress1} onChange={handleChange} required className="mt-1 bg-background" />
                  </div>
                  <div>
                    <Label htmlFor="destAddress2">Address Line 2</Label>
                    <Input id="destAddress2" name="destAddress2" value={formData.destAddress2} onChange={handleChange} className="mt-1 bg-background" />
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="col-span-2">
                      <Label htmlFor="destCity">City *</Label>
                      <Input id="destCity" name="destCity" value={formData.destCity} onChange={handleChange} required className="mt-1 bg-background" />
                    </div>
                    <div>
                      <Label htmlFor="destState">State *</Label>
                      <Input id="destState" name="destState" value={formData.destState} onChange={handleChange} required className="mt-1 bg-background" />
                    </div>
                    <div>
                      <Label htmlFor="destZip">ZIP *</Label>
                      <Input id="destZip" name="destZip" value={formData.destZip} onChange={handleChange} required className="mt-1 bg-background" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Medical Conditions */}
              <div className="bg-card rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="font-heading font-bold text-xl text-foreground mb-2 pb-4 border-b border-border">
                  Medical Conditions
                </h2>
                <p className="text-muted-foreground text-sm mb-6">Check all that apply — past or current *</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(medicalConditions).map(([key, category]) => (
                    <div key={key} className="space-y-3">
                      <h4 className="font-semibold text-foreground text-sm">{category.title}</h4>
                      {category.options.map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={option}
                            checked={selectedConditions.includes(option)}
                            onCheckedChange={() => toggleCondition(option)}
                          />
                          <label htmlFor={option} className="text-sm text-muted-foreground cursor-pointer">
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Label htmlFor="otherConditions">Other medical conditions or special needs (please describe):</Label>
                  <Textarea
                    id="otherConditions"
                    name="otherConditions"
                    value={formData.otherConditions}
                    onChange={handleChange}
                    className="mt-1 bg-background"
                    rows={3}
                  />
                </div>
              </div>

              {/* Reason for Transport */}
              <div className="bg-card rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="font-heading font-bold text-xl text-foreground mb-2 pb-4 border-b border-border">
                  Reason for Transport
                </h2>
                <p className="text-muted-foreground text-sm mb-6">Select all that apply *</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {transportReasons.map((reason) => (
                    <div key={reason} className="flex items-center space-x-2">
                      <Checkbox
                        id={reason}
                        checked={selectedReasons.includes(reason)}
                        onCheckedChange={() => toggleReason(reason)}
                      />
                      <label htmlFor={reason} className="text-sm text-muted-foreground cursor-pointer">
                        {reason}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Label htmlFor="additionalDetails">Additional details (optional):</Label>
                  <Input
                    id="additionalDetails"
                    name="additionalDetails"
                    value={formData.additionalDetails}
                    onChange={handleChange}
                    className="mt-1 bg-background"
                  />
                </div>
              </div>

              {/* Insurance Information */}
              <div className="bg-card rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="font-heading font-bold text-xl text-foreground mb-6 pb-4 border-b border-border">
                  Insurance Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="insuranceType">Insurance Type/Provider *</Label>
                    <Input
                      id="insuranceType"
                      name="insuranceType"
                      value={formData.insuranceType}
                      onChange={handleChange}
                      placeholder="Medicare, Medicaid, Private, etc."
                      required
                      className="mt-1 bg-background"
                    />
                  </div>
                  <div>
                    <Label htmlFor="insurancePolicyNumber">Policy/Member ID *</Label>
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

              {/* Physician Information (Optional) */}
              <div className="bg-card rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="font-heading font-bold text-xl text-foreground mb-6 pb-4 border-b border-border">
                  Physician Information <span className="text-muted-foreground font-normal text-sm">(Optional)</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="physicianName">Physician Name</Label>
                    <Input
                      id="physicianName"
                      name="physicianName"
                      value={formData.physicianName}
                      onChange={handleChange}
                      className="mt-1 bg-background"
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
                      className="mt-1 bg-background"
                    />
                  </div>
                </div>
              </div>

              {/* Special Needs (Optional) */}
              <div className="bg-card rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="font-heading font-bold text-xl text-foreground mb-6 pb-4 border-b border-border">
                  Notes / Special Needs <span className="text-muted-foreground font-normal text-sm">(Optional)</span>
                </h2>
                <Textarea
                  id="specialNeeds"
                  name="specialNeeds"
                  value={formData.specialNeeds}
                  onChange={handleChange}
                  placeholder="Bariatric, equipment needs, oxygen, mobility aids, etc."
                  className="bg-background"
                  rows={4}
                />
              </div>

              {/* HIPAA Notice */}
              <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-4 md:p-6">
                <h3 className="font-semibold text-foreground mb-2">HIPAA & Privacy Notice</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  All patient information submitted through this form is confidential and protected under HIPAA guidelines. Information is accessed only by authorized personnel and shared solely as necessary to coordinate and provide medical transportation and related care services.
                </p>
              </div>

              {/* Submit */}
              <div className="text-center">
                <button type="submit" className="cta-primary text-lg px-12 py-4 inline-flex items-center gap-2">
                  Submit Request
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Portal Note */}
              <div className="bg-muted rounded-xl p-6 text-center">
                <p className="text-muted-foreground text-sm">
                  Facilities, affiliates, or recurring patients may request a personalized customer portal and QR request page to simplify scheduling. To request portal access, contact dispatch at{" "}
                  <a href="tel:8327555533" className="text-primary font-semibold">(832) 755-5533</a> or email{" "}
                  <a href="mailto:info@alertmedicalresponse.net" className="text-primary font-semibold">info@alertmedicalresponse.net</a>.
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

export default RequestTransportation;
