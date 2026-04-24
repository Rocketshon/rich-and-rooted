import Link from "next/link";
import Image from "next/image";
import "./home.css";

// README default: hero headshot = arms-crossed (hard-coded per handoff)
const HERO_SHOT = "/headshot-arms-crossed.jpeg";

export default function HomePage() {
  return (
    <main className="container">
      {/* ======= HERO ======= */}
      <section className="hero">
        <div className="hero-row-top">
          <div className="hero-kicker">
            <span className="pill">№&nbsp;01 · Home</span>
            <span>Rich &amp; Rooted Consulting</span>
          </div>
          <div className="hero-right-meta">
            Est. 2025 · Mount Clemens, MI<br />
            <span style={{ color: "var(--bronze-dim)" }}>
              Accepting new clients — Q2 intake open
            </span>
          </div>
        </div>

        <div className="brandmark">
          <div>
            <h1 className="brand-wordmark">
              Rich<span className="amp">&amp;</span>
              <span className="rooted">Rooted</span>
            </h1>
            <div className="brand-tag">
              <span>Faith</span>
              <span>Financial Wisdom</span>
              <span>Business Growth</span>
            </div>
          </div>
          <div>
            <div className="hero-portrait">
              <Image
                src={HERO_SHOT}
                alt="Alecia White-Smith, Founder of Rich & Rooted Consulting"
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
                priority
                style={{ objectFit: "cover", filter: "contrast(1.02)" }}
              />
            </div>
            <div className="portrait-caption">
              <span>Alecia White-Smith, BBA · MA</span>
              <span>Founder · Underwriter-in-Residence</span>
            </div>
          </div>
        </div>

        {/* Thesis */}
        <div className="thesis">
          <h2 className="headline">
            For ten years I decided <em>who gets&nbsp;approved.</em>
            <br />
            <span style={{ opacity: 0.9 }}>
              Now I&nbsp;work for the&nbsp;applicant.
            </span>
          </h2>
          <div className="column-right">
            <p className="lede">
              Most people walk into a loan application already losing. Mortgage,
              SBA, small-business financing — the file is decided long before
              you sign. I spent my career inside the underwriting room. Today I
              prepare individuals and founders before they ever apply, so the
              answer is ready when the question comes.
            </p>
            <div className="cta-row">
              <Link href="/services" className="btn">
                Services &amp; Booking <span className="arr">→</span>
              </Link>
              <Link href="/about" className="btn btn-ghost">
                The Underwriter&apos;s Story
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-row">
          <div className="mark">§&nbsp;Credentials on file</div>
          <div className="stat">
            <div className="num">
              10<span className="unit">+ yrs</span>
            </div>
            <div className="lbl">Mortgage underwriting</div>
          </div>
          <div className="stat">
            <div className="num">1,000s</div>
            <div className="lbl">Applications reviewed</div>
          </div>
          <div className="stat">
            <div className="num">BBA</div>
            <div className="lbl">Finance concentration</div>
          </div>
        </div>
      </section>

      {/* ======= VALUE PROPS ======= */}
      <section className="value-section">
        <div className="value-head">
          <div className="section-mark">§&nbsp;02 — What I teach</div>
          <h2 className="h2">
            Read the file <em>before</em> the lender does.
          </h2>
          <p className="body">
            Four areas I take clients through, each drawn from inside the
            underwriter&apos;s desk. Follow any one to the Journal.
          </p>
        </div>
        <div className="value-list">
          <Link className="value-item" href="/blog">
            <div className="num">01</div>
            <div className="title">The Underwriter&apos;s Playbook</div>
            <div className="desc">
              What a file actually looks like from the other side — the
              overlays, the notes, the reasons stamped on denials.
            </div>
            <div className="arrow">Read the category →</div>
          </Link>
          <Link className="value-item" href="/blog">
            <div className="num">02</div>
            <div className="title">Real Talk on Credit &amp; DTI</div>
            <div className="desc">
              Scores, ratios, and the three numbers that decide your approval
              before a human ever looks at the paperwork.
            </div>
            <div className="arrow">Read the category →</div>
          </Link>
          <Link className="value-item" href="/blog">
            <div className="num">03</div>
            <div className="title">Smart Homeownership Strategy</div>
            <div className="desc">
              From &ldquo;someday&rdquo; to &ldquo;cleared to close&rdquo; — the
              12-month preparation track for first-time buyers.
            </div>
            <div className="arrow">Read the category →</div>
          </Link>
          <Link className="value-item" href="/blog">
            <div className="num">04</div>
            <div className="title">Plain-English Mortgage Education</div>
            <div className="desc">
              No jargon, no upsell. The industry&apos;s private vocabulary,
              translated for the person actually signing.
            </div>
            <div className="arrow">Read the category →</div>
          </Link>
        </div>
      </section>

      {/* ======= PATH ======= */}
      <section className="path-section">
        <div className="section-head">
          <h2 className="h2">
            A preparation track, <em>not</em> a sales funnel.
          </h2>
          <p className="body">
            Most advisors monetize your application. I prepare you for it, then
            step aside. Three stages, priced by time and artifact — never by
            commission.
          </p>
        </div>
        <div className="path-grid">
          <div className="path-step">
            <div className="step-no">§ I — Audit</div>
            <h3>
              Read <em>your</em> file first.
            </h3>
            <p>
              A documented review of income papers, credit pulls, and whatever
              your lender is about to see. You learn what&apos;s missing before
              they point it out.
            </p>
          </div>
          <div className="path-step">
            <div className="step-no">§ II — Strategy</div>
            <h3>
              Fix what&apos;s <em>fixable</em>.
            </h3>
            <p>
              Debt-to-income repositioning, documentation hygiene, overlay
              awareness. The preparation window is usually 60–180 days; we use
              it.
            </p>
          </div>
          <div className="path-step">
            <div className="step-no">§ III — Packet</div>
            <h3>
              Walk in <em>ready.</em>
            </h3>
            <p>
              A lender-ready packet — personal mortgage or SBA business loan —
              assembled, checked, and handed to you to submit with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* ======= QUOTE BAND ======= */}
      <section className="quote-band">
        <div className="quote-inner">
          <div
            className="eyebrow"
            style={{ color: "var(--gold)", marginBottom: 24 }}
          >
            Operating principle
          </div>
          <p className="quote-mark">
            <span className="open">&ldquo;</span>I know exactly what kills
            applications — because for a decade, I was the one killing them. My
            work now is to get you past that desk before you ever sit down at
            it.
            <span style={{ color: "var(--gold)" }}>&rdquo;</span>
          </p>
          <div className="quote-attrib">
            <span>Alecia White-Smith</span>
            <span className="rule"></span>
            <span>Founder · Rich &amp; Rooted</span>
          </div>
        </div>
      </section>

      {/* ======= CLOSING ======= */}
      <section className="closing">
        <div className="eyebrow" style={{ marginBottom: 20 }}>
          § 05 — Begin
        </div>
        <h2>
          When you bring a prepared file, <em>the&nbsp;answer changes.</em>
        </h2>
        <div className="cta-row">
          <Link href="/services" className="btn">
            View Services &amp; Book <span className="arr">→</span>
          </Link>
          <Link href="/contact" className="btn btn-ghost">
            Ask a question first
          </Link>
        </div>
      </section>
    </main>
  );
}
