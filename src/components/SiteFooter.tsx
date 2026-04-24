import Link from "next/link";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="inner">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              Rich &amp; Rooted
              <span className="tag">
                Faith · Financial Wisdom · Business Growth
              </span>
            </div>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li>
                <a href="mailto:rootedrichly@gmail.com">rootedrichly@gmail.com</a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/alecia-white-smith-ma-69927b27/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn →
                </a>
              </li>
              <li>
                <Link href="/contact">General Inquiries</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>The Practice</h5>
            <ul>
              <li><Link href="/about">About Alecia</Link></li>
              <li><Link href="/services">Services &amp; Booking</Link></li>
              <li><Link href="/blog">The Journal</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Fine Print</h5>
            <ul>
              <li><Link href="/disclaimers">Disclaimers</Link></li>
              <li><Link href="/disclaimers#privacy">Privacy</Link></li>
              <li><Link href="/disclaimers#terms">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-rule" />
        <p className="footer-disclaimer">
          Rich &amp; Rooted Consulting provides educational and consulting services only.
          Alecia White-Smith is not a licensed financial advisor, attorney, or CPA, and
          does not lend money or guarantee loan approval. Read the full{" "}
          <Link href="/disclaimers">Disclaimers &amp; Privacy Policy</Link>.
        </p>
        <div className="footer-legal">
          <span>© {year} Rich &amp; Rooted Consulting</span>
          <span>Rooted in Wisdom · Built on Trust</span>
        </div>
      </div>
    </footer>
  );
}
