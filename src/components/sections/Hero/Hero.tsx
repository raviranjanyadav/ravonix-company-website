import { motion } from "framer-motion";
import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";


function Hero() {


  return (

    
<section className="relative py-24 lg:py-32">


      {/* Background Glow */}

      <div className="
        absolute
        -top-20
        right-0
        h-72
        w-72
        rounded-full
        bg-blue-500/20
        blur-3xl
      "
      />



      <Container>


        <div className="
          grid
          items-center
          gap-12
          lg:grid-cols-2
        ">



          {/* Left Content */}


          <div>


            {/* Badge */}

            <motion.p

              initial={{
                opacity:0,
                y:20
              }}

              animate={{
                opacity:1,
                y:0
              }}

              transition={{
                duration:0.5
              }}

              className="
                mb-4
                text-sm
                font-semibold
                uppercase
                tracking-wider
                text-blue-600
              "

            >

              Digital Transformation Partner

            </motion.p>






            {/* Heading */}

            <motion.h1

              initial={{
                opacity:0,
                y:30
              }}

              animate={{
                opacity:1,
                y:0
              }}

              transition={{
                duration:0.6,
                delay:0.1
              }}


              className="
                text-4xl
                font-bold
                leading-tight
                text-slate-900
                sm:text-5xl
                lg:text-6xl
              "

            >

              Building

              <span className="text-blue-600">
                {" "}Future Ready
              </span>

              Digital Solutions


            </motion.h1>







            {/* Description */}


            <motion.p

              initial={{
                opacity:0,
                y:30
              }}

              animate={{
                opacity:1,
                y:0
              }}

              transition={{
                duration:0.6,
                delay:0.2
              }}


              className="
                mt-6
                max-w-xl
                text-base
                leading-relaxed
                text-slate-600
                sm:text-lg
              "

            >

              RAVONIX helps businesses transform ideas into
              scalable software solutions with modern
              technologies and innovative strategies.


            </motion.p>







            {/* CTA */}


            <motion.div

              initial={{
                opacity:0,
                y:20
              }}

              animate={{
                opacity:1,
                y:0
              }}

              transition={{
                duration:0.6,
                delay:0.3
              }}


              className="
                mt-8
                flex
                flex-col
                gap-4
                sm:flex-row
              "

            >


              <Button>

                Start Project

              </Button>




              <button

                className="
                  rounded-xl
                  border
                  border-slate-300
                  px-6
                  py-3
                  font-semibold
                  text-slate-700
                  transition
                  hover:bg-slate-100
                "

              >

                View Services

              </button>



            </motion.div>



          </div>









          {/* Right Visual */}


          <motion.div


            initial={{
              opacity:0,
              scale:0.9
            }}


            animate={{
              opacity:1,
              scale:1
            }}


            transition={{
              duration:0.7,
              delay:0.2
            }}


            className="
              relative
              flex
              h-[320px]
              items-center
              justify-center
              overflow-hidden
              rounded-3xl
              bg-gradient-to-br
              from-blue-600
              to-cyan-500
              text-white
              sm:h-[400px]
            "


          >


            {/* Inner Glow */}

            <div className="
              absolute
              h-40
              w-40
              rounded-full
              bg-white/20
              blur-3xl
            "
            />




            <div className="
              relative
              text-center
            ">


              <h2 className="
                text-4xl
                font-bold
                sm:text-5xl
              ">

                RAVONIX

              </h2>


              <p className="mt-3 text-lg">

                Software Innovation

              </p>


            </div>



          </motion.div>





        </div>


      </Container>

</section>


  );

}


export default Hero;