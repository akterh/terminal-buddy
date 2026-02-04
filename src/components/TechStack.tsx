const technologies = [
  { name: "Dart", level: 95 },
  { name: "Flutter", level: 95 },
  { name: "BLoC Pattern", level: 90 },
  { name: "Clean Architecture", level: 90 },
  { name: "Firebase", level: 85 },
  { name: "SQLite/Hive", level: 85 },
  { name: "WebRTC/Socket.io", level: 80 },
  { name: "Kotlin", level: 70 },
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
          {/* Skills with Progress */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-3">
              <div className="w-8 h-1 bg-primary rounded-full" />
              Languages & Frameworks
            </h3>
            {technologies.map((tech, index) => (
              <div key={tech.name} className="group">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-sm">{tech.name}</span>
                  <span className="text-muted-foreground text-sm">{tech.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${tech.level}%`,
                      background: "var(--gradient-primary)",
                      animationDelay: `${0.1 * index}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tools Grid */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-3">
              <div className="w-8 h-1 bg-accent rounded-full" />
              Tools & Platforms
            </h3>
            <div className="grid grid-cols-2 gap-4">
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
