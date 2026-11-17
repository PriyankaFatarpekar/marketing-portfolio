"use client";

import { useState } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-black/5 bg-[#f7f7f3]/90 backdrop-blur-md">
      <div className="container-width flex h-[76px] items-center justify-between">
        <a
          href="#home"
          className="font-[var(--font-dm-sans)] text-lg font-bold tracking-tight"
        >
          PRIYANKA<span className="text-[#1f5c4a]">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#555550] transition hover:text-[#1f5c4a]"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full bg-[#1f5c4a] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            Let&apos;s Talk
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 md:hidden"
          aria-label="Toggle navigation"
        >
          <div className="space-y-1.5">
            <span className="block h-px w-5 bg-black" />
            <span className="block h-px w-5 bg-black" />
            <span className="block h-px w-5 bg-black" />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-[#f7f7f3] px-7 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}