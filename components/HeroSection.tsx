import { Button } from "./ui/button";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      setParallaxOffset(rate);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source 
            srcSet="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80&fm=webp" 
            type="image/webp" 
          />
          <img 
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Group of friends having dinner and conversation"
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              imageLoaded ? 'opacity-10' : 'opacity-0'
            } apple-parallax`}
            style={{ transform: `translateY(${parallaxOffset}px)` }}
            loading="eager"
            onLoad={() => setImageLoaded(true)}
            width={1200}
            height={800}
          />
        </picture>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="apple-text-reveal">
          <h1 className="text-5xl md:text-7xl tracking-tight mb-6 text-foreground font-light">
            <span className="apple-fade-in apple-fade-in-delay-1">Come hungry.</span>
          </h1>
        </div>
        
        <div className="apple-text-reveal">
          <p className="text-xl md:text-2xl text-muted-foreground mb-2 max-w-2xl mx-auto font-light">
            <span className="apple-fade-in apple-fade-in-delay-2">For connection. For stories. For something new.</span>
          </p>
        </div>
        
        <div className="apple-text-reveal">
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
            <span className="apple-fade-in apple-fade-in-delay-3">Meet strangers, share experiences, and make memories over curated dinners.</span>
          </p>
        </div>
        
        <div className="apple-fade-in apple-fade-in-delay-4">
          <Button 
            size="lg" 
            className="rounded-full apple-button apple-hover-lift"
            onClick={() => window.open('https://app.slideintoo.com', '_blank')}
          >
            Slide Into the App →
          </Button>
          <p className="text-sm text-muted-foreground mt-4 apple-fade-in apple-fade-in-delay-5">
            No sign-up needed. Browse experiences directly in the web app.
          </p>
        </div>
      </div>
    </section>
  );
}