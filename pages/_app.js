import Head from 'next/head';
import NavBar from '../components/NavBar';
import '@/styles/globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Footer from '@/components/Footer';
config.autoAddCss = false;

function App({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <header></header>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;
