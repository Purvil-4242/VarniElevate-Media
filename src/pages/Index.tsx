import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import TrustBadges from "@/components/home/TrustBadges";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProcessSection from "@/components/home/ProcessSection";
import CaseStudyPreview from "@/components/home/CaseStudyPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PricingPreview from "@/components/home/PricingPreview";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustBadges />
      <ServicesOverview />
      <WhyChooseUs />
      <ProcessSection />
      <CaseStudyPreview />
      <TestimonialsSection />
      <PricingPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
