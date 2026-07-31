import { Helmet } from "react-helmet-async";

import Hero from "@/components/sections/Hero/Hero";
import CompanyStats from "@/components/sections/CompanyStats/CompanyStats";
import TrustedClients from "@/components/sections/TrustedClients/TrustedClients";
import Services from "@/components/sections/Services/Services";
import WhyChoose from "@/components/sections/WhyChoose/WhyChoose";
import Technologies from "@/components/sections/Technologies/Technologies";
import Process from "@/components/sections/Process/Process";
import FeaturedProjects from "@/components/sections/FeaturedProjects/FeaturedProjects";
import Testimonials from "@/components/sections/Testimonials/Testimonials";
import FAQ from "@/components/sections/FAQ/FAQ";
import CTA from "@/components/sections/CTA/CTA";
import Footer from "@/components/sections/Footer/Footer";




function Home() {

  return (

    <>

      <Helmet>


        {/* Primary SEO */}

        <title>
          RAVONIX Technologies | Software Development Company
        </title>


        <meta
          name="description"
          content="
          RAVONIX builds scalable CRM, ERP, AI and custom software solutions
          for modern businesses with innovative technology.
          "
        />


        <meta
          name="keywords"
          content="
          software development company,
          CRM development,
          ERP solutions,
          AI solutions,
          web development,
          mobile app development
          "
        />





        {/* Open Graph */}

        <meta
          property="og:title"
          content="RAVONIX Technologies | Software Development Company"
        />


        <meta
          property="og:description"
          content="Building scalable digital solutions with modern technologies."
        />


        <meta
          property="og:type"
          content="website"
        />



        <meta
          property="og:url"
          content="https://ravonix.com"
        />





        {/* Twitter */}

        <meta
          name="twitter:card"
          content="summary_large_image"
        />


        <meta
          name="twitter:title"
          content="RAVONIX Technologies"
        />


        <meta
          name="twitter:description"
          content="Premium software development and digital transformation solutions."
        />



      </Helmet>





      <Hero />

      <CompanyStats />

      <TrustedClients />

      <Services />

      <WhyChoose />

      <Technologies />

      <Process />

      <FeaturedProjects />

      <Testimonials />

      <FAQ />

      <CTA />

      <Footer />


    </>

  );

}


export default Home;