import { Button } from "./ui/button";
import { useState, useEffect } from "react";

interface EventTheme {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  examples: string[];
  status: 'live' | 'coming-soon' | 'beta';
}

const EVENT_THEMES: EventTheme[] = [
  {
    id: 'meme-dinners',
    title: 'Meme Dinners',
    description: 'Where internet culture meets real conversations',
    icon: '😂',
    color: 'from-yellow-400 to-orange-500',
    examples: ['Viral TikTok trends', 'Classic meme references', 'Internet humor'],
    status: 'live'
  },
  {
    id: 'icebreaker-challenges',
    title: 'Icebreaker Challenges',
    description: 'Creative ways to break the awkward silence',
    icon: '🧊',
    color: 'from-blue-400 to-cyan-500',
    examples: ['Two truths and a lie', 'Would you rather', 'Story prompts'],
    status: 'live'
  },
  {
    id: 'vibe-masters',
    title: 'Vibe Masters',
    description: 'Expert hosts curating perfect atmospheres',
    icon: '✨',
    color: 'from-purple-400 to-pink-500',
    examples: ['Themed conversations', 'Interactive games', 'Group activities'],
    status: 'beta'
  },
  {
    id: 'cultural-nights',
    title: 'Cultural Nights',
    description: 'Celebrating diversity through food and stories',
    icon: '🌍',
    color: 'from-green-400 to-emerald-500',
    examples: ['Regional cuisines', 'Cultural stories', 'Traditional games'],
    status: 'coming-soon'
  },
  {
    id: 'startup-mixers',
    title: 'Startup Mixers',
    description: 'Where founders meet future collaborators',
    icon: '🚀',
    color: 'from-indigo-400 to-purple-500',
    examples: ['Pitch sessions', 'Networking games', 'Problem-solving'],
    status: 'coming-soon'
  },
  {
    id: 'art-cafes',
    title: 'Art Cafés',
    description: 'Creative souls connecting over coffee and canvas',
    icon: '🎨',
    color: 'from-red-400 to-pink-500',
    examples: ['Sketch sessions', 'Art discussions', 'Creative challenges'],
    status: 'coming-soon'
  }
];

export function EventThemesSection() {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [visibleThemes, setVisibleThemes] = useState<boolean[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleThemes(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -30px 0px' }
    );

    document.querySelectorAll('.theme-card').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const getStatusBadge = (status: EventTheme['status']) => {
    switch (status) {
      case 'live':
        return <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">🟢 Live</span>;
      case 'beta':
        return <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">🔵 Beta</span>;
      case 'coming-soon':
        return <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">🟡 Coming Soon</span>;
    }
  };

  return (
    <section className="py-20 px-6 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/20 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl tracking-tight mb-4 font-light apple-fade-in">
            Event Themes That Actually Work
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-light apple-fade-in apple-fade-in-delay-1">
            We've tested these themes with real people. They're not just concepts—they're proven conversation starters.
          </p>
        </div>

        {/* Themes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {EVENT_THEMES.map((theme, index) => (
            <div
              key={theme.id}
              className={`theme-card bg-background rounded-2xl p-6 border border-border/20 transition-all duration-500 cursor-pointer hover:shadow-lg hover:scale-105 ${
                visibleThemes[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${selectedTheme === theme.id ? 'ring-2 ring-primary' : ''}`}
              data-index={index}
              onClick={() => setSelectedTheme(selectedTheme === theme.id ? null : theme.id)}
            >
              <div className="text-center mb-4">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${theme.color} flex items-center justify-center text-2xl mb-3 mx-auto`}>
                  {theme.icon}
                </div>
                <h3 className="font-medium text-foreground mb-2">{theme.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{theme.description}</p>
                {getStatusBadge(theme.status)}
              </div>

              {selectedTheme === theme.id && (
                <div className="mt-4 pt-4 border-t border-border/20">
                  <h4 className="font-medium text-sm mb-2">What to expect:</h4>
                  <ul className="space-y-1">
                    {theme.examples.map((example, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-center">
                        <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Featured Theme */}
        <div className="bg-gradient-to-r from-primary to-purple-600 rounded-2xl p-8 text-white mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">🔥</span>
                <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">Featured Theme</span>
              </div>
              <h3 className="text-2xl font-light mb-4">Meme Dinners</h3>
              <p className="text-white/80 mb-6">
                Our most popular theme. Perfect for breaking the ice and creating viral-worthy moments. 
                Every table becomes a meme factory.
              </p>
              <div className="space-y-2 text-sm text-white/90">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Pre-loaded conversation starters</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Viral moment sharing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Meme creation challenges</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                😂
              </div>
              <p className="text-sm text-white/80">
                "I laughed so hard I forgot I was eating with strangers"<br/>
                <span className="text-xs">- @memequeen, Mumbai</span>
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="rounded-full apple-button apple-hover-lift"
            onClick={() => window.open('https://app.slideintoo.com', '_blank')}
          >
            Browse Upcoming Events →
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            New themes added weekly. Join the waitlist to get early access.
          </p>
        </div>
      </div>
    </section>
  );
} 