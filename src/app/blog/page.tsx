import { getAllPostsMeta } from "@/lib/blog";
import BlogFace from "@/components/BlogFace";

export const metadata = {
  title: "Journal — Rich & Rooted Consulting",
  description: "Articles on mortgage readiness, credit strategy, SBA loans, and homeownership from a former mortgage underwriter.",
};

export default function BlogPage() {
  const posts = getAllPostsMeta();
  return <BlogFace posts={posts} />;
}
