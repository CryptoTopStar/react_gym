import "../css/index.css";
import "../css/style.css";
import Head from "next/head";
import Layout from "../components/layout";
import ProgressBar from '@badrap/bar-of-progress'
import Router from 'next/router'

const progress = new ProgressBar({
  size: 2,
  color: '#6D25BF',
  className: 'bar-of-progress',
  delay: 100,
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>TAKEOFF</title>
        <meta
          name="Description"
          content="Crypto trading"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
