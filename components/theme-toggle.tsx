"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle color theme"
      className="fixed top-4 right-4 z-50 text-muted hover:text-fg transition-colors duration-200"
    >
      {mounted ? (
        resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />
      ) : (
        <span className="inline-block w-4 h-4" />
      )}
    </button>
  );
}
