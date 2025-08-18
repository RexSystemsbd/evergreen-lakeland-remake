import { Button } from "@/components/ui/button";
import { Home, Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-primary rounded-lg shadow-glow">
              <Home className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground">Lakeland Home</span>
              <span className="text-sm text-muted-foreground -mt-1">Management</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-smooth">
              Services
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-smooth">
              About
            </a>
            <a href="#process" className="text-muted-foreground hover:text-primary transition-smooth">
              Process
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-smooth">
              Contact
            </a>
          </nav>

          {/* Contact Button */}
          <Button variant="default" className="hidden sm:flex items-center space-x-2 shadow-card">
            <Phone className="h-4 w-4" />
            <span>Get Quote</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;