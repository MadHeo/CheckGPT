import styled from "@emotion/styled";

export const MainBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;
`;

export const NameBox = styled.div`
  width: 36%;
  height: 32px;
  border: 1px solid white;

  input {
    width: 100%;
    height: 100%;
    padding: 0px 8px;
  }
`;

export const WriteBox = styled.div`
  width: 80%;
  height: 32px;
  border: 1px solid white;
  display: flex;
  flex-direction: row;

  input {
    width: 90%;
    height: 100%;
    padding: 0px 8px;
  }
  button {
    width: 10%;
    height: 100%;
  }
`;
