import { MouseEvent } from "react";
import usePageRouter from "../../hooks/useRouter";
import * as S from "./style";

const headerName = ["chart", "survey", "comment"];

export default function HeaderLayout(): JSX.Element {
  const { push } = usePageRouter();

  const onClickMenu = (e: MouseEvent<HTMLButtonElement> | string) => {
    push(e.target.textContent);
  };

  return (
    <>
      <S.MainBox>
        {headerName.map((el, i) => (
          <>
            <button onClick={onClickMenu}>{el}</button>
          </>
        ))}
      </S.MainBox>
    </>
  );
}
