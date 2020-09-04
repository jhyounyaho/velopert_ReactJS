import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoState } from "../todoContext";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 28px 32px 48px 32px;
  overflow-y: auto;
`;

function TodoList() {
  const todos = useTodoState();
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
