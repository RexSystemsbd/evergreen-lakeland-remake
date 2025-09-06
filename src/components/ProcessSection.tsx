import { Card, CardContent } from "@/components/ui/card";
import { Search, Eye, Cog, CheckCircle, ArrowRight } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: Search,
      title: "Assessment",
      description: "Discuss your servicing needs",
      details: "We start with a comprehensive evaluation of your property requirements and maintenance needs."
    },
    {
      icon: Eye,
      title: "Inspection",
      description: "Evaluate the situation and provide solutions",
      details: "Our experts conduct thorough inspections to identify issues and recommend the best solutions."
    },
    {
      icon: Cog,
      title: "Execution",
      description: "Implement the best servicing solutions",
      details: "We execute all maintenance and repair work with precision using quality materials and skilled technicians."
    },
    {
      icon: CheckCircle,
      title: "Follow Up",
      description: "Ensure satisfaction and address concerns",
      details: "We follow up to ensure complete satisfaction and address any additional concerns or questions."
    }
  ];

  return (
    <section id="process" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tech Enabled Property Management
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process ensures efficient, reliable service delivery from start to finish
          </p>
        </div>

        <div className="relative">
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-8 h-0.5 bg-gradient-to-r from-primary to-primary-glow z-0">
                    <ArrowRight className="absolute -right-2 -top-2 h-4 w-4 text-primary" />
                  </div>
                )}

                <Card className="group hover:shadow-elegant transition-spring border-0 shadow-card bg-gradient-subtle relative z-10">
                  <CardContent className="p-8 text-center">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold shadow-glow">
                        {index + 1}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="flex justify-center mb-6 mt-4">
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl shadow-glow group-hover:scale-110 transition-spring">
                        <step.icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-primary font-medium mb-3">
                      {step.description}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.details}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20 bg-gradient-primary rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-8">
            Your Preferred Contractor
          </h3>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
            We offer transparent pricing, top-tier customer service, and personalized solutions that elevate your property to its full potential. From detailed craftsmanship to reliable handyman work, every project we handle is executed with care and precision.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-primary-foreground mb-2">Client-Centric Commitment</h4>
              <p className="text-primary-foreground/80 text-sm">We prioritize our clients in every decision, ensuring solutions are tailored to their specific needs and delivered with precision.</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-primary-foreground mb-2">Integrity Without Compromise</h4>
              <p className="text-primary-foreground/80 text-sm">We conduct business with the utmost ethical standards, maintaining transparency, honesty, and accountability at every stage.</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-primary-foreground mb-2">Relentless Pursuit of Quality</h4>
              <p className="text-primary-foreground/80 text-sm">We consistently deliver excellence through superior craftsmanship, high-grade materials, and rigorous attention to detail.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;