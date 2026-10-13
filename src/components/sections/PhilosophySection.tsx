import { Link } from "react-router-dom";

const PRINCIPLES = [
  {
    title: "Performance is felt: 60fps & seamless responsiveness",
    body: "Mobile users feel jank immediately. I optimize widget rebuilds, isolate heavy computational tasks to background isolates, and obsess over fluid user journeys.",
  },
  {
    title: "Clean Architecture protects team velocity",
    body: "Strict separation between Presentation, Domain, and Data with BLoC or Riverpod ensures independent testing, easy refactoring, and zero architectural surprises.",
  },
  {
    title: "Offline-first resilience over network trust",
    body: "Network requests fail. Building with local caching (SQLite, Hive) and intelligent synchronization guarantees an app is useful regardless of signal strength.",
  },
  {
    title: "Transparent communication bridges time zones",
    body: "Having led distributed teams across Switzerland, Canada, and Bangladesh, high-clarity documentation and proactive unblocking beat endless meetings every time.",
  },
];

export function PhilosophySection() {
  return (
    <section className="border-t border-hairline bg-canvas">
      <div className="max-w-site mx-auto px-gutter py-20 md:py-[88px]">
        <div className="eyebrow">Engineering Mindset</div>
        <h2 className="section-title mt-4 max-w-[20ch]">
          How I approach mobile engineering
        </h2>

        {/* 2-col principles grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 md:gap-y-12">
          {PRINCIPLES.map((p) => (
            <div key={p.title}>
              <h3
                className="font-semibold m-0 text-ink tracking-[-0.01em]"
                style={{ fontSize: 18 }}
              >
                {p.title}
              </h3>
              <p
                className="leading-[1.6] mt-2 mb-0"
                style={{ fontSize: 15, color: "var(--muted)" }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-14 flex items-center gap-4 flex-wrap">
          <Link to="/works" className="btn-primary">
            View all 8 shipped apps
          </Link>
          <Link to="/contact" className="btn-ghost">
            Let's work together
          </Link>
        </div>
      </div>
    </section>
  );
}
