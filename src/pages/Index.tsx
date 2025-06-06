import HeroSection from "@/components/HeroSection";
import WorkflowSection from "@/components/WorkflowSection";
import PricingSection from "@/components/PricingSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import RecommendationEngine from "@/components/RecommendationEngine";
import ScrollToTop from "@/components/ScrollToTop";
import { usePageTracking } from "@/hooks/useAI";

const Index = () => {
  usePageTracking();

  return (
    <div className="min-h-screen">
      <HeroSection />
      <RecommendationEngine />
      <WorkflowSection />
      <BenefitsSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <ScrollToTop />
    </div>
  );
};

export default Index;
