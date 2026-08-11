"use client";

import { useState } from "react";
import { projects } from "../data/portfolio";
import { useRevealed } from "../hooks/useRevealed";

type Category = "all" | "mobile" | "website";

export default function Projects() {
  const [filter, setFilter] = useState<Category>("all");
  const { ref, revealed } = useRevealed<HTMLDivElement>();

  const counts = {
    all: projects.length,
    mobile: projects.filter((p) => p.category === "mobile").length,
    website: projects.filter((p) => p.category === "website").length,
  };

  const visible =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const tabs: { key: Category; label: string }[] = [
    { key: "all", label: "All" },
    { key: "mobile", label: "Mobile apps" },
    { key: "website", label: "Websites" },
  ];

  return (
    <section
      id="work"
      className="px-6 md:px-11 pt-16 md:pt-16 pb-6 border-t border-[rgba(242,239,233,.13)]"
    >
      <div
        ref={ref}
        className={`reveal ${
          revealed ? "is-revealed" : ""
        } flex flex-col md:flex-row md:justify-between md:items-end gap-8 mb-6.5`}
      >
        <div>
          <p className="font-mono text-xs tracking-[.18em] uppercase text-[#807C74] mb-3.5">
            Selected work
          </p>
          <p className="font-['Instrument_Serif'] text-4xl md:text-[56px] leading-[.95] m-0">
            Apps and sites,
            <br />
            shipped.
          </p>
        </div>

        <div className="flex gap-2 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setFilter(tab.key)}
              className={`font-mono text-xs tracking-[.08em] uppercase px-4.5 py-2.5 border cursor-pointer transition-colors ${
                filter === tab.key
                  ? "bg-[#4F46E5] text-[#08080A] border-[#4F46E5] font-bold"
                  : "bg-transparent text-[#F2EFE9] border-[rgba(242,239,233,.28)]"
              }`}
            >
              {tab.label}{" "}
              <span className="opacity-60">{counts[tab.key]}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="columns-1 md:columns-2 gap-6">
        {visible.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block break-inside-avoid mb-6 border border-[rgba(242,239,233,.13)] p-7 md:p-8 hover:bg-[#0f0f11] hover:border-[rgba(242,239,233,.28)] transition-colors"
          >
            <div className="flex justify-between items-center mb-4.5">
              <span className="font-mono text-[11px] tracking-[.1em] uppercase text-[#4F46E5]">
                {project.category === "mobile" ? "iOS" : "Web"}
              </span>
              <span className="font-mono text-[11px] text-[#807C74]">
                {project.period}
              </span>
            </div>

            <p className="text-2xl md:text-[34px] font-black tracking-[-.03em] leading-[1.05] m-0 mb-3">
              {project.title}
            </p>

            {project.problem && project.solution ? (
              <div className="grid gap-3 mb-3.5">
                <p className="text-[15px] leading-[1.65] text-[#ADA9A1] m-0">
                  <span className="font-mono text-[11px] tracking-[.1em] uppercase text-[#807C74] mr-1.5">
                    Problem
                  </span>
                  {project.problem}
                </p>
                <p className="text-[15px] leading-[1.65] text-[#F2EFE9] m-0">
                  <span className="font-mono text-[11px] tracking-[.1em] uppercase text-[#4F46E5] mr-1.5">
                    Solution
                  </span>
                  {project.solution}
                </p>
              </div>
            ) : (
              project.description && (
                <p className="text-[15px] leading-[1.65] text-[#ADA9A1] m-0 mb-3.5">
                  {project.description}
                </p>
              )
            )}

            <p className="font-mono text-[11px] text-[#F2EFE9] m-0 mb-4 tracking-[.04em]">
              {project.technologies.join(" · ")}
            </p>
            <span className="font-mono text-xs tracking-[.08em] uppercase text-[#4F46E5] inline-flex items-center gap-1.5">
              View project
              <span className="transition-transform group-hover:translate-x-0.5">
                ↗
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}