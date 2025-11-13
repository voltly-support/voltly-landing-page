
import Hero from "@/components/Hero";
import CoreBenefits from "@/components/CoreBenefits";
import BeforeAfter from "@/components/BeforeAfter";
import SocialProof from "@/components/SocialProof";
import FeaturesDetail from "@/components/FeaturesDetail";
import TimeSavingsCalculator from "@/components/TimeSavingsCalculator";
import WaitlistSection from "@/components/WaitlistSection";
import PricingPreview from "@/components/PricingPreview";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CoreBenefits />
      <TimeSavingsCalculator />
      <BeforeAfter />
      {/* <SocialProof /> */}
      <FeaturesDetail />
      <WaitlistSection />
      <PricingPreview />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
