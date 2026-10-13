import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PROFILE, SOCIAL_LINKS } from "@/data/profile";
import { toast } from "sonner";
import { Loader2, CheckCircle2, AlertCircle, Send, RotateCcw } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "900c9900-7662-4c3b-abc3-1c470337f365";

const WHAT_I_OFFER = [
  {
    title: "Production Flutter Mobile Engineering",
    body: "End-to-end development for iOS and Android using Clean Architecture, BLoC/Riverpod, and modular structure — from initial design through App Store and Google Play releases.",
  },
  {
    title: "AI & Voice Integration",
    body: "Connecting OpenAI GPT, ElevenLabs text-to-speech, and personalized AI simulation into engaging, responsive native mobile user journeys.",
  },
  {
    title: "Real-Time Communication & Hardware IoT",
    body: "Building low-latency Socket.io messaging, WebRTC audio/video, Bluetooth Low Energy (BLE) smart hardware integrations, and live GPS vehicle tracking.",
  },
  {
    title: "Mobile Team Leadership & Architecture",
    body: "Leading multi-developer teams, establishing offline-first patterns (SQLite/Hive), code quality standards, automated CI/CD pipelines, and collaborating with international stakeholders.",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          subject: `Portfolio Inquiry from ${form.name.trim()} (Flutter Engineer Site)`,
          from_name: "Portfolio Contact Form",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSent(true);
        toast.success("Message sent successfully!", {
          description: "Thank you for reaching out. I'll get back to you shortly.",
        });
      } else {
        throw new Error(data.message || "Failed to send message. Please try again.");
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "An unexpected error occurred.";
      setError(errorMessage);
      toast.error("Message delivery failed", {
        description: `Please email directly at ${PROFILE.email}`,
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setForm({ name: "", email: "", message: "" });
    setSent(false);
    setError(null);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "var(--card-bg)",
    border: "1px solid var(--hairline)",
    borderRadius: "var(--r-control)",
    padding: "13px 16px",
    fontSize: 15,
    color: "var(--ink)",
    outline: "none",
    transition: "border-color 0.15s ease",
    fontFamily: "var(--font-sans)",
  };

  return (
    <Layout hideFooter>
      {/* ── Header ───────────────────────────────────────── */}
      <section className="max-w-site mx-auto px-gutter pt-12 pb-16 md:pt-24 md:pb-16 border-b border-hairline">
        <div className="eyebrow mb-5">Get In Touch</div>
        <h1 className="hero-title max-w-[20ch]">
          Let's build something exceptional.
        </h1>
        <p
          className="mt-6 leading-[1.6] max-w-[52ch]"
          style={{ fontSize: 18, color: "var(--muted)" }}
        >
          Open to senior engineering roles, technical leadership, and select consulting projects with international teams.
        </p>
      </section>

      {/* ── What I offer + form ───────────────────────────── */}
      <section
        className="border-b border-hairline"
        style={{ background: "var(--band)" }}
      >
        <div className="max-w-site mx-auto px-gutter py-16 md:py-20 grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 md:gap-20">

          {/* Left — what I offer */}
          <div>
            <div className="eyebrow mb-4">Core Competencies & Services</div>
            <div className="flex flex-col gap-8 mt-6">
              {WHAT_I_OFFER.map((item) => (
                <div key={item.title}>
                  <h3
                    className="font-semibold m-0 text-ink tracking-[-0.01em]"
                    style={{ fontSize: 17 }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="leading-[1.6] mt-2 mb-0"
                    style={{ fontSize: 15, color: "var(--muted)" }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Direct Contact Details */}
            <div className="mt-10 pt-8" style={{ borderTop: "1px solid var(--hairline)" }}>
              <div className="eyebrow mb-4">Direct Contact</div>
              <div className="flex flex-col gap-2.5 text-[15px]">
                <div className="flex items-center gap-2 text-ink">
                  <span className="text-[#656560] w-16 text-[13px] uppercase font-semibold">Email:</span>
                  <a href={`mailto:${PROFILE.email}`} className="font-medium underline hover:text-ink">
                    {PROFILE.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-ink">
                  <span className="text-[#656560] w-16 text-[13px] uppercase font-semibold">Phone:</span>
                  <a href={`tel:${PROFILE.phone}`} className="font-medium underline hover:text-ink">
                    {PROFILE.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-ink">
                  <span className="text-[#656560] w-16 text-[13px] uppercase font-semibold">Based:</span>
                  <span className="text-[#555550]">{PROFILE.location} (Remote for Swiss & Canadian time zones)</span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-8 pt-6" style={{ borderTop: "1px solid var(--hairline)" }}>
              <div className="eyebrow mb-3">Professional Profiles</div>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[15px] no-underline transition-colors"
                    style={{ color: "var(--muted)" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--ink)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted)")}
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — contact form */}
          <div>
            <div className="eyebrow mb-6">Send a direct message</div>

            {sent ? (
              <div
                className="rounded-card p-8 md:p-10 border border-hairline bg-canvas shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="font-semibold text-ink text-[22px] m-0 mb-2">
                  Message delivered!
                </h3>
                <p className="text-[15.5px] leading-[1.65] text-[#4a4a47] mb-6">
                  Thank you, <strong className="text-ink">{form.name}</strong>. Your message has been sent directly to{" "}
                  <strong className="text-ink">{PROFILE.email}</strong>. I will get back to you as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn-ghost !text-[14px] flex items-center gap-2 cursor-pointer"
                >
                  <RotateCcw size={15} />
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                {/* Honeypot field for bot protection */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {error && (
                  <div className="p-4 rounded-md border border-red-200 bg-red-50 text-red-800 text-[14px] flex items-start gap-3">
                    <AlertCircle size={18} className="shrink-0 mt-0.5 text-red-600" />
                    <div>
                      <div className="font-semibold">Unable to send message</div>
                      <div className="mt-1 text-red-700">{error}</div>
                      <div className="mt-2">
                        You can also write to me directly at{" "}
                        <a href={`mailto:${PROFILE.email}`} className="font-semibold underline">
                          {PROFILE.email}
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-medium mb-2"
                    style={{ fontSize: 14, color: "var(--ink)" }}
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    disabled={submitting}
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    style={inputStyle}
                    onFocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--ink)")}
                    onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--hairline)")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-medium mb-2"
                    style={{ fontSize: 14, color: "var(--ink)" }}
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    disabled={submitting}
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    style={inputStyle}
                    onFocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--ink)")}
                    onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--hairline)")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-medium mb-2"
                    style={{ fontSize: 14, color: "var(--ink)" }}
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={6}
                    disabled={submitting}
                    placeholder="Tell me about your project, team, or opportunity..."
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--ink)")}
                    onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--hairline)")}
                  />
                </div>

                <div className="flex items-center gap-4 mt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary flex items-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Send message</span>
                      </>
                    )}
                  </button>

                  <span className="text-[13px] text-[#656560]">
                    Or email directly to{" "}
                    <a href={`mailto:${PROFILE.email}`} className="text-ink font-medium underline">
                      {PROFILE.email}
                    </a>
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
