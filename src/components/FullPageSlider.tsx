import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Star, TrendingUp, Users, Home, Clock, DollarSign, Shield, Paintbrush, Hammer, Wrench, HardHat, TreePine, Phone, Mail, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-homes.jpg";
import kitchenImage from "@/assets/kitchen-modern.jpg";
import bathroomImage from "@/assets/bathroom-elegant.jpg";
import livingRoomImage from "@/assets/living-room.jpg";
import backyardImage from "@/assets/backyard-landscape.jpg";

const FullPageSlider = () => {
  const propertySlides = [
    { image: kitchenImage, title: "Kitchen Renovations", description: "Modern kitchen upgrades with premium finishes" },
    { image: bathroomImage, title: "Bathroom Remodeling", description: "Elegant bathroom designs with luxury fixtures" },
    { image: livingRoomImage, title: "Living Spaces", description: "Beautiful living areas that enhance your home" },
    { image: backyardImage, title: "Landscaping", description: "Professional outdoor spaces and garden design" }
  ];

  const services = [
    { icon: Paintbrush, title: "Painting", description: "Professional expertise in applying paint to various surfaces, walls, ceilings, exteriors, and other structures." },
    { icon: Home, title: "Flooring", description: "Installation, repair, and maintenance of various types of flooring for vacant and occupied tenant properties." },
    { icon: Wrench, title: "Plumbing", description: "Installation, repair, and maintenance of systems involving water, gas, and drainage in vacant & occupied properties." },
    { icon: HardHat, title: "Roofing", description: "Roof installation, repairs, replacement and maintenance for protecting structures from weather elements." },
    { icon: TreePine, title: "Tree Care", description: "Trimming, tree and stump removal, planting, and pest management for attractive, safe landscapes." },
    { icon: Hammer, title: "Handyman Services", description: "Wide range of home repair tasks including plumbing, electrical work, painting, carpentry, and installations." }
  ];

  return (
    <div className="h-screen overflow-hidden">
      <Carousel className="w-full h-full" orientation="vertical">
        <CarouselContent className="h-full">
          
          {/* Slide 1: Hero Section */}
          <CarouselItem className="h-full">
            <div className="relative h-full flex items-center bg-gradient-subtle overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img src={heroImage} alt="Beautiful residential neighborhood" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
              </div>
              
              <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl">
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

                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
                    Comprehensive Home
                    <span className="block text-primary-glow">Repair & Maintenance</span>
                  </h1>

                  <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
                    Your one-stop solution for all tenant property needs with nationwide vendor network serving multiple states across the USA.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    {["10+ Years Experience", "60+ Service Types", "5 US States Covered", "10,000+ Services Delivered"].map((benefit) => (
                      <div key={benefit} className="flex items-center space-x-2 bg-card/10 backdrop-blur-sm rounded-full px-4 py-2 border border-primary-foreground/20">
                        <CheckCircle className="h-4 w-4 text-primary-glow" />
                        <span className="text-primary-foreground/90 text-sm font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-elegant text-lg px-8 py-6">
                      Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6">
                      View Services
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>

          {/* Slide 2: Property Showcase */}
          <CarouselItem className="h-full">
            <div className="h-full bg-gradient-subtle">
              <Carousel className="w-full h-full">
                <CarouselContent className="h-full">
                  {propertySlides.map((slide, index) => (
                    <CarouselItem key={index} className="h-full">
                      <div className="relative h-full w-full">
                        <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                          <div className="container mx-auto">
                            <h2 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h2>
                            <p className="text-xl md:text-2xl text-white/90 max-w-2xl">{slide.description}</p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-6 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30" />
                <CarouselNext className="right-6 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30" />
              </Carousel>
            </div>
          </CarouselItem>

          {/* Slide 3: Stats Section */}
          <CarouselItem className="h-full">
            <div className="h-full flex items-center bg-gradient-primary text-primary-foreground">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Track Record</h2>
                  <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
                    Numbers that speak to our commitment to excellence in property management
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                  {[
                    { icon: TrendingUp, number: "10,000+", label: "Properties Serviced", description: "Successfully maintained and improved" },
                    { icon: Users, number: "500+", label: "Happy Clients", description: "Trust us with their investments" },
                    { icon: Home, number: "15+", label: "Years Experience", description: "In property management excellence" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="flex justify-center mb-6">
                        <div className="flex items-center justify-center w-20 h-20 bg-primary-foreground/10 rounded-2xl backdrop-blur-sm">
                          <stat.icon className="h-10 w-10 text-primary-foreground" />
                        </div>
                      </div>
                      <div className="text-5xl md:text-6xl font-bold mb-2">{stat.number}</div>
                      <div className="text-xl md:text-2xl font-semibold mb-2">{stat.label}</div>
                      <p className="text-primary-foreground/80">{stat.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CarouselItem>

          {/* Slide 4: Services Section */}
          <CarouselItem className="h-full">
            <div className="h-full overflow-auto bg-gradient-subtle py-20">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Services</h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Comprehensive property maintenance and management services to keep your investments in perfect condition
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services.map((service, index) => (
                    <Card key={index} className="group hover:shadow-elegant transition-spring border-0 shadow-card bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-center w-14 h-14 bg-gradient-primary rounded-xl shadow-glow mb-6 group-hover:scale-110 transition-spring">
                          <service.icon className="h-7 w-7 text-primary-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </CarouselItem>

          {/* Slide 5: Contact Section */}
          <CarouselItem className="h-full">
            <div className="h-full flex items-center bg-gradient-hero text-primary-foreground">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h2>
                  <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
                    Ready to transform your property? Contact us today for a free consultation.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {[
                      { icon: Phone, title: "Call Us", info: "+1 (555) 123-4567", description: "24/7 Emergency Support" },
                      { icon: Mail, title: "Email Us", info: "contact@lakelandhome.com", description: "Quick Response Guaranteed" },
                      { icon: MapPin, title: "Visit Us", info: "123 Main St, Lakeland, FL", description: "Multiple Locations" }
                    ].map((contact, index) => (
                      <div key={index} className="text-center">
                        <div className="flex justify-center mb-4">
                          <div className="flex items-center justify-center w-16 h-16 bg-primary-foreground/10 rounded-2xl backdrop-blur-sm">
                            <contact.icon className="h-8 w-8 text-primary-foreground" />
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{contact.title}</h3>
                        <p className="text-lg font-medium mb-1">{contact.info}</p>
                        <p className="text-primary-foreground/80 text-sm">{contact.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-elegant text-lg px-8 py-6">
                      Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6">
                      Schedule Consultation
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>

        </CarouselContent>
        
        <CarouselPrevious className="left-6 top-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 rotate-90" />
        <CarouselNext className="right-6 top-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 rotate-90" />
      </Carousel>
    </div>
  );
};

export default FullPageSlider;