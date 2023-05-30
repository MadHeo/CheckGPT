import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="GROOMEONG" />
        <meta
          property="og:description"
          content="반려견을 더욱 사랑스럽게, 더욱 건강하게, GROOMEONG"
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
