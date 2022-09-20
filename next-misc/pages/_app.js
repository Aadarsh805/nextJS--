import Head from "next/head";
import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import "styles/globals.css";
import "styles/layout.css";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Head>
        <title>App page</title>
        <meta name="description" content="Yahallo" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
