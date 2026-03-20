"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Shield, TrendingUp, Home, BookOpen } from "lucide-react";

const EASE_OUT_EXPO = "cubic-bezier(0.22, 1, 0.36, 1)";

const GRAIN_SVG = `data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E`;

const STATS = [
  { value: "2,400+", label: "Members & Growing" },
  { value: "12", label: "Free Courses" },
  { value: "100%", label: "Free to Join" },
];

const BENEFITS = [
  { icon: Shield, title: "The Underwriter's Playbook", description: "What we flag before you apply" },
  { icon: TrendingUp, title: "Real Talk on Credit & DTI", description: "Moves that actually matter" },
  { icon: Home, title: "Smart Homeownership Strategy", description: "Buy right. Keep it. Own wisely." },
  { icon: BookOpen, title: "Plain-English Mortgage Courses", description: "Breaking down mortgages without the jargon" },
  { icon: Users, title: "Wealth-Building Network", description: "A community growing together through real estate" },
];

export default function CommunityFace() {
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
    transform: visible ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 650ms ${EASE_OUT_EXPO} ${delay}ms, transform 650ms ${EASE_OUT_EXPO} ${delay}ms`,
  });

  const slideIn = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateX(0)" : "translateX(30px)",
    transition: `opacity 550ms ${EASE_OUT_EXPO} ${delay}ms, transform 550ms ${EASE_OUT_EXPO} ${delay}ms`,
  });

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        background: "#1A2E1F",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Background layers */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle at 20% 80%, rgba(201,168,76,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(34,74,42,0.30) 0%, transparent 50%)",
      }} />
      <div style={{
        position: "absolute", width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(201,168,76,0.10) 0%, transparent 70%)",
        top: "50%", left: "50%", transform: "translate(-50%, -50%)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none",
        backgroundImage: `url("${GRAIN_SVG}")`, backgroundSize: "200px 200px",
      }} />

      {/* Main layout */}
      <div style={{
        position: "relative", zIndex: 10, width: "100%", height: "100%",
        display: "flex", flexDirection: "row",
      }}>
        {/* Left column — main info */}
        <div style={{
          flex: 1, display: "flex", flexDirection: "column", justifyContent: "center",
          paddingLeft: 96, paddingRight: 0,
        }}>
          {/* Section label */}
          <span style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600,
            letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A84C",
            ...fadeUp(0),
          }}>
            Join the Community
          </span>

          {/* Community name */}
          <div style={{
            marginTop: 12,
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(36px, 5vw, 72px)",
            fontWeight: 900, lineHeight: 1, color: "#F5EDD8",
            ...fadeUp(100),
          }}>
            Rich &amp; Rooted:<br />Homeownership
          </div>

          {/* Tagline */}
          <div style={{
            marginTop: 16, maxWidth: 576,
            fontFamily: "'DM Sans', sans-serif", fontSize: 18, fontWeight: 500,
            fontStyle: "italic", lineHeight: 1.5, color: "#C9A84C",
            ...fadeUp(200),
          }}>
            Creating Wealth Warriors Through Financial Education — One Key at a Time
          </div>

          {/* Description */}
          <div style={{
            marginTop: 16, maxWidth: 576,
            fontFamily: "'DM Sans', sans-serif", fontSize: 18, fontWeight: 400,
            lineHeight: 1.625, color: "#A8C4A0",
            ...fadeUp(300),
          }}>
            A private, <strong style={{ fontWeight: 700 }}>free community</strong> empowering you
            to prepare for homeownership with confidence. Get access to insider knowledge from a
            former mortgage underwriter, courses that break down mortgages in plain English, and
            a network of people building wealth through real estate.
          </div>

          {/* Stats row */}
          <div style={{
            marginTop: 24, display: "flex", flexDirection: "row", gap: 48,
            ...fadeUp(400),
          }}>
            {STATS.map((stat) => (
              <div key={stat.label} style={{
                display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
              }}>
                <span style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(30px, 3vw, 48px)",
                  fontWeight: 900, lineHeight: 1, color: "#C9A84C",
                }}>
                  {stat.value}
                </span>
                <span style={{
                  fontSize: 12, fontWeight: 400, marginTop: 4, color: "#7A9472",
                }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <a
            href="https://www.skool.com/rich-rooted-home"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: 28, display: "inline-flex", alignItems: "center", gap: 10,
              padding: "14px 28px", borderRadius: 50,
              background: "linear-gradient(135deg, #C9A84C 0%, #E8C96C 100%)",
              color: "#0E1E14", fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700, fontSize: 14, letterSpacing: "0.03em",
              textDecoration: "none", alignSelf: "flex-start",
              boxShadow: "0 4px 24px rgba(201,168,76,0.30)",
              ...fadeUp(500),
              transition: `opacity 650ms ${EASE_OUT_EXPO} 500ms, transform 200ms ease, box-shadow 200ms ease`,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(201,168,76,0.40)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 24px rgba(201,168,76,0.30)";
            }}
          >
            <Users size={18} />
            Join Free Community
          </a>
        </div>

        {/* Right column — benefits panel */}
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "center",
          paddingRight: 80, paddingTop: 48, paddingBottom: 48,
          flexShrink: 0, width: "clamp(300px, 35%, 460px)",
        }}>
          <span style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600,
            letterSpacing: "0.2em", textTransform: "uppercase", color: "#7A9472",
            marginBottom: 16,
            ...fadeUp(100),
          }}>
            What you get
          </span>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {BENEFITS.map((benefit, i) => (
              <BenefitCard key={benefit.title} benefit={benefit} style={slideIn(300 + i * 100)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function BenefitCard({ benefit, style }: {
  benefit: typeof BENEFITS[number];
  style: React.CSSProperties;
}) {
  const [hovered, setHovered] = useState(false);
  const Icon = benefit.icon;

  return (
    <div
      style={{
        display: "flex", flexDirection: "row", alignItems: "flex-start", gap: 12,
        padding: "14px 16px", borderRadius: 10,
        background: hovered ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.04)",
        border: hovered ? "1px solid rgba(201,168,76,0.20)" : "1px solid rgba(255,255,255,0.07)",
        ...style,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        width: 32, height: 32, borderRadius: 8,
        background: "rgba(201,168,76,0.10)",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
      }}>
        <Icon size={16} color="#C9A84C" />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 600,
          lineHeight: 1.3, color: "#F5EDD8",
        }}>
          {benefit.title}
        </span>
        <span style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 12, lineHeight: 1.35,
          color: "#7A9472", marginTop: 2,
        }}>
          {benefit.description}
        </span>
      </div>
    </div>
  );
}
