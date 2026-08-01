import Container from "@/components/ui/Container/Container";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { technologies } from "./techData";


function TechnologyStack() {
  return (
    <section className="py-24 bg-slate-50">

      <Container>

        <SectionHeading
          badge="Technology"
          title="Our"
          highlight="Tech Stack"
          description="We use modern technologies to build scalable, secure and high-performance digital solutions."
        />


        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {technologies.map((tech) => (

            <div
              key={tech.category}
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-8
                transition
                hover:-translate-y-1
                hover:shadow-xl
              "
            >

              <h3 className="text-xl font-semibold">
                {tech.category}
              </h3>


              <div className="mt-6 flex flex-wrap gap-3">

                {tech.items.map((item) => (

                  <span
                    key={item}
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
                    {item}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>


      </Container>

    </section>
  );
}


export default TechnologyStack;