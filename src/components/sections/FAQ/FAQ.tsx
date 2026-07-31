import { useState } from "react";
import Container from "@/components/ui/Container/Container";
import { faqData } from "./faqData";


const FAQ = () => {

  const [active, setActive] = useState<number | null>(null);


  return (

    <section className="py-24 bg-white">

      <Container>


        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">


          <p className="
          text-sm
          uppercase
          tracking-widest
          font-semibold
          text-blue-600
          ">
            FAQ
          </p>


          <h2 className="
          mt-3
          text-4xl
          md:text-5xl
          font-bold
          text-gray-900
          ">
            Frequently Asked Questions
          </h2>


          <p className="
          mt-5
          text-gray-600
          text-lg
          ">
            Everything you need to know about our services and process.
          </p>


        </div>



        {/* Accordion */}


        <div className="
        max-w-3xl
        mx-auto
        mt-14
        space-y-4
        ">


        {
          faqData.map((item,index)=>(


            <div
            key={index}
            className="
            border
            border-gray-200
            rounded-2xl
            overflow-hidden
            "
            >


              <button
              onClick={()=> 
                setActive(active === index ? null : index)
              }
              className="
              w-full
              flex
              justify-between
              items-center
              p-6
              text-left
              font-semibold
              text-gray-900
              "
              >

                {item.question}


                <span className="
                text-xl
                text-blue-600
                ">
                  {active === index ? "-" : "+"}
                </span>


              </button>



              {
                active === index && (

                  <div className="
                  px-6
                  pb-6
                  text-gray-600
                  leading-relaxed
                  ">
                    {item.answer}
                  </div>

                )
              }



            </div>


          ))
        }


        </div>


      </Container>


    </section>

  );
};


export default FAQ;