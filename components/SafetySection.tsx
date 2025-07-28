import { Button } from "./ui/button";
import { useState } from "react";

interface SafetyFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

const SAFETY_FEATURES: SafetyFeature[] = [
  {
    id: 'verified-hosts',
    title: 'Verified Hosts',
    description: 'All our Vibe Masters are thoroughly vetted and trained',
    icon: '✅',
    details: [
      'Background verification',
      'Safety training completed',
      'Community guidelines certified',
      'Regular performance reviews'
    ]
  },
  {
    id: 'venue-partnerships',
    title: 'Partner Venues',
    description: 'We only work with trusted, established restaurants',
    icon: '🏢',
    details: [
      'Pre-screened locations',
      'Safety protocols in place',
      'Emergency contacts available',
      'Accessibility compliant'
    ]
  },
  {
    id: 'community-guidelines',
    title: 'Community Guidelines',
    description: 'Clear rules that keep everyone safe and comfortable',
    icon: '📋',
    details: [
      'Zero tolerance for harassment',
      'Respectful behavior required',
      'Easy reporting system',
      'Immediate response to issues'
    ]
  },
  {
    id: 'emergency-support',
    title: '24/7 Support',
    description: 'Help is always available when you need it',
    icon: '🆘',
    details: [
      'Live chat support',
      'Emergency hotline',
      'On-site assistance',
      'Follow-up after events'
    ]
  }
];

export function SafetySection() {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl tracking-tight mb-4 font-light apple-fade-in">
            Safety First, Always
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-light apple-fade-in apple-fade-in-delay-1">
            Meeting strangers should be exciting, not scary. We've built multiple layers of protection to keep everyone safe.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Verified hosts & venues</span>
            </span>
            <span className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>24/7 support available</span>
            </span>
            <span className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              <span>Zero tolerance policy</span>
            </span>
          </div>
        </div>

        {/* Safety Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {SAFETY_FEATURES.map((feature) => (
            <div
              key={feature.id}
              className={`bg-background rounded-2xl p-6 border border-border/20 transition-all duration-300 cursor-pointer hover:shadow-lg ${
                selectedFeature === feature.id ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setSelectedFeature(selectedFeature === feature.id ? null : feature.id)}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-xl">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{feature.description}</p>
                  
                  {selectedFeature === feature.id && (
                    <div className="mt-4 pt-4 border-t border-border/20">
                      <h4 className="font-medium text-sm mb-2">What this includes:</h4>
                      <ul className="space-y-1">
                        {feature.details.map((detail, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-center">
                            <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-border/20 mb-12">
          <h3 className="text-2xl font-light mb-6 text-center">Trust & Transparency</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-medium mb-2">Verified Community</h4>
              <p className="text-sm text-muted-foreground">
                Every host and venue is pre-screened and verified
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h4 className="font-medium mb-2">24/7 Support</h4>
              <p className="text-sm text-muted-foreground">
                Help is always available when you need it
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-medium mb-2">Clear Guidelines</h4>
              <p className="text-sm text-muted-foreground">
                Transparent rules that keep everyone safe
              </p>
            </div>
          </div>
        </div>

        {/* Safety Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-light text-foreground mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Verified Hosts</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-foreground mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-foreground mb-2">0</div>
            <div className="text-sm text-muted-foreground">Safety Incidents</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-foreground mb-2">4.9★</div>
            <div className="text-sm text-muted-foreground">Safety Rating</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="rounded-full apple-button apple-hover-lift"
            onClick={() => window.open('/safety', '_blank')}
          >
            Read Our Safety Guidelines →
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            We're committed to making every experience safe and enjoyable
          </p>
        </div>
      </div>
    </section>
  );
} 