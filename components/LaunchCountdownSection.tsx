import { Button } from "./ui/button";
import { useState, useEffect } from "react";

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const MUMBAI_LAUNCH_DATE = new Date('2025-03-15T18:00:00').getTime();

export function LaunchCountdownSection() {
  const [countdown, setCountdown] = useState<CountdownTime>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = MUMBAI_LAUNCH_DATE - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('.countdown-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const shareOnSocial = (platform: string) => {
    const text = encodeURIComponent("🚀 Slide In Too is launching in Mumbai! Join the waitlist and be first to slide into curated dinners with strangers. #SlideInToo #MumbaiLaunch");
    const url = encodeURIComponent(window.location.href);
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      instagram: `https://www.instagram.com/`,
      whatsapp: `https://wa.me/?text=${text}%20${url}`
    };

    window.open(shareUrls[platform as keyof typeof shareUrls], '_blank');
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden countdown-section">
      {/* Background with animated elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary/15 rounded-full animate-ping"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* City Reveal */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <span className="inline-block bg-gradient-to-r from-primary to-purple-600 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
              🎉 First City Revealed
            </span>
            <h2 className="text-5xl md:text-7xl tracking-tight mb-4 font-light">
              Mumbai
            </h2>
            <p className="text-xl text-muted-foreground mb-8 font-light">
              Where street food meets startup culture
            </p>
          </div>
        </div>

        {/* Countdown */}
        <div className={`grid grid-cols-4 gap-4 mb-12 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {[
            { label: 'Days', value: countdown.days },
            { label: 'Hours', value: countdown.hours },
            { label: 'Minutes', value: countdown.minutes },
            { label: 'Seconds', value: countdown.seconds }
          ].map((item, index) => (
            <div key={item.label} className="text-center">
              <div className="bg-background/80 backdrop-blur-sm border border-border/20 rounded-2xl p-6 mb-2">
                <div className="text-3xl md:text-4xl font-light text-foreground">
                  {item.value.toString().padStart(2, '0')}
                </div>
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Launch Details */}
        <div className={`space-y-6 mb-12 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-muted/30 rounded-2xl p-8 backdrop-blur-sm border border-border/20">
            <h3 className="text-2xl font-light mb-4">What's Happening on Launch Day?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">🎯</span>
                </div>
                <h4 className="font-medium mb-2">Founders' Tables</h4>
                <p className="text-sm text-muted-foreground">Exclusive first events with limited seating</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">🎁</span>
                </div>
                <h4 className="font-medium mb-2">Free Merch</h4>
                <p className="text-sm text-muted-foreground">First 100 slide-ins get exclusive gear</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">📱</span>
                </div>
                <h4 className="font-medium mb-2">AR Filters</h4>
                <p className="text-sm text-muted-foreground">City-specific social media filters</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={`space-y-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button 
            size="lg" 
            className="rounded-full apple-button apple-hover-lift"
            onClick={() => window.open('https://app.slideintoo.com', '_blank')}
          >
            Join Mumbai Waitlist →
          </Button>
          
          <div className="flex justify-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full"
              onClick={() => shareOnSocial('twitter')}
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              Share
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              className="rounded-full"
              onClick={() => shareOnSocial('whatsapp')}
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp
            </Button>
          </div>
        </div>

        {/* Social Proof */}
        <div className={`mt-12 text-center ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-sm text-muted-foreground mb-2">Join the conversation</p>
          <div className="flex justify-center space-x-6 text-sm">
            <span className="text-muted-foreground">#SlideInToo</span>
            <span className="text-muted-foreground">#MumbaiLaunch</span>
            <span className="text-muted-foreground">#FoundersTables</span>
          </div>
        </div>
      </div>
    </section>
  );
} 