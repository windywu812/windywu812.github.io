import { experiences } from "../data/portfolio";

function yearTag(period: string) {
  const startYear = period.match(/\d{4}/)?.[0]?.slice(-2) ?? "";
  const isNow = period.includes("Present");
  return { startYear, isNow };
}

export default function Experience() {
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

      <div>
        {experiences.map((exp, i) => {
          const { startYear, isNow } = yearTag(exp.period);
          return (
            <div
              key={i}
              className="grid grid-cols-[64px_1fr] md:grid-cols-[104px_1fr] gap-5 md:gap-7 items-start border-t border-[rgba(242,239,233,.13)] py-6 md:py-7"
            >
              <div>
                <p
                  className={`font-['Instrument_Serif'] text-3xl md:text-[42px] leading-none m-0 ${
                    isNow ? "text-[#FF4D19]" : "text-[#F2EFE9]"
                  }`}
                >
                  &apos;{startYear}
                </p>
                {isNow && (
                  <p className="font-mono text-[11px] tracking-[.1em] uppercase text-[#FF4D19] mt-2 mb-0">
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
                  {exp.company} · {exp.location}
                </p>
                <div className="grid gap-2">
                  {exp.description.map((d, di) => (
                    <p
                      key={di}
                      className="grid grid-cols-[16px_1fr] gap-2.5 text-sm leading-[1.6] text-[#ADA9A1] m-0"
                    >
                      <span className="text-[#FF4D19]">→</span>
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
