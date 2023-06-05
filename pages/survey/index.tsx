import styled from "@emotion/styled";

const MainBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15%;

  div {
    margin-bottom: 20px;
    font-size: 25px;
  }

  button {
    width: 20%;
    background-color: #9b0ccf;
    padding: 10px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    :active {
      background-color: #c62aff;
    }
  }
`;

export default function Survey(): JSX.Element {
  return (
    <>
      <MainBox>
        <div>Chat GPT 경험을 알려 주세요</div>
        <button>참여하기</button>
      </MainBox>
    </>
  );
}
