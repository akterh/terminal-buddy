import { PROFILE } from "@/data/profile";

const SKILL_CATEGORIES = [
  {
    category: "Mobile & Core",
    skills: ["Flutter", "Dart", "iOS", "Android", "Cross-Platform Mobile", "Native Platform Integration"],
  },
  {
    category: "Architecture & Design",
    skills: ["Clean Architecture", "SOLID Principles", "MVVM", "Modular Architecture", "Dependency Injection"],
  },
  {
    category: "State Management",
    skills: ["BLoC Pattern", "Riverpod", "Provider"],
  },
  {
    category: "AI & Voice Systems",
    skills: ["OpenAI GPT Integration", "ElevenLabs TTS", "OCEAN Personality Personalization", "Voice Simulation"],
  },
  {
    category: "Real-Time & Media",
    skills: ["WebRTC", "Jitsi", "Socket.io", "Live Messaging", "Video & Audio Calls"],
  },
  {
    category: "Maps, Hardware & IoT",
    skills: ["Google Maps", "GPS Tracking", "Location-Based Services", "BLE (Bluetooth Low Energy)", "Hardware Integration"],
  },
  {
    category: "Data & Offline Storage",
    skills: ["SQLite", "Hive", "SharedPreferences", "Offline-First Architecture", "REST APIs"],
  },
  {
    category: "Payments & Monetization",
    skills: ["In-App Purchases (IAP)", "App Store Subscriptions", "Multi-Platform Payment Flows"],
  },
  {
    category: "Quality, CI/CD & Delivery",
    skills: ["Unit Testing", "CI/CD Pipelines", "Firebase", "Git", "Jira", "Agile / Scrum", "App Store Connect", "Google Play Console"],
  },
];

export function SkillsAndEducationSection() {
  return (
    <>
      {/* ── Core Technical Skills ─────────────────────────── */}
      <section id="skills" className="border-t border-hairline bg-canvas">
        <div className="max-w-site mx-auto px-gutter py-16 md:py-24">
          <div className="eyebrow mb-3">Expertise</div>
          <h2 className="section-title mb-4">Core Technical Skills</h2>
          <p className="text-muted text-[16px] max-w-[56ch] mb-12">
            Proven competencies across mobile engineering, architecture, state management, real-time protocols, and AI integrations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((cat) => (
              <div
                key={cat.category}
                className="p-6 rounded-card border border-hairline bg-band flex flex-col justify-between"
              >
                <div>
                  <div className="font-semibold text-ink text-[16px] mb-3 tracking-[-0.01em]">
                    {cat.category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[12.5px] font-medium px-2.5 py-1 rounded bg-canvas border border-hairline text-ink"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education ────────────────────────────────────── */}
      <section className="border-t border-hairline" style={{ background: "var(--band)" }}>
        <div className="max-w-site mx-auto px-gutter py-16 md:py-20">
          <div className="eyebrow mb-3">Academic Background</div>
          <h2 className="section-title mb-8">Education</h2>

          <div className="p-8 rounded-card border border-hairline bg-canvas max-w-2xl">
            <div className="eyebrow mb-2">Graduated 2020</div>
            <h3 className="font-semibold text-ink text-[20px] m-0">
              {PROFILE.education.degree}
            </h3>
            <div className="text-[16px] text-muted font-medium mt-1">
              {PROFILE.education.institution} · {PROFILE.education.location}
            </div>
            <p className="text-[14.5px] text-faint mt-3 mb-0 leading-[1.6]">
              Coursework in Data Structures & Algorithms, Object-Oriented Software Design, Database Systems, Computer Networks, and Software Engineering.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
