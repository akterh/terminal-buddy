import { Link } from "react-router-dom";
import { PROFILE, AVATAR_URL } from "@/data/profile";

export function HeroSection() {
  return (
    <section
      className="border-b border-hairline"
      style={{ background: "var(--canvas)" }}
    >
      <div className="max-w-site mx-auto px-gutter pt-8 pb-16 md:pt-14 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-14 items-start">

          {/* ── Text column ──────────────────────── */}
          <div className="flex flex-col order-2 md:order-1 pt-0">
            {/* Top eyebrow horizontally aligned with photo top edge */}
            <div className="eyebrow mb-4 leading-none text-[#656560] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
              {PROFILE.heroEyebrow}
            </div>

            <h1 className="hero-title max-w-[18ch]">
              Architecting mobile products for global teams.
            </h1>

            <p
              className="mt-6 leading-[1.75] max-w-[54ch] text-[17px] text-[#2e2e2b]"
            >
              I'm <strong style={{ color: "var(--ink)", fontWeight: 600 }}>{PROFILE.name}</strong>,
              a {PROFILE.role} with 5.5+ years of professional experience building and shipping 8
              production iOS and Android applications for international teams in Switzerland and Canada.
            </p>
            <p
              className="mt-3.5 leading-[1.75] max-w-[54ch] text-[15.5px] text-[#555550]"
            >
              Experienced in end-to-end mobile development, technical ownership, Clean Architecture, BLoC,
              REST APIs, real-time communication, AI integrations (OpenAI GPT & ElevenLabs TTS), BLE hardware,
              maps, payments, subscriptions, offline-first storage, testing, and CI/CD.
            </p>

            {/* Quick stats from CV */}
            <div
              className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-7"
              style={{ borderTop: "1px solid var(--hairline)" }}
            >
              {[
                { value: "5.5+", label: "Years Experience" },
                { value: "8", label: "Shipped Apps" },
                { value: "5", label: "Live Apps Maintained" },
                { value: "4", label: "Team Members Led" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="font-semibold tracking-[-0.02em]"
                    style={{ fontSize: 26, color: "var(--ink)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="eyebrow mt-1 text-[#656560]" style={{ fontSize: 11 }}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs & Contact Pills */}
            <div className="mt-8 flex flex-row items-center gap-4 flex-wrap">
              <Link to="/works" className="btn-primary">
                View 8 shipped apps
              </Link>
              <Link to="/contact" className="btn-ghost">
                Let's work together
              </Link>
            </div>

            {/* Direct contact pills */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <a
                href={`mailto:${PROFILE.email}`}
                className="font-medium text-[13px] px-3.5 py-1.5 rounded-full border border-hairline bg-band text-ink no-underline hover:border-ink transition-colors"
              >
                ✉ {PROFILE.email}
              </a>
              <a
                href={`tel:${PROFILE.phone}`}
                className="font-medium text-[13px] px-3.5 py-1.5 rounded-full border border-hairline bg-band text-ink no-underline hover:border-ink transition-colors"
              >
                📞 {PROFILE.phone}
              </a>
              <span className="font-medium text-[13px] px-3.5 py-1.5 rounded-full border border-hairline bg-band text-[#555550]">
                📍 {PROFILE.location}
              </span>
            </div>
          </div>

          {/* ── Photo column ─────────────────────── */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end items-start pt-0">
            {/* Outer decorative container */}
            <div className="relative w-full max-w-[420px]">
              {/* Soft glow backdrop */}
              <div
                className="absolute inset-0 rounded-panel"
                style={{
                  transform: "scale(1.03) translateY(6px)",
                  background: "var(--band)",
                  borderRadius: "var(--r-panel)",
                  filter: "blur(4px)",
                  opacity: 0.7,
                }}
              />

              {/* Main photo frame */}
              <div
                className="relative overflow-hidden"
                style={{
                  borderRadius: "var(--r-panel)",
                  border: "1px solid var(--hairline)",
                  aspectRatio: "3/4",
                  background: "var(--band)",
                  boxShadow: "0 20px 50px -10px rgba(0,0,0,0.12), 0 6px 16px -6px rgba(0,0,0,0.06)",
                }}
              >
                <img
                  src={AVATAR_URL}
                  alt={PROFILE.name}
                  className="w-full h-full object-cover object-top"
                  style={{ display: "block" }}
                />

                {/* Subtle gradient overlay at bottom for name badge */}
                <div
                  className="absolute inset-x-0 bottom-0"
                  style={{
                    background: "linear-gradient(to top, rgba(18,18,16,0.85) 0%, rgba(18,18,16,0.4) 40%, transparent 100%)",
                    height: "45%",
                  }}
                />

                {/* Name badge */}
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <div
                    className="font-semibold tracking-[-0.01em]"
                    style={{ fontSize: 21, color: "#fff" }}
                  >
                    {PROFILE.name}
                  </div>
                  <div
                    className="mt-1 font-medium text-[13.5px]"
                    style={{ color: "rgba(255,255,255,0.9)" }}
                  >
                    {PROFILE.headline}
                  </div>
                  <div
                    className="mt-1 font-normal text-[12px]"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    Dinnova AG (Zurich) · {PROFILE.location}
                  </div>
                </div>

                {/* Floating availability badge inside the top right corner */}
                <div
                  className="absolute top-4 right-4 flex items-center gap-2 font-semibold backdrop-blur-md"
                  style={{
                    background: "rgba(255, 255, 255, 0.92)",
                    border: "1px solid rgba(0, 0, 0, 0.08)",
                    borderRadius: 999,
                    padding: "6px 13px",
                    fontSize: 12,
                    color: "#1a1a18",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#22c55e",
                      flexShrink: 0,
                    }}
                  />
                  Open to Opportunities
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
