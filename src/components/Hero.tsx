import pic from "../assets/portrait.png";

const stack = [
  "SwiftUI",
  "UIKit",
  "Kotlin Multiplatform",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Laravel",
];

function Ticker() {
  const row = (
    <span className="flex gap-7 pr-7 items-center">
      {stack.map((s) => (
        <span key={s} className="flex gap-7 items-center">
          <span>{s}</span>
          <span className="text-[#FF4D19]">◆</span>
        </span>
      ))}
    </span>
  );

  return (
    <div className="border-y border-[rgba(242,239,233,.13)] overflow-hidden py-4">
      <div className="flex w-max animate-marquee text-2xl md:text-3xl font-extrabold tracking-tight whitespace-nowrap">
        {row}
        {row}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="font-[Archivo]">
      <div className="grid md:grid-cols-[1fr_420px] items-end border-t border-[rgba(242,239,233,.13)]">
        <div className="px-6 md:px-11 pt-14 md:pt-19 pb-12 md:pb-15 min-w-0">
          <p className="font-mono text-xs tracking-[.18em] uppercase text-[#FF4D19] mb-6 md:mb-9">
            Senior software engineer · 5+ years
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.06] tracking-[-.04em] mb-6 md:mb-8">
            Find the problem,
            <br />
            <span className="whitespace-nowrap">ship the</span>{" "}
            <span className="font-['Instrument_Serif'] italic font-normal tracking-[-.02em] text-[#FF4D19]">
              right
            </span>
            <br />
            solution.
          </h1>
          <p className="text-lg md:text-xl leading-[1.55] text-[#ADA9A1] max-w-[40ch] mb-6 md:mb-8">
            Senior software engineer working across mobile and web —
            iOS, React, and the backend in between. For clients worldwide,
            from Batam, Indonesia.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="mailto:windywu812@gmail.com"
              className="font-mono text-xs tracking-[.08em] uppercase px-7 py-4 bg-[#FF4D19] text-[#08080A] font-bold"
            >
              Start a project
            </a>
            <a
              href="https://www.linkedin.com/in/windy-windy/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-[.08em] uppercase px-7 py-4 border border-[rgba(242,239,233,.3)]"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="relative min-w-0 w-full md:w-[420px] h-[420px] md:h-[660px]">
          <img
            src={pic}
            alt="Windy"
            className="w-full h-full object-cover block grayscale contrast-[1.08] brightness-95"
            style={{ objectPosition: "50% 18%" }}
          />
          <div className="absolute left-4 md:-left-[70px] bottom-11 bg-[#F2EFE9] text-[#08080A] px-[18px] py-[14px] max-w-[240px]">
            <p className="font-mono text-[11px] tracking-[.1em] uppercase mb-1.5 text-[#6B675F]">
              Currently
            </p>
            <p className="text-[15px] leading-[1.4] font-semibold m-0">
              Frontend Developer at Slingshot Brand Architect, remote
            </p>
          </div>
        </div>
      </div>

      <Ticker />
    </section>
  );
}
