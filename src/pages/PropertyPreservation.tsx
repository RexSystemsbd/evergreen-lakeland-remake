import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Lock, 
  Trash2, 
  Flower, 
  Snowflake, 
  ClipboardList, 
  Wrench,
  ArrowRight,
  ShieldCheck,
  Zap,
  MapPin,
} from "lucide-react";

const PropertyPreservation = () => {
  const preservationServices = [
    {
      icon: Lock,
      title: "Security & Lock Changes",
      description: "We secure properties by rekeying locks, boarding windows and doors, and installing lockboxes to prevent unauthorized access."
    },
    {
      icon: Trash2,
      title: "Debris & Trash Removal",
      description: "Thorough removal of interior and exterior debris, appliances, and personal property, including full hauling and disposal."
    },
    {
      icon: Flower,
      title: "Lawn Care & Landscaping",
      description: "Routine lawn mowing, trimming, weeding, and shrub maintenance to ensure curb appeal and compliance with local ordinances."
    },
    {
      icon: Snowflake,
      title: "Winterization",
      description: "Protecting a property's plumbing and sprinkler systems from freezing in cold weather to prevent costly pipe bursts."
    },
    {
      icon: ClipboardList,
      title: "Initial Inspections & Reports",
      description: "Comprehensive initial inspections and photographic reporting to document the property's condition accurately."
    },
    {
      icon: Wrench,
      title: "Maintenance & Repairs",
      description: "From minor roof repairs to fixing broken doors and drywall, we handle all necessary maintenance to bring a property to a sellable state."
    }
  ];

  const whyChooseUs = [
    {
      icon: ShieldCheck,
      title: "Compliance & Safety",
      description: "Our services ensure properties meet all local safety and code requirements, mitigating risk for property owners."
    },
    {
      icon: Zap,
      title: "Rapid Response",
      description: "We offer quick turnaround times to secure and service properties, minimizing vacancy periods and preventing further damage."
    },
    {
      icon: MapPin,
      title: "Nationwide Coverage",
      description: "Utilizing a vast vendor network, we provide consistent, high-quality preservation services across multiple states."
    }
  ];

  return (
    <section id="preservation" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Property Preservation Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ensuring the security and integrity of your vacant or foreclosed properties with our reliable preservation services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {preservationServices.map((service, index) => (
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
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-card">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Why Partner with Lakeland for Preservation?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We understand the unique challenges of property preservation and deliver solutions that are efficient, compliant, and cost-effective.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((benefit, index) => (
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
        {/* CTA */}       
      </div>
    </section>
  );
};

export default PropertyPreservation;