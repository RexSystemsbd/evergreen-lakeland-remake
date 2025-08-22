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
    <div className="w-full max-w-4xl mx-auto">
      <Carousel className="w-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <Card className="border-0 bg-transparent">
                <CardContent className="p-0">
                  <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-[300px] md:h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl md:text-2xl font-bold mb-2">
                        {slide.title}
                      </h3>
                      <p className="text-white/90 text-sm md:text-base">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
};

export default PropertySlider;