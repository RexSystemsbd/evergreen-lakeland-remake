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
              Trusted by Leading Preservation Companies
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Comprehensive Home
            <span className="block text-primary-glow">Repair & Maintenance</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
            Your one-stop solution for all tenant property needs with nationwide vendor network serving multiple states across the USA.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap gap-4 mb-8">
            {[
              "10+ Years Experience",
              "60+ Service Types",
              "5 US States Covered",
              "10,000+ Services Delivered"
            ].map((benefit) => (
              <div key={benefit} className="flex items-center space-x-2 bg-card/10 backdrop-blur-sm rounded-full px-4 py-2 border border-primary-foreground/20">
                <CheckCircle className="h-4 w-4 text-primary-glow" />
                <span className="text-primary-foreground/90 text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-elegant text-lg px-8 py-6">
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6"
            >
              View Services
            </Button>
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