import axios from "axios";
import { useEffect, useState } from "react";
import usePageRouter from "../../src/commons/hooks/useRouter";

export default function APITest() {
  const [userData, setUserData] = useState([]);
  const [post, setPost] = useState([]);
  const { push } = usePageRouter();

  const fetchUser = async () => {
    const result: any = await axios
      .get("https://koreanjson.com/users")
      .catch((err) => {
        alert(err);
      });

    setUserData(result.data);
  };

  const fetchPost = async () => {
    await fetch("https://koreanjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      })
      .catch((err) => {
        alert("에러:" + err);
      });
  };

  useEffect(() => {
    fetchUser();
    fetchPost();
  }, []);

  return (
    <>
      <div>gd</div>
      <button onClick={() => push("/comment")}>comment</button>
      <div>
        {userData?.map((el: any) => (
          <>
            <div>{el.id}</div>
            <div>{el.name}</div>
          </>
        ))}
      </div>
      <div>
        {post?.map((el: any) => (
          <>
            <div>{el.id}</div>
            <div>{el.title}</div>
          </>
        ))}
      </div>
    </>
  );
}
