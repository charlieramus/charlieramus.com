import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import WritingArticleList from "@/components/writing-article-list";

export const metadata: Metadata = {
  title: "Writing",
  description: "Articles and essays by Charlie Ramus.",
};

export default function WritingPage() {
  const articles = getAllArticles();

  return (
    <main className="max-w-[680px] mx-auto px-6 pt-14 pb-24">
      <div className="mb-10">
        <Link
          href="/"
          className="text-sm text-muted hover:text-fg transition-colors"
        >
          ← Home
        </Link>
      </div>
      <h1 className="text-2xl font-bold text-fg mb-12">Writing</h1>
      <WritingArticleList articles={articles} />
    </main>
  );
}
