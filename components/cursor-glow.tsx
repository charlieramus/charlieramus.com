"use client";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function CursorGlow() {
  const { x, y } = useMousePosition();
  const { resolvedTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (pathname === "/photography") return null;
  if (pathname.startsWith("/writing/")) return null;
  if (pathname === "/design") return null;
  if (pathname === "/web-projects") return null;
  if (mounted && resolvedTheme === "light") return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(600px at ${x}px ${y}px, rgba(250,91,28,0.08), transparent 70%)`,
      }}
    />
  );
}
