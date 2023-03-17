import Head from 'next/head';
import Title from './Title';

function Page({ title, children }) {
  return (
    <>
      <Head>
        <title>{title} - I Make the Sites</title>
      </Head>
      <header></header>
      <main className="px-6 py-4">
        {/* <Title>{title}</Title> */}
        {children}
      </main>
    </>
  );
}

export default Page;
