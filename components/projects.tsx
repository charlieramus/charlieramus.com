import { ArrowUpRight } from "lucide-react";

const ACCENTS = [
  { bg: "rgba(196, 97, 58, 0.15)", text: "#c4613a" },
  { bg: "rgba(122, 140, 78, 0.15)", text: "#7a8c4e" },
  { bg: "rgba(201, 168, 76, 0.15)", text: "#c9a84c" },
  { bg: "rgba(72, 3, 3, 0.15)", text: "#480303" },
];

const rawProjects = [
  {
    title: "Bioinfo CLI",
    description: "Command line tool for parsing and visualizing genomic sequence data.",
    tags: ["Python", "Biopython", "Click"],
    href: "https://github.com/Wazoooman",
  },
  {
    title: "Storefront",
    description: "Lightweight e-commerce template built for fast deployment.",
    tags: ["Next.js", "Stripe", "Tailwind"],
    href: "https://github.com/Wazoooman",
  },
  {
    title: "This Site",
    description: "Personal portfolio, designed and built from scratch.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    href: "https://github.com/Wazoooman",
  },
];

let globalTagIndex = 0;
const projects = rawProjects.map((p) => ({
  ...p,
  tags: p.tags.map((tag) => {
    const accent = ACCENTS[globalTagIndex % ACCENTS.length];
    globalTagIndex++;
    return { label: tag, accent };
  }),
}));

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-10 md:px-16">
      <h2 className="text-[13px] uppercase tracking-[0.15em] text-muted mb-10">
        Projects
      </h2>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="relative p-6 bg-surface transition-shadow duration-200 hover:shadow-md"
          >
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="absolute top-6 right-6 text-muted hover:text-a1 transition-colors duration-200"
            >
              <ArrowUpRight size={16} />
            </a>
            <h3 className="text-[18px] font-medium text-fg mb-2 pr-8">
              {project.title}
            </h3>
            <p className="text-[15px] text-muted leading-[1.7] mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(({ label, accent }) => (
                <span
                  key={label}
                  className="text-[12px] font-medium px-2.5 py-1"
                  style={{ backgroundColor: accent.bg, color: accent.text }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
