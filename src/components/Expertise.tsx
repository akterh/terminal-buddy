import { Smartphone, Database, Layers, Zap, Code2, Settings } from "lucide-react";

const expertiseAreas = [
  {
    icon: Smartphone,
    title: "Flutter Development",
    description: "Expert in building cross-platform mobile applications with Flutter & Dart, delivering pixel-perfect UIs with smooth 60fps animations.",
    skills: ["Flutter", "Dart", "Material Design", "Cupertino Widgets"],
  },
  {
    icon: Layers,
    title: "State Management",
    description: "Deep expertise in reactive programming and state management patterns for scalable, maintainable codebases.",
    skills: ["BLoC", "Provider", "Riverpod", "RxDart", "GetX"],
  },
  {
    icon: Code2,
    title: "Clean Architecture",
    description: "Implementing SOLID principles and clean architecture for testable, maintainable code that scales with your business.",
    skills: ["MVVM", "Clean Architecture", "SOLID", "Dependency Injection"],
  },
  {
    icon: Database,
    title: "Data Persistence",
    description: "Efficient local data management with offline-first architecture ensuring seamless user experiences.",
    skills: ["SQLite", "Hive", "SharedPreferences", "Caching"],
  },
  {
    icon: Zap,
    title: "Real-time Features",
    description: "Building interactive applications with real-time communication, video calling, and live updates.",
    skills: ["WebRTC", "Socket.io", "Firebase", "Push Notifications"],
  },
  {
    icon: Settings,
    title: "Platform Integration",
    description: "Native platform features, payment systems, and third-party service integrations for complete solutions.",
    skills: ["In-App Purchase", "Google Maps", "Method Channels", "CI/CD"],
  },
];

export const Expertise = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      <div className="container relative z-10 px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase mb-4">
            What I Do Best
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Core <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Specialized skills honed over 5+ years of building production-grade mobile applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {expertiseAreas.map((area, index) => (
            <div
              key={area.title}
              className="group p-6 rounded-2xl card-elevated border border-border hover:border-primary/30 transition-all duration-500"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <area.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {area.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {area.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {area.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
