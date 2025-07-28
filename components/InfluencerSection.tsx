import { Button } from "./ui/button";
import { useState, useEffect } from "react";

interface Influencer {
  id: string;
  name: string;
  handle: string;
  city: string;
  followers: string;
  specialty: string;
  image: string;
  status: 'active' | 'coming-soon';
}

const VIBE_AMBASSADORS: Influencer[] = [
  {
    id: '1',
    name: 'Aisha Patel',
    handle: '@aishafoodie',
    city: 'Mumbai',
    followers: '45.2K',
    specialty: 'Food & Culture',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    status: 'active'
  },
  {
    id: '2',
    name: 'Rahul Sharma',
    handle: '@rahulvibes',
    city: 'Delhi',
    followers: '32.8K',
    specialty: 'Lifestyle & Tech',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    status: 'coming-soon'
  },
  {
    id: '3',
    name: 'Tanvi Reddy',
    handle: '@tanvistyle',
    city: 'Bangalore',
    followers: '28.5K',
    specialty: 'Fashion & Events',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    status: 'coming-soon'
  },
  {
    id: '4',
    name: 'Arjun Mehta',
    handle: '@arjunadventures',
    city: 'Pune',
    followers: '19.7K',
    specialty: 'Travel & Food',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    status: 'coming-soon'
  }
];

export function InfluencerSection() {
  const [visibleAmbassadors, setVisibleAmbassadors] = useState<boolean[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleAmbassadors(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.ambassador-card').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl tracking-tight mb-4 font-light apple-fade-in">
            Meet Your Vibe Ambassadors
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-light apple-fade-in apple-fade-in-delay-1">
            Local creators curating the most authentic experiences in your city.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Curated event themes</span>
            </span>
            <span className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Exclusive access codes</span>
            </span>
            <span className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              <span>Behind-the-scenes content</span>
            </span>
          </div>
        </div>

        {/* Ambassadors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {VIBE_AMBASSADORS.map((ambassador, index) => (
            <div
              key={ambassador.id}
              className={`ambassador-card bg-background rounded-2xl p-6 shadow-sm border border-border/20 transition-all duration-500 ${
                visibleAmbassadors[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              data-index={index}
            >
              <div className="text-center">
                <div className="relative mb-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto">
                    <img
                      src={ambassador.image}
                      alt={ambassador.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {ambassador.status === 'active' && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                
                <h3 className="font-medium text-foreground mb-1">{ambassador.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{ambassador.handle}</p>
                <p className="text-xs text-muted-foreground mb-3">{ambassador.specialty}</p>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{ambassador.followers} followers</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    ambassador.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {ambassador.status === 'active' ? 'Live' : 'Coming Soon'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-border/20 mb-12">
          <h3 className="text-2xl font-light mb-6 text-center">Why Partner With Us?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🎯</span>
              </div>
              <h4 className="font-medium mb-2">Authentic Content</h4>
              <p className="text-sm text-muted-foreground">
                Create genuine content around real human connections and experiences
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">💰</span>
              </div>
              <h4 className="font-medium mb-2">Revenue Share</h4>
              <p className="text-sm text-muted-foreground">
                Earn commission on events you help promote and host
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🌟</span>
              </div>
              <h4 className="font-medium mb-2">Exclusive Access</h4>
              <p className="text-sm text-muted-foreground">
                Early access to new features, events, and brand partnerships
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="rounded-full apple-button apple-hover-lift"
            onClick={() => window.open('mailto:partnerships@slideintoo.com?subject=Vibe Ambassador Application', '_blank')}
          >
            Become a Vibe Ambassador →
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Join our network of local creators and curate authentic experiences
          </p>
        </div>
      </div>
    </section>
  );
} 