import Link from "next/link";
import type { Metadata } from "next";
import { getPublishedPostsMeta, getCategoryCounts } from "@/lib/blog";
import "./journal.css";

export const metadata: Metadata = {
  title: "The Journal",
  description:
    "Working notes from inside the underwriting room — articles on mortgage readiness, credit, SBA financing, and applicant-side strategy.",
};

const CATEGORIES = [
  "Mortgage Readiness",
  "Credit & DTI",
  "SBA Loans",
  "Homeownership",
  "Financial Foundations",
  "Faith & Finance",
];

export default function JournalPage() {
  const published = getPublishedPostsMeta();
  const counts = getCategoryCounts();
  const totalCount = published.length;

  // Reading preview features the latest published article.
  // When no articles exist yet, the section is skipped entirely.
  const previewPost = published[0] ?? null;

  return (
    <main className="container">
      {/* Masthead */}
      <section className="j-masthead">
        <div>
          <div className="section-mark">§&nbsp;04 — Periodical</div>
          <h1>
            The <em>Journal.</em>
          </h1>
        </div>
        <div className="mast-meta">
          <b>Vol. I · Issue 01</b>
          <br />
          Rich &amp; Rooted · Mount Clemens, MI
          <br />
          Published occasionally
        </div>
      </section>

      {/* Sub */}
      <section className="j-sub">
        <div className="eyebrow">On the page</div>
        <p className="lede">
          Working notes from inside the underwriting room. Articles on mortgage
          readiness, credit and DTI, SBA financing, and the financial habits
          that quietly decide whether a file gets approved. Written plainly, by
          the person who used to score them.
        </p>
      </section>

      {/* Category rail — static for now; TODO(filter): wire filtering when posts exist. */}
      <section className="cats">
        <div className="cat active">
          All categories <span className="count">{totalCount}</span>
        </div>
        {CATEGORIES.map((c) => (
          <div className="cat" key={c}>
            {c} <span className="count">{counts[c] ?? 0}</span>
          </div>
        ))}
      </section>

      {/* Empty state OR article grid */}
      {totalCount === 0 ? (
        <section className="empty">
          <div className="empty-left">
            <div className="pill">Current status · Setting the press</div>
            <h2>
              The first issue is <em>still&nbsp;being written.</em>
            </h2>
            <p>
              Articles drop as the practice grows. Each piece starts as
              something a client actually had to know — which means fewer,
              better entries rather than a content mill. Come back, or bring
              your question directly.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/contact" className="btn">
                Ask a question <span className="arr">→</span>
              </Link>
              <Link href="/services" className="btn btn-ghost">
                Book a consult
              </Link>
            </div>
          </div>
          <div className="empty-right">
            <div className="card-stack">
              <div className="ghost-card g1">
                <div className="gc-cat">Coming soon</div>
                <div className="gc-lines">
                  <div className="ln" />
                  <div className="ln" />
                  <div className="ln" />
                  <div className="ln" />
                  <div className="ln" />
                  <div className="ln" />
                </div>
                <div className="gc-foot">
                  <span>—</span>
                  <span>—</span>
                </div>
              </div>
              <div className="ghost-card g2">
                <div className="gc-cat">Coming soon</div>
                <div className="gc-lines">
                  <div className="ln" />
                  <div className="ln" />
                  <div className="ln" />
                  <div className="ln" />
                  <div className="ln" />
                  <div className="ln" />
                </div>
                <div className="gc-foot">
                  <span>—</span>
                  <span>—</span>
                </div>
              </div>
              <div className="ghost-card g3">
                <div className="gc-cat">Article · 001</div>
                <div className="gc-lines">
                  <div className="ln" />
                  <div className="ln" />
                  <div className="ln" />
                  <div className="ln" />
                  <div className="ln" />
                  <div className="ln" />
                </div>
                <div className="gc-foot">
                  <span>To Appear</span>
                  <span>— min read</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="j-articles">
          {published.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="j-article-card">
              <div className="ac-cat">{p.category}</div>
              <h3>{p.title}</h3>
              <p className="ac-excerpt">{p.excerpt}</p>
              <div className="ac-foot">
                <span>{p.author}</span>
                <span>{p.readTime}</span>
              </div>
            </Link>
          ))}
        </section>
      )}

      {/* Reading preview — always visible (links to sample when no real posts yet). */}
      {previewPost && (
        <section className="preview-post">
          <div className="section-head">
            <div>
              <div className="section-mark">§&nbsp;04.a — Reading preview</div>
              <h2 className="h2">
                What an article <em>will look like.</em>
              </h2>
            </div>
            <div className="margin-note">
              A preview of the latest article.
            </div>
          </div>

          <Link href={`/blog/${previewPost.slug}`} className="preview-article">
            <div>
              <div className="art-cat">{previewPost.category}</div>
              <h3>{previewPost.title}</h3>
              <p className="art-excerpt">{previewPost.excerpt}</p>
              <div className="meta-row">
                <span>
                  By <b>{previewPost.author}</b>
                </span>
                <span>{formatDate(previewPost.date)}</span>
                <span>{previewPost.readTime}</span>
                <span style={{ color: "var(--bronze-dim)" }}>
                  Read the article →
                </span>
              </div>
            </div>
            <div className="preview-plate">
              <div className="plate-tag">Plate 001</div>
              <div className="pull">
                &ldquo;Three ratios. One decision. Everything else is just
                paperwork.&rdquo;
              </div>
              <div className="plate-foot">Rich &amp; Rooted · Vol. I</div>
            </div>
          </Link>
        </section>
      )}

      {/* CTA */}
      <section className="j-cta">
        <div>
          <div className="eyebrow">§ 04.b — Meanwhile</div>
          <h3>
            Don&apos;t wait for an article to <em>answer your question.</em>
          </h3>
          <p>
            Book a consultation and we can work through your specific file in
            an hour.
          </p>
        </div>
        <Link href="/services" className="btn">
          View Services <span className="arr">→</span>
        </Link>
      </section>
    </main>
  );
}

function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
