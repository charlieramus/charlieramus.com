import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Photography",
  description:
    "Photography by Charlie Ramus — documentary and landscape work from Boulder County, Colorado.",
};

const photos = Array.from({ length: 8 }, (_, i) => ({
  aspect: i % 2 === 0 ? "4/3" : "3/4",
}));

export default function PhotographyPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f0ede8] px-8 py-10">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-[#7a7a7a] hover:text-[#f0ede8] transition-colors duration-200 mb-10 text-[13px]"
      >
        <ArrowLeft size={14} />
        Back
      </Link>

      <div className="columns-1 sm:columns-2 md:columns-3 gap-2">
        {photos.map((photo, i) => (
          <div
            key={i}
            className="w-full mb-2 bg-[#1a1a1a] hover:opacity-80 transition-opacity duration-200 break-inside-avoid"
            style={{ aspectRatio: photo.aspect }}
          />
        ))}
      </div>
    </div>
  );
}
