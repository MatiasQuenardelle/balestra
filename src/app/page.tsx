import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import VehiclesSection from "@/components/VehiclesSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import MapSection from "@/components/MapSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <VehiclesSection />
      <ServicesSection />
      <AboutSection />
      <ReviewsSection />
      <MapSection />
      <ContactSection />
    </>
  );
}
