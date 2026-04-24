import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import "../journal.css";

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="container">
      <article>
        <div className="post-head">
          <Link href="/blog" className="back-link">
            ← Back to the Journal
          </Link>
          <div className="post-cat">{post.category}</div>
          <h1 className="post-title">{post.title}</h1>
          <p className="post-excerpt">{post.excerpt}</p>
          <div className="post-meta">
            <span>
              By <b>{post.author}</b>
            </span>
            <span>{formatDate(post.date)}</span>
            <span>{post.readTime}</span>
            {post.draft && <span className="draft">Sample article</span>}
          </div>
        </div>

        <div className="post-body">
          {/* TODO(toc): auto-generate table of contents from h2 headings at build time. */}
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          <aside className="post-side">
            <div className="label">On file</div>
            <ul>
              <li className="head">Contents</li>
              <li>
                <a href="#">Scroll to explore</a>
              </li>
            </ul>
            <div className="label" style={{ marginTop: 40 }}>
              Related
            </div>
            <ul>
              <li>
                <Link href="/blog">← The Journal index</Link>
              </li>
              <li>
                <Link href="/services">→ Book a consult</Link>
              </li>
            </ul>
          </aside>
        </div>

        <div className="post-cta">
          <div>
            <div className="eyebrow">§ Ready to work on your own file?</div>
            <h3>
              Don&apos;t submit <em>unprepared.</em>
            </h3>
            <p>
              Bring me your paperwork. I&apos;ll tell you what the underwriter
              is going to see — before they see it.
            </p>
          </div>
          <Link href="/services" className="btn">
            View Services <span className="arr">→</span>
          </Link>
        </div>
      </article>
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
