import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { WhySlideintooSection } from "./components/WhySlideintooSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { BookSlotSection } from "./components/BookSlotSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <WhySlideintooSection />
      <TestimonialsSection />
      <BookSlotSection />
      <Footer />
    </div>
  );
}