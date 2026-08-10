import { useState } from "react";
import { projects } from "../data/portfolio";

type Category = "all" | "mobile" | "website";

export default function Projects() {
  const [filter, setFilter] = useState<Category>("all");

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
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mb-6.5">
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
                  ? "bg-[#FF4D19] text-[#08080A] border-[#FF4D19] font-bold"
                  : "bg-transparent text-[#F2EFE9] border-[rgba(242,239,233,.28)]"
              }`}
            >
              {tab.label}{" "}
              <span className="opacity-60">{counts[tab.key]}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(242,239,233,.13)] border-y border-[rgba(242,239,233,.13)]">
        {visible.map((project, i) => (
          <a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#08080A] p-7 md:p-8 block hover:bg-[#0f0f11] transition-colors"
          >
            <div className="flex justify-between items-center mb-4.5">
              <span className="font-mono text-[11px] tracking-[.1em] uppercase text-[#FF4D19]">
                {project.category === "mobile" ? "iOS" : "Web"} ·{" "}
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-mono text-[11px] text-[#807C74]">
                {project.period}
              </span>
            </div>
            <p className="text-2xl md:text-[34px] font-black tracking-[-.03em] m-0 mt-5 mb-2.5">
              {project.title}
            </p>
            {project.description && (
              <p className="text-[15px] leading-[1.65] text-[#ADA9A1] m-0 mb-3.5">
                {project.description}
              </p>
            )}
            <p className="font-mono text-[11px] text-[#F2EFE9] m-0 mb-4 tracking-[.04em]">
              {project.technologies.join(" · ")}
            </p>
            <span className="font-mono text-xs tracking-[.08em] uppercase text-[#FF4D19]">
              View project ↗
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
