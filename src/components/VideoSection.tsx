import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoSection = () => {
  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See Our Property Management in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch how we transform property management with our comprehensive services and dedicated approach.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-card rounded-2xl overflow-hidden shadow-elegant group cursor-pointer">
            {/* Video thumbnail - replace with actual video thumbnail */}
            <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
            <img 
              src="/src/assets/hero-homes.jpg" 
              alt="Property management video preview" 
              className="w-full h-full object-cover"
            />
            
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Button 
                size="lg" 
                className="w-20 h-20 rounded-full bg-primary-foreground/90 hover:bg-primary-foreground group-hover:scale-110 transition-all duration-300 shadow-glow"
              >
                <Play className="h-8 w-8 text-primary fill-current ml-1" />
              </Button>
            </div>
            
            {/* Video duration badge */}
            <div className="absolute bottom-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-md text-sm font-medium">
              2:30
            </div>
          </div>
          
          {/* Video description */}
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Professional Property Management Solutions
            </h3>
            <p className="text-muted-foreground">
              Discover how our experienced team manages residential properties with care, attention to detail, and proven results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;