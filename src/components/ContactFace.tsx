"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Linkedin, Send } from "lucide-react";

const EASE_OUT_EXPO = "cubic-bezier(0.22, 1, 0.36, 1)";

const CHIPS = [
  { href: "mailto:rootedrichly@gmail.com", icon: Mail, text: "rootedrichly@gmail.com" },
  { href: "#", icon: Linkedin, text: "LinkedIn" },
];

export default function ContactFace() {
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
    transition: `opacity 600ms ${EASE_OUT_EXPO} ${delay}ms, transform 600ms ${EASE_OUT_EXPO} ${delay}ms`,
  });

  const slideRight = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateX(0)" : "translateX(60px)",
    transition: `opacity 800ms ${EASE_OUT_EXPO}, transform 800ms ${EASE_OUT_EXPO}`,
  };

  const inputStyle: React.CSSProperties = {
    padding: "10px 14px", borderRadius: 8,
    border: "1px solid rgba(14,30,20,0.15)",
    background: "rgba(255,255,255,0.70)",
    fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#0E1E14",
    outline: "none", transition: "border-color 200ms ease, box-shadow 200ms ease",
    width: "100%", boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600,
    letterSpacing: "0.08em", textTransform: "uppercase", color: "#7A9472",
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "#C9A84C";
    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(201,168,76,0.12)";
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "rgba(14,30,20,0.15)";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <div
      ref={ref}
      style={{
        width: "100%", height: "100vh", position: "relative", overflow: "hidden",
        background: "#F5EDD8", fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Background */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 6,
        background: "linear-gradient(to right, #0E1E14, #2E4A35, #C9A84C, #2E4A35, #0E1E14)",
        zIndex: 0, pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
        top: -150, right: -100, pointerEvents: "none", zIndex: 0,
      }} />

      {/* Main layout */}
      <div style={{
        position: "relative", zIndex: 10, width: "100%", height: "100%",
        display: "flex", flexDirection: "row",
      }}>
        {/* Left column — form */}
        <div style={{
          flex: 1, display: "flex", flexDirection: "column", justifyContent: "center",
          overflow: "hidden", paddingLeft: 80, paddingRight: 80,
        }}>
          {/* Section label */}
          <span style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600,
            letterSpacing: "0.3em", textTransform: "uppercase", color: "#7A9472",
            ...fadeUp(0),
          }}>
            Get in Touch
          </span>

          {/* Title */}
          <div style={{
            marginTop: 8, marginBottom: 24,
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(30px, 4vw, 60px)",
            fontWeight: 900, lineHeight: 1, color: "#0E1E14",
            ...fadeUp(100),
          }}>
            Let&apos;s Talk About<br />Your Future Home
          </div>

          {/* Contact chips */}
          <div style={{
            marginBottom: 24, display: "flex", flexDirection: "row",
            flexWrap: "wrap", gap: 12,
            ...fadeUp(200),
          }}>
            {CHIPS.map((chip) => {
              const Icon = chip.icon;
              return (
                <a
                  key={chip.text}
                  href={chip.href}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "8px 14px", borderRadius: 50,
                    background: "#E8D9B8", border: "1px solid rgba(201,168,76,0.30)",
                    textDecoration: "none", transition: "background 200ms ease", cursor: "pointer",
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = "#DDD0A8"}
                  onMouseLeave={e => e.currentTarget.style.background = "#E8D9B8"}
                >
                  <Icon size={14} color="#C9A84C" />
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                    fontWeight: 500, color: "#0E1E14",
                  }}>
                    {chip.text}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Form */}
          <div style={{ display: "flex", flexDirection: "column", ...fadeUp(300) }}>
            {/* Name + Email grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <label style={labelStyle}>Full Name</label>
                <input
                  type="text"
                  placeholder="Alecia White-Smith"
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <label style={labelStyle}>Email Address</label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
            </div>


            {/* Message */}
            <div style={{ display: "flex", flexDirection: "column", gap: 4, marginTop: 12 }}>
              <label style={labelStyle}>Your Message</label>
              <textarea
                placeholder="Hi Alecia, I'm looking to..."
                style={{
                  ...inputStyle,
                  resize: "none", height: 80,
                }}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>

            {/* Submit button */}
            <button
              style={{
                marginTop: 16, display: "inline-flex", alignItems: "center", gap: 8,
                padding: "12px 24px", borderRadius: 50,
                background: "#0E1E14", color: "#C9A84C",
                fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 13,
                cursor: "pointer", border: "none",
                transition: "background 200ms ease, transform 200ms ease",
                alignSelf: "flex-start",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#2E4A35";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "#0E1E14";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Send Message
              <Send size={14} />
            </button>
          </div>

          {/* Closing note */}
          <p style={{
            marginTop: 16, fontFamily: "'DM Sans', sans-serif",
            fontSize: 12, color: "#7A9472", lineHeight: 1.5,
            ...fadeUp(500),
          }}>
            Alecia typically responds within 24-48 hours. For faster response, call or text directly.
          </p>
        </div>

        {/* Right column — brand card */}
        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center",
          justifyContent: "center", flexShrink: 0, paddingRight: 80,
          width: "clamp(260px, 30%, 400px)",
          ...slideRight,
        }}>
          <div style={{
            width: "100%", padding: "36px 28px", borderRadius: 20,
            background: "#0E1E14", display: "flex", flexDirection: "column",
            alignItems: "center", textAlign: "center",
            border: "1px solid rgba(201,168,76,0.20)",
          }}>
            {/* Brand mark */}
            <img
              src="/logo-dark.png"
              alt="Rich & Rooted"
              style={{
                width: 100, height: 100, objectFit: "contain",
                marginBottom: 16,
              }}
            />

            {/* Brand name */}
            <div style={{
              fontFamily: "'Playfair Display', serif", fontSize: 36,
              fontWeight: 900, lineHeight: 1.2, textAlign: "center", color: "#F5EDD8",
            }}>
              Rich &amp; Rooted
            </div>

            {/* Tagline */}
            <div style={{
              marginTop: 8, fontFamily: "'DM Sans', sans-serif", fontSize: 12,
              fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase",
              textAlign: "center", color: "#C9A84C",
            }}>
              Faith · Financial Wisdom · Business Growth
            </div>

            {/* Divider */}
            <div style={{
              width: 40, height: 2, background: "rgba(201,168,76,0.40)",
              borderRadius: 2, margin: "20px auto",
            }} />

            {/* Card note */}
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 14,
              lineHeight: 1.625, textAlign: "center", color: "#A8C4A0", margin: 0,
            }}>
              Your future home is within reach. Let&apos;s build the path together.
            </p>

            {/* Booking CTA */}
            <button
              style={{
                marginTop: 24, padding: "10px 20px", borderRadius: 50,
                border: "1px solid rgba(201,168,76,0.40)", color: "#C9A84C",
                background: "transparent", fontFamily: "'DM Sans', sans-serif",
                fontSize: 12, fontWeight: 600, cursor: "pointer",
                textAlign: "center", transition: "background 200ms ease",
                display: "block", width: "fit-content",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(201,168,76,0.10)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              Ready to book? View Services &amp; Pricing →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
