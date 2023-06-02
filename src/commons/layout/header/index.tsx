import usePageRouter from "../../hooks/useRouter";
import * as S from "./style";
import Image from "next/image";
import logo from "../../../../public/image/GPT_logo.png";

const headerName = [
  { Home: "/" },
  { Chart: "chart" },
  { Survey: "survey" },
  { Comment: "comment" },
];

export default function HeaderLayout(): JSX.Element {
  const { push } = usePageRouter();

  const onClickMenu = (value: string) => () => {
    push(value);
  };

  return (
    <>
      <S.MainBox>
        {headerName.map((el, i) => (
          <>
            <button onClick={onClickMenu(String(Object.values(el)))}>
              {Object.keys(el)}
            </button>
          </>
        ))}
      </S.MainBox>
    </>
  );
}
