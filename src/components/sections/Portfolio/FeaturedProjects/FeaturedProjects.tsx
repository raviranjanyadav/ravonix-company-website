import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container/Container";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import Button from "@/components/ui/Button/Button";

import { projects } from "./projects";

function FeaturedProjects() {
  return (
    <section className="py-24">

      <Container>

        <SectionHeading
  badge="Portfolio"
  title="Featured"
  highlight="Projects"
  description="Explore some of the digital products and platforms we've designed and developed."
/>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">

          {projects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-xl"
            >

              {/* Image Placeholder */}

              <div className="flex h-56 items-center justify-center bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-800">

                <span className="text-lg font-semibold text-white">
                  Project Preview
                </span>

              </div>

              <div className="p-7">

                <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                  {project.category}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="mt-8">

                  <Button>

                    <span className="flex items-center gap-2">

                      View Case Study

                      <ArrowRight size={18} />

                    </span>

                  </Button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </Container>

    </section>
  );
}

export default FeaturedProjects;