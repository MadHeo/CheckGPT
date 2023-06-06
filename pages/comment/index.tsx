import styled from "@emotion/styled";
import CommentList from "../../src/components/commentList";
import CommentWrite from "../../src/components/commentWrite";

const MainBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const CommentBox = styled.div`
  width: 85%;
  height: 100%;
  padding: 36px;
`;

const LogoBox = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    font-size: 12rem;
    writing-mode: vertical-rl;
    text-orientation: upright;
    letter-spacing: -90px;
    color: #cacacaa5;
  }
`;

export default function CommentListPage(): JSX.Element {
  return (
    <>
      <MainBox>
        <LogoBox>
          <div>CHECKGPT</div>
        </LogoBox>
        <CommentBox>
          <CommentWrite></CommentWrite>
          <CommentList></CommentList>
        </CommentBox>
      </MainBox>
    </>
  );
}
