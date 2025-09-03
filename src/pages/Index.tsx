import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import AboutUs from "@/components/AboutUs";
import PropertyPreservation from "./PropertyPreservation";
import PropertyRepairMaintenance from "./PropertyRepairMaintenance";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <VideoSection />
      <AboutUs />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <PropertyPreservation />
      <PropertyRepairMaintenance />
      <ContactSection />
    </div>
  );
};

export default Index;
