import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="green_gradient text-center"> GPT Prompts</span>
      </h1>
      <p className="desc text-center">
        Prompt-Manager is an open-source AI prompting platform that allows you
        to create, share, and discover prompts.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
