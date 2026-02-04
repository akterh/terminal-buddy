import { Building2 } from "lucide-react";

const experiences = [
  {
    company: "Dinnova AG LTD.",
    location: "Zurich, Switzerland",
    role: "Software Engineer",
    period: "Sep 2023 - Present",
    description: "Leading development of multiple Flutter applications including AI-powered wellness apps, booking platforms, and social applications.",
    isCurrent: true,
  },
  {
    company: "RideAlike Inc.",
    location: "Toronto, Canada",
    role: "Software Engineer",
    period: "Jan 2022 - Aug 2023",
    description: "Built and scaled car sharing platform to 5k+ active users with real-time features and robust architecture.",
    isCurrent: false,
  },
  {
    company: "M360ICT LTD",
    location: "Dhaka, Bangladesh",
    role: "Software Engineer",
    period: "May 2023 - Aug 2023",
    description: "Led development of POS restaurant solutions and financial management applications.",
    isCurrent: false,
  },
  {
    company: "TechnoFelia IT",
    location: "Dhaka, Bangladesh",
    role: "Jr. Software Developer",
    period: "Jan 2021 - Dec 2021",
    description: "Designed user interfaces and provided dedicated support for app launches on Play Store and App Store.",
    isCurrent: false,
  },
];

export const Experience = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase mb-4">
            Career Journey
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <div
              key={exp.company + exp.period}
              className={`relative flex gap-6 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-primary bg-background z-10">
                {exp.isCurrent && (
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                )}
              </div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
              }`}>
                <div className="p-6 rounded-2xl card-elevated border border-border hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold">{exp.company}</h3>
                      <p className="text-xs text-muted-foreground">{exp.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-medium text-primary">{exp.role}</span>
                    {exp.isCurrent && (
                      <span className="px-2 py-0.5 rounded text-xs font-medium bg-primary/20 text-primary">
                        Current
                      </span>
                    )}
                  </div>
                  
                  <p className="text-xs text-muted-foreground mb-3">{exp.period}</p>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
