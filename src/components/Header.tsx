import { Home } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full border-b border-border/50 bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/90 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left Navigation */}
          <nav className="flex items-center space-x-8">
            <a 
              href="#about" 
              className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-smooth tracking-wide uppercase"
            >
              ABOUT
            </a>
            <a 
              href="#services" 
              className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-smooth tracking-wide uppercase"
            >
              SERVICES
            </a>
          </nav>

          {/* Center Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-8 h-8 bg-primary-foreground rounded-md">
              <Home className="h-5 w-5 text-primary" />
            </div>
            <div className="text-center">
              <span className="text-xl font-bold text-primary-foreground tracking-tight">Lakeland Home Management</span>
            </div>
          </div>

          {/* Right Navigation */}
          <nav className="flex items-center">
            <a 
              href="#contact" 
              className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-smooth tracking-wide uppercase"
            >
              CONTACT
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;