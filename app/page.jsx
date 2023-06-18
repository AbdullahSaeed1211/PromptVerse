import Feed from "@components/Feed";
import Footer from "@components/footer";

const Home = () => (
  <>
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="green_gradient text-center"> AI-Powered Prompts</span>

      </h1>
      <p className="desc text-center">
        PromptVerse is an <span className="blue_gradient"><b>open-source</b></span> AI prompting tool for modern
        world to discover, create and share creative prompts
      </p>

      <Feed />
      <Footer />
    </section>
  </>
);

export default Home;
