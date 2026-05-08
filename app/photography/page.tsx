import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PhotographyGallery from "@/components/photography-gallery";

export const metadata: Metadata = {
  title: "Photography",
  description:
    "Photography by Charlie Ramus — aerial and sailing photography from regattas and coastal landscapes.",
};

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

      <PhotographyGallery />
    </div>
  );
}
