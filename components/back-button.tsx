"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function BackButton() {
  const router = useRouter();
  const [dest, setDest] = useState<"/" | "/writing">("/");

  useEffect(() => {
    const ref = sessionStorage.getItem("articleReferrer");
    sessionStorage.removeItem("articleReferrer");
    if (ref === "writing") setDest("/writing");
  }, []);

  return (
    <button
      onClick={() => router.push(dest)}
      className="text-sm text-muted hover:text-fg transition-colors cursor-pointer"
    >
      ← {dest === "/writing" ? "Writing" : "Home"}
    </button>
  );
}
