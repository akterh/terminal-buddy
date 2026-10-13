import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { BLOG_POSTS, BlogPost } from "@/data/blog";
import { PROFILE, AVATAR_URL } from "@/data/profile";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { ArrowLeft, Clock, Calendar, Share2, Check } from "lucide-react";

// ── Markdown-like content renderer for blog posts ───────────────────────────
function ArticleContent({ content }: { content: string }) {
  const lines = content.trim().split("\n");
  const elements: JSX.Element[] = [];

  let inCodeBlock = false;
  let codeBuffer: string[] = [];
  let codeLang = "";
  let inTable = false;
  let tableRows: string[][] = [];

  const flushCode = (key: string) => {
    if (codeBuffer.length > 0) {
      elements.push(
        <div key={key} className="my-6 rounded-card overflow-hidden border border-hairline bg-[#1e1e1c]">
          {codeLang && (
            <div className="px-4 py-2 border-b border-[#2d2d2a] text-[12px] font-mono font-medium text-[#9a9a95] uppercase tracking-wider bg-[#171715]">
              {codeLang}
            </div>
          )}
          <pre className="p-4 md:p-5 text-[13.5px] leading-[1.65] font-mono text-[#e6e5e0] overflow-x-auto m-0">
            <code>{codeBuffer.join("\n")}</code>
          </pre>
        </div>
      );
      codeBuffer = [];
      codeLang = "";
    }
  };

  const flushTable = (key: string) => {
    if (tableRows.length > 0) {
      const [header, , ...body] = tableRows;
      elements.push(
        <div key={key} className="my-6 overflow-x-auto rounded-card border border-hairline bg-card-bg">
          <table className="w-full text-left border-collapse text-[14px]">
            {header && (
              <thead>
                <tr className="border-b border-hairline bg-band">
                  {header.map((col, idx) => (
                    <th key={idx} className="py-3 px-4 font-semibold text-ink">
                      {col.trim()}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {body.map((row, rIdx) => (
                <tr key={rIdx} className="border-b border-hairline last:border-b-0 hover:bg-canvas/50 transition-colors">
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="py-3 px-4 text-[#2e2e2b] align-top">
                      {renderInline(cell.trim())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
      inTable = false;
    }
  };

  const renderInline = (text: string): (string | JSX.Element)[] => {
    // Regex for bold **text**, inline code `code`, italic *text*
    const parts = text.split(/(\*\*.*?\*\*|`.*?`|\*.*?\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i} className="font-semibold text-ink">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code
            key={i}
            className="px-1.5 py-0.5 rounded bg-band text-[13.5px] font-mono text-ink border border-hairline"
          >
            {part.slice(1, -1)}
          </code>
        );
      }
      if (part.startsWith("*") && part.endsWith("*") && !part.startsWith("**")) {
        return <em key={i} className="italic text-[#4a4a47]">{part.slice(1, -1)}</em>;
      }
      return part;
    });
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Code block toggle
    if (line.trim().startsWith("```")) {
      if (inCodeBlock) {
        flushCode(`code-${i}`);
        inCodeBlock = false;
      } else {
        if (inTable) flushTable(`table-${i}`);
        inCodeBlock = true;
        codeLang = line.trim().slice(3);
      }
      continue;
    }

    if (inCodeBlock) {
      codeBuffer.push(line);
      continue;
    }

    // Table parsing
    if (line.trim().startsWith("|") && line.trim().endsWith("|")) {
      if (!inTable) inTable = true;
      const cells = line.split("|").slice(1, -1);
      tableRows.push(cells);
      continue;
    } else if (inTable) {
      flushTable(`table-${i}`);
    }

    // Empty lines
    if (!line.trim()) {
      continue;
    }

    // Horizontal Rule
    if (line.trim() === "---") {
      elements.push(<hr key={`hr-${i}`} className="my-10 border-t border-hairline" />);
      continue;
    }

    // Headings
    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={`h3-${i}`} className="text-[24px] font-semibold text-ink mt-10 mb-4 tracking-[-0.01em]">
          {renderInline(line.slice(4))}
        </h3>
      );
      continue;
    }
    if (line.startsWith("#### ")) {
      elements.push(
        <h4 key={`h4-${i}`} className="text-[19px] font-semibold text-ink mt-8 mb-3 tracking-[-0.01em]">
          {renderInline(line.slice(5))}
        </h4>
      );
      continue;
    }

    // Blockquote
    if (line.startsWith("> ")) {
      elements.push(
        <blockquote
          key={`quote-${i}`}
          className="my-6 pl-5 border-l-4 border-ink bg-band py-3 pr-4 rounded-r-md text-[15.5px] leading-[1.65] text-[#2c2c29]"
        >
          {renderInline(line.slice(2))}
        </blockquote>
      );
      continue;
    }

    // Unordered List item
    if (line.trim().startsWith("* ") || line.trim().startsWith("- ")) {
      elements.push(
        <li key={`li-${i}`} className="ml-5 list-disc pl-1.5 text-[15.5px] leading-[1.7] text-[#2e2e2b] my-1.5 marker:text-ink">
          {renderInline(line.trim().slice(2))}
        </li>
      );
      continue;
    }

    // Ordered List item
    const olMatch = line.trim().match(/^(\d+)\.\s+(.*)$/);
    if (olMatch) {
      elements.push(
        <div key={`ol-${i}`} className="flex items-start gap-3 my-2.5 text-[15.5px] leading-[1.7] text-[#2e2e2b]">
          <span className="font-semibold text-ink font-mono text-[14px] px-2 py-0.5 rounded bg-band border border-hairline shrink-0">
            {olMatch[1]}
          </span>
          <div>{renderInline(olMatch[2])}</div>
        </div>
      );
      continue;
    }

    // Standard paragraph
    elements.push(
      <p key={`p-${i}`} className="my-4 text-[16px] leading-[1.75] text-[#2e2e2b]">
        {renderInline(line)}
      </p>
    );
  }

  if (inCodeBlock) flushCode("code-end");
  if (inTable) flushTable("table-end");

  return <div className="article-body">{elements}</div>;
}

// ── Article Detail View ──────────────────────────────────────────────────────
function ArticleDetailView({ post }: { post: BlogPost }) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <Layout>
      <article className="max-w-[780px] mx-auto px-gutter py-12 md:py-20">
        {/* Back navigation */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#656560] hover:text-ink transition-colors no-underline mb-8"
        >
          <ArrowLeft size={16} />
          Back to all articles
        </Link>

        {/* Category & meta */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="font-semibold text-[12px] uppercase tracking-wider px-3 py-1 rounded-full bg-band border border-hairline text-ink">
            {post.category}
          </span>
          <span className="flex items-center gap-1.5 text-[13px] text-[#656560]">
            <Calendar size={14} />
            {post.date}
          </span>
          <span className="text-[#c8c6be]">·</span>
          <span className="flex items-center gap-1.5 text-[13px] text-[#656560]">
            <Clock size={14} />
            {post.readTime}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h1 className="text-[32px] sm:text-[42px] font-bold text-ink leading-[1.15] tracking-[-0.02em] mt-2 mb-4">
          {post.title}
        </h1>
        {post.subtitle && (
          <p className="text-[19px] leading-[1.55] text-[#4a4a47] font-normal mb-8">
            {post.subtitle}
          </p>
        )}

        {/* Author Byline Bar */}
        <div className="flex items-center justify-between py-6 my-8 border-y border-hairline flex-wrap gap-4">
          <div className="flex items-center gap-3.5">
            <img
              src={AVATAR_URL}
              alt={PROFILE.name}
              className="w-12 h-12 rounded-full object-cover border border-hairline"
            />
            <div>
              <div className="font-semibold text-ink text-[15px]">
                {PROFILE.name}
              </div>
              <div className="text-[13px] text-[#656560]">
                {PROFILE.role} · Dinnova AG (Zurich)
              </div>
            </div>
          </div>

          <button
            onClick={handleShare}
            className="btn-ghost !py-2 !px-3.5 !text-[13px] flex items-center gap-2 cursor-pointer"
          >
            {copied ? <Check size={14} className="text-emerald-600" /> : <Share2 size={14} />}
            {copied ? "Link Copied!" : "Share Article"}
          </button>
        </div>

        {/* Article Body */}
        <div className="mt-8">
          <ArticleContent content={post.content} />
        </div>

        {/* Author sign-off card */}
        <div className="mt-16 p-8 rounded-card border border-hairline bg-band flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <img
            src={AVATAR_URL}
            alt={PROFILE.name}
            className="w-16 h-16 rounded-full object-cover border border-hairline shrink-0"
          />
          <div>
            <div className="eyebrow mb-1">Written by</div>
            <h4 className="font-semibold text-ink text-[18px] m-0">
              {PROFILE.name}
            </h4>
            <p className="text-[14.5px] leading-[1.6] text-[#4a4a47] mt-2 mb-4">
              Senior Flutter Engineer specializing in cross-platform mobile architecture, real-time communications, and AI audio integrations.
            </p>
            <div className="flex gap-4">
              <Link to="/works" className="text-[13px] font-semibold text-ink underline">
                View Shipped Apps →
              </Link>
              <Link to="/contact" className="text-[13px] font-semibold text-ink underline">
                Get In Touch →
              </Link>
            </div>
          </div>
        </div>
      </article>

      <NewsletterSection />
    </Layout>
  );
}

// ── Blog Listing View ────────────────────────────────────────────────────────
export default function Blog() {
  const { slug } = useParams<{ slug?: string }>();

  // If a slug is in the URL, render the individual article
  if (slug) {
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    if (post) {
      return <ArticleDetailView post={post} />;
    }
  }

  const featuredPost = BLOG_POSTS[0];
  const regularPosts = BLOG_POSTS.slice(1);

  return (
    <Layout>
      {/* ── Header ───────────────────────────────────────── */}
      <section className="max-w-site mx-auto px-gutter pt-12 pb-16 md:pt-24 md:pb-16 border-b border-hairline">
        <div className="eyebrow mb-5">Engineering Journal</div>
        <h1 className="hero-title max-w-[22ch]">
          Notes on Flutter, architecture & systems.
        </h1>
        <p
          className="mt-6 leading-[1.6] max-w-[54ch]"
          style={{ fontSize: 18, color: "var(--muted)" }}
        >
          Deep dives into mobile internals, rendering pipelines, clean architecture patterns, and production lessons learned from shipping apps.
        </p>
      </section>

      {/* ── Featured Post Banner ──────────────────────────── */}
      {featuredPost && (
        <section className="border-b border-hairline bg-canvas">
          <div className="max-w-site mx-auto px-gutter py-12 md:py-16">
            <div className="eyebrow mb-4 text-[#656560]">Featured Article</div>
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="group block p-8 md:p-12 rounded-panel border border-hairline bg-band no-underline card-hover"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="font-semibold text-[11.5px] uppercase tracking-wider px-3 py-1 rounded-full bg-canvas border border-hairline text-ink">
                  {featuredPost.category}
                </span>
                <span className="text-[13px] text-[#60605b] font-medium">
                  {featuredPost.date}
                </span>
                <span className="text-[#c2c0b6]">·</span>
                <span className="text-[13px] text-[#60605b] font-medium">
                  {featuredPost.readTime}
                </span>
              </div>

              <h2 className="text-[26px] sm:text-[34px] font-bold text-ink m-0 leading-[1.2] tracking-[-0.02em] group-hover:text-ink/80 transition-colors">
                {featuredPost.title}
              </h2>

              <p className="mt-4 mb-6 text-[16px] leading-[1.65] text-[#4a4a47] max-w-[70ch]">
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center gap-2 font-semibold text-[14px] text-ink">
                <span>Read the full deep-dive</span>
                <span className="arrow-link-icon text-label" aria-hidden="true">→</span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ── Other Posts Grid ──────────────────────────────── */}
      <section
        className="border-b border-hairline"
        style={{ background: "var(--band)" }}
      >
        <div className="max-w-site mx-auto px-gutter py-16 md:py-20">
          <div className="eyebrow mb-6 text-[#656560]">All Articles</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
            {regularPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group flex flex-col no-underline card-hover"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--hairline)",
                  borderRadius: "var(--r-card)",
                  padding: "28px",
                }}
              >
                {/* Category tag */}
                {post.category && (
                  <div
                    className="inline-flex font-semibold uppercase mb-3 self-start text-[11px] tracking-wider px-2.5 py-1 rounded bg-band text-ink border border-hairline"
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
                  className="font-semibold mt-4 mb-0 text-ink leading-[1.3] tracking-[-0.01em] text-[20px]"
                >
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p
                  className="mt-3 mb-7 text-[#555550] leading-[1.55] line-clamp-3 text-[14.5px]"
                >
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div
                  className="mt-auto pt-7 flex items-center gap-2 font-semibold text-ink text-[14px]"
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
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </Layout>
  );
}
