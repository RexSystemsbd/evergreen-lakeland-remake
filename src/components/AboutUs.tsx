import { Star, Award, Users, Handshake } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Side: Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Lakeland Home Management
            </h2>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Founded on the principles of quality, integrity, and reliability, Lakeland Home Management has grown to become a trusted leader in the home preservation and maintenance industry. With over a decade of experience, we are dedicated to keeping your investments in perfect condition.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our journey began with a simple mission: to provide a one-stop solution for all tenant property needs. We have built a robust nationwide network of vendors, allowing us to serve multiple states across the USA with an extensive range of services. From routine handyman tasks to complex renovations, our team is equipped to handle it all with professionalism and expertise.
            </p>

            {/* Core Values Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 text-primary-glow shadow-glow">
                  <Star className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Quality</h4>
                  <p className="text-sm text-muted-foreground">
                    We ensure every job is done right, the first time, to the highest standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 text-primary-glow shadow-glow">
                  <Handshake className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Integrity</h4>
                  <p className="text-sm text-muted-foreground">
                    We operate with transparency, honesty, and a commitment to doing what's right.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 text-primary-glow shadow-glow">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Reliability</h4>
                  <p className="text-sm text-muted-foreground">
                    You can count on us to be there when you need us, 24/7, for all urgent needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 text-primary-glow shadow-glow">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Customer Focus</h4>
                  <p className="text-sm text-muted-foreground">
                    Your satisfaction is our top priority. We listen, adapt, and deliver.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Decorative Image or Graphic */}
          <div className="lg:w-1/2 flex justify-center relative">
            {/* Using a placeholder for the image to maintain design integrity */}
            <div className="w-full max-w-lg h-96 bg-gray-200 rounded-3xl shadow-elegant overflow-hidden">
              {/* This is where you would place an image of your team, a project, or a professional graphic */}
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Lakeland Home Management Team" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element from Hero section */}
            <div className="absolute top-10 -left-10 w-48 h-48 bg-primary-glow/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;