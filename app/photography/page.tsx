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
    <div className="min-h-screen bg-[#141414] text-[#f4f3ee] px-8 py-10">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-[#717171] hover:text-[#f4f3ee] transition-colors duration-200 mb-10 text-[13px]"
      >
        <ArrowLeft size={14} />
        Back
      </Link>

      <div className="columns-1 sm:columns-2 md:columns-3 gap-2">
        {photos.map((photo, i) => (
          // CUSTOMIZE: replace div with <Image> src paths for real photos
          <div
            key={i}
            className="w-full mb-2 bg-[#1e1e1e] hover:opacity-85 transition-opacity duration-200 break-inside-avoid"
            style={{ aspectRatio: photo.aspect }}
          />
        ))}
      </div>
    </div>
  );
}
