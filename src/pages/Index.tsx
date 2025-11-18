
import Hero from "@/components/Hero";
import CoreBenefits from "@/components/CoreBenefits";
import BeforeAfter from "@/components/BeforeAfter";
import FeaturesDetail from "@/components/FeaturesDetail";
import TimeSavingsCalculator from "@/components/TimeSavingsCalculator";
import WaitlistSection from "@/components/WaitlistSection";
import PricingPreview from "@/components/PricingPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CoreBenefits />
      <BeforeAfter />
      <FeaturesDetail />
      <TimeSavingsCalculator />
      <PricingPreview />
      <WaitlistSection />
      <Footer />
    </div>
  );
};

export default Index;
