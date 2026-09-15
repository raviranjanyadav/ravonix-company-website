import PortfolioHero from "@/components/sections/Portfolio/PortfolioHero/PortfolioHero";
import FeaturedProjects from "@/components/sections/Portfolio/FeaturedProjects/FeaturedProjects";
import ProjectCategories from "@/components/sections/Portfolio/ProjectCategories/ProjectCategories";
import DevelopmentProcess from "@/components/sections/Portfolio/DevelopmentProcess/DevelopmentProcess";
import Background from "@/components/ui/Background/Background";


function Portfolio() {
  return (
  <Background>

      <PortfolioHero />

      <FeaturedProjects />

      <ProjectCategories />

      <DevelopmentProcess />

    </Background>
  );
}

export default Portfolio;