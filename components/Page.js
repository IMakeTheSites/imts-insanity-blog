import Head from 'next/head';

function Page({ title, children }) {
  return (
    <>
      <Head>
        <title>{title} - I Make the Sites</title>
      </Head>
      <header></header>
      <main className="px-6 py-4">{children}</main>
    </>
  );
}

export default Page;
