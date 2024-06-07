import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>VCT-Jain Marriage</title>
        <meta
          name="Description"
          content="Igniculus"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Lugrasimo&display=swap" rel="stylesheet"></link>
      </Head>
  
   <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
