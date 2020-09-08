/*
  API 연동 

  REST API
  client 와 server 소통하는 방식 
  
  HTTP 메서드 사용 
  GET     데이터 조회
  POST    데이터 등록
  PUT     데이터 수정 
  DELETE  데이터 제거

  yarn add axios 
  REST API를 요청할때 promise 기반으로 처리 할 수 있게 해주는 lib 

  useState와 useEffect로 데이터 로딩하기 

  API 요청시 
  1. 요청의 결과
  2. 로딩 상태
  3. 에러 

  useReducer로 요청 상태 관리하기
*/
import React from "react";
import Users from "./components/Users";

function App() {
  return <Users />;
}

export default App;
