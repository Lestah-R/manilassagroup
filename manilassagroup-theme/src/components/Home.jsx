import Page from "../components/Page";
import Hero from "./home/hero";
import WhatWeOffer from "./home/what-we-offer";
import Companies from "./home/Companies";
import Articles from "./global/Articles";
import Cta from "./global/Cta";

export default function Home() {
  return (
    <>
      <Page title="Home">
        <Hero />
        <WhatWeOffer />
        <Companies />
        <Articles />
        <Cta />
      </Page>
    </>
  );
}
