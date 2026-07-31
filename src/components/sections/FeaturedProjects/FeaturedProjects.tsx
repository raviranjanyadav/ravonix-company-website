import { motion } from "framer-motion";

import Container from "@/components/ui/Container/Container";
import { projects } from "./projectData";


const FeaturedProjects = () => {


  return (

    <section className="
      bg-white
      py-20
      sm:py-24
    ">


      <Container>


        {/* Heading */}

        <motion.div

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
            duration:0.6
          }}

          className="
            mb-14
            max-w-3xl
          "

        >


          <p className="
            text-sm
            font-semibold
            uppercase
            tracking-widest
            text-blue-600
          ">

            Our Work

          </p>



          <h2 className="
            mt-3
            text-4xl
            font-bold
            text-slate-900
            sm:text-5xl
          ">

            Featured Projects

          </h2>




          <p className="
            mt-5
            text-base
            leading-relaxed
            text-slate-600
            sm:text-lg
          ">

            Building scalable digital solutions that help businesses grow,
            automate and transform.

          </p>


        </motion.div>







        {/* Project Cards */}


        <div className="
          grid
          gap-8
          md:grid-cols-2
          xl:grid-cols-3
        ">


        {
          projects.map((project,index)=>(


            <motion.div

              key={project.title}

              initial={{
                opacity:0,
                y:40
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
                delay:index * 0.15
              }}



              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                transition-all
                duration-300
                hover:-translate-y-3
                hover:border-blue-500
                hover:shadow-2xl
              "

            >



              {/* Number */}

              <div className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-blue-50
                text-sm
                font-bold
                text-blue-600
              ">

                0{index+1}

              </div>







              <h3 className="
                mt-6
                text-2xl
                font-bold
                text-slate-900
              ">

                {project.title}

              </h3>







              {/* Tech Badge */}

              <div className="
                mt-4
                inline-flex
                rounded-full
                bg-slate-100
                px-4
                py-2
                text-sm
                font-medium
                text-blue-600
              ">

                {project.tech}

              </div>







              <p className="
                mt-5
                leading-relaxed
                text-slate-600
              ">

                {project.description}

              </p>







              <button

                className="
                  mt-8
                  flex
                  items-center
                  gap-2
                  font-semibold
                  text-slate-900
                  transition-all
                  group-hover:gap-4
                  group-hover:text-blue-600
                "

              >

                View Project

                <span>

                  →

                </span>


              </button>





              {/* Hover Glow */}

              <div className="
                absolute
                -right-20
                -top-20
                h-40
                w-40
                rounded-full
                bg-blue-500/10
                blur-3xl
                transition
                group-hover:bg-blue-500/20
              "/>


            </motion.div>


          ))
        }


        </div>



      </Container>


    </section>

  );

};


export default FeaturedProjects;