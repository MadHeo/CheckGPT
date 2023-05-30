import * as S from "./style";

const headerName = ["Chart", "Survey", "Comment"];

export default function HeaderLayout(): JSX.Element {
  return (
    <>
      <S.MainBox>
        {headerName.map((el, i) => (
          <>
            <button>{el}</button>
          </>
        ))}
      </S.MainBox>
    </>
  );
}
