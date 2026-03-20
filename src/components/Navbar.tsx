"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services & Booking" },
  { href: "/community", label: "Community" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", flexDirection: "row", alignItems: "center",
      justifyContent: "space-between",
      padding: "0 48px", height: 64,
      background: "rgba(14,30,20,0.92)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(201,168,76,0.15)",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      {/* Logo */}
      <Link href="/" style={{
        textDecoration: "none",
        display: "flex", alignItems: "center", gap: 10,
      }}>
        <img src="/logo-dark.png" alt="Rich & Rooted" style={{ height: 40, width: 40, objectFit: "contain" }} />
        <span style={{
          fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 900,
          color: "#F5EDD8", letterSpacing: "0.02em",
        }}>
          Rich &amp; Rooted
        </span>
      </Link>

      {/* Nav links */}
      <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              style={{
                padding: "6px 16px", borderRadius: 50,
                fontFamily: "'Inter', sans-serif",
                fontSize: 13, fontWeight: isActive ? 600 : 400,
                color: isActive ? "#C9A84C" : "#A8B89E",
                background: isActive ? "rgba(201,168,76,0.10)" : "transparent",
                textDecoration: "none",
                transition: "color 200ms ease, background 200ms ease",
              }}
              onMouseEnter={e => {
                if (!isActive) {
                  e.currentTarget.style.color = "#F5EDD8";
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                }
              }}
              onMouseLeave={e => {
                if (!isActive) {
                  e.currentTarget.style.color = "#A8B89E";
                  e.currentTarget.style.background = "transparent";
                }
              }}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
