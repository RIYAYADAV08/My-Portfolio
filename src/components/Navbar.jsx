import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-zinc-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold">
          RIYA YADAV<span className="text-cyan-400"></span>
        </h1>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">

          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-cyan-400 transition"
          >
            About
          </Link>

          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-cyan-400 transition"
          >
            Skills
          </Link>

          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-cyan-400 transition"
          >
            Projects
          </Link>

          <Link
            to="experience"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-cyan-400 transition"
          >
            Experience
          </Link>

          <Link
            to="education"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-cyan-400 transition"
          >
            Education
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-cyan-400 transition"
          >
            Contact
          </Link>
        </div>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="hidden md:block px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition-all duration-300"
        >
          Resume
        </a>

      </div>
    </nav>
  );
}

export default Navbar;