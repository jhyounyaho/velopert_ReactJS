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
import React, { useEffect } from "react";
import { useUsersState, useUsersDispatch, getUser } from "./UsersContext";

function User({ id }) {
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  useEffect(() => {
    getUser(dispatch, id);
  }, [dispatch, id]);

  const { loading, data: user, error } = state.user;

  if (loading) return <div>로딩중 ...</div>;
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
