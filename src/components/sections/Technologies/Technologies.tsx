import Container from "@/components/ui/Container/Container";
import { motion } from "framer-motion";

const techGroups = [
  {
    title: "Frontend",
    color: "from-blue-500 to-cyan-500",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Angular",
    ],
  },
  {
    title: "Backend",
    color: "from-violet-500 to-purple-500",
    technologies: [
      "Node.js",
      "Express",
      "Java",
      ".NET",
      "Python",
    ],
  },
  {
    title: "Cloud & DevOps",
    color: "from-emerald-500 to-teal-500",
    technologies: [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
    ],
  },
  {
    title: "Database",
    color: "from-orange-500 to-red-500",
    technologies: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
    ],
  },
];

function Technologies() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-100 blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-100 blur-3xl opacity-40" />

      <Container>
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Technologies
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Modern Technology Stack
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We leverage cutting-edge technologies to deliver scalable,
            secure and high-performance digital solutions for startups,
            enterprises and global businesses.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {techGroups.map((group) => (
            <motion.div
              key={group.title}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-2xl"
            >
              {/* Title */}

              <div
                className={`inline-flex rounded-xl bg-gradient-to-r ${group.color} px-5 py-2 text-lg font-semibold text-white`}
              >
                {group.title}
              </div>

              {/* Technologies */}

              <div className="mt-8 flex flex-wrap gap-4">
                {group.technologies.map((tech) => (
                  <motion.div
                    key={tech}
                    whileHover={{
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="
                      rounded-full
                      border
                      border-slate-200
                      bg-slate-50
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      text-slate-700
                      transition-all
                      hover:border-blue-500
                      hover:bg-blue-50
                      hover:text-blue-600
                      cursor-pointer
                    "
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}

        <div className="mt-24 text-center">
          <h3 className="text-3xl font-bold text-slate-900">
            Building Future-Ready Digital Products
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Our technology ecosystem enables us to create modern web
            applications, enterprise software, AI solutions and cloud-native
            platforms.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Technologies;