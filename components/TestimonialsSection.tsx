import { useState, useEffect } from "react";

export function TestimonialsSection() {
  const [visibleTestimonials, setVisibleTestimonials] = useState<boolean[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleTestimonials(prev => {
              const newTestimonials = [...prev];
              newTestimonials[index] = true;
              return newTestimonials;
            });
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.testimonial-card').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      quote: "I showed up solo. Left with a business partner.",
      author: "Aarav, Delhi",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      quote: "It was better than any dating app dinner I've ever had.",
      author: "Tanvi, Bangalore",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      quote: "No pressure. No small talk. Just authentic people and laughter.",
      author: "Rhea, Mumbai",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl tracking-tight mb-4 font-light apple-fade-in">
            What people are saying
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`testimonial-card bg-background p-8 rounded-2xl shadow-sm apple-on-scroll apple-hover-lift ${
                visibleTestimonials[index] ? 'visible' : ''
              }`}
              data-index={index}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden apple-image-reveal">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="text-muted-foreground font-light">
                  {testimonial.author}
                </p>
              </div>
              <p className="text-lg leading-relaxed font-light">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}