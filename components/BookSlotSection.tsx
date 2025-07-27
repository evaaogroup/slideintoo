import { Button } from "./ui/button";

export function BookSlotSection() {
  return (
    <section className="py-20 px-6 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
          alt="People enjoying conversation and connection at dinner"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl tracking-tight mb-6">
          Ready to Slide In?
        </h2>
        <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
          Browse upcoming dinners and book your seat through our web app.
        </p>
        <p className="text-lg text-muted-foreground mb-12">
          It takes less than 2 minutes to join a table.
        </p>
        
        <div className="space-y-4">
          <Button 
            size="lg" 
            className="rounded-full"
            onClick={() => window.open('https://app.slideintoo.com', '_blank')}
          >
            Go to Web App →
          </Button>
          <p className="text-sm text-muted-foreground">
            No mobile app needed. Just show up — we'll take care of the rest.
          </p>
        </div>
      </div>
    </section>
  );
}