"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Mail, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "#about", label: "ABOUT", id: "about" },
  { href: "#projects", label: "PROJECTS", id: "projects" },
  { href: "#stories", label: "STORIES", id: "stories" },
] as const;

const SECTION_IDS = ["about", "projects", "stories"] as const;

function useActiveSection() {
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight / 3;
      let current = "about";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= threshold) {
          current = id;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return active;
}

function IconGithub() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
      <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  );
}

function IconLinkedin() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

const socialLinks = [
  { href: "https://github.com/Wazoooman", label: "GitHub", icon: <IconGithub />, hoverClass: "hover:text-a1" },
  { href: "https://www.linkedin.com/in/charlie-ramus-776366398/", label: "LinkedIn", icon: <IconLinkedin />, hoverClass: "hover:text-a2" },
  { href: "mailto:charlie.ramus12@gmail.com", label: "Email", icon: <Mail size={15} />, hoverClass: "hover:text-a3", external: false },
  { href: "https://www.instagram.com/chahramii/", label: "Instagram", icon: <IconInstagram />, hoverClass: "hover:text-a1" },
] as const;

function SocialRow() {
  return (
    <div className="flex items-center gap-5">
      {socialLinks.map(({ href, label, icon, hoverClass }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto") ? undefined : "_blank"}
          rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
          aria-label={label}
          className={`text-muted ${hoverClass} transition-colors duration-200`}
        >
          {icon}
        </a>
      ))}
    </div>
  );
}

export default function Sidebar() {
  const { resolvedTheme, setTheme } = useTheme();
  const activeSection = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  function ThemeToggle({ className }: { className?: string }) {
    return (
      <button
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        aria-label="Toggle color theme"
        className={`text-muted hover:text-fg transition-colors duration-200 ${className ?? ""}`}
      >
        {mounted ? (
          resolvedTheme === "dark" ? <Sun size={15} /> : <Moon size={15} />
        ) : (
          <span className="inline-block w-3.75 h-3.75" />
        )}
      </button>
    );
  }

  return (
    <>
      {/* ── Desktop sidebar ── */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-70 flex-col bg-bg border-r border-rule z-40 px-10 py-10">
        <div className="mb-14 select-none">
          <span className="text-[28px] font-medium text-fg tracking-[-0.02em]">C</span>
        </div>

        <nav className="flex-1">
          <ul className="space-y-5">
            {NAV_LINKS.map(({ href, label, id }) => {
              const isActive = activeSection === id;
              return (
                <li key={id} className="flex items-center">
                  <span
                    className={`h-px w-5 mr-3 transition-colors duration-200 ${
                      isActive ? "bg-a1" : "bg-transparent"
                    }`}
                  />
                  <a
                    href={href}
                    className={`text-[11px] tracking-[0.12em] uppercase transition-colors duration-200 ${
                      isActive ? "text-fg" : "text-muted hover:text-fg"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
            <li className="flex items-center">
              <span className="h-px w-5 mr-3 bg-transparent" />
              <Link
                href="/photography"
                className="text-[11px] tracking-[0.12em] uppercase text-muted hover:text-fg transition-colors duration-200"
              >
                PHOTOGRAPHY
              </Link>
            </li>
          </ul>
        </nav>

        <ThemeToggle className="mb-5 self-start" />
        <SocialRow />
      </aside>

      {/* ── Mobile header ── */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-bg border-b border-rule h-14 flex items-center justify-between px-6">
        <span className="text-xl font-medium text-fg select-none">C</span>
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="text-muted hover:text-fg transition-colors duration-200"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </header>

      {/* ── Mobile dropdown ── */}
      {menuOpen && (
        <div className="md:hidden fixed top-14 left-0 right-0 z-40 bg-bg border-b border-rule px-6 py-5 flex flex-col gap-5">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="text-[11px] tracking-[0.12em] uppercase text-muted hover:text-fg transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <Link
            href="/photography"
            className="text-[11px] tracking-[0.12em] uppercase text-muted hover:text-fg transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            PHOTOGRAPHY
          </Link>
          <div className="pt-2 flex items-center justify-between border-t border-rule">
            <SocialRow />
            <ThemeToggle />
          </div>
        </div>
      )}
    </>
  );
}
