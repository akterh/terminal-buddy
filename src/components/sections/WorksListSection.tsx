import { Link } from "react-router-dom";
import { WORKS } from "@/data/works";

export function WorksListSection() {
  const featured = WORKS.filter((w) => w.featured);

  return (
    <section
      className="border-t border-hairline"
      style={{ background: "var(--band)" }}
    >
      <div className="max-w-site mx-auto px-gutter py-20 md:py-[112px]">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6">
          <div>
            <div className="eyebrow">Selected Production Work</div>
            <h2 className="section-title mt-4">Shipped Apps & Systems</h2>
          </div>
          <Link
            to="/works"
            className="hidden md:inline-block font-semibold text-[15px] text-ink no-underline"
            style={{
              textDecoration: "underline",
              textUnderlineOffset: 4,
              textDecorationColor: "var(--control)",
              transition: "text-decoration-color 0.15s ease",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.textDecorationColor = "var(--ink)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.textDecorationColor = "var(--control)")
            }
          >
            View all 8 projects →
          </Link>
        </div>

        {/* Work rows */}
        <div className="mt-10 md:mt-14">
          {featured.map((work) => (
            <Link
              key={work.id}
              to="/works"
              className="work-row-hover w-full flex flex-col gap-3 md:grid md:items-baseline no-underline py-8 md:py-12"
              style={{
                borderTop: "1px solid var(--control)",
                gridTemplateColumns: "160px 1fr auto",
                columnGap: "64px",
              }}
            >
              {/* Period & Client */}
              <div className="md:pt-1">
                <div
                  className="font-semibold uppercase"
                  style={{ fontSize: 13, letterSpacing: "0.1em", color: "var(--label)" }}
                >
                  {work.period}
                </div>
                {work.client && (
                  <div className="text-[12px] text-muted font-medium mt-1">
                    {work.client.split("·")[0].trim()}
                  </div>
                )}
                {work.metrics && (
                  <div className="mt-2 hidden md:block">
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-canvas border border-hairline text-ink">
                      {work.metrics}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div>
                <h3
                  className="font-semibold text-ink m-0 leading-[1.12] tracking-[-0.02em]"
                  style={{ fontSize: "clamp(1.375rem, 2.5vw, 2rem)" }}
                >
                  {work.title}
                </h3>
                <p
                  className="leading-[1.55] mt-3 mb-0 max-w-[62ch]"
                  style={{ fontSize: "clamp(0.9375rem, 1.2vw, 1.0625rem)", color: "var(--muted)" }}
                >
                  {work.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3.5">
                  {work.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-[11.5px] font-medium px-2 py-0.5 rounded bg-canvas border border-hairline text-label"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <span
                className="hidden md:block text-2xl self-center"
                style={{ color: "var(--label)" }}
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile view all */}
        <Link
          to="/works"
          className="md:hidden inline-block font-semibold text-[15px] text-ink no-underline mt-10"
          style={{
            textDecoration: "underline",
            textUnderlineOffset: 4,
            textDecorationColor: "var(--control)",
          }}
        >
          View all 8 projects →
        </Link>
      </div>
    </section>
  );
}
