import { Link } from "react-router-dom";
import Page from "../components/Page";
import Hero from "./about/Hero.jsx";
import MissionVision from "./about/Mission-vision.jsx";
import Dedication from "./about/Dedication.jsx";
import Companies from "./home/Companies.jsx";
import Cta from "./global/Cta.jsx";
import Articles from "./global/Articles.jsx";

function AboutPage() {
  return (
    <>
      <Page title="About Us">
        <Hero />
        <MissionVision />
        <Dedication />
        <Companies />
        <Articles />
        <Cta />
      </Page>
    </>
  );
}

export default AboutPage;
