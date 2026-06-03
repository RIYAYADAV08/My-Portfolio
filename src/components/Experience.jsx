import { motion } from "framer-motion";

function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-4">
          Experience
        </h2>

        <p className="text-gray-400 text-center mb-12">
          My professional training and learning journey.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-500 transition-all duration-300"
        >
          <span className="text-cyan-400 font-medium">
            June 2026 - July 2026
          </span>

          <h3 className="text-3xl font-bold mt-3">
            ST Labs India
          </h3>

          <p className="text-xl text-gray-300 mt-2">
            Java Full Stack Development Trainee
          </p>

          <ul className="mt-6 space-y-3 text-gray-400">
            <li>• Worked with Java and Full Stack Development concepts.</li>
            <li>• Developed responsive web interfaces using React.</li>
            <li>• Learned database integration and backend development.</li>
            <li>• Built real-world project workflows and applications.</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}

export default Experience;