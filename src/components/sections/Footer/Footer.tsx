import Container from "@/components/ui/Container/Container";
import { RiTwitterXFill } from "react-icons/ri"
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {

    return (

        <footer className="
    bg-gray-950
    text-gray-300
    pt-20
    pb-8
    ">


            <Container>


                <div className="
        grid
        md:grid-cols-4
        gap-10
        ">


                    {/* Brand */}

                    <div className="md:col-span-1">


                        <h3 className="
            text-3xl
            font-bold
            text-white
            ">
                            RAVONIX
                        </h3>


                        <p className="
            mt-5
            text-gray-400
            leading-relaxed
            ">
                            Building scalable software solutions
                            for modern businesses using
                            cutting-edge technologies.
                        </p>


                        {/* Social */}
                        <div className="flex gap-4 mt-6">

                            <FaGithub
                                className="
    cursor-pointer
    hover:text-white
    text-xl
    "
                            />

                            <FaLinkedinIn
                                className="
    cursor-pointer
    hover:text-white
    text-xl
    "
                            />

                            <RiTwitterXFill
                                className="
    cursor-pointer
    hover:text-white
    text-xl
    "
                            />

                        </div>


                    </div>



                    {/* Services */}

                    <div>


                        <h4 className="
            text-white
            font-semibold
            mb-5
            ">
                            Services
                        </h4>


                        <ul className="space-y-3 text-sm">


                            <li>Web Development</li>
                            <li>CRM Solutions</li>
                            <li>ERP Development</li>
                            <li>AI Solutions</li>


                        </ul>


                    </div>




                    {/* Company */}

                    <div>


                        <h4 className="
            text-white
            font-semibold
            mb-5
            ">
                            Company
                        </h4>


                        <ul className="space-y-3 text-sm">


                            <li>About Us</li>
                            <li>Projects</li>
                            <li>Careers</li>
                            <li>Contact</li>


                        </ul>


                    </div>





                    {/* Contact */}

                    <div>


                        <h4 className="
            text-white
            font-semibold
            mb-5
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



                </div>



                {/* Bottom */}


                <div className="
        mt-16
        pt-6
        border-t
        border-gray-800
        flex
        flex-col
        md:flex-row
        justify-between
        gap-4
        text-sm
        ">


                    <p>
                        © 2026 RAVONIX Technologies.
                        All rights reserved.
                    </p>


                    <div className="flex gap-6">

                        <span>
                            Privacy Policy
                        </span>

                        <span>
                            Terms
                        </span>

                    </div>


                </div>



            </Container>


        </footer>

    );

};


export default Footer;