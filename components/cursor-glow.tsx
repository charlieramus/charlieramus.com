"use client";
import { useMousePosition } from "@/hooks/useMousePosition";

export default function CursorGlow() {
  const { x, y } = useMousePosition();
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(600px at ${x}px ${y}px, rgba(250,91,28,0.08), transparent 70%)`,
      }}
    />
  );
}
