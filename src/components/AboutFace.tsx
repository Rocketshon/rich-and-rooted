"use client";

import { useEffect, useRef, useState } from "react";
import { GraduationCap, Home, Building2, FileText, ShieldCheck } from "lucide-react";

const EASE_OUT_EXPO = "cubic-bezier(0.22, 1, 0.36, 1)";

const CREDENTIALS = [
  { icon: GraduationCap, text: "MBA — Business Expertise" },
  { icon: Home, text: "10+ Years in Mortgage Underwriting" },
  { icon: Building2, text: "SBA Loan Processing" },
  { icon: FileText, text: "Tax Preparation & Financial Documentation Review" },
  { icon: ShieldCheck, text: "Insurance Claims Experience" },
];

export default function AboutFace() {
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

  const fadeUp = (i: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 650ms ${EASE_OUT_EXPO} ${i * 100}ms, transform 650ms ${EASE_OUT_EXPO} ${i * 100}ms`,
  });

  const badgeStyle = (i: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "scale(1)" : "scale(0.9)",
    transition: `opacity 400ms ease-out ${700 + i * 70}ms, transform 400ms ease-out ${700 + i * 70}ms`,
  });

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        background: "#F5EDD8",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Background */}
      <div style={{
        position: "absolute", width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)",
        bottom: -200, right: -100, pointerEvents: "none", zIndex: 0,
      }} />
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 6,
        background: "linear-gradient(to right, #0E1E14, #2E4A35, #C9A84C, #2E4A35, #0E1E14)",
        zIndex: 0, pointerEvents: "none",
      }} />

      {/* Main layout */}
      <div style={{
        position: "relative", zIndex: 10, width: "100%", height: "100%",
        display: "flex", flexDirection: "row",
      }}>
        {/* Left column — photo */}
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
          paddingLeft: "clamp(48px, 5vw, 80px)", paddingBottom: "clamp(48px, 5vw, 80px)",
          flexShrink: 0,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateX(0)" : "translateX(-50px)",
          transition: `opacity 800ms ${EASE_OUT_EXPO}, transform 800ms ${EASE_OUT_EXPO}`,
        }}>
          <div style={{
            position: "relative", width: "clamp(220px, 20vw, 340px)",
            aspectRatio: "3/4", borderRadius: 12, overflow: "hidden",
            border: "1px solid rgba(14,30,20,0.15)", background: "#D6C8A8",
          }}>
            {/* Photo */}
            <img
              src="/headshot-clipboard.jpeg"
              alt="Alecia White-Smith"
              style={{
                width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center",
              }}
            />

            {/* Badge overlay */}
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              padding: "10px 14px",
              background: "rgba(14,30,20,0.92)",
              backdropFilter: "blur(4px)",
            }}>
              <span style={{
                fontFamily: "'Playfair Display', serif", fontSize: 12, fontWeight: 700,
                color: "#F5EDD8",
              }}>
                Mortgage Underwriter → Your Advocate
              </span>
            </div>
          </div>
        </div>

        {/* Right column — content */}
        <div style={{
          flex: 1, display: "flex", flexDirection: "column", justifyContent: "center",
          paddingLeft: "clamp(40px, 4vw, 56px)", paddingRight: "clamp(40px, 4vw, 56px)",
          overflow: "hidden",
        }}>
          {/* Section label */}
          <span style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600,
            letterSpacing: "0.3em", textTransform: "uppercase", color: "#7A9472",
            ...fadeUp(0),
          }}>
            About Alecia
          </span>

          {/* Name */}
          <div style={{
            marginTop: 8,
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(36px, 5vw, 72px)",
            fontWeight: 900, lineHeight: 1, color: "#0E1E14",
            ...fadeUp(1),
          }}>
            Alecia White-Smith
          </div>

          {/* Title */}
          <div style={{
            marginTop: 8,
            fontFamily: "'DM Sans', sans-serif", fontSize: 18, fontWeight: 500,
            color: "#C9A84C",
            ...fadeUp(2),
          }}>
            Founder, Rich &amp; Rooted Consulting
          </div>

          {/* Gold divider */}
          <div style={{
            marginTop: "clamp(16px, 2vw, 24px)", width: 64, height: 2,
            background: "#C9A84C",
            ...fadeUp(3),
          }} />

          {/* Bio */}
          <div style={{
            marginTop: "clamp(12px, 1.5vw, 20px)", maxWidth: 672,
            fontFamily: "'DM Sans', sans-serif", fontSize: 18, fontWeight: 400,
            lineHeight: 1.625, color: "#2A3D26",
            ...fadeUp(4),
          }}>
            <p style={{ margin: 0 }}>
              Alecia White-Smith is the founder of Rich &amp; Rooted Consulting. With over 10 years
              of experience as a mortgage underwriter, she has reviewed thousands of loan applications
              and knows exactly what lenders look for — and what causes deals to fall apart.
            </p>
            <br />
            <p style={{ margin: 0 }}>
              She holds an MBA and has professional experience in mortgage underwriting, SBA disaster
              loan processing, tax preparation, and financial documentation review. She created
              Rich &amp; Rooted to give people the insider knowledge that most first-time buyers
              never see — so they can walk into the process prepared, confident, and positioned
              for approval.
            </p>
          </div>

          {/* Philosophy quote */}
          <div style={{
            marginTop: "clamp(16px, 2vw, 24px)", maxWidth: 672,
            position: "relative", padding: "16px 20px",
            borderLeft: "3px solid #C9A84C",
            background: "rgba(201,168,76,0.08)",
            borderRadius: "0 8px 8px 0",
            ...fadeUp(5),
          }}>
            <span style={{
              position: "absolute", top: -8, left: 12,
              fontSize: 60, lineHeight: 1, color: "rgba(201,168,76,0.20)",
              fontFamily: "serif", pointerEvents: "none",
            }}>
              &ldquo;
            </span>
            <p style={{
              margin: 0, fontFamily: "'Playfair Display', serif",
              fontSize: 24, fontWeight: 700, fontStyle: "italic",
              lineHeight: 1.35, color: "#0E1E14",
            }}>
              Most focus on closing. I focus on after — because buying is step one.
              Owning wisely and not losing it to bad decisions? That&apos;s the real game.
            </p>
          </div>

          {/* Credentials badges */}
          <div style={{
            marginTop: "clamp(16px, 2vw, 28px)",
            display: "flex", flexWrap: "wrap", gap: 12,
            ...fadeUp(6),
          }}>
            {CREDENTIALS.map((cred, i) => {
              const Icon = cred.icon;
              return (
                <div key={cred.text} style={{
                  display: "flex", alignItems: "center", gap: 8,
                  padding: "8px 12px", borderRadius: 8,
                  background: "#E8D9B8", border: "1px solid rgba(201,168,76,0.30)",
                  ...badgeStyle(i),
                }}>
                  <Icon size={14} color="#C9A84C" style={{ flexShrink: 0 }} />
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500,
                    color: "#2A3D26", whiteSpace: "nowrap",
                  }}>
                    {cred.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
