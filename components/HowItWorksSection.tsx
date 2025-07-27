import { useState } from "react";

export function HowItWorksSection() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      number: "1",
      title: "Discover",
      description: "Browse curated dinners and events in your city based on interests, themes, or vibes.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      webpImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=webp"
    },
    {
      number: "2", 
      title: "Slide In",
      description: "Reserve your seat at the table. We limit it to 5–10 people so conversations go deep.",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      webpImage: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=webp"
    },
    {
      number: "3",
      title: "Show Up & Connect", 
      description: "Join the dinner, meet strangers, and walk away with stories and new connections.",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      webpImage: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=webp"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl tracking-tight mb-4 animate-fade-in">
            Slide In, Meet, Repeat.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className="text-center group cursor-pointer"
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <div className="mb-6 relative overflow-hidden rounded-2xl aspect-square hover-lift">
                <picture>
                  <source srcSet={step.webpImage} type="image/webp" />
                  <img 
                    src={step.image}
                    alt={`Step ${step.number}: ${step.title}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    width={400}
                    height={400}
                  />
                </picture>
                <div className="absolute top-4 left-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-semibold transition-transform duration-200 group-hover:scale-110">
                  {step.number}
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <h3 className="text-xl mb-4 font-semibold transition-colors duration-200 group-hover:text-primary">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}