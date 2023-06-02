import styled from "@emotion/styled";
import HeaderLayout from "./header";

const MainBox = styled.div`
  width: 100%;
  height: 100%;
`;

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <HeaderLayout></HeaderLayout>
      <MainBox>
        <div>{props.children}</div>
      </MainBox>
    </>
  );
}
