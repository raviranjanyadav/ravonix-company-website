import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

import Container from "@/components/ui/Container/Container";
import { faqData } from "./faqData";


const FAQ = () => {


  const [active, setActive] = useState<number | null>(null);



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
            mx-auto
            max-w-3xl
            text-center
          "

        >


          <p className="
            text-sm
            font-semibold
            uppercase
            tracking-widest
            text-blue-600
          ">

            FAQ

          </p>




          <h2 className="
            mt-3
            text-4xl
            font-bold
            text-slate-900
            sm:text-5xl
          ">

            Frequently Asked Questions

          </h2>





          <p className="
            mt-5
            text-base
            text-slate-600
            sm:text-lg
          ">

            Everything you need to know about our services and process.

          </p>


        </motion.div>







        {/* Accordion */}



        <div className="
          mx-auto
          mt-14
          max-w-3xl
          space-y-4
        ">


        {
          faqData.map((item,index)=>(


            <motion.div


              key={item.question}


              initial={{
                opacity:0,
                y:20
              }}


              whileInView={{
                opacity:1,
                y:0
              }}


              viewport={{
                once:true
              }}


              transition={{
                duration:0.4,
                delay:index * 0.1
              }}



              className="
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                transition
                hover:border-blue-400
              "


            >



              {/* Question */}


              <button

                onClick={()=> 
                  setActive(
                    active === index 
                    ? null 
                    : index
                  )
                }


                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  gap-4
                  p-6
                  text-left
                  font-semibold
                  text-slate-900
                "

              >


                <span>

                  {item.question}

                </span>




                <span className="
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-blue-50
                  text-blue-600
                ">


                  {
                    active === index
                    ?
                    <Minus size={18}/>
                    :
                    <Plus size={18}/>
                  }


                </span>



              </button>







              {/* Answer */}


              <AnimatePresence>


              {
                active === index && (

                  <motion.div


                    initial={{
                      height:0,
                      opacity:0
                    }}


                    animate={{
                      height:"auto",
                      opacity:1
                    }}


                    exit={{
                      height:0,
                      opacity:0
                    }}


                    transition={{
                      duration:0.3
                    }}


                    className="
                      overflow-hidden
                    "

                  >


                    <p className="
                      px-6
                      pb-6
                      leading-relaxed
                      text-slate-600
                    ">

                      {item.answer}

                    </p>


                  </motion.div>

                )
              }


              </AnimatePresence>




            </motion.div>


          ))
        }


        </div>



      </Container>


    </section>

  );

};


export default FAQ;