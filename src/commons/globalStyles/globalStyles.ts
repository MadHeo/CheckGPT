import { css } from "@emotion/react";

export const GlobalStyle = css`
  * {
    margin: 0px;
    box-sizing: border-box;
    font-family: "Pretendard";
    background-color: #151515;
    color: white;
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 200;
    src: url("/font/Pretendard-Regular.woff2");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 300;
    src: url("/font/Pretendard-SemiBold.woff2");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 400;
    src: url("/font/Pretendard-Bold.woff2");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 500;
    src: url("/font/Pretendard-ExtraBold.woff2");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 600;
    src: url("/font/Pretendard-Black.woff2");
  }

  @font-face {
    font-family: "Roboto-400";
    src: url("/font/Roboto-Regular.ttf");
  }
`;
