export function Footer() {
  const footerLinks = [
    { label: "About", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Terms & Privacy", href: "#" },
    { label: "Become a Host", href: "#" },
    { label: "Contact Us", href: "#" }
  ];

  const socialLinks = [
    { label: "Instagram", href: "#" },
    { label: "Threads", href: "#" },
    { label: "X / Twitter", href: "#" }
  ];

  return (
    <footer className="py-16 px-6 bg-muted/30 border-t">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            {footerLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-muted-foreground">
            © 2025 Slideintoo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}