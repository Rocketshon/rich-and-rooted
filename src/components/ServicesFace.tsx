"use client";

import { useEffect, useRef, useState } from "react";
import { FileSearch, ClipboardCheck, Home, Briefcase } from "lucide-react";

const EASE_OUT_EXPO = "cubic-bezier(0.22, 1, 0.36, 1)";

const GRAIN_SVG = `data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E`;

const TIERS = [
  { name: "Standard Consultation", duration: "60 minutes", price: "$45", featured: false },
  { name: "Extended Consultation", duration: "90 minutes", price: "$90", featured: true },
  { name: "Deep Dive Session", duration: "2 hours", price: "$120", featured: false },
  { name: "Comprehensive Package", duration: "3 hours", price: "$150", featured: false },
];

const SPECIALIZED = [
  {
    icon: FileSearch,
    name: "Document Audit",
    description: "Quick review of your financial documents before applying for financing",
    price: "$75",
  },
  {
    icon: ClipboardCheck,
    name: "Loan Application Consultation",
    description: "One-on-one preparation before applying for a loan",
    price: "$200",
  },
  {
    icon: Home,
    name: "Mortgage Readiness Consultation",
    description: "Financial readiness assessment for homebuyers",
    price: "$150",
  },
  {
    icon: Briefcase,
    name: "Small Business Loan Package",
    description: "Complete lender-ready loan package preparation",
    price: "$900",
  },
];

export default function ServicesFace() {
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

  const fadeUpService = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 600ms ${EASE_OUT_EXPO} ${delay}ms, transform 600ms ${EASE_OUT_EXPO} ${delay}ms`,
  });

  const tierCardStyle = (i: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 500ms ${EASE_OUT_EXPO} ${300 + i * 90}ms, transform 500ms ${EASE_OUT_EXPO} ${300 + i * 90}ms`,
  });

  const specCardStyle = (i: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateX(0)" : "translateX(20px)",
    transition: `opacity 500ms ${EASE_OUT_EXPO} ${400 + i * 90}ms, transform 500ms ${EASE_OUT_EXPO} ${400 + i * 90}ms`,
  });

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
      {/* Background */}
      <div style={{
        position: "absolute", width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)",
        top: -200, left: "50%", pointerEvents: "none", zIndex: 0,
      }} />
      <div style={{
        position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none", zIndex: 0,
        backgroundImage: `url("${GRAIN_SVG}")`, backgroundSize: "200px 200px",
      }} />

      {/* Main layout */}
      <div style={{
        position: "relative", zIndex: 10, width: "100%", height: "100%",
        display: "flex", flexDirection: "column",
        padding: "48px 96px",
      }}>
        {/* Header */}
        <div>
          <span style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600,
            letterSpacing: "0.3em", textTransform: "uppercase", color: "#7A9472",
            marginBottom: 4, display: "block",
            ...fadeUpService(0),
          }}>
            Services &amp; Booking
          </span>

          <div style={{
            display: "flex", flexDirection: "row", alignItems: "flex-end",
            justifyContent: "space-between", marginBottom: 32,
          }}>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 4vw, 60px)",
              fontWeight: 900, lineHeight: 1, color: "#F5EDD8",
              ...fadeUpService(80),
            }}>
              Choose Your Path Forward
            </div>
          </div>
        </div>

        {/* Content split */}
        <div style={{
          flex: 1, display: "flex", flexDirection: "row", gap: 32,
          overflow: "hidden", minHeight: 0,
        }}>
          {/* Left — Consultation Tiers */}
          <div style={{ width: "50%", display: "flex", flexDirection: "column", minHeight: 0 }}>
            <span style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600,
              letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A84C",
              marginBottom: 12,
              ...fadeUpService(160),
            }}>
              Consultation Tiers
            </span>

            <div style={{
              display: "grid", gridTemplateColumns: "repeat(2, 1fr)",
              gap: 12, flex: 1,
            }}>
              {TIERS.map((tier, i) => (
                <TierCard key={tier.name} tier={tier} style={tierCardStyle(i)} />
              ))}
            </div>
          </div>

          {/* Right — Specialized Services */}
          <div style={{ width: "50%", display: "flex", flexDirection: "column", minHeight: 0 }}>
            <span style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600,
              letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A84C",
              marginBottom: 12,
              ...fadeUpService(240),
            }}>
              Specialized Services
            </span>

            <div style={{
              display: "flex", flexDirection: "column", gap: 10, flex: 1,
              overflow: "hidden",
            }}>
              {SPECIALIZED.map((service, i) => (
                <SpecializedCard key={service.name} service={service} style={specCardStyle(i)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TierCard({ tier, style }: {
  tier: typeof TIERS[number];
  style: React.CSSProperties;
}) {
  const [hovered, setHovered] = useState(false);

  const bg = tier.featured
    ? "linear-gradient(135deg, #C9A84C 0%, #E8C96C 100%)"
    : "rgba(255,255,255,0.04)";
  const border = tier.featured ? "none" : "1px solid rgba(255,255,255,0.08)";
  const priceColor = tier.featured ? "#0E1E14" : "#C9A84C";
  const nameColor = tier.featured ? "#1a3a1a" : "#F5EDD8";
  const durColor = tier.featured ? "#2E4A35" : "#7A9472";
  const btnBg = tier.featured ? "#0E1E14" : "#C9A84C";
  const btnColor = tier.featured ? "#C9A84C" : "#0E1E14";

  return (
    <div
      style={{
        padding: 16, borderRadius: 12, display: "flex", flexDirection: "column",
        height: "100%", background: bg, border,
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        ...style,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={{
        fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 900,
        lineHeight: 1, color: priceColor,
      }}>
        {tier.price}
      </span>
      <span style={{
        fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500,
        lineHeight: 1.3, marginTop: 4, color: nameColor,
      }}>
        {tier.name}
      </span>
      <span style={{
        fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 400,
        marginTop: 4, color: durColor,
      }}>
        {tier.duration}
      </span>
      <div style={{ flex: 1 }} />
      <button style={{
        marginTop: 12, padding: "7px 14px", borderRadius: 9999,
        fontSize: 11, fontWeight: 600, letterSpacing: "0.05em",
        cursor: "pointer", border: "none", textAlign: "center",
        background: btnBg, color: btnColor,
        transition: "opacity 200ms ease, transform 200ms ease",
      }}
      onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "scale(1.03)"; }}
      onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "scale(1)"; }}
      >
        Book Now
      </button>
    </div>
  );
}

function SpecializedCard({ service, style }: {
  service: typeof SPECIALIZED[number];
  style: React.CSSProperties;
}) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <div
      style={{
        display: "flex", flexDirection: "row", alignItems: "center",
        justifyContent: "space-between", padding: "12px 16px",
        borderRadius: 10,
        background: hovered ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.04)",
        border: hovered ? "1px solid rgba(201,168,76,0.20)" : "1px solid rgba(255,255,255,0.07)",
        ...style,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Left group */}
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 12, flex: 1, minWidth: 0 }}>
        <div style={{
          width: 34, height: 34, borderRadius: 8,
          background: "rgba(201,168,76,0.10)",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}>
          <Icon size={16} color="#C9A84C" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", flex: 1, minWidth: 0 }}>
          <span style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 600,
            color: "#F5EDD8", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
          }}>
            {service.name}
          </span>
          <span style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 12, lineHeight: 1.35,
            color: "#7A9472", marginTop: 2,
            overflow: "hidden", display: "-webkit-box",
            WebkitLineClamp: 1, WebkitBoxOrient: "vertical",
          }}>
            {service.description}
          </span>
        </div>
      </div>

      {/* Right group */}
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 12, flexShrink: 0, marginLeft: 12 }}>
        <span style={{
          fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700,
          color: "#C9A84C",
        }}>
          {service.price}
        </span>
        <button style={{
          padding: "6px 12px", borderRadius: 9999, fontSize: 11, fontWeight: 600,
          border: "1px solid rgba(201,168,76,0.50)", color: "#C9A84C",
          background: "transparent", cursor: "pointer",
          transition: "background 200ms ease", whiteSpace: "nowrap",
        }}
        onMouseEnter={e => e.currentTarget.style.background = "rgba(201,168,76,0.10)"}
        onMouseLeave={e => e.currentTarget.style.background = "transparent"}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
