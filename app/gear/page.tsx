import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import GearList from "@/components/GearList";

export const metadata: Metadata = {
  title: "Gear",
  description: "What I shoot with.",
};

export default function GearPage() {
  return (
    <div className="min-h-screen bg-[#141414] text-[#f4f3ee] px-8 py-10">
      <Link
        href="/photography"
        className="inline-flex items-center gap-2 text-[#717171] hover:text-[#f4f3ee] transition-colors duration-200 mb-10 text-[13px]"
      >
        <ArrowLeft size={14} />
        Back
      </Link>

      <div className="max-w-lg">
        <h1
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "2.5rem",
            color: "#f4f3ee",
            marginBottom: "0.5rem",
          }}
        >
          Gear
        </h1>
        {/* CUSTOMIZE: one-line subtext below the title */}
        <p className="text-sm text-[#717171] mb-12">What I shoot with.</p>
        <GearList />
      </div>
    </div>
  );
}
