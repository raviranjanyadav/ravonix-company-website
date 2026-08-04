import CareersHero from "@/components/sections/Careers/CareersHero/CareersHero";
import WhyJoin from "@/components/sections/Careers/WhyJoin/WhyJoin";
import LifeAtRavonix from "@/components/sections/Careers/LifeAtRavonix/LifeAtRavonix";
import JobOpenings from "@/components/sections/Careers/JobOpenings/JobOpenings";
import HiringProcess from "@/components/sections/Careers/HiringProcess/HiringProcess";
import EmployeeBenefits from "@/components/sections/Careers/EmployeeBenefits/EmployeeBenefits";
import CareersFAQ from "@/components/sections/Careers/CareersFAQ/CareersFAQ";
import CareersCTA from "@/components/sections/Careers/CareersCTA/CareersCTA";



function Careers() {
  return (
    <>
      <CareersHero />
      <WhyJoin />
      <LifeAtRavonix />
      <JobOpenings />
       <HiringProcess />
        <EmployeeBenefits />
        <CareersFAQ />
        <CareersCTA />
    </>
  );
}

export default Careers;