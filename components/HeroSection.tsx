import { Button } from "./ui/button";
import { useState } from "react";

export function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source 
            srcSet="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80&fm=webp" 
            type="image/webp" 
          />
          <img 
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Group of friends having dinner and conversation"
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              imageLoaded ? 'opacity-10' : 'opacity-0'
            }`}
            loading="eager"
            onLoad={() => setImageLoaded(true)}
            width={1200}
            height={800}
          />
        </picture>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl tracking-tight mb-6 text-foreground animate-fade-in">
          Come hungry.
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-2 max-w-2xl mx-auto animate-fade-in animation-delay-200">
          For connection. For stories. For something new.
        </p>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in animation-delay-400">
          Meet strangers, share experiences, and make memories over curated dinners.
        </p>
        
        <div className="space-y-4 animate-fade-in animation-delay-600">
          <Button 
            size="lg" 
            className="rounded-full hover:scale-105 transition-transform duration-200"
            onClick={() => window.open('https://app.slideintoo.com', '_blank')}
          >
            Slide Into the App →
          </Button>
          <p className="text-sm text-muted-foreground">
            No sign-up needed. Browse experiences directly in the web app.
          </p>
        </div>
      </div>
    </section>
  );
}