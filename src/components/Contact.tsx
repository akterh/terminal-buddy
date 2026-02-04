import { Mail, Smartphone, MapPin, Github, Linkedin, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest uppercase mb-4">
              Let's Connect
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Looking for a skilled Flutter developer? Let's discuss how I can contribute to your next project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <a
                href="mailto:akterh.ja@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">akterh.ja@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+8801844664252"
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Smartphone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+880 1844664252</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Education & Social */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl card-elevated border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-display font-semibold">Education</h3>
                </div>
                <p className="font-medium mb-1">BSc. in Computer Science & Engineering</p>
                <p className="text-sm text-muted-foreground mb-2">Uttara University</p>
                <p className="text-sm text-primary font-medium">CGPA: 3.17 / 4.0</p>
              </div>

              <div className="flex gap-4">
                <a href="https://github.com/akterh" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button size="lg" className="w-full gap-2 glow-effect">
                    <Github size={20} />
                    GitHub
                  </Button>
                </a>
                <a href="https://linkedin.com/in/akterh" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button size="lg" variant="outline" className="w-full gap-2 gradient-border">
                    <Linkedin size={20} />
                    LinkedIn
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-border text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Md. Akter Hossain. Built with passion for Flutter development.
        </p>
      </div>
    </section>
  );
};
