import { useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="border-t border-hairline bg-canvas">
      <div className="max-w-site mx-auto px-gutter py-20 md:py-[96px]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_0.9fr] gap-8 md:gap-16 items-center">

          {/* Left — headline */}
          <div>
            <div className="eyebrow">Newsletter</div>
            <h2
              className="font-semibold mt-4 tracking-[-0.02em] leading-[1.14] text-ink max-w-[18ch]"
              style={{ fontSize: "clamp(1.5rem, 3vw, 1.875rem)" }}
            >
              Don't miss the next one
            </h2>
            <p className="text-[17px] leading-[1.55] mt-4 mb-0 max-w-[48ch]" style={{ color: "var(--muted)" }}>
              I write when I have something worth saying, which isn't often — but when I do, it counts.
            </p>
          </div>

          {/* Right — form */}
          <div
            className="md:border-l md:pl-14"
            style={{ borderColor: "var(--hairline)" }}
          >
            <div className="eyebrow mb-4">Get it in your inbox</div>

            {submitted ? (
              <p className="text-[16px] font-medium text-ink">
                Subscribed! Talk soon. 🎉
              </p>
            ) : (
              <>
                <form
                  onSubmit={handleSubmit}
                  className="flex items-stretch gap-2.5 max-w-[440px] flex-wrap"
                >
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="flex-1 min-w-[200px] border rounded-control-btn px-4 py-[13px] text-[15px] outline-none transition-colors"
                    style={{
                      background: "var(--card-bg)",
                      borderColor: "var(--hairline)",
                      color: "var(--ink)",
                    }}
                    onFocus={(e) =>
                      ((e.currentTarget as HTMLElement).style.borderColor = "var(--ink)")
                    }
                    onBlur={(e) =>
                      ((e.currentTarget as HTMLElement).style.borderColor = "var(--hairline)")
                    }
                  />
                  <button type="submit" className="btn-primary shrink-0">
                    Subscribe
                  </button>
                </form>
                <p className="text-[13px] leading-[1.5] mt-4 mb-0" style={{ color: "var(--faint)" }}>
                  No spam. Unsubscribe anytime.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
