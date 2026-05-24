import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import DesignProjects from "@/components/DesignProjects";

export const metadata: Metadata = {
  title: "Design",
  description: "Graphic design portfolio — Figma work, brand projects and visual experiments.",
};

export default function DesignPage() {
  return (
    <div className="min-h-screen bg-[#141414] text-[#f4f3ee] px-8 py-10 overflow-x-hidden">
      <div className="max-w-3xl mx-auto">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-[#717171] hover:text-[#f4f3ee] transition-colors duration-200 mb-10 text-[13px]"
      >
        <ArrowLeft size={14} />
        Back
      </Link>

        <h1 className="text-4xl font-bold mb-2">Design</h1>
        <p className="text-[#717171] text-[15px] mb-16">
          {/* CUSTOMIZE: e.g. "Figma work, brand projects and visual experiments." */}
          Figma work, brand projects and visual experiments.
        </p>

        <DesignProjects />
      </div>
    </div>
  );
}
