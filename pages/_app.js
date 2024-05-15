import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Igniculus</title>
        <meta
          name="Description"
          content="Igniculus"
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
