import { motion } from "framer-motion";

const projects = [
  {
    title: "AI-Powered Chatbot",
    description:
      "An intelligent chatbot designed to provide real-time responses and enhance user interaction through AI-powered conversations.",
    tech: ["React", "AI", "API"],
    github: "#",
    demo: "#",
  },

  {
    title: "Nexora AI",
    description:
      "An AI-powered platform focused on productivity, automation, and smart digital experiences.",
    tech: ["React", "JavaScript", "AI"],
    github: "#",
    demo: "#",
  },

  {
    title: "QuickMart",
    description:
      "A modern e-commerce application with responsive design, product management, and seamless user experience.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4">
          Projects
        </h2>

        <p className="text-gray-400 text-center mb-12">
          Featured projects showcasing my expertise in full-stack
          development, AI integration, and modern web technologies.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-cyan-500 transition-all duration-300"
            >
              <div className="h-2 bg-gradient-to-r from-cyan-500 to-blue-500"></div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 bg-black border border-zinc-700 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    className="px-5 py-2 rounded-xl border border-zinc-700 hover:border-cyan-500 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;