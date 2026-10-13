import { Link } from "react-router-dom";
import { BLOG_POSTS } from "@/data/blog";

function BlogCard({ post }: { post: typeof BLOG_POSTS[number] }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-col no-underline card-hover"
      style={{
        background: "var(--card-bg)",
        border: "1px solid var(--hairline)",
        borderRadius: "var(--r-card)",
        padding: "28px",
      }}
    >
      {/* Category */}
      {post.category && (
        <div
          className="inline-flex font-semibold uppercase mb-3 self-start text-[11px] tracking-wider px-2.5 py-0.5 rounded bg-band text-ink border border-hairline"
        >
          {post.category}
        </div>
      )}

      {/* Meta */}
      <div
        className="flex items-center gap-2 font-semibold uppercase text-[12px] tracking-wide text-[#656560]"
      >
        <span>{post.date}</span>
        <span className="text-control">/</span>
        <span className="text-[#656560]">{post.readTime}</span>
      </div>

      {/* Title */}
      <h3
        className="font-semibold mt-3.5 mb-0 text-ink leading-[1.3] tracking-[-0.01em] text-[20px] group-hover:text-ink/80 transition-colors"
      >
        {post.title}
      </h3>

      {/* Excerpt */}
      <p
        className="mt-3 mb-7 text-[#4a4a47] leading-[1.55] line-clamp-3 text-[14.5px]"
      >
        {post.excerpt}
      </p>

      {/* Footer */}
      <div
        className="mt-auto pt-6 flex items-center gap-2 font-semibold text-ink text-[14px]"
        style={{
          borderTop: "1px solid var(--hairline)",
        }}
      >
        <span>Read article</span>
        <span
          className="arrow-link-icon text-label"
          aria-hidden="true"
        >
          →
        </span>
      </div>
    </Link>
  );
}

export function BlogPreviewSection() {
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <section
      className="border-t border-hairline"
      style={{ background: "var(--band)" }}
    >
      <div className="max-w-site mx-auto px-gutter py-20 md:py-[88px]">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6">
          <div>
            <div className="eyebrow text-[#656560]">Engineering Writing</div>
            <h2 className="section-title mt-4 text-ink">From the blog</h2>
          </div>
          <Link
            to="/blog"
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
            View all articles →
          </Link>
        </div>

        {/* Cards grid */}
        <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Mobile view all */}
        <Link
          to="/blog"
          className="md:hidden inline-block font-semibold text-[15px] text-ink no-underline mt-14"
          style={{
            textDecoration: "underline",
            textUnderlineOffset: 4,
            textDecorationColor: "var(--control)",
          }}
        >
          View all articles →
        </Link>
      </div>
    </section>
  );
}
