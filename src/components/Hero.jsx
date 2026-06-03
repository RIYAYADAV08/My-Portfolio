import { motion } from "framer-motion";
import profile from "../assets/riya.jpeg";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-cyan-400 mb-4">
            Welcome to my portfolio
          </p>

          <h1 className="text-6xl font-bold leading-tight">
            Hi, I'm <br />
            <span className="text-cyan-400">
              Riya Yadav
            </span>
          </h1>

          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-white">
            Java Full Stack Developer
          </h2>

          <p className="mt-6 text-gray-400 max-w-lg">
            Passionate about building scalable web applications,
            solving DSA problems, and creating impactful digital
            experiences using Java, Spring Boot, React, and MySQL.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="bg-cyan-500 px-6 py-3 rounded-xl hover:scale-105 transition text-black font-semibold"
            >
              Resume
            </a>

            <a
              href="#contact"
              className="border border-zinc-700 px-6 py-3 rounded-xl hover:border-cyan-500 transition"
            >
              Contact
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="w-80 h-80 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-1 shadow-[0_0_40px_rgba(34,211,238,0.4)]">
            <img
              src={profile}
              alt="Riya Yadav"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;