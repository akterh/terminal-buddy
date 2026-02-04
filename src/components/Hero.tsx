import { Mail, MapPin, Smartphone, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const expertiseBadges = [
  "Flutter",
  "Dart",
  "Clean Architecture",
  "BLOC Pattern",
  "State Management",
  "Mobile Apps",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      
      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Name & Title */}
          <div className="mb-6 animate-fade-in">
            <p className="text-primary font-medium tracking-widest uppercase mb-4">
              Mobile Application Developer
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-4">
              Md. Akter{" "}
              <span className="gradient-text">Hossain</span>
            </h1>
            <h2 className="font-display text-2xl md:text-3xl text-muted-foreground font-medium">
              Flutter Engineer
            </h2>
          </div>

          {/* Expertise Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {expertiseBadges.map((badge, index) => (
              <span
                key={badge}
                className="px-4 py-2 rounded-full text-sm font-medium bg-secondary border border-border hover:border-primary/50 transition-colors duration-300"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Bio */}
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s" }}>
            5+ years of experience crafting high-performance business applications for B2B and B2C markets. 
            Specializing in scalable, maintainable solutions with optimized architectures serving clients across 
            <span className="text-foreground font-medium"> Switzerland, Canada, </span> and 
            <span className="text-foreground font-medium"> Bangladesh</span>.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-muted-foreground animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <a href="mailto:akterh.ja@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={18} />
              <span>akterh.ja@gmail.com</span>
            </a>
            <a href="tel:+8801844664252" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Smartphone size={18} />
              <span>+880 1844664252</span>
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={18} />
              <span>Dhaka, Bangladesh</span>
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button size="lg" className="gap-2 glow-effect">
              <Github size={20} />
              View GitHub
            </Button>
            <Button size="lg" variant="outline" className="gap-2 gradient-border">
              <Linkedin size={20} />
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};
