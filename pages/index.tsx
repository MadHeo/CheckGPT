import Head from "next/head";
import HomePage from "../src/components/homePage/index";
import Layout from "../src/commons/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>CheckGPT</title>
        <meta name="description" content="CheckGPT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
