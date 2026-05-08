import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    // CUSTOMIZE: project screenshot path
    image: "/images/project1.png",
    // CUSTOMIZE: project title
    title: "Bioinfo CLI",
    // CUSTOMIZE: project URL
    href: "https://github.com/Wazoooman",
    // CUSTOMIZE: 1-3 sentence description
    description:
      "Command line tool for parsing and visualizing genomic sequence data.",
    // CUSTOMIZE: stat string like "★ 713" or "" to hide
    stat: "",
    // CUSTOMIZE: skill tag strings
    tags: ["Python", "Biopython", "Click"],
  },
  // --- PROJECT 2: copy structure above ---
  {
    // CUSTOMIZE: project screenshot path
    image: "/images/project2.png",
    // CUSTOMIZE: project title
    title: "Storefront",
    // CUSTOMIZE: project URL
    href: "https://github.com/Wazoooman",
    // CUSTOMIZE: 1-3 sentence description
    description: "Lightweight e-commerce template built for fast deployment.",
    // CUSTOMIZE: stat string like "★ 713" or "" to hide
    stat: "",
    // CUSTOMIZE: skill tag strings
    tags: ["Next.js", "Stripe", "Tailwind"],
  },
  // --- PROJECT 3: copy structure above ---
  {
    // CUSTOMIZE: project screenshot path
    image: "/images/project3.png",
    // CUSTOMIZE: project title
    title: "This Site",
    // CUSTOMIZE: project URL
    href: "https://github.com/Wazoooman",
    // CUSTOMIZE: 1-3 sentence description
    description: "Personal portfolio, designed and built from scratch.",
    // CUSTOMIZE: stat string like "★ 713" or "" to hide
    stat: "",
    // CUSTOMIZE: skill tag strings
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-10 md:px-16">
      <div className="flex flex-col gap-10 max-w-165">
        {projects.map((project) => (
          <div key={project.title} className="flex gap-5 -mx-3 px-3 py-3 rounded-lg hover:bg-[rgba(0,0,0,0.06)] dark:hover:bg-[rgba(255,255,255,0.04)] transition-colors duration-200">
            {/* Thumbnail */}
            <div className="w-22 h-16.5 shrink-0 rounded-sm overflow-hidden bg-surface" />

            {/* Content */}
            <div className="flex-1 min-w-0">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[15px] font-medium text-fg hover:text-accent transition-colors duration-200 mb-1"
              >
                {project.title}
                <ArrowUpRight size={14} className="shrink-0" />
              </a>
              <p className="text-[13px] text-muted leading-[1.7] mb-2">
                {project.description}
              </p>
              {project.stat && (
                <p className="text-[12px] text-muted mb-2">{project.stat}</p>
              )}
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
          href="https://github.com/Wazoooman"
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
