import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import BenefitsGrid from "@/components/sections/BenefitsGrid";
import AudienceChips from "@/components/sections/AudienceChips";
import HypeSection from "@/components/sections/HypeSection";
import FocusGroupBanner from "@/components/sections/FocusGroupBanner";
import WhatYouLearn from "@/components/sections/WhatYouLearn";
import AuthorSection from "@/components/sections/AuthorSection";
import ModulesSection from "@/components/sections/ModulesSection";
import PricingHero from "@/components/sections/PricingHero";
import WhyNowSection from "@/components/sections/WhyNowSection";
import FinalCTA from "@/components/sections/FinalCTA";
import { useCustomCursor } from "@/hooks/useCustomCursor";

const Index = () => {
  useCustomCursor();
  
  return (
    <div className="min-h-screen bg-[hsl(var(--bg))] text-foreground">
      <Header />
      <main>
        <HeroSection />
        <BenefitsGrid />
        <AudienceChips />
        <HypeSection />
        <FocusGroupBanner />
        <WhatYouLearn />
        <AuthorSection />
        <ModulesSection />
        <PricingHero />
        <WhyNowSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
