import { motion } from "framer-motion";
import Container from "@/components/ui/Container/Container";
import Button from "@/components/ui/Button/Button";


function CareersHero() {

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-purple-50" />


      <Container>

        <div className="grid items-center gap-12 lg:grid-cols-2">


          {/* Content */}

          <motion.div
            initial={{opacity:0,y:30}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.6}}
          >

            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-600">
              Careers at RAVONIX
            </p>


            <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">

              Build The Future
              <span className="block text-blue-600">
                With Us
              </span>

            </h1>


            <p className="mt-6 max-w-xl text-lg text-slate-600">

              Join a team of passionate engineers, designers,
              and innovators building next-generation digital
              solutions for businesses worldwide.

            </p>


            <div className="mt-8">

              <Button>
                View Open Positions
              </Button>

            </div>


          </motion.div>



          {/* Right Side */}

          <motion.div
            initial={{opacity:0,scale:0.9}}
            animate={{opacity:1,scale:1}}
            transition={{duration:0.6}}
            className="relative"
          >

            <div className="
              flex
              h-80
              items-center
              justify-center
              rounded-3xl
              bg-gradient-to-br
              from-blue-600
              to-purple-700
              text-white
              shadow-xl
            ">

              <h2 className="text-4xl font-bold">
                Join RAVONIX 🚀
              </h2>

            </div>


          </motion.div>


        </div>


      </Container>

    </section>
  );
}


export default CareersHero;