"use client";

import type { MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const sections = ["about", "experience", "work", "contact"];
  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleClick = (
    e: MouseEvent<HTMLAnchorElement>,
    section: string
  ) => {
    if (!isHome) return;
    e.preventDefault();
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-11 py-5 font-mono text-xs tracking-[.12em] uppercase text-[#807C74] bg-[#08080A]/95 backdrop-blur border-b border-[rgba(242,239,233,.13)]">
      <Link href="/" className="text-[#F2EFE9] font-bold">
        Windy
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        {sections.map((section) => (
          <a
            key={section}
            href={isHome ? `#${section}` : `/#${section}`}
            onClick={(e) => handleClick(e, section)}
            className="hover:text-[#F2EFE9] transition-colors capitalize"
          >
            {section}
          </a>
        ))}
        <Link
          href="/blog"
          className="hover:text-[#F2EFE9] transition-colors capitalize"
        >
          Blog
        </Link>
      </nav>

      <span className="flex items-center gap-2">
        <span className="w-[7px] h-[7px] rounded-full bg-[#4F46E5] inline-block" />
        <span className="hidden sm:inline">Open for freelance · Batam ID</span>
      </span>
    </header>
  );
}
