import Image from "next/image";
import HeroSection from "./HeroSection/page";
import LandingPage from "./Landingpage/page";
import SkillsSection from "./skill/page";
import AboutSection from "./About/page";
import ProjectsSection from "./project/page";
import ContactSection from "./contact/page";

export default function Home() {
  return (
    <>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
   </>
  );
}
