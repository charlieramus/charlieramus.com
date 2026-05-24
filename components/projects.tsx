import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    // CUSTOMIZE: add a screenshot of the site to public/images/projects/this-site.webp
    thumbnail: "/images/For Projects Placeholder Cards/Frame 2mp4.webp",
    title: "This Site",
    // CUSTOMIZE: replace with actual GitHub repo URL
    href: "https://github.com/charlieramus/charlieramus.com",
    external: true,
    // CUSTOMIZE: 1-2 sentence description of building this portfolio
    description: "Personal portfolio designed and built from scratch featuring photography, writing, and graphic design.",
    // CUSTOMIZE: update tags to match your actual stack
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    // CUSTOMIZE: add a cover image to public/images/projects/design.webp
    thumbnail: "/images/For Projects Placeholder Cards/Frame 1mp4.webp",
    title: "Graphic Design Portfolio",
    href: "/design",
    external: false,
    // CUSTOMIZE: 1-2 sentence description of your design work
    description: "A collection of brand, print, and visual design projects.",
    // CUSTOMIZE: update tags to reflect your actual tools
    tags: ["Figma", "Brand", "Visual Design"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-10 md:px-16">
      <div className="flex flex-col gap-10 max-w-165">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex items-start gap-5 -mx-3 px-3 py-3 rounded-lg hover:bg-[rgba(0,0,0,0.06)] dark:hover:bg-[rgba(255,255,255,0.04)] transition-colors duration-200"
          >
            {/* Thumbnail */}
            <div className="w-22 h-22 shrink-0 rounded-sm overflow-hidden">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              {project.external ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[15px] font-medium text-fg hover:text-accent transition-colors duration-200 mb-1"
                >
                  {project.title}
                  <ArrowUpRight size={14} className="shrink-0" />
                </a>
              ) : (
                <Link
                  href={project.href}
                  className="inline-flex items-center gap-1 text-[15px] font-medium text-fg hover:text-accent transition-colors duration-200 mb-1"
                >
                  {project.title}
                  <ArrowUpRight size={14} className="shrink-0" />
                </Link>
              )}
              <p className="text-[13px] text-muted leading-[1.7] mb-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-2.5 py-1 bg-rule text-accent rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* CUSTOMIZE: link to /projects archive page or GitHub profile */}
      <div className="mt-10">
        <a
          href="https://github.com/charlieramus"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] text-fg hover:text-accent transition-colors duration-200"
        >
          View Full Project Archive →
        </a>
      </div>
    </section>
  );
}
