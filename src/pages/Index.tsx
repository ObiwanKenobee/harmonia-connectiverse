import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HighlightsSection } from "@/components/HighlightsSection";
import { JoinSection } from "@/components/JoinSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-primary/5">
      <HeroSection />
      <FeaturesSection />
      <HighlightsSection />
      <JoinSection />
    </div>
  );
};

export default Index;