import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <h3 className="text-2xl font-bold">
              RIYA YADAV<span className="text-cyan-400">.</span>
            </h3>

            <p className="text-gray-400 mt-2">
              Java Full Stack Developer
            </p>
          </div>

          <div className="flex gap-5 text-2xl">

            <a
              href="https://github.com/RIYAYADAV08"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/riyayadav0803"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        <div className="border-t border-zinc-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          © 2026 Riya Yadav. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;