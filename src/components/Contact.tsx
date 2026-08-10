export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-11 pt-16 md:pt-18 pb-14 border-t border-[rgba(242,239,233,.13)]"
    >
      <h2 className="text-6xl sm:text-8xl md:text-[150px] font-black tracking-[-.055em] leading-[.86] m-0 mb-2 text-transparent [-webkit-text-stroke:1px_rgba(242,239,233,.42)]">
        LET&apos;S BUILD
      </h2>
      <h2 className="text-6xl sm:text-8xl md:text-[150px] font-black tracking-[-.055em] leading-[.86] m-0 mb-10">
        SOMETHING.
      </h2>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-4 border-t border-[rgba(242,239,233,.13)] pt-6">
        <div className="flex gap-6 flex-wrap font-mono text-xs tracking-[.08em] uppercase">
          <a
            href="https://www.linkedin.com/in/windy-windy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF4D19]"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://www.upwork.com/freelancers/~01355e647cde94a3ce"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF4D19]"
          >
            Upwork ↗
          </a>
          <a
            href="https://github.com/windywu812"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF4D19]"
          >
            GitHub ↗
          </a>
          <a href="mailto:windywu812@gmail.com" className="text-[#FF4D19]">
            Email ↗
          </a>
        </div>
        <p className="font-mono text-xs text-[#807C74] m-0">© 2026 Windy</p>
      </div>
    </section>
  );
}
