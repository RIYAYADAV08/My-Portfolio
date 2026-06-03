import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 flex justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl bg-zinc-900 border border-zinc-800 rounded-3xl p-10 md:p-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          About Me
        </h2>

        <p className="text-gray-300 text-lg leading-8 max-w-4xl">
          I'm Riya Yadav, a B.Tech CSE student and aspiring Java Full Stack Developer passionate about building modern, scalable, and user-friendly web applications using Java, Spring Boot, React and MySQL.
        </p>
      </motion.div>
    </section>
  );
}

export default About;