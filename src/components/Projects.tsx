import { projects } from "../data/portfolio";
import { useState } from "react";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<"mobile" | "website">(
    "mobile"
  );

  const mobileProjects = projects.filter((p) => p.category === "mobile");
  const websiteProjects = projects.filter((p) => p.category === "website");

  const currentProjects =
    activeCategory === "mobile" ? mobileProjects : websiteProjects;

  const renderProjects = (projectList: typeof projects) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 animate-fade-in">
      {projectList.map((project, index) => (
        <div
          key={index}
          className="glass rounded-xl md:rounded-2xl p-4 md:p-6 glass-hover opacity-0 animate-slide-up flex flex-col justify-between items-start gap-4 md:gap-5"
          style={{
            animationDelay: `${index * 100}ms`,
            animationFillMode: "forwards",
          }}
        >
          <div className="w-full">
            <div className="flex justify-between items-start md:items-center mb-3 gap-2">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white">{project.title}</h3>
              {project.period && (
                <span className="text-xs text-gray-500 font-mono whitespace-nowrap">
                  {project.period}
                </span>
              )}
            </div>

            <p className="text-sm md:text-base text-gray-400 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 md:px-3 glass rounded-full text-xs md:text-sm text-purple-300 hover:border-purple-500 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.highlights && (
              <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-white/10">
                <p className="text-xs md:text-sm font-semibold text-gray-400 mb-2">
                  Key Highlights:
                </p>
                <ul className="space-y-1 mb-3 md:mb-4">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li
                      key={highlightIndex}
                      className="text-xs md:text-sm text-gray-500 flex gap-2"
                    >
                      <span className="text-purple-400">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 md:px-4 glass rounded-lg text-xs md:text-sm font-semibold text-purple-300 hover:border-purple-500 hover:text-purple-200 transition-all"
            >
              View Project
              <span className="text-xs">↗</span>
            </a>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <section className="min-h-screen w-full md:w-4/5 mx-auto flex items-center justify-center px-4 md:px-6 py-20">
      <div className="w-full space-y-8 md:space-y-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-purple-pink">
          Projects
        </h2>

        {/* Category Chips */}
        <div className="flex gap-3 md:gap-4 flex-wrap">
          <button
            onClick={() => setActiveCategory("mobile")}
            className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-semibold transition-all ${
              activeCategory === "mobile"
                ? "glass border-2 border-purple-500 text-white"
                : "glass border border-white/20 text-gray-400 hover:border-purple-400"
            }`}
          >
            📱 Mobile Apps
          </button>
          <button
            onClick={() => setActiveCategory("website")}
            className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-semibold transition-all ${
              activeCategory === "website"
                ? "glass border-2 border-purple-500 text-white"
                : "glass border border-white/20 text-gray-400 hover:border-purple-400"
            }`}
          >
            🌐 Websites
          </button>
        </div>

        {/* Projects Grid */}
        {renderProjects(currentProjects)}
      </div>
    </section>
  );
}
