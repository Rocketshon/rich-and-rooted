import Link from "next/link";
import type { Metadata } from "next";
import "./services.css";

export const metadata: Metadata = {
  title: "Services & Booking",
  description:
    "Time-based consultations and fixed-scope services for loan preparation, mortgage readiness, and SBA financing.",
};

// README default: featured consultation tier = 90 ($90 Working Session)
const FEATURED_TIER = "90";

type Tier = {
  id: string;
  num: string;
  duration: string;
  title: string;
  desc: string;
  price: string;
  /** TODO(stripe): replace `#` with the Stripe Payment Link for this tier. */
  bookHref: string;
};

const TIERS: Tier[] = [
  {
    id: "60",
    num: "I.",
    duration: "60 minutes",
    title: "Quick Consult",
    desc: "One clear question, answered properly. Best for early-stage thinking or a single blocker.",
    price: "$45",
    bookHref: "#", // TODO(stripe)
  },
  {
    id: "90",
    num: "II.",
    duration: "90 minutes",
    title: "Working Session",
    desc: "A full walk-through of your situation with written takeaways. The most commonly booked tier.",
    price: "$90",
    bookHref: "#", // TODO(stripe)
  },
  {
    id: "120",
    num: "III.",
    duration: "2 hours",
    title: "Deep Dive",
    desc: "Enough runway to audit documents live, map a plan, and leave with next actions ordered.",
    price: "$120",
    bookHref: "#", // TODO(stripe)
  },
  {
    id: "150",
    num: "IV.",
    duration: "3 hours",
    title: "Half-Day Intensive",
    desc: "Complex files, business + personal together, or prep the week before an application.",
    price: "$150",
    bookHref: "#", // TODO(stripe)
  },
];

type Spec = {
  id: string;
  tag: string;
  title: string;
  desc: string;
  bullets: string[];
  price: string;
  unit: string;
  /** TODO(stripe): replace `#` with Payment Link or checkout-session endpoint. */
  href: string;
  flagship?: boolean;
};

const SPECIALIZED: Spec[] = [
  {
    id: "01",
    tag: "Service · 01",
    title: "Document Audit",
    desc: "A structured review of the papers a lender is about to see — income documentation, financial statements, and the required loan-file paperwork — with a written list of gaps and fixes.",
    bullets: ["Income docs — W-2, 1099, returns", "Financial statements", "Required loan-file paperwork"],
    price: "$75",
    unit: "Flat · 1 deliverable",
    href: "#", // TODO(stripe)
  },
  {
    id: "02",
    tag: "Service · 02",
    title: "Loan Application Consultation",
    desc: "Preparation before you ever hit submit — a review of your financial profile, a plain-English walkthrough of what lenders actually look for, and the red flags to neutralize first.",
    bullets: ["Financial profile review", "What lenders look for", "Red-flag neutralization"],
    price: "$200",
    unit: "Flat · ~2 sessions",
    href: "#", // TODO(stripe)
  },
  {
    id: "03",
    tag: "Service · 03",
    title: "Mortgage Readiness Consultation",
    desc: "Built for first-time homebuyers. Income, debt, and documentation reviewed against a readiness checklist — with concrete moves to strengthen your file in the 60–180 days before you apply.",
    bullets: ["Income & debt analysis", "Documentation checklist", "Profile-strengthening plan"],
    price: "$150",
    unit: "Flat · Checklist included",
    href: "#", // TODO(stripe)
  },
  {
    id: "04",
    tag: "Service · 04 — Flagship",
    title: "Small Business Loan Package Preparation",
    desc: "The full SBA-ready packet. P&L statement, revenue projections, business summary narrative, and the documentation checklist examiners actually score you on.",
    bullets: [
      "P&L statement",
      "Revenue projections",
      "Business summary narrative",
      "Documentation checklist",
    ],
    price: "$900",
    unit: "Flat · 2–3 week build",
    href: "#", // TODO(stripe)
    flagship: true,
  },
];

export default function ServicesPage() {
  return (
    <main className="container">
      <section className="svc-hero">
        <div>
          <div className="section-mark">§&nbsp;03 — Services &amp; Booking</div>
          <h1>
            Book time. Bring a file. <em>Leave prepared.</em>
          </h1>
        </div>
        <div className="meta">
          Remote by default · U.S.
          <br />
          Invoicing via Stripe
          <br />
          <span style={{ color: "var(--bronze-dim)" }}>Typical lead time: 3–7 days</span>
        </div>
      </section>

      <section className="svc-intro">
        <div className="eyebrow">How it works</div>
        <p className="lede">
          Two ways to engage. <em>Time-based consultations</em> for open-ended
          preparation and Q&amp;A — buy an hour or buy a half-day.{" "}
          <em>Fixed-scope services</em> for a specific artifact: an audit, a
          mortgage-readiness workup, or a small-business loan packet. Every
          engagement starts with a short intake form.
        </p>
      </section>

      {/* TIERS */}
      <section className="tiers">
        <div className="section-head">
          <div>
            <div className="section-mark">§&nbsp;03.a — Consultation tiers</div>
            <h2 className="h2">By the clock.</h2>
          </div>
          <div className="margin-note">
            One-on-one. Virtual. Recording available on request.
          </div>
        </div>

        <div className="tier-grid">
          {TIERS.map((tier) => {
            const isFeatured = tier.id === FEATURED_TIER;
            return (
              <div
                key={tier.id}
                className={isFeatured ? "tier featured" : "tier"}
                data-tier={tier.id}
              >
                {isFeatured && <div className="tier-badge">Recommended</div>}
                <div className="tier-num">{tier.num}</div>
                <div className="tier-dur">{tier.duration}</div>
                <h3 className="tier-title">{tier.title}</h3>
                <p className="tier-desc">{tier.desc}</p>
                <div className="tier-price">{tier.price}</div>
                {/* TODO(stripe): swap href="#" for the Payment Link. */}
                <a href={tier.bookHref} className="tier-btn">
                  Book Now →
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* SPECIALIZED */}
      <section className="specialized">
        <div className="section-head">
          <div>
            <div className="section-mark">
              §&nbsp;03.b — Specialized services
            </div>
            <h2 className="h2">
              By the <em>artifact.</em>
            </h2>
          </div>
          <div className="margin-note">
            Fixed scope · Fixed price · Deliverable-based
          </div>
        </div>

        <div className="spec-list">
          {SPECIALIZED.map((s) => (
            <div key={s.id} className={s.flagship ? "spec flagship" : "spec"}>
              <div className="spec-left">
                <div className="tag">{s.tag}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul>
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
              <div className="spec-right">
                <div className="price">{s.price}</div>
                <div className="unit">{s.unit}</div>
                {/* TODO(stripe): swap href="#" for the Payment Link or checkout endpoint. */}
                <a href={s.href} className="btn">
                  Get Started →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINE PRINT */}
      <section className="svc-fine">
        <div className="svc-fine-grid">
          <div>
            <div className="section-mark">§&nbsp;Booking notes</div>
            <h2 className="h2">Before you book.</h2>
          </div>
          <dl>
            <dt>What happens after I click Book Now?</dt>
            <dd>
              You&apos;re routed to a short intake form and payment via Stripe.
              Once paid, you&apos;ll receive a scheduling link and a
              preparation checklist for the session.
            </dd>
            <dt>Is this financial advice?</dt>
            <dd>
              No. Rich &amp; Rooted offers education and consulting. Alecia is
              not a licensed financial advisor, attorney, or CPA, and does not
              lend money. See the <Link href="/disclaimers">Disclaimers</Link>.
            </dd>
            <dt>Refunds &amp; rescheduling</dt>
            <dd>
              Sessions can be rescheduled up to 24 hours in advance at no cost.
              Refund policy varies by engagement — reviewed at intake.
            </dd>
            <dt>Do you work with out-of-state clients?</dt>
            <dd>
              Yes. All services are delivered remotely unless otherwise
              arranged.
            </dd>
          </dl>
        </div>
      </section>
    </main>
  );
}
