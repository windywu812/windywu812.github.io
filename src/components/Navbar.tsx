export default function Navbar() {
  const sections = ["home", "about", "experience", "projects"];

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    section: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Desktop Navigation - Left Side */}
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden md:block">
        <ul className="space-y-6">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={(e) => handleClick(e, section)}
                className="flex items-center gap-3 group"
                aria-label={section}
              >
                <span className="block w-3 h-3 rounded-full bg-gray-600 group-hover:bg-purple-500 transition-colors" />
                <span className="text-sm text-gray-600 group-hover:text-purple-500 transition-colors capitalize opacity-0 group-hover:opacity-100">
                  {section}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation - Bottom */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="glass border-t border-white/20 px-4 py-3">
          <ul className="flex justify-around items-center">
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={(e) => handleClick(e, section)}
                  className="flex flex-col items-center gap-1 text-gray-400 hover:text-purple-400 transition-colors"
                  aria-label={section}
                >
                  <span className="block w-2 h-2 rounded-full bg-gray-600" />
                  <span className="text-xs capitalize">{section}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
