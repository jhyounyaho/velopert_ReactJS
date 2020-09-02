/*
  useRef로 컴포넌트 안의 변수 만들기

  컴포넌트 내부에서 let 으로 변수 선언할 경우 
  다음 리렌더링 될때 그 변수값은 초기화됨.
  
  그 값을 유지하고 싶으면 useState 사용 
  useState는 상태가 바뀌면 컴포넌트 리렌더링 됨.
  
  값이 변경되었으나, 컴포넌트가 리렌더링 하지 않고 싶을때
  useRef 사용 

  언제 useRef 사용?
  setTimeout, setInterval의 id 외부라이브러리를 사용하여 
  생성된 인스턴스, Scroll 위치 등 

  기존 배열을 건드는 push, splice, sort 사용 X, 사용하고 싶으면 기존 배열 복사 후 사용할 것 
  push 대신 spread or concat 사용 
  spread, const : 배열 요소 추가
  filter : 배열 요소 제거
  map : 배열 특정 요소 업데이트 

  useEffect Hook 
  react component 가 처음 화면에 나타날때, 화면에서 사라질때 특정 작업 
  componnet에서 props 가 변경되기 전, 후 작업 
  리렌더링 되기전 특정 작업 할 수 있음.
  
  useMemo Hook 
  성능 최적화할때 사용됨 
  연산한 값 재사용 - 특정 값이 변경되었을 경우에만 호출됨

  useCallback Hook 
  성능 최적화할때 사용됨 
  함수 재사용 - 이전에 만들었던 함수를 새로 만들지 않고 재사용  

  React.memo() 를 사용한 컴포넌트 리렌더링 방지 
  성능 최적화할때 사용됨 
  props가 바뀌었을 경우에만 사용됨.
  componnet 리렌더링 방지 - 리렌더링이 불필요할때는 이전에 렌더링 했던 내용 재사용 

  모든것에 최적화 ? X 
  필요한 부분에만 최적화한다. 소스가 길어진다. 

  useReducer Hook  
  상태 업데이트 로직을 컴포넌트 밖으로 분리 가능 

  reducer
  상태를 업데이트 하는 함수 

  useReducer
  상태관리 

  useReducer VS useState
  useState : 컴포넌트 관리하는 값 하나, 간단, boolean
  useReducer : 컴포넌트 관리 여러개, 복잡, dispatch 관리하는 createContext 편함  
  => 답은 정해져 있지 않음. 상황에 따라 달라짐 

  Custom Hook

  immer
  immer를 사용하면 불변성을 해치는 코드를 작성해도 대신 불변성 유지를 해준다.
  yarn add immer 로 설치 
  모두 immer 사용? no! 코드가 simple하면 spread 연산자 사용, 복잡할 경우에만  
  splice, push 사용 가능 why? 불변성을 immer 가 해주니까!  
  
  컴포넌트 형식 2개 
  함수형 컴포넌트 - 요즘 쓰는 방식  
  class형 컴포넌트 - 옛날에 쓰던 방식(유지보수용) 

  LifeCycle 메서드  
  class형 컴포넌트에서만 사용 할 수 있다. 

  useEffect
  함수형 컴포넌트   

  componentDidCatch 메서드
  생명주기 메서드 error 처리 
  클래스형 컴포넌트에서만 사용 가능 (함수형 컴포넌트 사용불가)
*/ 

import React, { useRef, /*useState,*/ useMemo, useCallback, useReducer, createContext } from 'react';
import produce from 'immer';
import './App.css';
import UserList from './Component/UserList/UserList';
import CreateUser from './Component/CreateUser/CreateUser';
import useInputs from './Component/useInputs/useInputs';

// console 창에서 produce 사용하는 방법 
//window.produce = produce;

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...');
  return users.filter(user => user.active).length; 
}

// 상태관리 useState => useReducer 변경 
const initialState = {
  users: [
    {
        id: 1,
        username: '정혜윤',
        email: 'jhyounyaho@naver.com',
        active: true,
    },
    {
        id: 2,
        username: '권지용',
        email: 'gd@naver.com',
        active: false,
    },
    {
        id: 3,
        username: '탑',
        email: 'top@naver.com',
        active: false,
    },
  ]
} 

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return produce(state, draft => {
        draft.users.push(action.user);
      })
      /*
      return {
        users: state.users.concat(action.user)
      };
      */
    case 'TOGGLE_USER': 
      return produce(state, draft => {
        const user = draft.users.find(user => user.id === action.id);
        user.active = !user.active;
      }) 
      /*
      return {
        ...state, 
        users: state.users.map(user => 
            user.id === action.id
            ? { ...user, active: !user.active}
            : user
          )
      };
      */
    case 'REMOVE_USER':
      return produce(state, draft => {
        const index = draft.users.findIndex(user => user.id === action.id);
        draft.users.splice(index, 1);
      })
      /*
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      };
      */
    default:
      throw new Error('unhandled action');
  }
}

export const UserDispatch = createContext(null);

function App() {
  // state - 현재상태, dispatch - action 발생시키는 함수
  const [state, dispatch] = useReducer(reducer, initialState);
  const [form, onChange, reset] = useInputs({
    username: '',
    email: ''
  });
  const { username, email } = form;
  const nextId = useRef(4);
  const { users } = state;

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email 
      }
    });
    nextId.current += 1;
    reset();
  }, [username, email, reset]);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList 
        users={users} 
      />
      <div>활성 사용자 수: {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;

/*
  reducer로 상태관리하기전 
  useState로 상태관리했을때 
  App component 안에 있던 코드 

  // useState 상태관리 기본값 설정 
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;

  // useCallback 으로 함수 상태관리 
  // inputs 가 바뀔때만 onChange 함수 생성 
  const onChange = useCallback(e => {
    // 첫번째 파라미터 함수 
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }, [inputs]);  // 두번째파라미터 useState로 상태관리하고 있는 input 

  const [users, setUsers] = useState([
      {
          id: 1,
          username: '정혜윤',
          email: 'jhyounyaho@naver.com',
          active: true,
      },
      {
          id: 2,
          username: '권지용',
          email: 'gd@naver.com',
          active: false,
      },
      {
          id: 3,
          username: '탑',
          email: 'top@naver.com',
          active: false,
      },
  ]);

  // id 값을 useRef 로 관리 
  const nextId = useRef(4);

  // 등록 이벤트  
  const onCreate = useCallback(() => {
    // 새로운 user 객체 생성 
    const user = {
      id: nextId.current,
      username,
      email
    }
    // 함수형 업데이트 
    // spread 사용시 
    setUsers(users => [...users, user]);
    // concat 사용시 
    // setUsers(users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    console.log(nextId.current);
    nextId.current += 1;
  }, [username, email]); // username, email, users 업데이트시 onCreate 생성

  // 삭제 이벤트 - filter 사용하여 배열의 항목 제거하기  
  const onRemove = useCallback((id) => {
    setUsers(users => users.filter(user => user.id !== id));
  }, []);

  // id를 파라미터 값으로 받아옴
  // map을 사용하여 배열 원소 업데이트 함
  const onToggle = useCallback((id) => {
    setUsers(users => users.map(
      user => user.id === id 
        ? { ...user, active: !user.active } //새로운 객체 생성 
        : user
    ));
  }, []);

  // useMemo 로 성능 최적화 하기 
  // 첫번째 파라미터 - 함수, 두번째 파라미터 - 체크할 값
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser 
        username={username} 
        email={email} 
        onChange={onChange} 
        onCreate={onCreate} 
      />
      <UserList 
        users={users} 
        onRemove={onRemove}
        onToggle={onToggle}
      />
      <div>활성 사용자 수: {count}</div>
    </>
  );

*/