import { Sparkles, Calendar, MessageSquare, ShoppingCart, Users, Car, Utensils, Brain } from "lucide-react";

const projects = [
  {
    icon: Sparkles,
    title: "DeepGrow",
    company: "Dinnova AG",
    location: "Switzerland",
    description: "AI-personalized hypnosis app with GPT-5 voice simulation and ElevenLabs integration. Implemented OCEAN personality profiling model.",
    highlights: ["Lead Developer", "IAP Integration", "AI Voice", "Personality Profiling"],
    color: "primary",
  },
  {
    icon: Brain,
    title: "MyKetoBrain",
    company: "Dinnova AG",
    location: "Switzerland",
    description: "All-in-one keto diet app with 400+ specialist recipes, meal planning, and health tracking. Combines clinical expertise with personalized nutrition.",
    highlights: ["Keto Recipes", "Meal Planning", "Health Tracking", "Nutrition AI"],
    color: "accent",
  },
  {
    icon: Calendar,
    title: "LetsPlan",
    company: "Dinnova AG",
    location: "Switzerland",
    description: "Booking platform for daycare and educational programs with complex calendar simulation and payment integration.",
    highlights: ["Lead Developer", "Calendar System", "Payments", "Map Services"],
    color: "primary",
  },
  {
    icon: MessageSquare,
    title: "SkillMatch",
    company: "Dinnova AG",
    location: "Switzerland",
    description: "Skill sharing platform with real-time communication via Socket.io and skill exchange without monetary transactions.",
    highlights: ["Real-time Chat", "Socket.io", "In-App Purchase", "Skill Exchange"],
    color: "accent",
  },
  {
    icon: ShoppingCart,
    title: "ShopySwiss",
    company: "Dinnova AG",
    location: "Switzerland",
    description: "Dynamic e-commerce platform with BLE-enabled smart fridge integration for seamless purchase experience and product delivery.",
    highlights: ["E-commerce", "BLE Integration", "Smart Fridge", "Payment Module"],
    color: "primary",
  },
  {
    icon: Users,
    title: "Shine",
    company: "Dinnova AG",
    location: "Switzerland",
    description: "Social connection platform with profile swiping, user interactions, and Firebase push notifications.",
    highlights: ["Authentication", "Profile Matching", "Push Notifications", "Firebase"],
    color: "accent",
  },
  {
    icon: Car,
    title: "RideAlike",
    company: "RideAlike Inc.",
    location: "Canada",
    description: "Car sharing platform with 5k+ active users featuring vehicle exchange and real-time chatting between owners.",
    highlights: ["5k+ Users", "Real-time Chat", "Vehicle Exchange", "Activity Logs"],
    color: "primary",
  },
  {
    icon: Utensils,
    title: "Restaurant360",
    company: "M360ICT",
    location: "Bangladesh",
    description: "POS restaurant solution with live food serving status, mix panel analytics, and payment gateways.",
    highlights: ["Lead Developer", "POS System", "Analytics", "Payment Gateways"],
    color: "accent",
  },
];

export const Projects = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      <div className="container relative z-10 px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase mb-4">
            Featured Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Projects & <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of production applications serving thousands of users worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative p-6 rounded-2xl card-elevated border border-border hover:border-primary/30 transition-all duration-500 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  project.color === "primary" ? "bg-primary/10" : "bg-accent/10"
                }`}>
                  <project.icon className={`w-6 h-6 ${
                    project.color === "primary" ? "text-primary" : "text-accent"
                  }`} />
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">{project.company}</p>
                  <p className="text-xs text-muted-foreground">{project.location}</p>
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
                {project.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="px-2 py-1 rounded text-xs font-medium bg-muted text-muted-foreground"
                  >
                    {highlight}
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
