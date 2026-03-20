"use client";

export default function DisclaimersPage() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#F5EDD8",
      fontFamily: "'DM Sans', sans-serif",
      paddingTop: 96,
      paddingBottom: 80,
    }}>
      <div style={{
        maxWidth: 800,
        margin: "0 auto",
        padding: "0 40px",
        color: "#2A3D26",
        lineHeight: 1.7,
        fontSize: 15,
      }}>
        <span style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600,
          letterSpacing: "0.3em", textTransform: "uppercase", color: "#7A9472",
        }}>
          Legal
        </span>
        <h1 style={{
          fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 48px)",
          fontWeight: 900, color: "#0E1E14", lineHeight: 1.1, marginTop: 8, marginBottom: 40,
        }}>
          Disclaimers &amp; Policies
        </h1>

        {/* General Disclaimer */}
        <Section title="General Disclaimer">
          <p>
            The information and services provided by Rich &amp; Rooted Consulting (&ldquo;the Company,&rdquo;
            &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) are for educational and consulting
            purposes only. Nothing provided by Rich &amp; Rooted Consulting should be construed as financial
            advice, legal advice, tax advice, or accounting advice.
          </p>
          <p>
            The owner and staff of Rich &amp; Rooted Consulting are not licensed financial advisors, attorneys,
            certified public accountants (CPAs), or licensed mortgage lenders. Our consulting services are based
            on professional experience in mortgage underwriting, SBA loan processing, tax preparation, and
            business administration.
          </p>
          <p>
            We strongly recommend that you consult with a licensed financial advisor, attorney, or CPA before
            making any financial decisions. Any actions you take based on information or guidance provided by
            Rich &amp; Rooted Consulting are taken at your own risk.
          </p>
        </Section>

        {/* Loan Disclaimer */}
        <Section title="Loan &amp; Financing Disclaimer">
          <p>
            Rich &amp; Rooted Consulting assists clients with loan application preparation, document
            organization, and financial readiness. We do not lend money, approve loans, or make lending
            decisions of any kind.
          </p>
          <p>We make no guarantees, representations, or warranties — express or implied — regarding:</p>
          <ul style={{ paddingLeft: 24, margin: "12px 0" }}>
            <li>Approval of any loan, mortgage, or financing application</li>
            <li>Specific interest rates, loan terms, or funding amounts</li>
            <li>The decision of any lender, financial institution, or government agency</li>
            <li>Any particular financial outcome resulting from our services</li>
          </ul>
          <p>
            Loan approval decisions are made solely by the applicable lender or financial institution based
            on their own underwriting criteria. While our services are designed to help you present the
            strongest possible application, no level of preparation can guarantee approval.
          </p>
        </Section>

        {/* Privacy Policy */}
        <Section title="Privacy Policy">
          <p style={{ fontSize: 13, color: "#7A9472", marginBottom: 12 }}>Last updated: March 2026</p>
          <p>
            Rich &amp; Rooted Consulting respects your privacy and is committed to protecting the personal
            information you share with us.
          </p>
          <p>
            <strong>Information We Collect.</strong> We may collect personal information including your name,
            email address, phone number, mailing address, and financial documents you voluntarily provide in
            connection with our consulting services.
          </p>
          <p>
            <strong>How We Use Your Information.</strong> We use the information you provide solely to deliver
            the consulting services you have requested. We do not sell, rent, or trade your personal information
            to third parties.
          </p>
          <p>
            <strong>Document Handling.</strong> Financial documents and sensitive personal information provided
            during the course of our consulting services are used exclusively for the purpose of assisting you
            with your stated consulting objectives. We recommend that you do not send sensitive information
            (such as Social Security numbers or bank account details) via unsecured email.
          </p>
          <p>
            <strong>Third-Party Services.</strong> Our website may use third-party services for scheduling,
            payment processing, and analytics. These third-party providers have their own privacy policies
            governing how they handle your information.
          </p>
          <p>
            <strong>Data Retention.</strong> We retain client files and records for a reasonable period
            following the completion of services. You may request deletion of your personal information by
            contacting us directly.
          </p>
          <p>
            <strong>Contact.</strong> If you have questions about this privacy policy, please contact us
            at rootedrichly@gmail.com.
          </p>
        </Section>

        {/* Terms of Service */}
        <Section title="Terms of Service">
          <p style={{ fontSize: 13, color: "#7A9472", marginBottom: 12 }}>Last updated: March 2026</p>
          <p>
            By using the Rich &amp; Rooted Consulting website and engaging our services, you agree to the
            following terms.
          </p>
          <p>
            <strong>Nature of Services.</strong> Rich &amp; Rooted Consulting provides consulting, document
            preparation assistance, and educational guidance related to loan applications, small business
            financing, mortgage readiness, and general financial topics. We are not a lender, broker, financial
            advisor, attorney, or CPA.
          </p>
          <p>
            <strong>Client Responsibilities.</strong> You are responsible for providing accurate and complete
            information. The quality and effectiveness of our services depend on the accuracy of the information
            you provide. You are solely responsible for all decisions made regarding your finances, loan
            applications, and business operations.
          </p>
          <p>
            <strong>No Professional Relationship.</strong> Use of this website or engagement of our consulting
            services does not create an attorney-client, fiduciary, or licensed advisor-client relationship.
          </p>
          <p>
            <strong>Payment &amp; Refunds.</strong> Fees for services are outlined at the time of booking.
            Payment is expected as agreed upon at the time of service engagement. Refund policies, if any,
            will be communicated at the time of purchase.
          </p>
          <p>
            <strong>Limitation of Liability.</strong> To the fullest extent permitted by law, Rich &amp; Rooted
            Consulting shall not be liable for any indirect, incidental, special, consequential, or punitive
            damages, or any loss of profits or revenues, arising out of or related to your use of our services.
          </p>
          <p>
            <strong>Indemnification.</strong> You agree to indemnify and hold harmless Rich &amp; Rooted
            Consulting, its owner, employees, and agents from any claims, damages, or expenses arising from
            your use of our services or your violation of these terms.
          </p>
          <p>
            <strong>Governing Law.</strong> These terms shall be governed by the laws of the State of Michigan.
          </p>
          <p>
            <strong>Contact.</strong> For questions about these terms, please contact us at rootedrichly@gmail.com.
          </p>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 48 }}>
      <h2 style={{
        fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700,
        color: "#0E1E14", marginBottom: 16, paddingBottom: 8,
        borderBottom: "2px solid #C9A84C",
      }}>
        {title}
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {children}
      </div>
    </section>
  );
}
