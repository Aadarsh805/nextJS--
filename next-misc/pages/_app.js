import Head from "next/head";
import Header from "@/layout/Header";
import "styles/globals.css";
import "styles/layout.css";
import Footer from "@/layout/Footer";

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
