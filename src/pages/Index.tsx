import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const el = document.getElementById(targetId);
      if (el) {
        // smooth scroll when hash is present
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

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
      {/* 👇 add the id here so #contact works */}
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
