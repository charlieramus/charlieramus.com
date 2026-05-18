// components/DesignProjects.tsx
const projects = [
  {
    title: "Project Name", // CUSTOMIZE: design project title
    date: "2025",          // CUSTOMIZE: date or date range
    description: "",       // CUSTOMIZE: 2-4 sentences describing the project, what it was for, what you made
    images: [              // CUSTOMIZE: add webp paths, e.g. "/images/design/proj1-1.webp"
      "/images/design/placeholder-1.webp",
    ],
  },
  // --- PROJECT 2: copy structure above ---
  {
    title: "Project Name", // CUSTOMIZE: design project title
    date: "2025",          // CUSTOMIZE: date or date range
    description: "",       // CUSTOMIZE: 2-4 sentences describing the project, what it was for, what you made
    images: [              // CUSTOMIZE: add webp paths, e.g. "/images/design/proj2-1.webp"
      "/images/design/placeholder-2.webp",
    ],
  },
  // --- PROJECT 3: copy structure above ---
  {
    title: "Project Name", // CUSTOMIZE: design project title
    date: "2025",          // CUSTOMIZE: date or date range
    description: "",       // CUSTOMIZE: 2-4 sentences describing the project, what it was for, what you made
    images: [              // CUSTOMIZE: add webp paths, e.g. "/images/design/proj3-1.webp"
      "/images/design/placeholder-3.webp",
    ],
  },
  // --- PROJECT 4: copy structure above ---
  {
    title: "Project Name", // CUSTOMIZE: design project title
    date: "2025",          // CUSTOMIZE: date or date range
    description: "",       // CUSTOMIZE: 2-4 sentences describing the project, what it was for, what you made
    images: [              // CUSTOMIZE: add webp paths, e.g. "/images/design/proj4-1.webp"
      "/images/design/placeholder-4.webp",
    ],
  },
];

export default function DesignProjects() {
  return (
    <div className="flex flex-col">
      {projects.map((project, i) => (
        <div key={i}>
          {i > 0 && <hr className="border-[#272727] mb-12" />}

          <div className="flex items-baseline justify-between mb-3">
            <h2 className="text-xl font-bold">{project.title}</h2>
            <span className="text-[13px] text-[#717171] ml-4 shrink-0">{project.date}</span>
          </div>

          {project.description && (
            <p className="text-[14px] text-[#717171] leading-[1.7] max-w-[65ch] mb-6">
              {project.description}
            </p>
          )}

          {/* Horizontal scroll image strip */}
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 mb-12">
            {project.images.map((src, j) => (
              <img
                key={j}
                src={src}
                alt={`${project.title} image ${j + 1}`}
                className="h-[280px] w-auto object-contain flex-shrink-0 rounded-sm"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
