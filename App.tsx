import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { WaitlistSection } from "./components/WaitlistSection";
import { LaunchCountdownSection } from "./components/LaunchCountdownSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { EventThemesSection } from "./components/EventThemesSection";
import { InfluencerSection } from "./components/InfluencerSection";
import { WhySlideintooSection } from "./components/WhySlideintooSection";
import { SafetySection } from "./components/SafetySection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { BookSlotSection } from "./components/BookSlotSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <WaitlistSection />
      <LaunchCountdownSection />
      <HowItWorksSection />
      <EventThemesSection />
      <InfluencerSection />
      <WhySlideintooSection />
      <SafetySection />
      <TestimonialsSection />
      <BookSlotSection />
      <Footer />
    </div>
  );
}