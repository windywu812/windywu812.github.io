"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { experiences } from "../data/portfolio";

function yearTag(period: string) {
  const startYear = period.match(/\d{4}/)?.[0]?.slice(-2) ?? "";
  const isNow = period.includes("Present");
  return { startYear, isNow };
}

function craftTag(title: string) {
  return title.toLowerCase().includes("ios") ? "iOS" : "Web";
}

function subscribeReducedMotion(callback: () => void) {
  const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  );
}

export default function Experience() {
  const listRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const fillRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const trackingEnabled = !usePrefersReducedMotion();

  useEffect(() => {
    if (!trackingEnabled) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const list = listRef.current;
      const fill = fillRef.current;
      if (!list || !fill) return;

      const focusLine = window.innerHeight * 0.42;
      const rect = list.getBoundingClientRect();
      const progress = Math.min(
        1,
        Math.max(0, (focusLine - rect.top) / rect.height)
      );
      fill.style.height = `${progress * 100}%`;

      let idx = 0;
      for (let i = 0; i < rowRefs.current.length; i++) {
        const row = rowRefs.current[i];
        if (!row) continue;
        if (row.getBoundingClientRect().top <= focusLine) idx = i;
      }
      setActiveIndex(idx);
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [trackingEnabled]);

  return (
    <section
      id="experience"
      className="grid md:grid-cols-[220px_1fr] gap-0 px-6 md:px-11 py-16 md:py-18 border-t border-[rgba(242,239,233,.13)]"
    >
      <div className="md:sticky md:top-24 md:self-start">
        <p className="font-mono text-xs tracking-[.18em] uppercase text-[#807C74] mb-3.5">
          Experience
        </p>
        <p className="font-['Instrument_Serif'] text-4xl md:text-[56px] leading-[.95] m-0 mb-2.5">
          Seven roles,
          <br />
          two crafts.
        </p>
        <p className="text-sm leading-[1.6] text-[#807C74] m-0 max-w-[24ch]">
          iOS since 2020, web since 2025. Full history below.
        </p>
      </div>

      <div ref={listRef} className="relative">
        <div
          className="hidden md:block absolute top-0 bottom-0 left-[104px] w-px bg-[rgba(242,239,233,.13)]"
          aria-hidden="true"
        >
          <div
            ref={fillRef}
            className="absolute top-0 left-0 w-px bg-[#4F46E5]"
            style={{ height: trackingEnabled ? "0%" : "100%" }}
          />
        </div>

        {experiences.map((exp, i) => {
          const { startYear, isNow } = yearTag(exp.period);
          const craft = exp.craft ?? craftTag(exp.title);
          const isActive = !trackingEnabled || i === activeIndex;
          return (
            <div
              key={i}
              ref={(el) => {
                rowRefs.current[i] = el;
              }}
              className="grid grid-cols-[64px_1fr] md:grid-cols-[104px_1fr] gap-5 md:gap-7 items-start border-t border-[rgba(242,239,233,.13)] py-6 md:py-7 transition-opacity duration-300 ease-out"
              style={{ opacity: isActive ? 1 : 0.4 }}
            >
              <div>
                <p
                  className={`font-['Instrument_Serif'] text-3xl md:text-[42px] leading-none m-0 origin-left transition-transform duration-300 ease-out ${
                    isNow ? "text-[#4F46E5]" : "text-[#F2EFE9]"
                  } ${isActive ? "scale-105" : "scale-100"}`}
                >
                  &apos;{startYear}
                </p>
                {isNow && (
                  <p className="font-mono text-[11px] tracking-[.1em] uppercase text-[#4F46E5] mt-2 mb-0">
                    Now
                  </p>
                )}
              </div>
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1 md:gap-5 mb-1.5">
                  <p className="text-xl md:text-[28px] font-extrabold tracking-[-.025em] m-0">
                    {exp.title}
                  </p>
                  <p className="font-mono text-xs text-[#807C74] m-0 whitespace-nowrap">
                    {exp.period}
                  </p>
                </div>
                <p className="font-mono text-xs text-[#ADA9A1] m-0 mb-4">
                  <span className="text-[#4F46E5]">{craft}</span> ·{" "}
                  {exp.company} · {exp.location}
                </p>
                <div className="grid gap-2">
                  {exp.description.map((d, di) => (
                    <p
                      key={di}
                      className="grid grid-cols-[16px_1fr] gap-2.5 text-sm leading-[1.6] text-[#ADA9A1] m-0"
                    >
                      <span className="text-[#4F46E5]">→</span>
                      <span>{d}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}