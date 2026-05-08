import { ArrowUpRight } from "lucide-react";

const stories = [
  {
    // CUSTOMIZE: thumbnail image path
    image: "/images/story1.jpg",
    // CUSTOMIZE: publication year
    year: "2025",
    // CUSTOMIZE: article/post title
    title: "What Building Online Taught Me About Showing Up",
    // CUSTOMIZE: link to article
    href: "#",
  },
  // --- STORY 2 ---
  {
    // CUSTOMIZE: thumbnail image path
    image: "/images/story2.jpg",
    // CUSTOMIZE: publication year
    year: "2025",
    // CUSTOMIZE: article/post title
    title: "Why I Started Combining Code and Biology",
    // CUSTOMIZE: link to article
    href: "#",
  },
  // --- STORY 3 ---
  {
    // CUSTOMIZE: thumbnail image path
    image: "/images/story3.jpg",
    // CUSTOMIZE: publication year
    year: "2024",
    // CUSTOMIZE: article/post title
    title: "How I Grew an Architecture Audience Without a Plan",
    // CUSTOMIZE: link to article
    href: "#",
  },
];

export default function Stories() {
  return (
    <section id="stories" className="py-20 px-10 md:px-16">
      <div className="flex flex-col divide-y divide-rule max-w-165">
        {stories.map((story, i) => (
          <a
            key={i}
            href={story.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 py-5 -mx-3 px-3 rounded-lg hover:bg-[rgba(0,0,0,0.06)] dark:hover:bg-[rgba(255,255,255,0.04)] transition-colors duration-200"
          >
            <div className="w-20 h-20 shrink-0 rounded-sm bg-surface" />
            <div className="min-w-0">
              <p className="text-[12px] text-muted mb-1">{story.year}</p>
              <h3 className="text-[15px] font-medium text-fg inline-flex items-center gap-1.5 leading-snug">
                {story.title}
                <ArrowUpRight size={14} className="text-muted shrink-0" />
              </h3>
            </div>
          </a>
        ))}
      </div>
      <div className="mt-10">
        {/* CUSTOMIZE: replace href with your writing platform URL or /writing route */}
        <a
          href="https://"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] text-fg hover:text-accent transition-colors duration-200"
        >
          View All Writing →
        </a>
      </div>
    </section>
  );
}
