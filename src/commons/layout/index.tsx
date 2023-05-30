import HomePage from "../../components/homePage";
import HeaderLayout from "./header";

export default function Layout(): JSX.Element {
  return (
    <>
      <HeaderLayout></HeaderLayout>
      <HomePage></HomePage>
    </>
  );
}
