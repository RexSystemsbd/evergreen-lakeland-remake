import { TrendingUp, Award, MapPin, Wrench } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    number: "50",
    label: "Extensive Field Services",
    description: "Proven track record in property management",
  },
  {
    icon: Wrench,
    number: "15",
    label: "Homeowners Served",
    description: "Comprehensive maintenance solutions",
  },
  {
    icon: MapPin,
    number: "500",
    label: "Counties Served Coverage",
    description: "Extensive Market coverage",
  },
  {
    icon: Award,
    number: "10",
    label: "Tech Property Solutions",
    description: "Integrated Property Software",
  },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:justify-between lg:items-start gap-12">
          {/* Left Side: Title & Description */}
          <div className="text-center lg:text-left mb-12 lg:mb-0 lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-4 leading-tight">
              Your Reliable Contractor in Major Markets 
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Leader in Property Field Services with proven expertise and nationwide reach.
            </p>
          </div>

          {/* Right Side: Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:w-1/2">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white/5 p-6 rounded-3xl backdrop-filter backdrop-blur-sm border border-white/10 group hover:scale-105 transition-transform duration-300 shadow-xl"
              >
                <div className="flex justify-center lg:justify-start mb-4">
                  <div className="flex items-center justify-center w-14 h-14 bg-primary rounded-xl text-primary-foreground">
                    <stat.icon className="h-7 w-7" />
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-4xl font-bold text-primary mb-1">
                    {stat.number}
                  </h3>
                  <p className="text-lg font-semibold text-foreground">
                    {stat.label}
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;