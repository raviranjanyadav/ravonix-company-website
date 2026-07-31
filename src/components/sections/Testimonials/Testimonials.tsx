import { motion } from "framer-motion";

import Container from "@/components/ui/Container/Container";
import { testimonials } from "./testimonialData";



const Testimonials = () => {


  return (

    <section className="
      bg-slate-50
      py-20
      sm:py-24
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

            Testimonials

          </p>




          <h2 className="
            mt-3
            text-4xl
            font-bold
            text-slate-900
            sm:text-5xl
          ">

            What Our Clients Say

          </h2>





          <p className="
            mt-5
            text-base
            text-slate-600
            sm:text-lg
          ">

            Trusted by businesses worldwide for innovative software solutions.

          </p>



        </motion.div>







        {/* Cards */}



        <div className="
          mt-14
          grid
          gap-8
          md:grid-cols-2
          xl:grid-cols-3
        ">



        {
          testimonials.map((item,index)=>(


            <motion.div


              key={item.name}


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
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                transition-all
                duration-300
                hover:-translate-y-3
                hover:shadow-2xl
              "


            >





              {/* Stars */}


              <div className="
                flex
                gap-1
                text-xl
                text-yellow-400
              ">

                ★★★★★

              </div>







              {/* Review */}


              <p className="
                mt-6
                leading-relaxed
                text-slate-600
              ">

                "{item.review}"

              </p>









              {/* User */}


              <div className="
                mt-8
                flex
                items-center
                gap-4
                border-t
                border-slate-200
                pt-5
              ">



                {/* Avatar */}

                <div className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-blue-600
                  font-bold
                  text-white
                ">

                  {
                    item.name
                      .split(" ")
                      .map(word => word[0])
                      .join("")
                  }

                </div>





                <div>


                  <h4 className="
                    font-semibold
                    text-slate-900
                  ">

                    {item.name}

                  </h4>




                  <p className="
                    text-sm
                    text-slate-500
                  ">

                    {item.role}

                  </p>


                </div>



              </div>





            </motion.div>


          ))
        }


        </div>




      </Container>


    </section>

  );

};


export default Testimonials;