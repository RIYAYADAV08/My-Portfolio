import { motion } from "framer-motion";

import {
  FaJava,
  FaNodeJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiPostman,
  SiIntellijidea,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Programming Languages",
    description:
      "Building efficient applications and solving problems using modern programming languages.",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "JavaScript", icon: <SiJavascript /> },
    ],
  },

  {
    title: "Backend Technologies",
    description:
      "Developing scalable APIs and robust server-side applications.",
    skills: [
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Spring MVC", icon: <SiSpringboot /> },
      { name: "JDBC", icon: "🗄️" },
      { name: "Hibernate", icon: "⚙️" },
      { name: "JPA", icon: "📦" },
      { name: "REST APIs", icon: "🔗" },
    ],
  },

  {
    title: "Frontend Technologies",
    description:
      "Creating responsive and user-friendly web interfaces.",
    skills: [
      { name: "React.js", icon: <FaReact /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },

  {
    title: "Databases",
    description:
      "Managing and organizing application data efficiently.",
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },

  {
    title: "Tools & Platforms",
    description:
      "Tools used for development, testing, and collaboration.",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VS Code", icon: "💻" },
      { name: "IntelliJ IDEA", icon: <SiIntellijidea /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Maven", icon: "📚" },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-4">
          Technical Skills
        </h2>

        <p className="text-gray-400 text-center mb-12">
          Technologies and tools I use to build modern web applications.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-3">
                {category.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-black border border-zinc-700"
                  >
                    <span className="text-cyan-400 text-lg">
                      {skill.icon}
                    </span>

                    <span className="text-sm">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;