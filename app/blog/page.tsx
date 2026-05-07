import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description: "Thoughts on software, biology, building things, and whatever else is worth writing about.",
};

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="max-w-2xl mx-auto px-6 pt-32 pb-24">
      <div className="mb-12">
        <Link
          href="/"
          className="text-xs text-muted hover:text-foreground transition-colors"
        >
          ← Home
        </Link>
      </div>
      <h1 className="text-2xl font-semibold tracking-tight text-foreground mb-12">
        Writing
      </h1>
      <ul className="divide-y divide-border">
        {posts.map((post) => (
          <li key={post.slug} className="py-8 first:pt-0 last:pb-0">
            <Link href={`/blog/${post.slug}`} className="group block">
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <h2 className="text-base font-medium text-foreground group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <time
                  dateTime={post.date}
                  className="text-xs text-muted shrink-0"
                >
                  {formatDate(post.date)}
                </time>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                {post.excerpt}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
