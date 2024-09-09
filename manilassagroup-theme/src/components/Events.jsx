import Page from "../components/Page";
import Hero from "./newsroom/events/Hero";
import EventsSlider from "./newsroom/events/Events-slider";
import Cta from "./global/Cta";

function Events() {
  return (
    <>
      <Page title="Events">
        <Hero />
        <EventsSlider />
        <Cta />
      </Page>
    </>
  );
}

export default Events;
