import ServicesHero from "./ServicesHero/ServicesHero";
import ServiceGrid from "./ServiceGrid/ServiceGrid";
import EngagementModel from "./EngagementModel/EngagementModel";
import TechnologyExpertise from "./TechnologyExpertise/TechnologyExpertise";
import ServicesCTA from "./ServicesCTA/ServicesCTA";


function Services() {
  return (
    <>
      <ServicesHero />

      <ServiceGrid />
      <EngagementModel />
        <TechnologyExpertise />
        <ServicesCTA />

    </>
  );
}


export default Services;