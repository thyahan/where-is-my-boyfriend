import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SSR Boilerplate</title>
        <meta name="description" content="SSR boilerplate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen h-screen bg-slate-600 text-white">
        <h1>Hello</h1>
      </main>
    </div>
  );
};

export default Home;
