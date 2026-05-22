import AboutHero from "../views/aboutViews/AboutHero";
import MissionVision from "../views/aboutViews/MissionVision";
import CoreValues from "../views/aboutViews/CoreValues";
import Timeline from "../views/aboutViews/Timeline";
import StatsBar from "../views/aboutViews/StatsBar";
import TeamSection from "../views/aboutViews/TeamSection";

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <CoreValues />
      <Timeline />
      <StatsBar />
      <TeamSection />
    </>
  );
};

export default AboutPage;
