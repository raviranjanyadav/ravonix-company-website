import { motion } from "framer-motion";

import Container from "@/components/ui/Container/Container";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";

import { services } from "./servicesData";


function ServiceGrid() {

  return (
    <section className="py-24">

      <Container>


        <SectionHeading

          badge="What We Offer"

          title="Our"

          highlight="Services"

          description="
          We help businesses transform ideas into powerful digital products
          with modern technologies.
          "

        />



        <div
          className="
            mt-16
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >


          {
            services.map((service, index)=>{

              const Icon = service.icon;


              return (

                <motion.div

                  key={service.title}


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



                  whileHover={{
                    y:-8
                  }}


                  className="
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-8
                    shadow-sm
                    transition
                    hover:shadow-xl
                  "

                >


                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-xl
                      bg-blue-600
                      text-white
                    "
                  >

                    <Icon size={28}/>

                  </div>



                  <h3
                    className="
                      mt-6
                      text-xl
                      font-semibold
                      text-slate-900
                    "
                  >

                    {service.title}

                  </h3>



                  <p
                    className="
                      mt-4
                      text-sm
                      leading-6
                      text-slate-600
                    "
                  >

                    {service.description}

                  </p>


                </motion.div>

              )

            })
          }


        </div>


      </Container>

    </section>
  );
}


export default ServiceGrid;