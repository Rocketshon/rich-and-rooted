import Link from "next/link";
import type { Metadata } from "next";
import "./disclaimers.css";

export const metadata: Metadata = {
  title: "Disclaimers, Privacy, & Terms",
  description:
    "Disclaimers, privacy policy, and terms of service for Rich & Rooted Consulting. Effective April 2026. Governing law: State of Michigan.",
};

export default function DisclaimersPage() {
  return (
    <main className="container">
      <section className="d-hero">
        <div>
          <div className="section-mark">§&nbsp;06 — Fine print</div>
          <h1>
            Disclaimers, privacy, <em>&amp;&nbsp;terms.</em>
          </h1>
        </div>
        <div className="meta">
          Effective April 2026
          <br />
          Rich &amp; Rooted Consulting
        </div>
      </section>

      <section className="d-body">
        <aside className="d-toc">
          <div className="label">Contents</div>
          <a href="#general">§ 01 General</a>
          <a href="#loan">§ 02 Loan &amp; Financing</a>
          <a href="#privacy">§ 03 Privacy Policy</a>
          <a href="#terms">§ 04 Terms of Service</a>
        </aside>

        <div>
          <div className="effective">
            <span>Document: RR-DISC-2026-04</span>
            <span>Version 1.0 · Effective April 2026</span>
          </div>

          <section className="d-section" id="general">
            <div className="num">§ 01 — General Disclaimer</div>
            <h2>Educational &amp; consulting services only.</h2>
            <p>
              Rich &amp; Rooted Consulting (&ldquo;the Practice&rdquo;)
              provides educational content and consulting services related to
              loan applications, mortgage readiness, small business financing,
              and personal financial preparation. Alecia White-Smith is not a
              licensed financial advisor, attorney, certified public
              accountant, or registered investment adviser, and the Practice
              does not represent itself as any of the foregoing.
            </p>
            <p>
              Information and consulting services provided are for{" "}
              <strong>educational and informational purposes only</strong> and
              should not be construed as legal, tax, accounting, investment, or
              licensed financial advice. Clients are encouraged to consult with
              appropriately licensed professionals (attorneys, CPAs, licensed
              financial advisors) for matters falling within those regulated
              disciplines.
            </p>
            <p>
              Any application of the information or strategies discussed during
              consultations is at the client&apos;s sole discretion and risk.
              The Practice disclaims any responsibility for outcomes resulting
              from such application.
            </p>
            <div className="rule" />
          </section>

          <section className="d-section" id="loan">
            <div className="num">§ 02 — Loan &amp; Financing Disclaimer</div>
            <h2>No guarantee of approval. No lending.</h2>
            <p>
              Rich &amp; Rooted Consulting{" "}
              <strong>
                does not originate, underwrite, broker, fund, or issue loans of
                any kind
              </strong>
              . We are not a lender, a mortgage broker, a correspondent lender,
              or an SBA-authorized lender. All loan decisions are made by
              third-party lenders at their sole discretion, and those decisions
              depend on many factors outside the Practice&apos;s control.
            </p>
            <p>
              Engagement with the Practice — including document audits,
              consultations, readiness assessments, and loan-package
              preparation — is <strong>preparation-focused</strong> and offers{" "}
              <strong>no guarantee of loan approval</strong>, of any specific
              interest rate or terms, or of any specific outcome with any
              lender.
            </p>
            <p>
              References to mortgage underwriting standards, SBA processes, or
              lender practices reflect Alecia White-Smith&apos;s prior
              professional experience and general industry knowledge. Lender
              overlays, programs, and underwriting guidelines change frequently
              and vary by institution.
            </p>
            <div className="rule" />
          </section>

          <section className="d-section" id="privacy">
            <div className="num">§ 03 — Privacy Policy</div>
            <h2>What we collect, and what we do with it.</h2>
            <p>
              <strong>Information collected.</strong> We collect only the
              information you provide voluntarily — through the contact form,
              consultation intake, or the course of engagement — along with
              standard technical data (IP, browser, page analytics) collected
              by our hosting and analytics providers.
            </p>
            <p>
              <strong>Financial documents.</strong> Client-provided financial
              documents (tax returns, pay stubs, bank statements, credit
              reports, business records) are stored encrypted, accessed only by
              the Practice, and retained only as long as needed to complete the
              engagement plus any reasonable follow-up window. Clients may
              request deletion at any time.
            </p>
            <p>
              <strong>Sharing.</strong> We do not sell, rent, or trade personal
              information. We do not share client documents with lenders,
              third-party providers, or referral partners except at the
              client&apos;s explicit written direction.
            </p>
            <p>
              <strong>Communications.</strong> By submitting the contact form
              or engaging services, you consent to receive emails directly
              related to your inquiry or engagement. We do not operate a
              marketing list.
            </p>
            <p>
              <strong>Your rights.</strong> You may request access to,
              correction of, or deletion of personal information held by the
              Practice by emailing{" "}
              <a href="mailto:rootedrichly@gmail.com">rootedrichly@gmail.com</a>
              .
            </p>
            <div className="rule" />
          </section>

          <section className="d-section" id="terms">
            <div className="num">§ 04 — Terms of Service</div>
            <h2>The rules of the engagement.</h2>
            <p>
              <strong>Scope.</strong> Services are described on the{" "}
              <Link href="/services">Services &amp; Booking</Link> page and in
              the intake documents provided at engagement. Work outside that
              scope requires a separate agreement.
            </p>
            <p>
              <strong>Payment.</strong> Time-based consultations are paid in
              advance through Stripe. Fixed-scope services may require a
              deposit at engagement and balance on delivery. All prices are
              stated in U.S. dollars.
            </p>
            <p>
              <strong>Rescheduling &amp; refunds.</strong> Sessions may be
              rescheduled up to 24 hours in advance at no charge. Refunds for
              completed sessions are not offered. Refunds for unused portions
              of fixed-scope engagements are considered on a case-by-case
              basis.
            </p>
            <p>
              <strong>Intellectual property.</strong> Materials, templates,
              frameworks, and written deliverables produced by the Practice
              remain the intellectual property of Rich &amp; Rooted Consulting
              and are licensed to the client for their personal or internal
              business use only.
            </p>
            <p>
              <strong>Limitation of liability.</strong> The Practice&apos;s
              total liability for any claim arising out of services shall not
              exceed the fees actually paid by the client for the specific
              engagement giving rise to the claim.
            </p>
            <p>
              <strong>Governing law.</strong> These terms are governed by the
              laws of the State of Michigan, without regard to conflict-of-laws
              principles.
            </p>
            <div className="rule" />
          </section>

          <p className="d-footnote">
            Questions about any of the above? Email{" "}
            <a href="mailto:rootedrichly@gmail.com">rootedrichly@gmail.com</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
