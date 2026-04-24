import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  /** ISO date */
  date: string;
  excerpt: string;
  category: string;
  readTime: string;
  author: string;
  /** When true, excluded from the Journal index grid but still reachable at /blog/<slug>. */
  draft: boolean;
};

export type Post = PostMeta & {
  contentHtml: string;
};

function ensureDir(): void {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }
}

/** Files in content/blog/ that are NOT markdown posts (READMEs, dotfiles, etc.) */
function isPostFile(filename: string): boolean {
  if (!filename.endsWith(".md")) return false;
  if (filename.startsWith(".")) return false;
  if (filename.toLowerCase() === "readme.md") return false;
  return true;
}

/** Every slug in content/blog/, including drafts. Used by generateStaticParams. */
export function getAllPostSlugs(): string[] {
  ensureDir();
  return fs
    .readdirSync(postsDirectory)
    .filter(isPostFile)
    .map((f) => f.replace(/\.md$/, ""));
}

function readMeta(slug: string): PostMeta {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ? String(data.date) : "",
    excerpt: data.excerpt ?? "",
    category: data.category ?? "General",
    readTime: data.readTime ?? "5 min read",
    author: data.author ?? "Alecia White-Smith",
    draft: Boolean(data.draft),
  };
}

/** All post metadata, including drafts. Newest first. */
export function getAllPostsMeta(): PostMeta[] {
  ensureDir();
  return getAllPostSlugs()
    .map(readMeta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Only published (non-draft) post metadata. Newest first. */
export function getPublishedPostsMeta(): PostMeta[] {
  return getAllPostsMeta().filter((p) => !p.draft);
}

/** Count of published posts by category. */
export function getCategoryCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const p of getPublishedPostsMeta()) {
    counts[p.category] = (counts[p.category] ?? 0) + 1;
  }
  return counts;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  ensureDir();
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processed = await remark().use(html).process(content);
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ? String(data.date) : "",
    excerpt: data.excerpt ?? "",
    category: data.category ?? "General",
    readTime: data.readTime ?? "5 min read",
    author: data.author ?? "Alecia White-Smith",
    draft: Boolean(data.draft),
    contentHtml: processed.toString(),
  };
}
