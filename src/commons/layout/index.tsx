import styled from "@emotion/styled";
import HeaderLayout from "./header";

const MainBox = styled.div`
  width: 100%;
  height: 100%;
`;

export default function Layout(props): JSX.Element {
  return (
    <>
      <HeaderLayout></HeaderLayout>
      <MainBox>
        <div>{props.children}</div>
      </MainBox>
      {/* <HomePage></HomePage> */}
    </>
  );
}
