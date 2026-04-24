"use client";

import Link from "next/link";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import type { Post } from "@/lib/blog";

export default function PostFace({ post }: { post: Post }) {
  return (
    <div style={{
      minHeight: "calc(100vh - 64px)",
      background: "#F5EDD8",
      fontFamily: "'DM Sans', sans-serif",
      position: "relative",
    }}>
      {/* Top accent stripe */}
      <div style={{
        height: 6,
        background: "linear-gradient(to right, #0E1E14, #2E4A35, #C9A84C, #2E4A35, #0E1E14)",
      }} />

      <article style={{
        maxWidth: 760, margin: "0 auto",
        padding: "64px 32px 120px",
      }}>
        {/* Back link */}
        <Link href="/blog" style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          fontSize: 13, fontWeight: 600, color: "#7A9472",
          textDecoration: "none", marginBottom: 32,
          letterSpacing: "0.05em", textTransform: "uppercase",
          transition: "color 200ms ease",
        }}
          onMouseEnter={e => e.currentTarget.style.color = "#C9A84C"}
          onMouseLeave={e => e.currentTarget.style.color = "#7A9472"}
        >
          <ArrowLeft size={14} />
          Back to Articles
        </Link>

        {/* Category badge */}
        <span style={{
          display: "inline-block",
          padding: "4px 12px", borderRadius: 50,
          background: "rgba(201,168,76,0.15)",
          color: "#8F7530", fontSize: 11, fontWeight: 700,
          letterSpacing: "0.15em", textTransform: "uppercase",
          marginBottom: 20,
        }}>
          {post.category}
        </span>

        {/* Title */}
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(32px, 5vw, 52px)",
          fontWeight: 900, color: "#0E1E14",
          lineHeight: 1.15, margin: "0 0 20px",
        }}>
          {post.title}
        </h1>

        {/* Excerpt */}
        {post.excerpt && (
          <p style={{
            fontSize: 18, color: "#2A3D26", lineHeight: 1.6,
            margin: "0 0 28px", fontWeight: 400,
          }}>
            {post.excerpt}
          </p>
        )}

        {/* Meta row */}
        <div style={{
          display: "flex", flexWrap: "wrap", alignItems: "center", gap: 20,
          paddingBottom: 28, marginBottom: 40,
          borderBottom: "1px solid rgba(14,30,20,0.12)",
          fontSize: 13, color: "#7A9472",
        }}>
          <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <User size={14} color="#C9A84C" />
            {post.author}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Calendar size={14} color="#C9A84C" />
            {formatDate(post.date)}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Clock size={14} color="#C9A84C" />
            {post.readTime}
          </span>
        </div>

        {/* Rendered markdown body */}
        <div
          className="post-body"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          style={{
            color: "#2A3D26",
            fontSize: 17,
            lineHeight: 1.75,
          }}
        />

        {/* Bottom CTA */}
        <div style={{
          marginTop: 56, padding: "32px 28px",
          background: "#0E1E14", borderRadius: 16,
          textAlign: "center",
        }}>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 24, fontWeight: 700, color: "#F5EDD8",
            margin: "0 0 8px",
          }}>
            Ready to get loan-ready?
          </h3>
          <p style={{
            color: "#A8C4A0", fontSize: 14, margin: "0 0 20px", lineHeight: 1.6,
          }}>
            Book a consultation and let&apos;s build your application the right way.
          </p>
          <Link href="/services" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "12px 28px", borderRadius: 50,
            background: "linear-gradient(135deg, #C9A84C 0%, #E8C96C 100%)",
            color: "#0E1E14", fontWeight: 700, fontSize: 14,
            textDecoration: "none",
          }}>
            View Services &amp; Booking
          </Link>
        </div>
      </article>
    </div>
  );
}

function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}
