import { about } from "../data/portfolio";

export default function About() {
  return (
    <section
      id="about"
      className="grid md:grid-cols-[.8fr_1.2fr] gap-10 md:gap-14 px-6 md:px-11 py-16 md:py-18 border-t border-[rgba(242,239,233,.13)]"
    >
      <div>
        <p className="font-mono text-xs tracking-[.18em] uppercase text-[#807C74] mb-6">
          About
        </p>
        <p className="font-['Instrument_Serif'] text-3xl md:text-[44px] leading-[1.1] tracking-[-.01em] m-0">
          Hi there, I&apos;m a senior software engineer who finds the
          problem first, then ships the{" "}
          <span className="italic text-[#FF4D19]">right</span> solution —
          native iOS to modern web.
        </p>
      </div>

      <div className="columns-1 md:columns-2 gap-9 text-[15px] leading-[1.8] text-[#ADA9A1]">
        <p className="mb-4">
          I&apos;m a curious person who loves solving real-world problems and
          diving deep into how things work. Since I was a child, I&apos;ve
          always been fascinated by technology — especially computers. I love
          exploring how things work, whether it&apos;s on the hardware side
          like assembling PC components or the software side like writing
          simple programs. This curiosity eventually led me to pursue a
          career in software engineering.
        </p>
        <p className="mb-4">
          I began my journey at university, where I learned the fundamentals
          of computer science and programming. During my studies, I had the
          opportunity to join the Apple Developer Academy in Batam, where I
          learned a lot about iOS development using Swift and SwiftUI. That
          experience strengthened my passion for building iOS apps, and I
          decided to focus my career in this field — creating mobile
          applications that can reach millions of users.
        </p>
        <p className="mb-4">
          Most recently, I worked at Vidio in Jakarta for about three years.
          While it was a great experience, I eventually realized that Jakarta
          wasn&apos;t the right place for me. So, I decided to move back to
          Batam and continue my journey as a freelance iOS developer.
          I&apos;m currently open to remote opportunities around the world.
        </p>

        <div className="grid grid-cols-2 gap-6 border-t border-[rgba(242,239,233,.13)] pt-6 mt-6">
          {Object.entries(about.skills).map(([category, items]) => (
            <div key={category}>
              <p className="font-mono text-[11px] tracking-[.12em] uppercase text-[#FF4D19] mb-2">
                {category}
              </p>
              <p className="text-[#F2EFE9] m-0">
                {(items as string[]).join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
