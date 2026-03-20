"use client";

import { useEffect, useRef, useState } from "react";

const EASE_OUT_EXPO = "cubic-bezier(0.22, 1, 0.36, 1)";

const GRAIN_SVG = `data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E`;

const VALUE_TAGS = [
  "The Underwriter's Playbook",
  "Real Talk on Credit & DTI",
  "Smart Homeownership Strategy",
  "Plain-English Mortgage Courses",
];

const STATS = [
  { value: "10+", label: "Years Underwriting" },
  { value: "1000s", label: "Applications Reviewed" },
  { value: "MBA", label: "Business Expertise" },
];

export default function HeroFace() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const fadeUp = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(32px)",
    transition: `opacity 700ms ${EASE_OUT_EXPO} ${delay}ms, transform 700ms ${EASE_OUT_EXPO} ${delay}ms`,
  });

  const scaleInStyle = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "scale(1)" : "scale(0.9)",
    transition: `opacity 400ms ease-out ${delay}ms, transform 400ms ease-out ${delay}ms`,
  });

  const slideRight = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateX(0)" : "translateX(60px)",
    transition: `opacity 900ms ${EASE_OUT_EXPO} 200ms, transform 900ms ${EASE_OUT_EXPO} 200ms`,
  };

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        background: "#0E1E14",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Background decorative elements */}
      <div style={{
        position: "absolute", width: 700, height: 700, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(34,74,42,0.45) 0%, transparent 70%)",
        top: -200, right: 200, zIndex: 0, pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)",
        bottom: -100, left: 0, zIndex: 0, pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", inset: 0, opacity: 0.4, zIndex: 0, pointerEvents: "none",
        backgroundImage: `url("${GRAIN_SVG}")`, backgroundSize: "200px 200px",
      }} />
      <div style={{
        position: "absolute", width: 4, top: "10%", bottom: "10%", left: 0,
        background: "linear-gradient(to bottom, transparent, #C9A84C, transparent)",
        opacity: 0.6, zIndex: 0, pointerEvents: "none",
      }} />

      {/* Main layout */}
      <div style={{
        position: "relative", zIndex: 10, width: "100%", height: "100%",
        display: "flex", flexDirection: "row",
      }}>
        {/* Left column — text content */}
        <div style={{
          flex: 1, display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "0 96px",
        }}>
          {/* Tagline */}
          <span style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600,
            letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A84C",
            marginBottom: 12, ...fadeUp(0),
          }}>
            Faith · Financial Wisdom · Business Growth
          </span>

          {/* Brand Name */}
          <div style={{
            fontFamily: "'Playfair Display', serif", fontSize: 128, fontWeight: 900,
            lineHeight: 1, color: "#F5EDD8", ...fadeUp(120),
          }}>
            Rich &amp; Rooted
          </div>

          {/* Headline */}
          <div style={{
            fontFamily: "'Playfair Display', serif", fontSize: 60, fontWeight: 700,
            lineHeight: 1.25, color: "#E8D9B8", marginTop: 32, ...fadeUp(240),
          }}>
            I spent 10+ years deciding<br />who gets approved.
          </div>

          {/* Sub-headline */}
          <div style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 21, fontWeight: 400,
            lineHeight: 1.625, color: "#A8B89E", maxWidth: 576, marginTop: 20,
            ...fadeUp(360),
          }}>
            Now I&apos;m showing you exactly what lenders look for — so you walk in{" "}
            <strong style={{ fontWeight: 700 }}>prepared, not panicking.</strong> Rich &amp; Rooted
            gives you insider knowledge most first-time buyers never see.
          </div>

          {/* CTA Button */}
          <button style={{
            padding: "16px 32px", borderRadius: 9999,
            fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 600,
            letterSpacing: "0.05em", background: "#C9A84C", color: "#0E1E14",
            border: "none", cursor: "pointer", marginTop: 32, alignSelf: "flex-start",
            ...fadeUp(480),
            transition: `opacity 700ms ${EASE_OUT_EXPO} 480ms, transform 300ms ease`,
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
          >
            Book a Consultation
          </button>

          {/* Stats Row */}
          <div style={{
            display: "flex", flexDirection: "row", gap: 48, marginTop: 40,
            ...fadeUp(600),
          }}>
            {STATS.map((stat) => (
              <div key={stat.label} style={{ display: "flex", flexDirection: "column" }}>
                <span style={{
                  fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 700,
                  color: "#C9A84C", lineHeight: 1,
                }}>
                  {stat.value}
                </span>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 400,
                  color: "#7A9472", marginTop: 4,
                }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Value Proposition Tags */}
          <div style={{
            display: "flex", flexWrap: "wrap", gap: 12, marginTop: 32,
          }}>
            {VALUE_TAGS.map((tag, i) => (
              <a
                key={tag}
                href="https://www.skool.com/rich-rooted-home"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "4px 12px", borderRadius: 9999,
                  fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 400,
                  color: "#A8C4A0", background: "#162318",
                  border: "1px solid #2E4A35",
                  textDecoration: "none", cursor: "pointer",
                  ...scaleInStyle(900 + i * 80),
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "#1E2E22";
                  e.currentTarget.style.borderColor = "#C9A84C";
                  e.currentTarget.style.color = "#C9A84C";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "#162318";
                  e.currentTarget.style.borderColor = "#2E4A35";
                  e.currentTarget.style.color = "#A8C4A0";
                }}
              >
                {tag}
              </a>
            ))}
          </div>
        </div>

        {/* Right column — headshot panel */}
        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center",
          justifyContent: "center", paddingRight: 96, flexShrink: 0,
          ...slideRight,
        }}>
          <div style={{
            position: "relative", width: "clamp(240px, 22vw, 380px)",
            aspectRatio: "3/4", borderRadius: 16, overflow: "hidden",
            border: "1px solid rgba(201,168,76,0.25)", background: "#162318",
            display: "flex", flexDirection: "column",
          }}>
            {/* Corner decorations */}
            <div style={{
              position: "absolute", width: 24, height: 24, top: 8, left: 8,
              borderTop: "2px solid #C9A84C", borderLeft: "2px solid #C9A84C", zIndex: 2,
            }} />
            <div style={{
              position: "absolute", width: 24, height: 24, bottom: 60, right: 8,
              borderBottom: "2px solid #C9A84C", borderRight: "2px solid #C9A84C", zIndex: 2,
            }} />

            {/* Photo */}
            <img
              src="/headshot-3.jpeg"
              alt="Alecia White-Smith"
              style={{
                width: "100%", flex: 1, objectFit: "cover", objectPosition: "top center",
                filter: "grayscale(15%) contrast(1.05)",
              }}
            />

            {/* Label panel */}
            <div style={{
              padding: "12px 16px",
              background: "rgba(14,30,20,0.95)",
              borderTop: "1px solid rgba(201,168,76,0.2)",
              display: "flex", flexDirection: "column",
            }}>
              <span style={{
                fontFamily: "'Playfair Display', serif", fontSize: 14, fontWeight: 700,
                color: "#F5EDD8",
              }}>
                Alecia White-Smith
              </span>
              <span style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 400,
                color: "#C9A84C", marginTop: 2,
              }}>
                Founder, Rich &amp; Rooted Consulting
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
