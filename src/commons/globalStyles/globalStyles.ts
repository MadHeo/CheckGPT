import { css } from "@emotion/react";

export const GlobalStyle = css`
  * {
    margin: 0px;
    box-sizing: border-box;
    font-family: "Noto-500";
    background-color: #151515;
    color: white;
  }

  @font-face {
    font-family: "Noto-700";
    src: url("/font/NotoSansKR-Bold.otf");
  }

  @font-face {
    font-family: "Noto-500";
    src: url("/font/NotoSansKR-Medium.otf");
  }

  @font-face {
    font-family: "Noto-400";
    src: url("/font/NotoSansKR-Regular.otf");
  }

  @font-face {
    font-family: "Roboto-700";
    src: url("/font/Roboto-Bold.ttf");
  }

  @font-face {
    font-family: "Roboto-500";
    src: url("/font/Roboto-Medium.ttf");
  }

  @font-face {
    font-family: "Roboto-400";
    src: url("/font/Roboto-Regular.ttf");
  }
`;
