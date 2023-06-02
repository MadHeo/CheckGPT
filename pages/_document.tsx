import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="CheckGPT" />
        <meta
          property="og:description"
          content="인공지능, 어떻게 할용하시나요."
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/image/GPT_logo.png"
        />
      </Head>
      <title>Check GPT</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
