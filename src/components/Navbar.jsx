import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-gray-800/80">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="text-lg sm:text-xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors"
        >
          Daksh <span className="text-blue-500">Dhasmana</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2 text-sm font-medium text-gray-400">
          <a
            href="#home"
            className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-gray-900 transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-gray-900 transition-colors"
          >
            About
          </a>
          <a
            href="#skills"
            className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-gray-900 transition-colors"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-gray-900 transition-colors"
          >
            Projects
          </a>
          <a
            href="mailto:dakshdhasmana@gmail.com"
            className="ml-2 px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-900 transition-colors focus:outline-none"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-950/95 border-b border-gray-800 px-4 pt-2 pb-4 space-y-1">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-gray-900 transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-gray-900 transition-colors"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-gray-900 transition-colors"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-gray-900 transition-colors"
          >
            Projects
          </a>
          <a
            href="mailto:dakshdhasmana@gmail.com"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-blue-400 hover:bg-gray-900 transition-colors"
          >
            Contact Me (dakshdhasmana@gmail.com)
          </a>
        </div>
      )}
    </nav>
  );
}
