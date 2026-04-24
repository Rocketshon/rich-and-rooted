import Link from "next/link";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import "./contact.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Bring the question. I'll read first. Direct email or a short intake form — both routes to the same inbox.",
};

export default function ContactPage() {
  return (
    <main className="container">
      <section className="c-hero">
        <div>
          <div className="section-mark">§&nbsp;05 — Contact</div>
          <h1>
            Bring the question. <em>I&apos;ll&nbsp;read&nbsp;first.</em>
          </h1>
        </div>
        <div className="meta">
          Remote · United States
          <br />
          <span style={{ color: "var(--bronze-dim)" }}>
            Typically responds 24–48 hrs
          </span>
        </div>
      </section>

      <section className="c-main">
        <div className="c-left">
          <div className="eyebrow">§ Direct lines</div>
          <h2 className="h2" style={{ marginTop: 10 }}>
            Two ways to reach <em>the practice.</em>
          </h2>
          <p
            className="body lede"
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 300,
              fontSize: 19,
            }}
          >
            For quick questions, direct email is fastest. For a formal intake
            or a booking, use the form — it routes to the same inbox with a
            little more context attached.
          </p>

          <div className="chip-row">
            <a className="c-chip" href="mailto:rootedrichly@gmail.com">
              <div>
                <div className="lbl">Email</div>
                <div className="val">rootedrichly@gmail.com</div>
              </div>
              <div className="arr">→</div>
            </a>
            <a
              className="c-chip"
              href="https://www.linkedin.com/in/alecia-white-smith-ma-69927b27/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <div className="lbl">Social</div>
                <div className="val">LinkedIn · Alecia White-Smith</div>
              </div>
              <div className="arr">→</div>
            </a>
            <Link className="c-chip" href="/services">
              <div>
                <div className="lbl">Booking</div>
                <div className="val">Services &amp; Consultation Tiers</div>
              </div>
              <div className="arr">→</div>
            </Link>
          </div>

          <div className="response-note">
            <b>A note on timing.</b> This is a single-practitioner practice.
            Messages are read personally, typically within 24–48 hours on
            weekdays. For active loan-file emergencies, mark your subject line
            accordingly.
          </div>
        </div>

        <aside className="c-form">
          <div className="form-num">Form № 05-A</div>
          <div className="form-head">§ Intake form</div>
          <h2>
            Tell me <em>what you&apos;re working on.</em>
          </h2>
          <ContactForm />
        </aside>
      </section>

      {/* Identity card */}
      <section className="id-card">
        <div className="id-logo" aria-hidden="true" />
        <div>
          <div className="id-eyebrow">§ The practice, at a glance</div>
          <div className="id-brand">
            Rich &amp; Rooted
            <span className="tag">
              Faith · Financial Wisdom · Business Growth
            </span>
          </div>
        </div>
        <Link href="/services" className="btn">
          See what&apos;s offered →
        </Link>
      </section>
    </main>
  );
}
