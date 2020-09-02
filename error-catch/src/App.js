/*
  react 에서 나오는 error 

  1. 부모에서 props를 주지 않았는데 자식이 props를 사용할때
  => default 값을 설정해 주지 않은 경우 

*/

import React from 'react';
import './App.css';
import User from './Component/User/User';
import ErrorBoundary from './Component/ErrorBoundary/ErrorBoundary';

function App() {
  const user = {
    id: 1,
    username: 'jhy'
  }
  return (
    <ErrorBoundary>
      <User />
    </ErrorBoundary> 
  );
}

export default App;
