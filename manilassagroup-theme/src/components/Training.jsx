import Page from "../components/Page";
import Hero from "./services/training/Hero.jsx";
import TrainingServicesGrid from "./services/training/Training-services-grid.jsx";
import Cta from "./global/Cta.jsx";
import OrganizationsSlider from "./global/Organizations-slider.jsx";

function Training() {
  return (
    <>
      <Page title="Training">
        <Hero />
        <TrainingServicesGrid />
        <OrganizationsSlider />
        <Cta />
      </Page>
    </>
  );
}

export default Training;
