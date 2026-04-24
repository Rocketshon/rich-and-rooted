import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FileStamp from "@/components/FileStamp";

// Fraunces — variable serif, display + body.
// Using variable weight so we can request axes (opsz, SOFT) from Fraunces's variable axes.
const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

// IBM Plex Sans — UI / sans body.
const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

// JetBrains Mono — marks, labels, numbers.
const jb = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iamrootedandrich.com"),
  title: {
    default: "Rich & Rooted Consulting — The Underwriter's Advocate",
    template: "%s · Rich & Rooted",
  },
  description:
    "Applicant-side preparation for mortgage, SBA, and small-business financing. A former mortgage underwriter, now working for you.",
  icons: { icon: "/logo-light.png" },
  openGraph: {
    title: "Rich & Rooted Consulting",
    description:
      "Applicant-side preparation for mortgage, SBA, and small-business financing.",
    images: ["/logo-dark.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${plex.variable} ${jb.variable}`}>
      <body>
        <SiteHeader />
        <FileStamp />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
