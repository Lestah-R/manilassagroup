import { Link } from "react-router-dom";
import Page from "./Page";
import Hero from "./services/consulting/Hero";
import Accordion from "./services/consulting/Accordion";
import Cta from "./global/Cta";
import OrganizationsSlider from "./global/Organizations-slider";

function Consulting() {
  return (
    <>
      <Page title="Consulting">
        <Hero />
        <Accordion />
        <OrganizationsSlider />
        <Cta />
      </Page>
    </>
  );
}

export default Consulting;
