import Head from "next/head";
import Footer from "../components/layout/Footer";

const About = () => {
  return (
    <>
      <Head>
        <title>About page</title>
        <meta name='description' content='tutorial for head component' />
      </Head>
      <div>
        <h1 className="content">About</h1>
      </div>
    </>
  );
};

export default About;

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
