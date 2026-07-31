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