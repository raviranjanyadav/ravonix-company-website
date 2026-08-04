import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/icons/Ravonix.svg";


const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about-us",
  },
  {
    name: "Services",
    path: "/our-services",
  },
  {
    name: "Careers",
    path: "/careers",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];


function Header() {

  const [open, setOpen] = useState(false);


  return (

    <header className="
      sticky
      top-0
      z-50
      border-b
      bg-white/80
      backdrop-blur
    ">


      <div className="
        relative
        mx-auto
        flex
        h-20
        max-w-[1280px]
        items-center
        justify-between
        px-6
        lg:px-8
      ">


        {/* Logo */}

        <Link
          to="/"
          onClick={() => setOpen(false)}
        >

          <img

            src={logo}
            alt="RAVONIX Technologies"

            className="
              h-14
              w-auto
              md:h-20
            "

          />

        </Link>




        {/* Desktop Navigation */}

        <nav className="
          hidden
          gap-8
          md:flex
        ">


          {
            navLinks.map((item)=>(

              <Link

                key={item.name}
                to={item.path}

                className="
                  text-sm
                  font-medium
                  text-slate-600
                  transition
                  hover:text-blue-600
                "

              >

                {item.name}

              </Link>

            ))
          }


        </nav>





        {/* Desktop CTA */}

        <Link

          to="/contact"

          className="
            hidden
            rounded-xl
            bg-blue-600
            px-5
            py-3
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-blue-700
            md:block
          "

        >

          Let's Talk

        </Link>





        {/* Mobile Menu Button */}

        <button

          onClick={() => setOpen(!open)}

          aria-label="Toggle menu"

          className="
            rounded-lg
            p-2
            text-slate-700
            hover:bg-slate-100
            md:hidden
          "

        >

          {
            open
            ?
            <X size={28}/>
            :
            <Menu size={28}/>
          }


        </button>







        {/* Mobile Menu */}

        <AnimatePresence>


        {
          open && (

            <motion.div


              initial={{
                opacity:0,
                y:-20
              }}


              animate={{
                opacity:1,
                y:0
              }}


              exit={{
                opacity:0,
                y:-20
              }}


              transition={{
                duration:0.25
              }}


              className="
                absolute
                left-0
                top-20
                w-full
                border-t
                bg-white
                px-6
                py-6
                shadow-lg
                md:hidden
              "


            >


              <nav className="
                flex
                flex-col
                gap-5
              ">



                {
                  navLinks.map((item)=>(


                    <motion.div

                      key={item.name}

                      initial={{
                        opacity:0,
                        x:-15
                      }}

                      animate={{
                        opacity:1,
                        x:0
                      }}

                      transition={{
                        duration:0.2
                      }}

                    >


                      <Link

                        to={item.path}

                        onClick={()=>setOpen(false)}

                        className="
                          text-base
                          font-medium
                          text-slate-700
                          transition
                          hover:text-blue-600
                        "

                      >

                        {item.name}


                      </Link>


                    </motion.div>


                  ))
                }





                {/* Mobile CTA */}

                <Link

                  to="/contact"

                  onClick={()=>setOpen(false)}

                  className="
                    mt-3
                    rounded-xl
                    bg-blue-600
                    px-5
                    py-3
                    text-center
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:bg-blue-700
                  "

                >

                  Let's Talk

                </Link>



              </nav>



            </motion.div>


          )
        }


        </AnimatePresence>




      </div>


    </header>

  );

}


export default Header;