import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS, AVATAR_URL, PROFILE } from "@/data/profile";
import { X, Menu } from "lucide-react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setMobileOpen(false), [location.pathname]);

  return (
    <>
      <header
        className="sticky top-0 z-50 border-b border-hairline transition-shadow duration-200"
        style={{
          background: "rgba(245, 244, 240, 0.88)",
          backdropFilter: "blur(14px) saturate(180%)",
          WebkitBackdropFilter: "blur(14px) saturate(180%)",
          boxShadow: scrolled ? "0 1px 0 #e2e0d8" : "none",
        }}
      >
        <div
          className="max-w-site mx-auto px-gutter h-[68px] flex items-center justify-between"
        >
          {/* Logo */}
          <Link
            to="/"
            aria-label={`${PROFILE.name} — home`}
            className="flex items-center gap-2.5 no-underline hover:opacity-80 transition-opacity"
          >
            <img
              src={AVATAR_URL}
              alt={PROFILE.name}
              width={36}
              height={36}
              className="rounded-avatar object-cover"
              style={{ width: 36, height: 36 }}
            />
            <span
              className="font-semibold text-[17px] tracking-[-0.01em] text-ink"
            >
              {PROFILE.name}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-[34px]">
            {NAV_LINKS.map((link) => {
              const active = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className="font-medium text-[15px] no-underline transition-colors"
                  style={{ color: active ? "var(--ink)" : "var(--muted)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--ink)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      active ? "var(--ink)" : "var(--muted)")
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden -mr-2 inline-flex items-center justify-center w-11 h-11 text-ink"
          >
            {mobileOpen ? <X size={22} strokeWidth={1.6} /> : <Menu size={22} strokeWidth={1.6} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-[68px] z-40 animate-slide-down border-b border-hairline"
          style={{ background: "rgba(245, 244, 240, 0.97)", backdropFilter: "blur(20px)" }}
        >
          <nav className="max-w-site mx-auto px-gutter py-6 flex flex-col gap-5">
            {NAV_LINKS.map((link) => {
              const active = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className="font-medium text-[17px] no-underline"
                  style={{ color: active ? "var(--ink)" : "var(--muted)" }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}
