import { Home, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-primary-foreground/10 rounded-lg">
                <Home className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold">Lakeland Home</span>                
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your dependable regional service partner for comprehensive property maintenance and management solutions.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">Painting</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">Flooring</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">Plumbing</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">Roofing</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">Tree Care</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">Handyman Services</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#about" className="hover:text-primary-foreground transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#process" className="hover:text-primary-foreground transition-colors">Our Process</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">Service Areas</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">(863) 614-0369</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">jobs@lakelandhomemgt.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">15210 Ample DR APT #1834 Tampa, FL 33647 </span>                                
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Lakeland Home Management LLC. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-primary-foreground/60">
            <a href="/privacy-policy" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="/terms-conditions" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;