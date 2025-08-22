import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import kitchenImage from "@/assets/kitchen-modern.jpg";
import bathroomImage from "@/assets/bathroom-elegant.jpg";
import livingRoomImage from "@/assets/living-room.jpg";
import backyardImage from "@/assets/backyard-landscape.jpg";

const PropertySlider = () => {
  const slides = [
    {
      image: kitchenImage,
      title: "Kitchen Renovations",
      description: "Modern kitchen upgrades with premium finishes"
    },
    {
      image: bathroomImage,
      title: "Bathroom Remodeling",
      description: "Elegant bathroom designs with luxury fixtures"
    },
    {
      image: livingRoomImage,
      title: "Living Spaces",
      description: "Beautiful living areas that enhance your home"
    },
    {
      image: backyardImage,
      title: "Landscaping",
      description: "Professional outdoor spaces and garden design"
    }
  ];

  return (
    <div className="w-full h-[60vh] md:h-[70vh]">
      <Carousel className="w-full h-full">
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="h-full">
              <Card className="border-0 bg-transparent h-full">
                <CardContent className="p-0 h-full">
                  <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-elegant">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                        {slide.title}
                      </h3>
                      <p className="text-white/90 text-base md:text-lg lg:text-xl">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-6 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30" />
        <CarouselNext className="right-6 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30" />
      </Carousel>
    </div>
  );
};

export default PropertySlider;