export default function Hero() {
  const SocialMediaButton = ({
    href,
    icon,
    label,
  }: {
    href: string;
    icon: string;
    label: string;
  }) => {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img
          src={icon}
          alt={label}
          className="w-5 h-5 inline-block mr-2 hover:scale-130 transition-transform"
        />
      </a>
    );
  };

  return (
    <section className="min-h-screen w-full md:w-4/5 mx-auto flex items-center justify-center px-4 md:px-6 py-20 md:py-0">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 w-full max-w-6xl">
        {/* Left side - Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6">
            <span className="gradient-purple-pink">Windy</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-3 md:mb-4">
            Software Engineer ‍💻
          </p>
          <p className="text-base md:text-lg text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto md:mx-0">
            Building scalable, high-performance iOS applications • SwiftUI &
            UIKit Expert • 5+ years experience
          </p>
          <div className="flex gap-4 flex-wrap justify-center md:justify-start">
            <SocialMediaButton
              href="https://www.linkedin.com/in/windy-windy/"
              icon="/src/assets/linkedin.png"
              label="LinkedIn"
            />
            <SocialMediaButton
              href="https://www.upwork.com/freelancers/~01355e647cde94a3ce"
              icon="/src/assets/upwork.png"
              label="Upwork"
            />
            <SocialMediaButton
              href="https://github.com/windywu812"
              icon="/src/assets/github.png"
              label="Github"
            />
            <SocialMediaButton
              href="mailto:windywu812@gmail.com"
              icon="/src/assets/email.png"
              label="Email"
            />
          </div>
        </div>

        {/* Right side - Image */}
        <div className="shrink-0 order-first md:order-last">
          <img
            src="/src/assets/pic.JPG"
            alt="Windy"
            className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full border-4 border-purple-500 shadow-lg shadow-purple-500/20 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
