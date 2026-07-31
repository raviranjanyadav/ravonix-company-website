import { motion } from "framer-motion";

import Container from "@/components/ui/Container/Container";
import ServiceCard from "./ServiceCard";

import {
  Monitor,
  Smartphone,
  Brain,
  Cloud,
  Database,
  Palette,
} from "lucide-react";


const services = [
  {
    icon: Monitor,
    title: "Web Development",
    description:
      "Modern, scalable and high-performance web applications built with React, Next.js and enterprise technologies.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Cross-platform Android & iOS applications with Flutter and React Native.",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description:
      "AI-powered automation, chatbots, recommendation engines and intelligent business solutions.",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description:
      "AWS, Azure and cloud-native architecture for secure and scalable applications.",
  },
  {
    icon: Database,
    title: "CRM & ERP",
    description:
      "Custom CRM, ERP and enterprise management systems tailored for your business.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description:
      "Premium user experience and modern interface design focused on conversion and usability.",
  },
];



function Services() {


  return (

    <section className="
      py-20
      sm:py-24
      lg:py-28
      bg-white
    ">


      <Container>



        {/* Header */}

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
            text-center
          "

        >


          <p className="
            font-semibold
            uppercase
            tracking-[4px]
            text-blue-600
          ">

            Services

          </p>




          <h2 className="
            mt-4
            text-4xl
            font-bold
            text-slate-900
            sm:text-5xl
          ">

            What We Do

          </h2>




          <p className="
            mx-auto
            mt-6
            max-w-3xl
            text-base
            leading-relaxed
            text-slate-600
            sm:text-lg
          ">

            We build premium digital products that help businesses grow,
            automate operations and deliver exceptional customer experiences.

          </p>


        </motion.div>





        {/* Cards */}


        <div className="
          mt-14
          grid
          gap-8
          sm:grid-cols-2
          xl:grid-cols-3
          lg:mt-20
        ">


          {
            services.map((service,index)=>(


              <motion.div

                key={service.title}

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
                  delay:index * 0.1
                }}

              >


                <ServiceCard
                  {...service}
                />


              </motion.div>


            ))
          }


        </div>



      </Container>


    </section>

  );

}


export default Services;