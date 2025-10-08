import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-background rounded-lg p-8 shadow-2xl max-w-sm w-full text-center relative">
        <h3 className="text-2xl font-bold text-foreground mb-4">Message Sent!</h3>
        <p className="text-muted-foreground mb-6">
          Thanks for reaching out to us! We'll get back to you soon.
        </p>
        <Button onClick={onClose} className="w-full">
          Close
        </Button>
      </div>
    </div>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const response = await fetch("https://auth.rexsystemsbd.com/api/Newsletter/contactwithus", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "AppKey": "a8c54543-0eb1-40cd-9ec8-b1dc952dceb4", // ✅ Custom header
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phoneNumber: formData.phone,
          company: "", 
          subject: "Contact",
          body: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }

      setShowModal(true); // success
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error sending contact request:", error);
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            We Would Love To Assist You
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contact us for professional maintenance and repair services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="shadow-elegant border-0 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Send Us a Message
              </h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Your first name"
                      className="border-border"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Your last name"
                      className="border-border"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="border-border"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Number XXX-XXX-XXXX"
                    className="border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service Needed
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your property maintenance needs..."
                    className="border-border min-h-[120px]"
                    required
                  />
                </div>

                {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-primary shadow-glow hover:shadow-elegant transition-smooth"
                >
                  {loading ? "Sending..." : "Submit"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* (Right side contact info stays unchanged) */}
        </div>
      </div>

      <SuccessModal isOpen={showModal} onClose={handleCloseModal} />
    </section>
  );
};

export default ContactSection;
