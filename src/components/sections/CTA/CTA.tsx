import { motion } from "framer-motion";

import Container from "@/components/ui/Container/Container";


const CTA = () => {


  return (

    <section className="
      py-20
      sm:py-24
    ">


      <Container>


        <div

          className="
            relative
            overflow-hidden
            rounded-3xl
            bg-gradient-to-br
            from-slate-900
            via-slate-900
            to-blue-900
            px-6
            py-14
            text-center
            sm:px-12
            sm:py-16
            lg:px-16
          "

        >



          {/* Glow Effects */}


          <div

            className="
              absolute
              -left-20
              -top-20
              h-72
              w-72
              rounded-full
              bg-blue-500/30
              blur-3xl
            "

          />



          <div

            className="
              absolute
              -bottom-20
              -right-20
              h-72
              w-72
              rounded-full
              bg-cyan-400/20
              blur-3xl
            "

          />








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
              relative
              z-10
            "

          >




            <p className="
              text-sm
              font-semibold
              uppercase
              tracking-widest
              text-blue-300
            ">

              Let's Build Together

            </p>








            <h2 className="
              mt-4
              text-4xl
              font-bold
              leading-tight
              text-white
              sm:text-5xl
            ">

              Ready to Transform
              <br className="hidden sm:block"/>
              Your Business?

            </h2>








            <p className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-relaxed
              text-slate-300
              sm:text-lg
            ">

              Build scalable digital products with RAVONIX.
              From idea to deployment, we help businesses grow faster.

            </p>









            <div className="
              mt-10
              flex
              flex-col
              justify-center
              gap-4
              sm:flex-row
            ">





              <motion.button

                whileHover={{
                  scale:1.05
                }}

                whileTap={{
                  scale:0.95
                }}


                className="
                  rounded-xl
                  bg-white
                  px-8
                  py-3
                  font-semibold
                  text-slate-900
                  transition
                  hover:bg-slate-100
                "

              >

                Start Project →

              </motion.button>







              <motion.button

                whileHover={{
                  scale:1.05
                }}

                whileTap={{
                  scale:0.95
                }}


                className="
                  rounded-xl
                  border
                  border-slate-600
                  px-8
                  py-3
                  font-semibold
                  text-white
                  transition
                  hover:bg-white/10
                "

              >

                Contact Us

              </motion.button>





            </div>





          </motion.div>





        </div>




      </Container>


    </section>

  );

};


export default CTA;