"use client";

import { about } from "../data/portfolio";
import { useRevealed } from "../hooks/useRevealed";

const labels: Record<string, string> = {
  mobile: "Mobile",
  web: "Web",
  principles: "Principles",
  tools: "Tools",
};

export default function SkillsTree() {
  const categories = Object.entries(about.skills);
  const { ref, revealed } = useRevealed<HTMLDivElement>();

  return (
    <section
      id="skills"
      className="grid md:grid-cols-[220px_1fr] gap-0 px-6 md:px-11 py-16 md:py-18 border-t border-[rgba(242,239,233,.13)]"
    >
      <div ref={ref} className="md:sticky md:top-24 md:self-start">
        <p className="font-mono text-xs tracking-[.18em] uppercase text-[#807C74] mb-3.5">
          Skills
        </p>
        <p className="font-['Instrument_Serif'] text-4xl md:text-[56px] leading-[.95] m-0 mb-2.5">
          One root,
          <br />
          many branches.
        </p>
        <p className="text-sm leading-[1.6] text-[#807C74] m-0 max-w-[24ch]">
          Mobile and web, grown from the same fundamentals.
        </p>
      </div>

      <div className="relative pl-6 md:pl-12">
        <div
          className="absolute top-0 bottom-0 left-0 w-px bg-[rgba(242,239,233,.13)]"
          aria-hidden="true"
        />
        {categories.map(([category, items], i) => (
          <div
            key={category}
            className={`reveal ${
              revealed ? "is-revealed" : ""
            } relative pb-10 last:pb-0`}
            style={{ transitionDelay: revealed ? `${i * 70}ms` : "0ms" }}
          >
            <span
              className="absolute -left-6 md:-left-12 top-2 w-6 md:w-12 h-px bg-[rgba(242,239,233,.13)]"
              aria-hidden="true"
            />
            <span
              className="absolute -left-[3px] top-[5px] w-[7px] h-[7px] rounded-full bg-[#4F46E5]"
              aria-hidden="true"
            />
            <p className="font-mono text-xs tracking-[.12em] uppercase text-[#4F46E5] mb-3 pl-2">
              {labels[category] ?? category}
            </p>
            <div className="flex flex-wrap gap-2">
              {(items as string[]).map((item) => (
                <span
                  key={item}
                  className="text-sm text-[#F2EFE9] border border-[rgba(242,239,233,.13)] px-3 py-1.5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}