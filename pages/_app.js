// import "../css/index.css";
// import Head from "next/head";
// import Layout from "@components/layout";

// function MyApp({ Component, pageProps }) {
//   return (
//     <Layout>
//       <Head>
//         <title>VCT-Jain Marriage</title>
//         <meta
//           name="Description"
//           content="Igniculus"
//         />
//         <link rel="preconnect" href="https://fonts.googleapis.com"/>
// <link rel="preconnect" href="https://fonts.gstatic.com" />
// <link href="https://fonts.googleapis.com/css2?family=Lugrasimo&display=swap" rel="stylesheet"></link>
//       </Head>
  
//    <Component {...pageProps} />
//     </Layout>
//   );
// }

// export default MyApp;
// pages/_app.js


// MyApp.js

import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";
import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
import Loader from "@components/loader";
import Router from "next/router";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  // const router = useRouter();


    const handleStart = (url) => {
      if (url !== Router.asPath) {
        setLoading(true);
      }
    };

    const handleComplete = (url) => {
      if (url === Router.asPath) {
        setLoading(false);
      }
    };

    Router.events.on('routeChangeStart', handleStart);
    Router.events.on('routeChangeComplete', handleComplete);
    Router.events.on('routeChangeError', handleComplete);

    


  return (
    <Layout>
      <Head>
        <title>VCT-Jain Marriage</title>
        <meta name="Description" content="Igniculus" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lugrasimo&display=swap"
          rel="stylesheet"
        />
      </Head>
      {loading ? <Loader /> : <Component {...pageProps} />}
    </Layout>
  );
}

export default MyApp;
