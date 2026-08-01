import AboutHero from "./AboutHero/AboutHero";
import CompanyStory from "./CompanyStory/CompanyStory";
import MissionVision from "./MissionVision/MissionVision";
import CoreValues from "./CoreValues/CoreValues";
import CompanyTimeline from "./CompanyTimeline/CompanyTimeline";
import LeadershipTeam from "./LeadershipTeam/LeadershipTeam";
import TechnologyStack from "./TechnologyStack/TechnologyStack";
import CompanyStats from "./CompanyStats/CompanyStats";
import AboutCTA from "./AboutCTA/AboutCTA";
import Background from "@/components/ui/Background/Background";

function About() {
  return (
    <Background>
      <AboutHero />

      <CompanyStory />

      <MissionVision />

      <CoreValues />

      <CompanyTimeline />

      <LeadershipTeam />

      <TechnologyStack />

      <CompanyStats />

      <AboutCTA />
    </Background>
  );
}

export default About;