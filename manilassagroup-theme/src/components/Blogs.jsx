import Page from "../components/Page";
import Hero from "./newsroom/blogs/Hero";
import BlogsGridList from "./newsroom/blogs/Blogs-grid-list";

function Blogs() {
  return (
    <>
      <Page title="Blogs">
        <Hero />
        <BlogsGridList />
      </Page>
    </>
  );
}

export default Blogs;
