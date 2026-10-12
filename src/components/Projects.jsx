import eldenRingImg from "../assets/eldenring-preview.png";
import memoryCardImg from "../assets/memory-card-preview.png";

export default function Projects() {
  const projects = [
    {
      title: "Elden Ring Fan Page",
      description:
        "A web application featuring lore, soundtrack, and characters from the Elden Ring universe, built with a focused, responsive interface.",
      tags: ["HTML", "Tailwind.css"],
      githubUrl: "https://github.com/Daksh-Dhasmana/EldenRIngFanPage",
      image: eldenRingImg,
    },
    {
      title: "Memory Card Game",
      description:
        "An interactive React application testing memory and attention with dynamic card shuffling, score tracking, and responsive layout.",
      tags: ["React", "JavaScript", "CSS"],
      githubUrl: "https://github.com/Daksh-Dhasmana/Project-Memory-Card",
      image: memoryCardImg,
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-20 bg-gray-950">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center md:text-left mb-8 sm:mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">
            Portfolio
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-1.5 sm:mt-2 text-gray-400 text-xs sm:text-sm md:text-base">
            A selection of web applications I have built and open-sourced on GitHub.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-gray-900/90 to-gray-900/50 hover:from-gray-900 hover:to-gray-900/80 border border-gray-800 hover:border-gray-700/80 rounded-2xl p-5 sm:p-7 shadow-lg hover:shadow-2xl hover:shadow-black/60 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div>
                {project.image && (
                  <div className="mb-4 sm:mb-5 overflow-hidden rounded-xl border border-gray-800/80 bg-gray-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-36 sm:h-44 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2.5 py-1 text-xs font-medium bg-gray-800/90 text-gray-300 border border-gray-700/60 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors py-1"
                >
                  <span>View Repository</span>
                  <span className="transform group-hover:translate-x-1.5 transition-transform duration-200">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
