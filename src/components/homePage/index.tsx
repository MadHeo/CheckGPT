import { useEffect, useState } from "react";
import * as S from "./style";

export default function HomePage() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      setPosition(window.scrollY);
    };

    window.addEventListener("scroll", updateScroll);
  }, []);

  return (
    <>
      <S.Container>
        <S.TextBox>
          <div>문제는 지적인 기계가 어떤 감정을 가질 수 있느냐가 아니라</div>
          <div>기계가 아무런 감정 없이 지능을 가질 수 있느냐 하는 것이다.</div>
          <div>-Marvin Lee Minsky</div>
        </S.TextBox>
        <S.LogoBox>
          <div>CHECK GPT</div>
        </S.LogoBox>
        <S.SubTextBox>
          <div className={position < 400 ? "hidden" : "visible"}>
            <div>인공지능, 우리는 어떻게 이용하고</div>
            <div>어떻게 이용 당하고 있을까</div>
          </div>
        </S.SubTextBox>
      </S.Container>
    </>
  );
}
