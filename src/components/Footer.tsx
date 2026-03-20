"use client";

import Link from "next/link";
import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{
      background: "#0E1E14",
      borderTop: "1px solid rgba(201,168,76,0.15)",
      padding: "32px 48px",
      fontFamily: "'DM Sans', sans-serif",
      display: "flex", flexDirection: "row", alignItems: "center",
      justifyContent: "space-between",
    }}>
      {/* Left — brand + tagline */}
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <span style={{
          fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 900,
          color: "#F5EDD8",
        }}>
          Rich &amp; Rooted Consulting
        </span>
        <span style={{
          fontSize: 11, fontWeight: 500, letterSpacing: "0.15em",
          textTransform: "uppercase", color: "#C9A84C",
        }}>
          Faith · Financial Wisdom · Business Growth
        </span>
      </div>

      {/* Center — contact */}
      <div style={{
        display: "flex", flexDirection: "row", gap: 24,
        fontSize: 12, color: "#7A9472",
      }}>
        <a href="mailto:rootedrichly@gmail.com" style={{ color: "#7A9472", textDecoration: "none", transition: "color 200ms ease" }}
          onMouseEnter={e => e.currentTarget.style.color = "#C9A84C"}
          onMouseLeave={e => e.currentTarget.style.color = "#7A9472"}
        >
          rootedrichly@gmail.com
        </a>
        <a href="#" style={{ color: "#7A9472", textDecoration: "none", transition: "color 200ms ease", display: "flex", alignItems: "center" }}
          onMouseEnter={e => e.currentTarget.style.color = "#C9A84C"}
          onMouseLeave={e => e.currentTarget.style.color = "#7A9472"}
        >
          <Linkedin size={14} />
        </a>
      </div>

      {/* Right — copyright + nav + legal */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
        <div style={{ display: "flex", gap: 16, fontSize: 12 }}>
          {[
            { href: "/about", label: "About" },
            { href: "/services", label: "Services" },
            { href: "/community", label: "Community" },
            { href: "/contact", label: "Contact" },
            { href: "/disclaimers", label: "Disclaimers" },
          ].map(link => (
            <Link key={link.href} href={link.href} style={{
              color: "#7A9472", textDecoration: "none", transition: "color 200ms ease",
            }}
              onMouseEnter={e => e.currentTarget.style.color = "#C9A84C"}
              onMouseLeave={e => e.currentTarget.style.color = "#7A9472"}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <span style={{ fontSize: 11, color: "#4A5E45" }}>
          © {new Date().getFullYear()} Rich &amp; Rooted Consulting. All rights reserved.
        </span>
        <span style={{ fontSize: 10, color: "#4A5E45", maxWidth: 400, textAlign: "right", lineHeight: 1.4 }}>
          Educational &amp; consulting services only. Not a licensed financial advisor, attorney, or CPA.
          No guarantee of loan approval.{" "}
          <Link href="/disclaimers" style={{ color: "#7A9472", textDecoration: "underline" }}>Full disclaimers</Link>
        </span>
      </div>
    </footer>
  );
}
