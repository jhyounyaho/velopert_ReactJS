/*
  Context API를 활요한 상태관리 
  yarn add styled-components react-icons 

  Context API 를 쓰는게 무조건 옳은가?
  No - 간단할때는 굳이 안써도 됨. 
  프로젝트의 규모가 커질때는 매우 유용 
*/
import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import { TodoProvider } from "./todoContext";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef 
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHeader />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
