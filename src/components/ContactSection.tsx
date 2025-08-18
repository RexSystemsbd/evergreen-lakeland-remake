import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get Your Free Quote Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your property? Contact us for professional maintenance and repair services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-elegant border-0 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <Input placeholder="Your first name" className="border-border" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <Input placeholder="Your last name" className="border-border" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <Input type="email" placeholder="your.email@example.com" className="border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <Input type="tel" placeholder="(555) 123-4567" className="border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Service Needed</label>
                  <Input placeholder="e.g., Plumbing repair, Painting, General maintenance" className="border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your property maintenance needs..." 
                    className="border-border min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-gradient-primary shadow-glow hover:shadow-elegant transition-smooth">
                  Get Free Quote
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Get in touch with our team of property maintenance experts. We're here to help with all your residential property needs.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl shadow-glow">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Phone</h4>
                  <p className="text-muted-foreground">Call us for immediate assistance</p>
                  <p className="text-primary font-medium">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl shadow-glow">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground">Send us your questions</p>
                  <p className="text-primary font-medium">info@lakelandhomemgt.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl shadow-glow">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Service Areas</h4>
                  <p className="text-muted-foreground">We serve multiple states</p>
                  <p className="text-primary font-medium">5 US States Coverage</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl shadow-glow">
                  <Clock className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Hours</h4>
                  <p className="text-muted-foreground">24/7 Emergency Services</p>
                  <p className="text-primary font-medium">Always Available</p>
                </div>
              </div>
            </div>

            {/* Service Areas Map Placeholder */}
            <Card className="shadow-card border-0 bg-accent/50">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Service Areas</h4>
                <div className="bg-muted rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Serving 5 US States</p>
                    <p className="text-sm text-muted-foreground">Professional property services nationwide</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;