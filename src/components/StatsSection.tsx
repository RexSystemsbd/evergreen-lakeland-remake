import { TrendingUp, Award, MapPin, Wrench } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: "10+",
      label: "Years Industry Experience",
      description: "Proven track record in property management"
    },
    {
      icon: Wrench,
      number: "60+",
      label: "Service Types Provided",
      description: "Comprehensive maintenance solutions"
    },
    {
      icon: MapPin,
      number: "05",
      label: "US States Covered",
      description: "Extensive regional coverage"
    },
    {
      icon: Award,
      number: "10,000+",
      label: "Field Services Delivered",
      description: "Successfully completed projects"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Dependable Regional Service Partner
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Leader in Property Field Services with proven expertise and nationwide reach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-spring"
            >
              <div className="flex justify-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl shadow-glow group-hover:shadow-elegant transition-smooth">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl md:text-5xl font-bold text-primary">
                  {stat.number}
                </h3>
                <p className="text-lg font-semibold text-foreground">
                  {stat.label}
                </p>
                <p className="text-muted-foreground text-sm">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;