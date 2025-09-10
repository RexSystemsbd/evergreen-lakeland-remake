import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

// New component for the success pop-up
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
  // Use state to manage the modal's visibility
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Instead of an alert, update the state to show the modal
    setShowModal(true);
  };

  const handleCloseModal = () => {
    // Function to hide the modal
    setShowModal(false);
  };

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
          {/* Contact Form */}
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
                      placeholder="Your first name"
                      className="border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input
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
                    type="email" maxLength={50}
                    placeholder="your.email@example.com"
                    className="border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone
                  </label>
                  <Input
                    type="tel" maxLength={13}
                    placeholder="Number XXX-XXX-XXXX"
                    className="border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service Needed
                  </label>
                  <Textarea
                    placeholder="Tell us about your property maintenance needs..."
                    className="border-border min-h-[120px]"
                  />                 
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Opt-in SMS
                  </label>                  
                </div>
                {/* Opt-in SMS */}
                <div className="flex items-start gap-4">
                  <input type="checkbox" id="optin" className="mt-1" />
                  <label htmlFor="optin" className="text-gray-700 text-sm ">
                    <i>
                      By checking this box, I consent to receive text messages
                      related to notifications from Lakeland Home.
                      Messages and data rates may apply. Reply HELP to (863)
                      614-0369 for assistance. Read our{" "}
                      <a  
                        href="/privacy-policy"
                        className="text-blue-500 underline"
                      >
                        Privacy Policy
                      </a>{" "}
                      and
                      <a
                        href="/terms-conditions"
                        className="text-blue-500 underline ml-1"
                      >
                        Terms of Service
                      </a>
                    </i>
                    .
                  </label>
                </div>

                <Button className="w-full bg-gradient-primary shadow-glow hover:shadow-elegant transition-smooth">
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Get in touch with our team of property maintenance experts.
                We're here to help with all your residential property needs.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl shadow-glow">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">
                    Phone
                  </h4>
                  <p className="text-muted-foreground">
                    Call us for immediate assistance
                  </p>
                  <p className="text-primary font-medium">(863) 614-0369</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl shadow-glow">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">
                    Email
                  </h4>
                  <p className="text-muted-foreground">
                    Send us your questions
                  </p>
                  <p className="text-primary font-medium">
                    jobs@lakelandhomemgt.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl shadow-glow">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">
                    Service Areas
                  </h4>
                  <p className="text-muted-foreground">
                    We serve multiple states
                  </p>
                  <p className="text-primary font-medium">15210 Ample DR APT #1834, Tampa, FL 33647</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl shadow-glow">
                  <Clock className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">
                    Hours
                  </h4>
                  <p className="text-muted-foreground">
                    24/7 Emergency Services
                  </p>
                  <p className="text-primary font-medium">Always Available</p>
                </div>
              </div>
            </div>

            {/* Service Areas Map Placeholder */}
            <Card className="shadow-card border-0 bg-accent/50">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Service Areas
                </h4>
                <div className="bg-muted rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Lakeland Home Covers</p>
                    <p className="text-sm text-muted-foreground">
                      All Major Markets & Counties
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {/* Conditionally render the modal at the end */}
      <SuccessModal isOpen={showModal} onClose={handleCloseModal} />
    </section>
  );
};

export default ContactSection;