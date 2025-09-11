import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import heroImage from "@/assets/hero-homes.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-subtle overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Beautiful residential neighborhood" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Trust Badge */}
          <div className="flex items-center space-x-2 mb-6">
            <div className="flex items-center space-x-1">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-primary-foreground/90 text-sm font-medium">
              Trusted Partnership with Homeowners and Property Management Companies
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Comprehensive Home
            <span className="block ">Repair & Maintenance</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
            Your one-stop solution for all tenant property needs with nationwide vendor network serving multiple states across the USA.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap gap-4 mb-8">
            {[
              "50 Extensive Field Services",
              "15 Homeowners Served",
              "1000 Counties Served",
              "10 Tech Property Solutions"
            ].map((benefit) => (
              <div key={benefit} className="flex items-center space-x-2 bg-card/10 backdrop-blur-sm rounded-full px-4 py-2 border border-primary-foreground/20">
                <CheckCircle className="h-4 w-4 text-primary-glow" />
                <span className="text-primary-foreground/90 text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <a 
              href="#preservation" 
              className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-base font-semibold transition-colors duration-300 bg-primary-foreground text-primary hover:bg-primary-dark shadow-elegant transform hover:scale-105"
            >
              Property Preservation
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#repair-maintenance"
              className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-base font-semibold transition-colors duration-300 border border-border-primary bg-primary-foreground text-primary hover:bg-muted-background hover:text-primary-dark hover:scale-105"
            >
              Property Repair & Maintenance
            </a>
          </div>
              
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary-glow/20 rounded-full blur-3xl"></div>
      <div className="absolute top-20 right-20 w-20 h-20 bg-primary-foreground/10 rounded-full blur-2xl"></div>
    </section>
  );
};

export default HeroSection;