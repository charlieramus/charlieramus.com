import Link from "next/link";
import type { Post } from "@/lib/posts";

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function WritingSection({ posts }: { posts: Post[] }) {
  if (posts.length === 0) return null;

  const latest = posts[0];

  return (
    <section id="writing" className="py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-xs font-medium tracking-widest uppercase text-muted">
            Writing
          </h2>
          <Link
            href="/blog"
            className="text-xs text-muted hover:text-foreground transition-colors"
          >
            All posts
          </Link>
        </div>
        <Link href={`/blog/${latest.slug}`} className="group block">
          <div className="flex items-baseline justify-between gap-4 mb-2">
            <h3 className="text-base font-medium text-foreground group-hover:text-accent transition-colors">
              {latest.title}
            </h3>
            <time
              dateTime={latest.date}
              className="text-xs text-muted shrink-0"
            >
              {formatDate(latest.date)}
            </time>
          </div>
          <p className="text-sm text-muted leading-relaxed">{latest.excerpt}</p>
        </Link>
      </div>
    </section>
  );
}
