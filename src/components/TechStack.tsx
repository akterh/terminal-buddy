const technologies = [
  { name: "Dart", icon: "🎯", years: "4+" },
  { name: "Flutter", icon: "💙", years: "4+" },
  { name: "BLoC Pattern", icon: "🧱", years: "3+" },
  { name: "Clean Architecture", icon: "🏗️", years: "3+" },
  { name: "Firebase", icon: "🔥", years: "3+" },
  { name: "SQLite / Hive", icon: "💾", years: "3+" },
  { name: "WebRTC / Socket.io", icon: "📡", years: "2+" },
  { name: "Kotlin", icon: "🟣", years: "2+" },
];

const tools = [
  "Android Studio",
  "Xcode",
  "Git",
  "Postman",
  "JIRA",
  "CI/CD",
  "Scribe",
  "Firebase Console",
];

export const TechStack = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase mb-4">
            Technical Proficiency
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Tech <span className="gradient-text">Stack</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Languages & Frameworks */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-3">
              <div className="w-8 h-1 bg-primary rounded-full" />
              Languages & Frameworks
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="group p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-all duration-300 hover:bg-secondary/80"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-lg mt-0.5">{tech.icon}</span>
                    <div>
                      <span className="font-medium text-sm block text-foreground">{tech.name}</span>
                      <span className="text-xs text-muted-foreground">{tech.years} years</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools Grid */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-3">
              <div className="w-8 h-1 bg-accent rounded-full" />
              Tools & Platforms
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {tools.map((tool) => (
                <div
                  key={tool}
                  className="p-4 rounded-xl bg-secondary/50 border border-border hover:border-accent/30 transition-colors text-center"
                >
                  <span className="font-medium text-sm">{tool}</span>
                </div>
              ))}
            </div>

            {/* Paradigms */}
            <div className="mt-8 p-6 rounded-2xl card-elevated border border-border">
              <h4 className="font-display font-semibold mb-4">Design Patterns</h4>
              <div className="flex flex-wrap gap-2">
                {["OOP", "MVVM", "Clean Architecture", "SOLID Principles", "Dependency Injection"].map((pattern) => (
                  <span
                    key={pattern}
                    className="px-4 py-2 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                  >
                    {pattern}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};