export function WhySlideintooSection() {
  const highlights = [
    {
      icon: "💬",
      text: "Real conversations, not swipes or bios."
    },
    {
      icon: "🌍", 
      text: "Cultural & thematic experiences — not just food."
    },
    {
      icon: "🎯",
      text: "Shared values, curious minds, open hearts."
    },
    {
      icon: "🔥",
      text: "Events curated by hosts, not algorithms."
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
          alt="Group of people having meaningful conversations"
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl tracking-tight mb-4">
            Because strangers make the best stories.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-center space-x-4 p-6 rounded-2xl bg-background/80 backdrop-blur-sm border border-border/20">
              <span className="text-3xl">{highlight.icon}</span>
              <p className="text-lg">{highlight.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}