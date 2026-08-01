import { motion } from "framer-motion";

import Container from "@/components/ui/Container/Container";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";


const technologyGroups = [
  {
    title: "Frontend Development",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Angular",
    ],
  },
  {
    title: "Backend Development",
    technologies: [
      "Node.js",
      "Java",
      ".NET",
      "Python",
      "REST API",
    ],
  },
  {
    title: "Cloud & DevOps",
    technologies: [
      "AWS",
      "Azure",
      "Docker",
      "CI/CD",
      "Cloud Architecture",
    ],
  },
  {
    title: "Database & AI",
    technologies: [
      "PostgreSQL",
      "MongoDB",
      "Machine Learning",
      "AI Automation",
      "Data Analytics",
    ],
  },
];


function TechnologyExpertise() {

  return (
    <section className="py-24">

      <Container>


        <SectionHeading

          badge="Technology"

          title="Our"

          highlight="Expertise"

          description="
          We leverage modern technologies to build secure,
          scalable and future-ready digital solutions.
          "

        />



        <div
          className="
            mt-16
            grid
            gap-8
            md:grid-cols-2
          "
        >


          {
            technologyGroups.map((group,index)=>(

              <motion.div

                key={group.title}


                initial={{
                  opacity:0,
                  y:30
                }}


                whileInView={{
                  opacity:1,
                  y:0
                }}


                viewport={{
                  once:true
                }}


                transition={{
                  duration:0.5,
                  delay:index * 0.1
                }}


                className="
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  transition
                  hover:shadow-xl
                "

              >


                <h3
                  className="
                    text-xl
                    font-semibold
                    text-slate-900
                  "
                >
                  {group.title}
                </h3>



                <div
                  className="
                    mt-6
                    flex
                    flex-wrap
                    gap-3
                  "
                >

                  {
                    group.technologies.map((tech)=>(

                      <span

                        key={tech}

                        className="
                          rounded-full
                          bg-slate-100
                          px-4
                          py-2
                          text-sm
                          font-medium
                          text-slate-700
                        "

                      >
                        {tech}

                      </span>

                    ))
                  }

                </div>


              </motion.div>

            ))
          }


        </div>


      </Container>

    </section>
  );
}


export default TechnologyExpertise;