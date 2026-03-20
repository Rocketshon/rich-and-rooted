import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rich & Rooted Consulting",
  description: "Faith · Financial Wisdom · Business Growth — Helping individuals and small businesses prepare strong financial documentation for funding, homeownership, and financial growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <Navbar />
        <div style={{ paddingTop: 64 }}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
