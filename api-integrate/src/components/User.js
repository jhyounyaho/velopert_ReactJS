/*
  react-async로 요청 상태 관리하기 
  yarn add react-async 

  장점
  - 필요할때 설치하여 사용가능 
  - 비동기 기능 탑재
  - hook, component 형태 
  - 특정 promise 도중 취소 가능 

  단점 
  - option 조금 복잡 
*/
import React from "react";
import axios from "axios";
import { useAsync } from "react-async";

async function getUser({ id }) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
}

function User({ id }) {
  // id값 바뀔때마다 useAsync 호출
  const { data: user, error, isLoading } = useAsync({
    promiseFn: getUser,
    id,
    watch: id,
  });

  if (isLoading) return <div>로딩중 ...</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!user) return null;

  return (
    <div>
      <h2>{user.username}</h2>
      <p>
        <b>Email: </b> {user.email}
      </p>
    </div>
  );
}

export default User;
