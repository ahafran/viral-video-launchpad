import HeroSection from "@/components/HeroSection";
import WorkflowSection from "@/components/WorkflowSection";
import PricingSection from "@/components/PricingSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
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
