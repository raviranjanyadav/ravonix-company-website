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
    RAVONIX Technologies | Custom Software & AI Solutions
  </title>

  <meta
    name="description"
    content="
    RAVONIX delivers enterprise-grade CRM, ERP, AI, and cloud-based software solutions.
    We help businesses accelerate digital transformation with scalable web and mobile applications.
    "
  />

  <meta
    name="keywords"
    content="
    custom software solutions,
    enterprise CRM development,
    cloud ERP systems,
    AI powered applications,
    web and mobile app development,
    digital transformation services,
    IT consulting and automation
    "
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="RAVONIX Technologies | Custom Software & AI Solutions"
  />
  <meta
    property="og:description"
    content="Enterprise-grade CRM, ERP, AI and cloud solutions for modern businesses."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://ravonix.com" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="RAVONIX Technologies" />
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