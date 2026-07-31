import { motion } from "framer-motion";
import { RiTwitterXFill } from "react-icons/ri";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import Container from "@/components/ui/Container/Container";


const Footer = () => {


  return (

    <footer className="
      relative
      overflow-hidden
      bg-slate-950
      pt-20
      pb-8
      text-slate-300
    ">


      {/* Background Glow */}

      <div className="
        absolute
        -right-20
        top-0
        h-72
        w-72
        rounded-full
        bg-blue-600/20
        blur-3xl
      " />




      <Container>



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
            grid
            gap-10
            sm:grid-cols-2
            lg:grid-cols-4
          "

        >




          {/* Brand */}


          <div>


            <h3 className="
              text-3xl
              font-bold
              text-white
            ">

              RAVONIX

            </h3>



            <p className="
              mt-5
              leading-relaxed
              text-slate-400
            ">

              Building scalable software solutions
              for modern businesses using
              cutting-edge technologies.

            </p>




            <div className="
              mt-6
              flex
              gap-4
            ">


              <FaGithub

                className="
                  cursor-pointer
                  text-xl
                  transition
                  hover:text-white
                "

              />



              <FaLinkedinIn

                className="
                  cursor-pointer
                  text-xl
                  transition
                  hover:text-white
                "

              />



              <RiTwitterXFill

                className="
                  cursor-pointer
                  text-xl
                  transition
                  hover:text-white
                "

              />


            </div>



          </div>








          {/* Services */}


          <div>


            <h4 className="
              mb-5
              font-semibold
              text-white
            ">

              Services

            </h4>



            <ul className="
              space-y-3
              text-sm
            ">


              <li className="hover:text-white cursor-pointer">
                Web Development
              </li>

              <li className="hover:text-white cursor-pointer">
                CRM Solutions
              </li>

              <li className="hover:text-white cursor-pointer">
                ERP Development
              </li>

              <li className="hover:text-white cursor-pointer">
                AI Solutions
              </li>


            </ul>



          </div>









          {/* Company */}


          <div>


            <h4 className="
              mb-5
              font-semibold
              text-white
            ">

              Company

            </h4>



            <ul className="
              space-y-3
              text-sm
            ">


              <li className="hover:text-white cursor-pointer">
                About Us
              </li>


              <li className="hover:text-white cursor-pointer">
                Projects
              </li>


              <li className="hover:text-white cursor-pointer">
                Careers
              </li>


              <li className="hover:text-white cursor-pointer">
                Contact
              </li>


            </ul>


          </div>









          {/* Contact */}


          <div>


            <h4 className="
              mb-5
              font-semibold
              text-white
            ">

              Contact

            </h4>



            <ul className="
              space-y-3
              text-sm
            ">


              <li>
                info@ravonix.com
              </li>


              <li>
                +91 00000 00000
              </li>


              <li>
                India
              </li>


            </ul>


          </div>





        </motion.div>








        {/* Bottom */}


        <div className="
          mt-16
          flex
          flex-col
          gap-4
          border-t
          border-slate-800
          pt-6
          text-sm
          md:flex-row
          md:items-center
          md:justify-between
        ">


          <p className="text-slate-400">

            © 2026 RAVONIX Technologies.
            All rights reserved.

          </p>




          <div className="
            flex
            gap-6
            text-slate-400
          ">


            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>


            <span className="hover:text-white cursor-pointer">
              Terms
            </span>


          </div>



        </div>




      </Container>


    </footer>

  );

};


export default Footer;