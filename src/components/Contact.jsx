import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          Let's Connect
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <motion.a
            whileHover={{ y: -8 }}
            href="mailto:riya080305@gmail.com"
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center hover:border-cyan-500 transition-all duration-300"
          >
            <FaEnvelope
              size={40}
              className="mx-auto text-cyan-400 mb-4"
          />  

            <h3 className="text-xl font-bold mb-2">
              Email
            </h3>

            <p className="text-gray-400 text-sm break-all">
              riya080305@gmail.com
            </p>
          </motion.a>

          <motion.a
            whileHover={{ y: -8 }}
            href="https://github.com/RIYAYADAV08"
            target="_blank"
            rel="noreferrer"
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center hover:border-cyan-500 transition-all duration-300"
          >
            <FaGithub
              size={40}
              className="mx-auto text-cyan-400 mb-4"
            />

            <h3 className="text-xl font-bold mb-2">
              GitHub
            </h3>

            <p className="text-gray-400 text-sm">
              @RIYAYADAV08
            </p>
          </motion.a>

          <motion.a
            whileHover={{ y: -8 }}
            href="https://linkedin.com/in/riyayadav0803"
            target="_blank"
            rel="noreferrer"
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center hover:border-cyan-500 transition-all duration-300"
          >
            <FaLinkedin
              size={40}
              className="mx-auto text-cyan-400 mb-4"
            />

            <h3 className="text-xl font-bold mb-2">
              LinkedIn
            </h3>

            <p className="text-gray-400 text-sm">
              Riya Yadav
            </p>
          </motion.a>

        </div>
      </div>
    </section>
  );
}

export default Contact;