import { ArrowUpRight, Link2 } from "lucide-react";

const entries = [
  {
    // CUSTOMIZE: date range string
    dates: "2024 — Present",
    // CUSTOMIZE: position name
    title: "Role Title",
    // CUSTOMIZE: company or org name
    org: "Organization",
    // CUSTOMIZE: org link URL, set "" to hide arrow icon
    href: "https://",
    // CUSTOMIZE: reference links, or set to []
    links: [{ label: "Link Label", href: "https://" }],
    // CUSTOMIZE: 2-4 sentence description of what you did and learned
    description: "What you did.",
    // CUSTOMIZE: skill tag strings
    tags: ["Skill"],
  },
  // --- ENTRY 2: copy structure above ---
  {
    // CUSTOMIZE: date range string
    dates: "2024 — Present",
    // CUSTOMIZE: position name
    title: "Role Title",
    // CUSTOMIZE: company or org name
    org: "Organization",
    // CUSTOMIZE: org link URL, set "" to hide arrow icon
    href: "",
    // CUSTOMIZE: reference links, or set to []
    links: [],
    // CUSTOMIZE: 2-4 sentence description of what you did and learned
    description: "What you did.",
    // CUSTOMIZE: skill tag strings
    tags: ["Skill"],
  },
  // --- ENTRY 3: copy structure above ---
  {
    // CUSTOMIZE: date range string
    dates: "2024 — Present",
    // CUSTOMIZE: position name
    title: "Role Title",
    // CUSTOMIZE: company or org name
    org: "Organization",
    // CUSTOMIZE: org link URL, set "" to hide arrow icon
    href: "",
    // CUSTOMIZE: reference links, or set to []
    links: [],
    // CUSTOMIZE: 2-4 sentence description of what you did and learned
    description: "What you did.",
    // CUSTOMIZE: skill tag strings
    tags: ["Skill"],
  },
  // --- ENTRY 4: copy structure above ---
  {
    // CUSTOMIZE: date range string
    dates: "2024 — Present",
    // CUSTOMIZE: position name
    title: "Role Title",
    // CUSTOMIZE: company or org name
    org: "Organization",
    // CUSTOMIZE: org link URL, set "" to hide arrow icon
    href: "",
    // CUSTOMIZE: reference links, or set to []
    links: [],
    // CUSTOMIZE: 2-4 sentence description of what you did and learned
    description: "What you did.",
    // CUSTOMIZE: skill tag strings
    tags: ["Skill"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-10 md:px-16">
      <div className="flex flex-col gap-12 max-w-[660px]">
        {entries.map((entry, i) => (
          <div key={i} className="flex gap-6 md:gap-8">
            <div className="w-28 shrink-0 pt-0.5">
              <span className="text-[12px] text-muted leading-tight">{entry.dates}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-1.5 mb-1">
                <span className="text-[15px] font-medium text-fg">{entry.title}</span>
                {entry.href ? (
                  <a
                    href={entry.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-0.5 text-orange hover:opacity-80 transition-opacity duration-200"
                  >
                    <span className="text-[15px]">{entry.org}</span>
                    <ArrowUpRight size={14} />
                  </a>
                ) : (
                  <span className="text-[15px] text-orange">{entry.org}</span>
                )}
              </div>
              {entry.links.length > 0 && (
                <div className="flex flex-wrap gap-3 mb-2">
                  {entry.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[12px] text-muted hover:text-fg transition-colors duration-200"
                    >
                      <Link2 size={11} />
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
              <p className="text-[14px] text-muted leading-[1.7] mb-3">
                {entry.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-2.5 py-1 bg-rule text-orange rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10">
        {/* CUSTOMIZE: replace href with actual résumé PDF link */}
        <a
          href="https://"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] text-fg hover:text-orange transition-colors duration-200"
        >
          View Full Résumé →
        </a>
      </div>
    </section>
  );
}
