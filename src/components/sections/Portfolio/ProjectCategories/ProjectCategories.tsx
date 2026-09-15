     import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Container from "@/components/ui/Container/Container";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";

import { projects } from "../FeaturedProjects/projects";

const categories = [
  "All",
  "Web Application",
  "Enterprise",
  "Healthcare",
  "HR Tech",
  "POS",
  "Artificial Intelligence",
];

function ProjectCategories() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;

    return projects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section className="py-24 ">

      <Container>

        <SectionHeading
          badge="Portfolio"
          title="Browse"
          highlight="Projects"
          description="Filter projects by industry and technology."
        />

        {/* Filter */}

        <div className="mt-12 flex flex-wrap justify-center gap-4">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300
              ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-blue-600 hover:text-blue-600"
              }`}
            >
              {category}
            </button>

          ))}

        </div>

        {/* Grid */}

        <motion.div
          layout
          className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >

          <AnimatePresence>

            {filteredProjects.map((project) => (

              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: .9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: .9 }}
                whileHover={{ y: -8 }}
                transition={{ duration: .3 }}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl"
              >

                <div className="h-56 bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-900" />

                <div className="p-7">

                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">

                    {project.category}

                  </span>

                  <h3 className="mt-5 text-2xl font-bold">

                    {project.title}

                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">

                    {project.description}

                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">

                    {project.technologies.map((tech) => (

                      <span
                        key={tech}
                        className="rounded-full bg-slate-100 px-3 py-1 text-sm"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                </div>

              </motion.div>

            ))}

          </AnimatePresence>

        </motion.div>

      </Container>

    </section>
  );
}

export default ProjectCategories;