import Container from "@/components/ui/Container/Container";
import { projects } from "./projectData";


const FeaturedProjects = () => {
  return (
    <section className="py-24 bg-white">
      <Container>

        {/* Heading */}
        <div className="max-w-3xl mb-14">
          <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
            Our Work
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
            Featured Projects
          </h2>

          <p className="mt-5 text-gray-600 text-lg">
            Building scalable digital solutions that help businesses grow,
            automate and transform.
          </p>
        </div>


        {/* Projects */}
        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project,index)=>(
            <div
              key={index}
              className="
              group
              relative
              rounded-3xl
              border
              border-gray-200
              p-8
              bg-white
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-xl
              "
            >

              {/* Number */}
              <span className="
              text-sm
              font-semibold
              text-gray-400
              ">
                0{index+1}
              </span>


              <h3 className="
              mt-6
              text-2xl
              font-semibold
              text-gray-900
              ">
                {project.title}
              </h3>


              <p className="
              mt-3
              text-sm
              font-medium
              text-blue-600
              ">
                {project.tech}
              </p>


              <p className="
              mt-5
              text-gray-600
              leading-relaxed
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
              text-gray-900
              group-hover:text-blue-600
              transition
              "
              >
                View Project
                <span>
                  →
                </span>
              </button>


            </div>
          ))}

        </div>

      </Container>
    </section>
  );
};

export default FeaturedProjects;