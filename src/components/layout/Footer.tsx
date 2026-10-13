import { useState } from "react";
import { Link } from "react-router-dom";
import { NAV_LINKS, SOCIAL_LINKS, PROFILE } from "@/data/profile";

const FOOTER_SITE_LINKS = NAV_LINKS;
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="border-t border-hairline bg-canvas">
      <div className="max-w-site mx-auto px-gutter py-12 md:py-14 grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-[1.6fr_0.8fr_0.8fr_1.2fr] md:gap-10">

        {/* Brand col */}
        <div>
          <div className="font-semibold text-[17px] tracking-[-0.01em] text-ink">
            {PROFILE.name}
          </div>
          <p className="text-[15px] leading-[1.6] text-faint mt-3 max-w-[38ch] mb-0">
            {PROFILE.bio}
          </p>
        </div>

        {/* Site links */}
        <div>
          <div className="eyebrow mb-4">Site</div>
          <div className="flex flex-col gap-3">
            {FOOTER_SITE_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-[15px] no-underline transition-colors"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--ink)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted)")}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Social links */}
        <div>
          <div className="eyebrow mb-4">Elsewhere</div>
          <div className="flex flex-col gap-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] no-underline transition-colors w-fit"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--ink)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted)")}
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="sm:col-span-2 md:col-span-1">
          <div className="eyebrow mb-4">Newsletter</div>
          <p className="text-[14px] leading-[1.6] text-faint mt-0 mb-3.5 max-w-[32ch]">
            Occasional notes on building software and leading teams.
          </p>
          {submitted ? (
            <p className="text-[14px] font-medium text-ink">
              Thanks! You're subscribed. 🎉
            </p>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex items-stretch gap-2 max-w-[320px]"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 min-w-0 border rounded-control-btn px-3 py-2 text-[14px] outline-none transition-colors"
                style={{
                  background: "var(--card-bg)",
                  borderColor: "var(--hairline)",
                  color: "var(--ink)",
                }}
                onFocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--ink)")}
                onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--hairline)")}
              />
              <button
                type="submit"
                className="shrink-0 btn-primary !py-2 !px-4 !text-[14px]"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-hairline">
        <div className="max-w-site mx-auto px-gutter py-[18px] flex justify-between items-center gap-4 flex-wrap">
          <span className="text-[13px] text-label">
            © {CURRENT_YEAR} {PROFILE.name}. All rights reserved.
          </span>
          <div className="flex items-center gap-5 flex-wrap">
            <Link
              to="/contact"
              className="text-[13px] no-underline transition-colors"
              style={{ color: "var(--muted)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--ink)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted)")}
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
