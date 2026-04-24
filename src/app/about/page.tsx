import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import "./about.css";

// README default: about photo = portrait (hard-coded per handoff)
const ABOUT_SHOT = "/headshot-portrait.jpeg";

export const metadata: Metadata = {
  title: "About Alecia White-Smith",
  description:
    "A decade in the underwriting room, now on your side of the desk. Alecia White-Smith, MBA — Founder of Rich & Rooted Consulting.",
};

export default function AboutPage() {
  return (
    <main className="container">
      <section className="about-hero">
        <div>
          <div className="section-mark">§&nbsp;02 — About the Founder</div>
          <h1>
            A decade in the <em>underwriting&nbsp;room,</em> now on your side of
            the desk.
          </h1>
        </div>
        <div className="meta">
          <b>Alecia White-Smith</b>
          <br />
          Founder, Rich &amp; Rooted Consulting
          <br />
          MBA · 10+ yrs Underwriting
          <br />
          Mount Clemens, MI
        </div>
      </section>

      <section className="about-main">
        <aside className="about-photo">
          <div className="frame">
            <Image
              src={ABOUT_SHOT}
              alt="Alecia White-Smith"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="cap">
            <span>Plate 02</span>
            <span>A. White-Smith</span>
          </div>
        </aside>

        <div className="about-bio">
          <p>
            For more than a decade, Alecia sat on the other side of the desk.
            As a mortgage underwriter, she reviewed thousands of files and made
            the quiet decisions that shape a family&apos;s life — who gets the
            keys, whose dream gets deferred, and why. She processed SBA loans
            for small business owners, prepared taxes, and handled insurance
            claims — every angle of the same question:{" "}
            <em>does this file tell a lender what it needs to hear?</em>
          </p>
          <p>
            Most applicants never learn the answer. They submit, they wait, and
            a stranger with a spreadsheet decides in fifteen minutes. Alecia
            built Rich &amp; Rooted to close that gap — to bring what she knows
            out of the back office and into the hands of the people actually
            trying to buy homes, grow businesses, and build something that
            lasts.
          </p>

          <div className="sectionlabel">Approach</div>
          <p>
            The philosophy is simple: prepare the file, then present it. No
            commissions on loans she didn&apos;t write, no referral chains, no
            upsells. You pay for her time and her eye. What you leave with is a
            packet a lender can&apos;t easily say no to — and the understanding
            to defend every line in it.
          </p>

          <div className="sectionlabel">MBA &amp; Beyond</div>
          <p>
            Alecia holds an MBA in Business Administration. The consulting
            practice extends naturally into small-business financing — SBA loan
            packages, revenue projections, and the documentation framework most
            first-time founders don&apos;t realize the bank is quietly grading
            them on.
          </p>
        </div>
      </section>

      <section className="pullquote">
        <p>
          &ldquo;The file is <span className="accent">decided</span> before the
          decision. My job is to make sure yours arrives already telling the{" "}
          <span className="accent">right story.</span>&rdquo;
        </p>
        <div className="attrib">— A.W.S. · Founder&apos;s Note</div>
      </section>

      <section className="creds">
        <div className="section-head">
          <div>
            <div className="section-mark">§&nbsp;Credentials on file</div>
            <h2 className="h2">
              Five files she brings to <em>yours.</em>
            </h2>
          </div>
          <div className="margin-note">
            Verified documentation available upon request.
          </div>
        </div>

        <div className="cred-grid">
          <div className="cred">
            <div className="num">i.</div>
            <div className="badge">Academic</div>
            <h3>MBA — Business Administration</h3>
            <p>
              Graduate study in strategy, finance, and operations. The
              foundation for business-loan packaging and founder-focused
              engagements.
            </p>
          </div>
          <div className="cred">
            <div className="num">ii.</div>
            <div className="badge">Professional</div>
            <h3>10+ Years Mortgage Underwriting</h3>
            <p>
              Direct review of thousands of residential files — conventional,
              FHA, VA — across market cycles and lender overlays.
            </p>
          </div>
          <div className="cred">
            <div className="num">iii.</div>
            <div className="badge">Professional</div>
            <h3>SBA Loan Processing</h3>
            <p>
              Hands-on preparation of Small Business Administration loan
              packages — 7(a), 504, and the artifacts examiners look for.
            </p>
          </div>
          <div className="cred">
            <div className="num">iv.</div>
            <div className="badge">Professional</div>
            <h3>Tax Preparation &amp; Documentation</h3>
            <p>
              Income documentation, returns, schedules — the paperwork that
              lenders actually rely on to size and qualify a borrower.
            </p>
          </div>
          <div className="cred">
            <div className="num">v.</div>
            <div className="badge">Professional</div>
            <h3>Insurance Claims Experience</h3>
            <p>
              Complex claim review and documentation — a parallel discipline in
              reading evidence, building narratives, and defending files.
            </p>
          </div>
          <div className="cred mission">
            <div className="num">vi.</div>
            <div className="badge">The Mission</div>
            <h3>Applicant-Side Advocacy</h3>
            <p>
              Everything above pointed one direction. Rich &amp; Rooted is what
              happens when the gatekeeper chooses sides.
            </p>
          </div>
        </div>
      </section>

      <section className="timeline">
        <div className="section-mark">§&nbsp;Career ledger</div>
        <h2 className="h2">
          The path, <em>abbreviated.</em>
        </h2>
        <div>
          <div className="tl-row">
            <div className="tl-year">2014 — 2024</div>
            <div className="tl-role">Mortgage Underwriter</div>
            <div className="tl-desc">
              Residential loan file review across conventional, FHA, and VA
              programs. Responsible for approval authority on thousands of
              applications and the overlay judgments that decide edge cases.
            </div>
          </div>
          <div className="tl-row">
            <div className="tl-year">Concurrent</div>
            <div className="tl-role">SBA Loan Processor</div>
            <div className="tl-desc">
              Packaging and processing of Small Business Administration loans —
              7(a) and 504 programs — with direct exposure to what examiners
              prioritize.
            </div>
          </div>
          <div className="tl-row">
            <div className="tl-year">Concurrent</div>
            <div className="tl-role">Tax Preparer · Insurance Claims</div>
            <div className="tl-desc">
              Parallel disciplines in documentation and evidence — skills that
              translate directly into loan-file preparation.
            </div>
          </div>
          <div className="tl-row">
            <div className="tl-year">MBA conferred</div>
            <div className="tl-role">
              Graduate Study · Business Administration
            </div>
            <div className="tl-desc">
              Strategy, corporate finance, and operations. Anchors the
              practice&apos;s small-business and SBA engagements.
            </div>
          </div>
          <div className="tl-row">
            <div className="tl-year">2025 —</div>
            <div className="tl-role">Founder · Rich &amp; Rooted Consulting</div>
            <div className="tl-desc">
              Independent consulting practice. Applicant-side preparation for
              mortgage, SBA, and small-business financing. By appointment.
            </div>
          </div>
        </div>
      </section>

      <section className="about-closing">
        <div className="eyebrow" style={{ marginBottom: 20 }}>
          Begin a file
        </div>
        <h2>
          Bring the file. <em>I&apos;ll read it first.</em>
        </h2>
        <div className="cta-row">
          <Link href="/services" className="btn">
            View Services &amp; Booking <span className="arr">→</span>
          </Link>
          <Link href="/contact" className="btn btn-ghost">
            Ask a question
          </Link>
        </div>
      </section>
    </main>
  );
}
