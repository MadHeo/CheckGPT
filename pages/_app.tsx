import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { Global } from "@emotion/react";
import { GlobalStyle } from "../src/commons/globalStyles/globalStyles";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <>
        <Global styles={GlobalStyle} />
        <Component {...pageProps} />
      </>
    </RecoilRoot>
  );
}
