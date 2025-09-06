import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Paintbrush, 
  Hammer, 
  Wrench, 
  Home, 
  TreePine, 
  HardHat,
  ArrowRight,
  Clock,
  DollarSign,
  Shield
} from "lucide-react";

import image1 from "@/assets/images/image1.jpeg";
import image2 from "@/assets/images/image2.jpg";
import image3 from "@/assets/images/image3.jpg";
import image4 from "@/assets/images/image4.jpg";
import image5 from "@/assets/images/image5.jpg";
import image6 from "@/assets/images/image6.jpg";
import image7 from "@/assets/images/image7.jpg";
import image8 from "@/assets/images/image8.jpeg";
import image9 from "@/assets/images/image9.jpeg";
import image10 from "@/assets/images/image10.jpg";
import image11 from "@/assets/images/image11.jpeg";
import image12 from "@/assets/images/image12.jpg";



// Modal component
const ImageModal = ({ imageUrl, onClose }) => {
  if (!imageUrl) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl max-h-[90vh] p-4 rounded-lg overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <img 
          src={imageUrl} 
          alt="Enlarged residential service" 
          className="max-w-full max-h-full rounded-lg"
        />
        <Button 
          variant="ghost" 
          onClick={onClose} 
          className="absolute top-4 right-4 text-white bg-black bg-opacity-50 hover:bg-opacity-75"
        >
          Close
        </Button>
      </div>
    </div>
  );
};

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // 2. Use the imported variables in your images array
  const images = [
    { src: image1 },
    { src: image2 },
    { src: image3 },
    { src: image4 },
    { src: image5 },
    { src: image6 },
    { src: image7 },
    { src: image8 },
    { src: image9 },
    { src: image10 },
    { src: image11 },
    { src: image12 }
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image.src);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            On-Site Residential Services Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A look at our team in action, providing professional property maintenance services.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group cursor-pointer rounded-lg overflow-hidden shadow-card hover:shadow-elegant transition-spring"
              onClick={() => handleImageClick(image)}
            >
              <img 
                src={image.src}
                alt={`Residential service ${index + 1}`}
                className="w-full h-48 object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
      <ImageModal imageUrl={selectedImage} onClose={handleCloseModal} />
    </section>
  );
};


const ServicesSection = () => {
  const services = [
    {
      icon: Paintbrush,
      title: "Painting",
      description: "Professional expertise in applying paint to various surfaces, walls, ceilings, exteriors, and other structures."
    },
    {
      icon: Home,
      title: "Flooring",
      description: "Installation, repair, and maintenance of various types of flooring for vacant and occupied tenant properties."
    },
    {
      icon: Wrench,
      title: "Plumbing",
      description: "Installation, repair, and maintenance of systems involving water, gas, and drainage in vacant & occupied properties."
    },
    {
      icon: HardHat,
      title: "Roofing",
      description: "Roof installation, repairs, replacement and maintenance for protecting structures from weather elements."
    },
    {
      icon: TreePine,
      title: "Tree Care",
      description: "Trimming, tree and stump removal, planting, and pest management for attractive, safe landscapes."
    },
    {
      icon: Hammer,
      title: "Handyman Services",
      description: "Wide range of home repair tasks including plumbing, electrical work, painting, carpentry, and installations."
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Professional Service",
      description: "Trust our professional service to meet your needs with industry-leading expertise."
    },
    {
      icon: Clock,
      title: "24/7 Services",
      description: "Customer-focused approach with round-the-clock availability for urgent needs."
    },
    {
      icon: DollarSign,
      title: "Affordable Price",
      description: "Enjoy quality service that's worth your money with transparent pricing."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive property maintenance and management services to keep your investments in perfect condition
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-spring border-0 shadow-card bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-primary rounded-xl shadow-glow mb-6 group-hover:scale-110 transition-spring">
                  <service.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>                
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-card">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Experience Quality Service
            </h3>
            <p className="text-muted-foreground">
              Discover why our expert services make us the top choice for your home's comfort needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-accent rounded-2xl group-hover:bg-gradient-primary transition-smooth shadow-card">
                    <benefit.icon className="h-8 w-8 text-accent-foreground group-hover:text-primary-foreground transition-smooth" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  {benefit.title}
                </h4>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function HomeWithGallery() {
  return (
    <>
      <ImageGallery />
      <ServicesSection />
    </>
  );
}