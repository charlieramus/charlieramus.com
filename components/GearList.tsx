import { ArrowUpRight } from "lucide-react";

type GearItem = {
  name: string;
  note: string;
  href: string;
};

const gear: Record<string, GearItem[]> = {
  bodies: [
    // CUSTOMIZE: camera body name, short note (e.g. "Primary body"), and manufacturer/retailer URL or ""
    { name: "Camera Body", note: "Primary body", href: "" },
    // CUSTOMIZE: add more bodies here
    { name: "Camera Body 2", note: "", href: "" },
  ],
  lenses: [
    // CUSTOMIZE: lens name, short note (e.g. "Portraits"), and manufacturer/retailer URL or ""
    { name: "Lens Name", note: "", href: "" },
    // CUSTOMIZE: add more lenses here
    { name: "Lens Name 2", note: "", href: "" },
  ],
  lighting: [
    // CUSTOMIZE: light name, short note (e.g. "Key light"), and manufacturer/retailer URL or ""
    { name: "Light Name", note: "", href: "" },
    // CUSTOMIZE: add more lighting here
    { name: "Light Name 2", note: "", href: "" },
  ],
  bags: [
    // CUSTOMIZE: bag name, short note (e.g. "Everyday carry"), and manufacturer/retailer URL or ""
    { name: "Bag Name", note: "", href: "" },
    // CUSTOMIZE: add more bags here
    { name: "Bag Name 2", note: "", href: "" },
  ],
  accessories: [
    // CUSTOMIZE: accessory name, short note, and manufacturer/retailer URL or ""
    { name: "Accessory Name", note: "", href: "" },
    // CUSTOMIZE: add more accessories here
    { name: "Accessory Name 2", note: "", href: "" },
  ],
};

const sections: { key: keyof typeof gear; label: string }[] = [
  { key: "bodies", label: "Camera Bodies" },
  { key: "lenses", label: "Lenses" },
  { key: "lighting", label: "Lighting" },
  { key: "bags", label: "Bags" },
  { key: "accessories", label: "Accessories" },
];

export default function GearList() {
  return (
    <div className="flex flex-col gap-10">
      {sections.map(({ key, label }) => (
        <div key={key}>
          <p className="text-xs font-medium tracking-widest uppercase text-[#717171] mb-2">
            {label}
          </p>
          <div style={{ height: "1px", background: "#272727", marginBottom: "1rem" }} />
          <div className="flex flex-col gap-3">
            {gear[key].map((item) => (
              <div key={item.name} className="flex items-center justify-between gap-4">
                <span className="text-sm font-medium text-[#f4f3ee]">{item.name}</span>
                <div className="flex items-center gap-2 shrink-0">
                  {item.note && (
                    <span className="text-xs text-[#717171]">{item.note}</span>
                  )}
                  {item.href && (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${item.name}`}
                      className="text-[#717171] hover:text-[#f4f3ee] transition-colors duration-150"
                    >
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
