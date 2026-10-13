interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  summary: string;
  bullets: string[];
  apps?: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    period: "Sep 2023 – Present",
    role: "Senior Flutter Engineer",
    company: "Dinnova AG",
    location: "Zurich, Switzerland",
    type: "Remote",
    summary:
      "Led a 4-member mobile development team across multiple client applications, owning end-to-end architecture, feature delivery, and release cycles while maintaining 5 live production applications simultaneously.",
    bullets: [
      "Led a 4-member mobile development team across SkillMatch, LetsPlan, and DeepGrow, coordinating day-to-day engineering work and feature delivery.",
      "Distributed tasks among mobile developers, monitored workflow progress, identified blockers, and ensured assigned work stayed aligned with project timelines.",
      "Reported project progress, technical updates, delivery status, and blockers directly to the Project Manager.",
      "Owned end-to-end Flutter development across multiple production applications, from architecture and feature implementation through testing, release, and ongoing maintenance.",
      "Built DeepGrow, an AI-personalized hypnosis application integrating GPT-based voice simulation, ElevenLabs text-to-speech, OCEAN personality personalization, and in-app subscription flow; published on the App Store.",
      "Delivered LetsPlan, a Swiss scheduling and mapping platform with complex payment flows and a calendar engine, meeting product delivery milestones.",
      "Developed MyKetoBrain, a consumer health/wellness application that reached 1k+ Google Play downloads.",
      "Built SkillMatch, a real-time skill-exchange platform using Socket.io for live communication and in-app monetization; delivered features ahead of schedule.",
      "Delivered ShopySwiss, the company's first BLE hardware integration, enabling Bluetooth-triggered smart-fridge purchases.",
      "Maintained 5 live production applications simultaneously while collaborating directly with Swiss stakeholders and distributed teams across time zones.",
    ],
    apps: ["DeepGrow", "LetsPlan", "SkillMatch", "ShopySwiss", "MyKetoBrain"],
  },
  {
    period: "Mar 2023 – Aug 2023",
    role: "Flutter Engineer",
    company: "M360ICT Ltd.",
    location: "Dhaka, Bangladesh",
    type: "On-site",
    summary:
      "Architected offline-first mobile solutions and real-time operational platforms for commercial clients in finance and hospitality.",
    bullets: [
      "Architected Smart CashBook, an offline-first finance application using SQLite and Hive, enabling core accounting and ledger management without internet connectivity.",
      "Integrated live food-status tracking and Mixpanel analytics for Restaurant360, supporting real-time order monitoring across multiple restaurant outlets.",
      "Implemented push notifications and seamless payment flows for multi-vendor ordering ecosystems.",
    ],
    apps: ["Smart CashBook", "Restaurant360"],
  },
  {
    period: "Jan 2022 – Feb 2023",
    role: "Flutter Engineer",
    company: "LUUP (formerly RideAlike Inc.)",
    location: "Toronto, Canada",
    type: "Remote",
    summary:
      "Engineered core modules for a Canadian peer-to-peer car-sharing platform with 3k+ downloads across App Store and Google Play.",
    bullets: [
      "Engineered core car-exchange, booking, and in-app chat modules for RideAlike, a Canadian car-sharing platform with real-time vehicle availability and user matching.",
      "Built GPS tracking and activity-log functionality for live vehicle monitoring and ride-history auditing.",
      "Collaborated remotely with Toronto-based engineering and product teams to reach 3k+ downloads in Play Store and App Store.",
    ],
    apps: ["RideAlike"],
  },
  {
    period: "Jan 2021 – Dec 2021",
    role: "Junior Software Developer",
    company: "TechnoFelia IT",
    location: "Dhaka, Bangladesh",
    type: "On-site",
    summary:
      "Built production Flutter applications and responsive mobile UI systems for local business clients.",
    bullets: [
      "Built production Flutter applications and immersive UI components for local business clients, establishing foundational cross-platform mobile engineering experience.",
      "Implemented reusable widget libraries, local storage adapters, and REST API network layers.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="border-t border-hairline"
      style={{ background: "var(--band)" }}
    >
      <div className="max-w-site mx-auto px-gutter py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="eyebrow mb-3 text-[#656560]">Career History</div>
            <h2 className="section-title m-0 text-ink">Professional Experience</h2>
          </div>
          <p className="m-0 text-[#4a4a47] text-[15px] max-w-[44ch] leading-relaxed">
            5.5+ years building and shipping production mobile applications for international teams across Switzerland, Canada, and Bangladesh.
          </p>
        </div>

        <div className="flex flex-col">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={exp.company + exp.period}
              className="py-10 md:py-12 flex flex-col md:grid gap-6 md:gap-12"
              style={{
                borderTop: idx > 0 ? "1px solid var(--hairline)" : undefined,
                gridTemplateColumns: "220px 1fr",
              }}
            >
              {/* Meta column */}
              <div>
                <div
                  className="font-semibold tracking-wider text-[12px] uppercase text-[#60605b]"
                >
                  {exp.period}
                </div>
                <div className="text-[13.5px] text-[#4a4a47] mt-2 font-medium">
                  {exp.location} · <span className="text-ink font-semibold">{exp.type}</span>
                </div>
                {exp.apps && exp.apps.length > 0 && (
                  <div className="mt-4">
                    <div className="eyebrow !text-[11px] mb-2 text-[#60605b]">Shipped Apps</div>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.apps.map((app) => (
                        <span
                          key={app}
                          className="text-[11.5px] font-medium px-2.5 py-1 rounded bg-canvas border border-hairline text-ink"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Details column */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3
                    className="font-semibold text-ink m-0 tracking-[-0.01em]"
                    style={{ fontSize: 22 }}
                  >
                    {exp.role}
                  </h3>
                  <div
                    className="font-semibold text-[17px] text-ink"
                  >
                    {exp.company}
                  </div>
                </div>

                <p
                  className="mt-3 leading-[1.65] text-[15.5px] text-[#2c2c29]"
                >
                  {exp.summary}
                </p>

                {/* Bullet points */}
                <ul className="mt-4 space-y-2.5 pl-5 list-disc text-[14.5px] leading-[1.65] text-[#3a3a37]">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="marker:text-[#1a1a18] text-[#3a3a37]">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
