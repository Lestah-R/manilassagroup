import { Link } from "react-router-dom";
import Page from "../components/Page";
import Hero from "./shop/Hero";

function ShopPage() {
  return (
    <>
      <Page title="Shop">
        <Hero />
        <h1 className="text-center">Shop</h1>
      </Page>
    </>
  );
}

export default ShopPage;
