import { Button } from "./ui/button";
import { useState } from "react";

interface City {
  id: string;
  name: string;
  description: string;
  launchDate: string;
  status: 'coming-soon' | 'launching' | 'live';
  image: string;
}

const LAUNCH_CITIES: City[] = [
  {
    id: 'mumbai',
    name: 'Mumbai',
    description: 'Where street food meets startup culture',
    launchDate: 'March 15, 2025',
    status: 'launching',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'delhi',
    name: 'Delhi',
    description: 'From Old Delhi charm to New Delhi swag',
    launchDate: 'March 22, 2025',
    status: 'coming-soon',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bangalore',
    name: 'Bangalore',
    description: 'Tech meets tradition in the garden city',
    launchDate: 'March 29, 2025',
    status: 'coming-soon',
    image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pune',
    name: 'Pune',
    description: 'Oxford of the East meets modern vibes',
    launchDate: 'April 5, 2025',
    status: 'coming-soon',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    description: 'Pearl City with a tech heart',
    launchDate: 'April 12, 2025',
    status: 'coming-soon',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export function WaitlistSection() {
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [email, setEmail] = useState('');
  const [instagram, setInstagram] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !selectedCity) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
      setInstagram('');
      setSelectedCity('');
    }, 3000);
  };

  const getStatusBadge = (status: City['status']) => {
    switch (status) {
      case 'launching':
        return <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">🚀 Launching Soon</span>;
      case 'coming-soon':
        return <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">⏰ Coming Soon</span>;
      case 'live':
        return <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">✨ Live Now</span>;
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl tracking-tight mb-4 font-light apple-fade-in">
            Be First to Slide In
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-light apple-fade-in apple-fade-in-delay-1">
            Join the waitlist for your city and get exclusive early access to our founders' tables.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Early access to founders' tables</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Exclusive event codes</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              <span>Free merch for first 100</span>
            </div>
          </div>
        </div>

        {/* City Selection */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {LAUNCH_CITIES.map((city) => (
            <div
              key={city.id}
              className={`relative group cursor-pointer rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                selectedCity === city.id 
                  ? 'border-primary shadow-lg scale-105' 
                  : 'border-border/20 hover:border-primary/50 hover:scale-102'
              }`}
              onClick={() => setSelectedCity(city.id)}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-medium text-white mb-1">{city.name}</h3>
                  <p className="text-sm text-white/80 mb-2">{city.description}</p>
                  {getStatusBadge(city.status)}
                </div>
              </div>
              {selectedCity === city.id && (
                <div className="absolute top-2 right-2 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Waitlist Form */}
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg border border-border/20 bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                required
              />
            </div>
            
            <div>
              <label htmlFor="instagram" className="block text-sm font-medium text-foreground mb-2">
                Instagram Handle (Optional)
              </label>
              <input
                type="text"
                id="instagram"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                placeholder="@yourhandle"
                className="w-full px-4 py-3 rounded-lg border border-border/20 bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full rounded-full apple-button apple-hover-lift"
              disabled={!email || !selectedCity || isSubmitting}
              loading={isSubmitting}
            >
              {submitted ? '🎉 You\'re on the list!' : 'Join the Waitlist'}
            </Button>
          </form>

          {submitted && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-center">
              <p className="text-green-800 font-medium">Welcome to the squad! 🎉</p>
              <p className="text-green-700 text-sm mt-1">
                We'll send you exclusive updates and early access codes.
              </p>
            </div>
          )}

          <p className="text-xs text-muted-foreground text-center mt-6">
            By joining, you agree to receive updates about Slide In Too events and launches.
          </p>
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-4">Already joined by</p>
          <div className="flex justify-center items-center space-x-6 text-2xl">
            <span className="font-light">2,847</span>
            <span className="text-muted-foreground">•</span>
            <span className="font-light">Mumbai</span>
            <span className="text-muted-foreground">•</span>
            <span className="font-light">Delhi</span>
            <span className="text-muted-foreground">•</span>
            <span className="font-light">Bangalore</span>
          </div>
        </div>
      </div>
    </section>
  );
} 