"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { key: "home", label: "Home", href: "/" },
  { key: "about", label: "About", href: "/about" },
  { key: "services", label: "Services & Booking", href: "/services" },
  { key: "journal", label: "Journal", href: "/blog" },
  { key: "contact", label: "Contact", href: "/contact" },
] as const;

function activeKey(pathname: string): string {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/about")) return "about";
  if (pathname.startsWith("/services")) return "services";
  if (pathname.startsWith("/blog")) return "journal";
  if (pathname.startsWith("/contact")) return "contact";
  return "";
}

export default function SiteHeader() {
  const pathname = usePathname();
  const active = activeKey(pathname ?? "/");

  return (
    <header className="site-header">
      <div className="inner">
        <Link className="wordmark" href="/" aria-label="Rich & Rooted home">
          <span className="wordmark-mark" aria-hidden="true" />
          <span className="wordmark-text">
            Rich &amp; Rooted
            <small>Consulting · Est. MMXXV</small>
          </span>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {NAV.map((n) => (
            <Link
              key={n.key}
              href={n.href}
              className={n.key === active ? "active" : ""}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link href="/services" className="nav-cta">
          Book a Consultation
        </Link>
      </div>
    </header>
  );
}
