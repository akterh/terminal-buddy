import { ExternalLink } from "lucide-react";

// Import app icons
import deepgrowIcon from "@/assets/icons/deepgrow.png";
import myketobrainIcon from "@/assets/icons/myketobrain.png";
import letsplanIcon from "@/assets/icons/letsplan.png";
import skillmatchIcon from "@/assets/icons/skillmatch.png";
import shopyswissIcon from "@/assets/icons/shopyswiss.png";
import shineIcon from "@/assets/icons/shine.png";
import ridealikeIcon from "@/assets/icons/ridealike.png";
import restaurant360Icon from "@/assets/icons/restaurant360.png";

const projects = [
  {
    icon: deepgrowIcon,
    title: "DeepGrow",
    company: "Dinnova AG",
    location: "Switzerland",
    description: "AI-personalized hypnosis app with GPT-5 voice simulation and ElevenLabs integration. Implemented OCEAN personality profiling model.",
    highlights: ["Lead Developer", "IAP Integration", "AI Voice", "Personality Profiling"],
    playStore: "https://play.google.com/store/apps/details?id=ch.deepgrow",
    appStore: null,
  },
  {
    icon: myketobrainIcon,
    title: "MyKetoBrain",
    company: "Dinnova AG",
    location: "Switzerland",
    description: "All-in-one keto diet app with 400+ specialist recipes, meal planning, and health tracking. Combines clinical expertise with personalized nutrition.",
    highlights: ["Keto Recipes", "Meal Planning", "Health Tracking", "Nutrition AI"],
    playStore: null,
    appStore: "https://apps.apple.com/al/app/myketobrain/id6476451823",
  },
  {
    icon: letsplanIcon,
    title: "LetsPlan",
    company: "Dinnova AG",
    location: "Switzerland",
    description: "Booking platform for daycare and educational programs with complex calendar simulation and payment integration.",
    highlights: ["Lead Developer", "Calendar System", "Payments", "Map Services"],
    playStore: "https://play.google.com/store/apps/details?id=ch.dinnova.letsplan",
    appStore: null,
  },
  {
    icon: skillmatchIcon,
    title: "SkillMatch",
    company: "Dinnova AG",
    location: "Switzerland",
    description: "Skill sharing platform with real-time communication via Socket.io and skill exchange without monetary transactions.",
    highlights: ["Real-time Chat", "Socket.io", "In-App Purchase", "Skill Exchange"],
    playStore: "https://play.google.com/store/apps/details?id=ch.dinnova.skillmatch",
    appStore: "https://apps.apple.com/us/app/skillmatch-exchange-skills/id6740201567",
  },
  {
    icon: shopyswissIcon,
    title: "ShopySwiss",
    company: "Dinnova AG",
    location: "Switzerland",
    description: "Dynamic e-commerce platform with BLE-enabled smart fridge integration for seamless purchase experience and product delivery.",
    highlights: ["E-commerce", "BLE Integration", "Smart Fridge", "Payment Module"],
    playStore: "https://play.google.com/store/apps/details?id=com.dinnova.shopyswiss",
    appStore: null,
  },
  {
    icon: shineIcon,
    title: "Shine",
    company: "Dinnova AG",
    location: "Switzerland",
    description: "Social connection platform with profile swiping, user interactions, and Firebase push notifications.",
    highlights: ["Authentication", "Profile Matching", "Push Notifications", "Firebase"],
    playStore: "https://play.google.com/store/apps/details?id=com.dinnova.shine",
    appStore: null,
  },
  {
    icon: ridealikeIcon,
    title: "RideAlike",
    company: "RideAlike Inc.",
    location: "Canada",
    description: "Car sharing platform with 5k+ active users featuring vehicle exchange and real-time chatting between owners.",
    highlights: ["5k+ Users", "Real-time Chat", "Vehicle Exchange", "Activity Logs"],
    playStore: null,
    appStore: "https://apps.apple.com/ca/app/ridealike-your-carsharing-app/id1571154008",
  },
  {
    icon: restaurant360Icon,
    title: "Restaurant360",
    company: "M360ICT",
    location: "Bangladesh",
    description: "POS restaurant solution with live food serving status, mix panel analytics, and payment gateways.",
    highlights: ["Lead Developer", "POS System", "Analytics", "Payment Gateways"],
    playStore: null,
    appStore: "https://apps.apple.com/us/app/restaurant-360/id6502257231",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative p-6 rounded-2xl card-elevated border border-border hover:border-primary/30 transition-all duration-500 flex flex-col"
            >
              {/* Header with App Icon */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg">
                  <img 
                    src={project.icon} 
                    alt={`${project.title} app icon`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors truncate">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{project.company}</p>
                  <p className="text-xs text-muted-foreground">{project.location}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow line-clamp-3">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.highlights.slice(0, 3).map((highlight) => (
                  <span
                    key={highlight}
                    className="px-2 py-0.5 rounded text-[10px] font-medium bg-muted text-muted-foreground"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              {/* Store Links */}
              <div className="flex gap-2 mt-auto">
                {project.playStore && (
                  <a
                    href={project.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/80 border border-border hover:border-primary/30 transition-all text-xs font-medium"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                    </svg>
                    Play Store
                    <ExternalLink size={10} />
                  </a>
                )}
                {project.appStore && (
                  <a
                    href={project.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/80 border border-border hover:border-primary/30 transition-all text-xs font-medium"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    App Store
                    <ExternalLink size={10} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
