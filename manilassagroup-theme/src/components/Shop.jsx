import { Link } from "react-router-dom";
import Page from "../components/Page";
import Hero from "./shop/Hero";
import Library from "./shop/Library";
import Categories from "./shop/Categories";
import YourThinkingSKills from "./shop/Your-Thinking-Skills";
import YourPeopleSKills from "./shop/Your-People-Skills";
import EssentialSupervisors from "./shop/Essential-Supervisor";
import SpecialOffers from "./shop/SpecialOffers";

function ShopPage() {
  return (
    <>
      <Page title="Shop">
        <Hero />
        <Library />
        <Categories />
        <YourThinkingSKills />
        <YourPeopleSKills />
        <EssentialSupervisors />
        <SpecialOffers />
      </Page>
    </>
  );
}

export default ShopPage;
