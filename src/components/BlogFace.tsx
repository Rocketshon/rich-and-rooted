"use client";

import Link from "next/link";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import type { PostMeta } from "@/lib/blog";

export default function BlogFace({ posts }: { posts: PostMeta[] }) {
  return (
    <div style={{
      minHeight: "calc(100vh - 64px)",
      background: "#1A2E1F",
      fontFamily: "'DM Sans', sans-serif",
      position: "relative",
      overflow: "hidden",
      padding: "80px 48px 120px",
    }}>
      {/* Background decoration */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage:
          "radial-gradient(circle at 20% 20%, rgba(201,168,76,0.08) 0%, transparent 50%)," +
          "radial-gradient(circle at 80% 80%, rgba(34,74,42,0.30) 0%, transparent 50%)",
      }} />

      <div style={{ position: "relative", zIndex: 10, maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{
            fontSize: 12, fontWeight: 600, letterSpacing: "0.3em",
            textTransform: "uppercase", color: "#C9A84C",
          }}>
            The Rich &amp; Rooted Journal
          </span>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(36px, 5vw, 72px)",
            fontWeight: 900, color: "#F5EDD8",
            margin: "12px 0 16px", lineHeight: 1.1,
          }}>
            Insights from the Underwriter&apos;s Desk
          </h1>
          <p style={{
            fontSize: 16, color: "#A8C4A0", maxWidth: 640,
            margin: "0 auto", lineHeight: 1.6,
          }}>
            Real talk on mortgages, credit, SBA loans, and homeownership — from a former underwriter who&apos;s reviewed thousands of applications.
          </p>
        </div>

        {/* Posts grid or empty state */}
        {posts.length === 0 ? (
          <EmptyState />
        ) : (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 24,
          }}>
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
      <article style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 16, padding: 28,
        display: "flex", flexDirection: "column",
        height: "100%",
        transition: "transform 200ms ease, background 200ms ease, border-color 200ms ease",
        cursor: "pointer",
      }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.background = "rgba(255,255,255,0.07)";
          e.currentTarget.style.borderColor = "rgba(201,168,76,0.30)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.background = "rgba(255,255,255,0.04)";
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
        }}
      >
        <span style={{
          display: "inline-block", alignSelf: "flex-start",
          padding: "4px 12px", borderRadius: 50,
          background: "rgba(201,168,76,0.10)",
          color: "#C9A84C", fontSize: 11, fontWeight: 600,
          letterSpacing: "0.1em", textTransform: "uppercase",
          marginBottom: 16,
        }}>
          {post.category}
        </span>

        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 22, fontWeight: 700, color: "#F5EDD8",
          lineHeight: 1.3, margin: "0 0 12px",
        }}>
          {post.title}
        </h2>

        <p style={{
          color: "#A8B89E", fontSize: 14, lineHeight: 1.6,
          margin: 0, flex: 1,
        }}>
          {post.excerpt}
        </p>

        <div style={{
          display: "flex", alignItems: "center", gap: 16,
          marginTop: 20, paddingTop: 16,
          borderTop: "1px solid rgba(255,255,255,0.06)",
          fontSize: 12, color: "#7A9472",
        }}>
          <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Calendar size={12} />
            {formatDate(post.date)}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Clock size={12} />
            {post.readTime}
          </span>
          <span style={{
            marginLeft: "auto", display: "flex", alignItems: "center", gap: 4,
            color: "#C9A84C", fontWeight: 600,
          }}>
            Read <ArrowRight size={12} />
          </span>
        </div>
      </article>
    </Link>
  );
}

function EmptyState() {
  return (
    <div style={{
      maxWidth: 560, margin: "0 auto", textAlign: "center",
      padding: "60px 32px",
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(201,168,76,0.20)",
      borderRadius: 20,
    }}>
      <div style={{
        width: 72, height: 72, borderRadius: "50%",
        background: "rgba(201,168,76,0.10)",
        border: "1px solid rgba(201,168,76,0.30)",
        display: "flex", alignItems: "center", justifyContent: "center",
        margin: "0 auto 20px",
      }}>
        <BookOpen size={32} color="#C9A84C" />
      </div>
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 28, fontWeight: 700, color: "#F5EDD8",
        margin: "0 0 12px",
      }}>
        New Articles Coming Soon
      </h2>
      <p style={{
        color: "#A8C4A0", fontSize: 15, lineHeight: 1.6,
        margin: "0 0 24px",
      }}>
        Alecia is preparing her first round of articles on mortgage readiness, credit strategy, and the realities of loan underwriting. Check back shortly.
      </p>
      <Link href="/contact" style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        padding: "10px 20px", borderRadius: 50,
        background: "linear-gradient(135deg, #C9A84C 0%, #E8C96C 100%)",
        color: "#0E1E14", fontWeight: 700, fontSize: 13,
        textDecoration: "none",
      }}>
        Get notified when articles drop
        <ArrowRight size={14} />
      </Link>
    </div>
  );
}

function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
