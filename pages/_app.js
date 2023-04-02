import Head from 'next/head';

import '@/styles/globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Footer from '@/components/Footer';
import UpperNav from '@/components/UpperNav';
import Section from '@/components/Section/Section.js';
import SocialNetworks from '@/components/SocialNetworks/SocialNetworks.js';
config.autoAddCss = false;

function App({ Component, pageProps, props }) {
  return (
    <>
      <Head></Head>
      <header></header>
      <UpperNav />
      <Section>
        <SocialNetworks />
      </Section>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;
