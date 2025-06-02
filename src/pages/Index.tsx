import HeroSection from "@/components/HeroSection";
import WorkflowSection from "@/components/WorkflowSection";
import PricingSection from "@/components/PricingSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WorkflowSection />
      <BenefitsSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
