import * as S from "./style";

export default function CommentWrite() {
  return (
    <>
      <S.MainBox>
        <S.NameBox>
          <input type="text" placeholder="닉네임" maxLength={12} />
        </S.NameBox>
        <S.WriteBox>
          <input
            type="text"
            placeholder="욕, 비방은  NoNo해~"
            maxLength={500}
          />
          <button>등록</button>
        </S.WriteBox>
      </S.MainBox>
    </>
  );
}
