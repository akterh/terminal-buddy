import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { WORKS } from "@/data/works";
import { NewsletterSection } from "@/components/sections/NewsletterSection";

export default function Works() {
  return (
    <Layout>
      {/* ── Header ───────────────────────────────────────── */}
      <section className="max-w-site mx-auto px-gutter pt-12 pb-16 md:pt-24 md:pb-16 border-b border-hairline">
        <div className="eyebrow mb-5">Portfolio & Projects</div>
        <h1 className="hero-title max-w-[22ch]">
          Apps I've built and shipped to production.
        </h1>
        <p
          className="mt-6 leading-[1.6] max-w-[56ch]"
          style={{ fontSize: 18, color: "var(--muted)" }}
        >
          A catalog of 8 production mobile products spanning AI voice guidance, Swiss event scheduling,
          Canadian car-sharing, BLE smart-fridge IoT, offline-first fintech, and real-time platforms.
        </p>
      </section>

      {/* ── Full works list ───────────────────────────────── */}
      <section
        className="border-b border-hairline"
        style={{ background: "var(--band)" }}
      >
        <div className="max-w-site mx-auto px-gutter py-16 md:py-20">
          <div className="flex flex-col">
            {WORKS.map((work) => (
              <div
                key={work.id}
                className="work-row-hover flex flex-col gap-4 md:grid py-10 md:py-14 cursor-default"
                style={{
                  borderTop: "1px solid var(--control)",
                  gridTemplateColumns: "180px 1fr",
                  columnGap: "64px",
                }}
              >
                {/* Period & Client column */}
                <div>
                  <div
                    className="font-semibold uppercase"
                    style={{ fontSize: 12, letterSpacing: "0.1em", color: "var(--label)" }}
                  >
                    {work.period}
                  </div>
                  {work.client && (
                    <div className="text-[13px] text-muted font-medium mt-1.5 leading-snug">
                      {work.client}
                    </div>
                  )}
                  {work.metrics && (
                    <div className="mt-3">
                      <span className="inline-block text-[11px] font-semibold px-2 py-0.5 rounded-full bg-canvas border border-hairline text-ink">
                        {work.metrics}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div>
                  <h2
                    className="font-semibold text-ink m-0 leading-[1.15] tracking-[-0.02em]"
                    style={{ fontSize: "clamp(1.25rem, 2.2vw, 1.75rem)" }}
                  >
                    {work.title}
                  </h2>
                  <p
                    className="leading-[1.6] mt-3 mb-0 max-w-[64ch]"
                    style={{ fontSize: 16, color: "var(--muted)" }}
                  >
                    {work.description}
                  </p>

                  {/* Highlights */}
                  {work.highlights && work.highlights.length > 0 && (
                    <ul className="mt-4 space-y-1.5 pl-4 list-disc text-[14px] leading-[1.55] text-faint max-w-[64ch]">
                      {work.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-medium"
                        style={{
                          fontSize: 12,
                          padding: "3px 10px",
                          borderRadius: "var(--r-control)",
                          background: "var(--canvas)",
                          border: "1px solid var(--hairline)",
                          color: "var(--label)",
                          letterSpacing: "0.03em",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="border-b border-hairline bg-canvas">
        <div className="max-w-site mx-auto px-gutter py-16 md:py-20">
          <h2 className="section-title max-w-[24ch]">
            Need a Senior Flutter Engineer?
          </h2>
          <p
            className="mt-4 leading-[1.6] max-w-[46ch]"
            style={{ fontSize: 17, color: "var(--muted)" }}
          >
            I specialize in end-to-end mobile architecture, AI workflows, real-time messaging, and high-performance cross-platform delivery.
          </p>
          <div className="mt-8 flex gap-4 flex-wrap">
            <Link to="/contact" className="btn-primary">
              Get in touch
            </Link>
            <a href="mailto:akterh.ja@gmail.com" className="btn-ghost">
              Send an email
            </a>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </Layout>
  );
}
