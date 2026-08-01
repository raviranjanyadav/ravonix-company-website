import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Users,
  Rocket,
} from "lucide-react";

import Container from "@/components/ui/Container/Container";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";


const models = [
  {
    title: "Project Based",
    description:
      "Perfect for businesses looking for complete solutions with defined scope, timeline and deliverables.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Dedicated Team",
    description:
      "Get experienced developers and technology experts working as an extension of your team.",
    icon: Users,
  },
  {
    title: "Product Development",
    description:
      "From idea validation to scalable product launch, we help build technology products.",
    icon: Rocket,
  },
];


function EngagementModel() {

  return (
    <section className="bg-slate-50 py-24">

      <Container>


        <SectionHeading

          badge="How We Work"

          title="Flexible"

          highlight="Engagement Models"

          description="
          Choose the right collaboration model that fits your business goals.
          "

        />



        <div
          className="
            mt-16
            grid
            gap-8
            md:grid-cols-3
          "
        >


          {
            models.map((model,index)=>{

              const Icon = model.icon;


              return (

                <motion.div

                  key={model.title}


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
                    "
                  >

                    {model.title}

                  </h3>



                  <p
                    className="
                      mt-4
                      text-sm
                      leading-6
                      text-slate-600
                    "
                  >

                    {model.description}

                  </p>


                </motion.div>

              );

            })
          }


        </div>


      </Container>

    </section>
  );
}


export default EngagementModel;