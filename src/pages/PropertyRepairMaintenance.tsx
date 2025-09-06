import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Paintbrush, 
  Wrench, 
  Hammer, 
  ShowerHead, 
  CircuitBoard, 
  Droplets,
  ArrowRight,
  ClipboardCheck,
  Briefcase,
  Star,
} from "lucide-react";

const PropertyRepairMaintenance = () => {
  const repairServices = [
    {
      icon: Hammer,
      title: "Handyman Services",
      description: "A wide range of general home repairs, including carpentry, drywall, door installation, and fixture replacement."
    },
    {
      icon: Paintbrush,
      title: "Interior & Exterior Painting",
      description: "Expert application of paint for walls, ceilings, siding, trim, and other surfaces to restore and protect your property."
    },
    {
      icon: ShowerHead,
      title: "Plumbing Repairs",
      description: "Addressing leaks, clogs, fixture replacements, and pipe repairs to ensure a functional and safe water system."
    },
    {
      icon: CircuitBoard,
      title: "Electrical Work",
      description: "Services for lighting fixture installation, outlet repairs, wiring checks, and addressing minor electrical issues."
    },
    {
      icon: Droplets,
      title: "Water Damage Restoration",
      description: "Professional services to mitigate damage, dry out affected areas, and restore property after a water-related incident."
    },
    {
      icon: Wrench,
      title: "General Maintenance",
      description: "Proactive and preventative services to keep your property in top condition, reducing the need for major repairs."
    }
  ];

  const whyChooseUs = [
    {
      icon: ClipboardCheck,
      title: "Detailed Reporting",
      description: "We provide comprehensive reports with photos for every repair, giving you full visibility into the work completed."
    },
    {
      icon: Briefcase,
      title: "Experienced Professionals",
      description: "Our team consists of skilled and vetted craftsmen, ensuring every job is done with expertise and care."
    },
    {
      icon: Star,
      title: "Guaranteed Workmanship",
      description: "We stand behind the quality of our repairs with a commitment to your satisfaction and long-lasting results."
    }
  ];

  return (
    <section id="repair-maintenance" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Property Repair & Maintenance Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your one-stop solution for all home repair and maintenance needs. We handle every task to keep your property in perfect condition.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {repairServices.map((service, index) => (
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
              Why Trust Our Repair Services?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide efficient, high-quality solutions that protect your investment and save you time.
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

export default PropertyRepairMaintenance;