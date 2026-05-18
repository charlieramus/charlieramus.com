import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import WebProjects from "@/components/WebProjects";

export const metadata: Metadata = {
  title: "Web Projects",
  description: "Sites and web experiences designed and built by Charlie Ramus.",
};

export default function WebProjectsPage() {
  return (
    <div className="min-h-screen bg-[#141414] text-[#f4f3ee] px-8 py-10">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-[#717171] hover:text-[#f4f3ee] transition-colors duration-200 mb-10 text-[13px]"
      >
        <ArrowLeft size={14} />
        Back
      </Link>

      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold mb-2">Web Projects</h1>
        <p className="text-[#717171] text-[15px] mb-16">
          {/* CUSTOMIZE: e.g. "Sites and web experiences I have designed and built." */}
          Sites and web experiences I have designed and built.
        </p>

        <WebProjects />
      </div>
    </div>
  );
}
