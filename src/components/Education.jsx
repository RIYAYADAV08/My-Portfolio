import { motion } from "framer-motion";

function Education() {
  const education = [
    {
      year: "2023 - 2027",
      title: "Bachelor of Technology (B.Tech)",
      institute: "Arya College of Engineering, Jaipur",
      details: "Computer Science & Engineering",
    },
    {
      year: "2021 - 2022",
      title: "Senior Secondary (Class XII)",
      institute: "Cheena Public School, Kanpur",
      details: "78.6%",
    },
    {
      year: "2019 - 2020",
      title: "Secondary (Class X)",
      institute: "Cheena Public School, Kanpur",
      details: "82%",
    },
  ];

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4">
          Education
        </h2>

        <p className="text-gray-400 text-center mb-16">
          My academic journey and educational background.
        </p>

        <div className="relative border-l-2 border-cyan-500 ml-4">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12 ml-8"
            >
              <div className="absolute w-4 h-4 bg-cyan-500 rounded-full -left-[9px]"></div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-500 transition-all duration-300">
                <span className="text-cyan-400 font-medium">
                  {item.year}
                </span>

                <h3 className="text-2xl font-bold mt-2">
                  {item.title}
                </h3>

                <p className="text-gray-300 mt-2">
                  {item.institute}
                </p>

                {item.title === "Bachelor of Technology (B.Tech)" ? (
                  <p className="text-white font-semibold mt-2">
                    {item.details}
                  </p>
                ) : (
                  <p className="text-white font-bold mt-2">
                    Score: {item.details}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;