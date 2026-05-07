import { ArrowUpRight } from "lucide-react";

const stories = [
  {
    year: 2025,
    title: "What Building Online Taught Me About Showing Up",
    href: "#",
  },
  {
    year: 2025,
    title: "Why I Started Combining Code and Biology",
    href: "#",
  },
  {
    year: 2024,
    title: "How I Grew an Architecture Audience Without a Plan",
    href: "#",
  },
];

export default function Stories() {
  return (
    <section id="stories" className="py-20 px-10 md:px-16">
      <h2 className="text-[13px] uppercase tracking-[0.15em] text-muted mb-10">
        Stories
      </h2>
      <div className="flex flex-col divide-y divide-rule">
        {stories.map((story, i) => (
          <a
            key={i}
            href={story.href}
            className="flex items-center gap-5 py-5 -mx-3 px-3 rounded-sm hover:bg-surface transition-colors duration-200"
          >
            <div className="w-20 h-20 bg-surface rounded-[4px] shrink-0" />
            <div>
              <p className="text-[12px] text-muted mb-1">{story.year}</p>
              <h3 className="text-[15px] font-medium text-fg inline-flex items-center gap-1.5 leading-snug">
                {story.title}
                <ArrowUpRight size={14} className="text-muted shrink-0" />
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
