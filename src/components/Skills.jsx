export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "React.js",
    "Tailwind.css",
    "Bootstrap.css",
  ];

  return (
    <section id="skills" className="py-12 sm:py-20 bg-gray-950 border-b border-gray-800/80">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center md:text-left mb-8 sm:mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">
            Expertise
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="mt-1.5 sm:mt-2 text-gray-400 text-xs sm:text-sm md:text-base">
            Core technologies and tools I work with to build responsive, component-driven web applications.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/70 hover:bg-gray-900 border border-gray-800 hover:border-blue-500/50 rounded-xl p-3.5 sm:p-5 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-200 hover:-translate-y-1"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500/70 group-hover:bg-blue-400 group-hover:scale-125 mb-2 transition-all"></span>

              <span className="text-gray-200 group-hover:text-white font-semibold text-xs sm:text-sm md:text-base transition-colors">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
