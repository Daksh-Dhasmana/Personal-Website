import { useState } from "react";

export default function Resume() {
  const [showPdfPreview, setShowPdfPreview] = useState(false);

  const resumePdfPath = "/Daksh_Dhasmana_Resume.pdf";

  const skillGroups = [
    {
      category: "Languages & Core",
      skills: ["JavaScript", "React.js", "HTML", "CSS"],
    },
    {
      category: "Frameworks & Styling",
      skills: ["Tailwind CSS", "Bootstrap CSS"],
    },
    {
      category: "Developer Tools",
      skills: ["Git", "GitHub"],
    },
  ];

  const projectsExperience = [
    {
      title: "Multi-LLM",
      subtitle: "A unified platform to interact with multiple Large Language Models",
      period: "09/2026 – 10/2026",
      summary:
        "A web-based multi-LLM application designed to provide a unified interface for interacting with multiple Large Language Models, enabling users to leverage different AI models within a single platform.",
      highlights: [
        "Integrated multiple Large Language Model APIs to enable seamless communication with different AI providers through a unified application interface.",
        "Developed dynamic UI components to handle user prompts and display AI-generated responses, creating an interactive experience for multi-model interactions.",
        "Implemented asynchronous API request handling to manage model responses efficiently, improving interaction flow and application responsiveness.",
      ],
      links: [
        { label: "Live Preview", url: "https://multi-llm-eta.vercel.app/" },
        { label: "GitHub Repo", url: "https://github.com/Daksh-Dhasmana/Multi-LLM" },
      ],
    },
    {
      title: "Memory Card Game",
      subtitle: "Interactive browser-based memory card game with dynamic gameplay",
      period: "08/2026 – 08/2026",
      summary:
        "An interactive React-based memory card game designed to test cognitive recall through component-driven state management and asynchronous API integration.",
      highlights: [
        "Engineered dynamic UI rendering using React functional components, Hooks (useState, useEffect), and DOM manipulation to shuffle cards seamlessly and update game state without full-page reloads.",
        "Integrated asynchronous API calls within custom React hooks using fetch and async/await to retrieve external card assets dynamically and manage loading states.",
        "Implemented declarative state management to track current and high scores, prevent duplicate card selections, and trigger responsive win/loss conditions efficiently.",
      ],
      links: [
        { label: "GitHub Repo", url: "https://github.com/Daksh-Dhasmana/Project-Memory-Card" },
      ],
    },
  ];

  return (
    <section id="resume" className="py-12 sm:py-20 bg-gray-950 border-t border-gray-800/80">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Heading & Download Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">
              Curriculum Vitae
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Resume &amp; Experience
            </h2>
            <p className="mt-1.5 sm:mt-2 text-gray-400 text-xs sm:text-sm md:text-base max-w-xl">
              An overview of my education, technical background, and project experience in full-stack and web development.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2.5 sm:gap-3">
            <a
              href={resumePdfPath}
              download="Daksh_Dhasmana_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-lg shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span>Download PDF</span>
            </a>

            <a
              href={resumePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-gray-900 hover:bg-gray-850 text-gray-200 hover:text-white text-xs sm:text-sm font-semibold rounded-lg border border-gray-700/80 transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg
                className="w-4 h-4 text-blue-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              <span>Open PDF</span>
            </a>

            <button
              type="button"
              onClick={() => setShowPdfPreview(!showPdfPreview)}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-gray-900/90 hover:bg-gray-800 text-gray-300 hover:text-white text-xs sm:text-sm font-medium rounded-lg border border-gray-800 transition-all"
            >
              <svg
                className="w-4 h-4 text-indigo-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <span>{showPdfPreview ? "Hide Preview" : "Preview PDF"}</span>
            </button>
          </div>
        </div>

        {/* Optional Collapsible PDF Embed Viewer */}
        {showPdfPreview && (
          <div className="mb-10 sm:mb-14 bg-gray-900 border border-gray-800 rounded-2xl p-3 sm:p-4 shadow-2xl">
            <div className="flex items-center justify-between mb-3 px-2">
              <span className="text-xs font-semibold text-gray-300">
                PDF Document Viewer
              </span>
              <button
                type="button"
                onClick={() => setShowPdfPreview(false)}
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                Close &times;
              </button>
            </div>
            <div className="w-full h-[550px] sm:h-[650px] rounded-xl overflow-hidden border border-gray-800 bg-gray-950">
              <iframe
                src={`${resumePdfPath}#view=FitH`}
                title="Daksh Dhasmana Resume"
                className="w-full h-full"
              />
            </div>
          </div>
        )}

        {/* Candidate Profile / Header Card */}
        <div className="bg-gradient-to-b from-gray-900/90 to-gray-900/50 border border-gray-800 rounded-2xl p-5 sm:p-7 shadow-lg mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-800/80 pb-5 mb-5">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Daksh Dhasmana
              </h3>
              <p className="text-sm sm:text-base text-blue-400 font-medium">
                Full-Stack Developer
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Dehradun, India
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 7983122505
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                dakshdhasmana@gmail.com
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
              Professional Summary
            </h4>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
              Full-Stack Developer specializing in JavaScript-based web applications. Experienced in modern frontend frameworks and responsive design through intensive project-based development. Passionate about solving complex logic problems and delivering seamless user experiences with a focus on scalable, maintainable code.
            </p>
          </div>
        </div>

        {/* 2-Column Grid: Education & Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
          {/* Education Card */}
          <div className="bg-gradient-to-b from-gray-900/90 to-gray-900/50 border border-gray-800 rounded-2xl p-5 sm:p-7 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  Education
                </span>
                <span className="px-2.5 py-0.5 text-xs font-semibold bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20">
                  04/2022 – 07/2027
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                Bachelor's in CSE
              </h3>
              <p className="text-sm font-semibold text-gray-300 mb-3">
                Graphic Era Hill University
              </p>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Focused on Computer Science and Engineering fundamentals, core algorithms, data structures, and modern software development practices.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-gray-800/80 flex items-center gap-2 text-xs text-gray-400">
              <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Dehradun, India</span>
            </div>
          </div>

          {/* Technical Skills Card */}
          <div className="bg-gradient-to-b from-gray-900/90 to-gray-900/50 border border-gray-800 rounded-2xl p-5 sm:p-7 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Skills &amp; Technologies
              </span>
              <span className="text-xs text-gray-400">From Official Resume</span>
            </div>
            <div className="space-y-4">
              {skillGroups.map((group, idx) => (
                <div key={idx}>
                  <p className="text-xs font-semibold text-gray-400 mb-2">
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 text-xs font-medium bg-gray-800/90 text-gray-200 border border-gray-700/60 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Breakdown (Resume Projects) */}
        <div>
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Project Experience
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">
              Detailed breakdown of engineering achievements and technical implementation from my resume.
            </p>
          </div>

          <div className="space-y-6">
            {projectsExperience.map((proj, pIdx) => (
              <div
                key={pIdx}
                className="bg-gradient-to-b from-gray-900/90 to-gray-900/50 border border-gray-800 hover:border-gray-700/80 rounded-2xl p-5 sm:p-7 shadow-lg transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-800/80 pb-4 mb-4">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-white">
                      {proj.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-blue-400 font-medium italic mt-0.5">
                      {proj.subtitle}
                    </p>
                  </div>
                  <span className="self-start sm:self-auto px-2.5 py-1 text-xs font-semibold bg-gray-800 text-gray-300 rounded-md border border-gray-700/60">
                    {proj.period}
                  </span>
                </div>

                <p className="text-gray-300 text-xs sm:text-sm mb-4 leading-relaxed">
                  {proj.summary}
                </p>

                <ul className="space-y-2 mb-5">
                  {proj.highlights.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-gray-800/60">
                  {proj.links.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <span>{link.label}</span>
                      <span>&rarr;</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
