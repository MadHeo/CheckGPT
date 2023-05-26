import * as S from "./style";
import ListGroup from "react-bootstrap/ListGroup";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import axios from "axios";

interface IFetchData {
  id: string;
  title: string;
}

export default function CommentList(): JSX.Element {
  const [userData, setUserData] = useState([]);

  const fetchUser = async () => {
    const result: any = await axios
      .get("https://koreanjson.com/posts?userId=1")
      .catch((err) => {
        alert(err);
      });

    setUserData(result.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <S.Container>
        {userData?.map((el: IFetchData) => (
          <>
            <S.NameBox>{el.id}</S.NameBox>
            <S.ContentsBox>{el.title}</S.ContentsBox>
          </>
        ))}
      </S.Container>
    </>
  );
}
