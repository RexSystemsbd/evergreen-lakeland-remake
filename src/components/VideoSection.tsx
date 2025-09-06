import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
// Import the video file directly for the build system to handle it
import videoSrc from "@/assets/videos/lakeland.mp4";

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
          <div className="relative aspect-video bg-card rounded-2xl overflow-hidden shadow-elegant">
            <video
              className="w-full h-full"
              src={videoSrc} // 👈 Using the imported video path
              controls
              autoPlay
              muted
              loop
            >
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Residential Property Maintenance 
                         </h3>
            <p className="text-muted-foreground">
              Lakeland Home Inspect, TroubleShoot, Bid and Repair any SFR Property Needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;