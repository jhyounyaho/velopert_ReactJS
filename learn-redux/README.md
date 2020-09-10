설치
yarn add redux
yarn add react-redux
yarn add redux-devtools-extension

리덕스

- react에서 상태관리하는 library
- global 상태관리 가능
  ContextAPI + useReducer 로도 가능 (리덕스와 비슷)
- javascript, angular.js 에서도 사용 가능

Context 쓰는거랑 무슨 차이점이 있을까?

1. 미들웨어
   리덕스는 미들웨어를 사용 할 수 있다.
   비동기 작업을 더욱 체계적으로 관리 가능
   특정 조건에 따라 액션이 무시되게 만들 수 있습니다.
   액션을 콘솔에 출력하거나, 서버쪽에 로깅을 할 수 있습니다.
   액션이 디스패치 됐을 때 이를 수정해서 리듀서에게 전달되도록 할 수 있습니다.
   특정 액션이 발생했을 때 이에 기반하여 다른 액션이 발생되도록 할 수 있습니다.
   특정 액션이 발생했을 때 특정 자바스크립트 함수를 실행시킬 수 있습니다.
2. 유용한 함수와 Hooks
   connect - state, dispatch props로 받아옴
   useSelector
   useDispatch
   useStore
3. 기본적인 최적화가 이미 되어있다.
4. 하나의 커다란 상태
5. DevTools
   현재 상태 한번에 보는 tool
6. 이미 사용중인 프로젝트가 많다

리덕스 언제 써야 할까?

- 프로젝트의 규모가 큰가요?
- 비동기 작업을 자주 하게 되나요?
- 리덕스가 편하게 느껴지나요?
  Y Redux
  N Context API

리덕스에서 사용되는 키워드 숙지하기

- 액션 Action
  상태에 변화가 필요할때 action 발생 => 하나의 객체로 표현됨
  {
  type: "TOGGLE_VALUE" //필수값
  }
- 액션 생성함수 Action Creator
  액션 객체를 만들어 주는 함수
- 리듀서 Reducer
  state, action 파라미터 가져옴
  action.type 에 따라 다른 작업 리턴함
  default return state 로 해준다
- 스토어 Store
  app : store = 1 : 1
  현재 app 의 상태와 리듀서 있음.
- 디스패치 dispatch
  store 내장함수
  액션 발생
  액션을 스토어에 전달
- 구독 subscribe
  store 내장함수
  액션이 발생해서 상태가 업데이트 될때 특정 함수 호출 가능

리덕스의 3가지 규칙

1. 하나의 애플리케이션엔 하나의 스토어가 있다.
2. 상태는 읽기 전용
   불변성을 지켜줘야 한다
3. 변화를 일으키는 함수 리듀서는 순수한 함수여야한다.
   동일한 인풋 -> 동일한 아웃풋
   리듀서 함수는 이전 상태와, 액션 객체를 파라미터로 받습니다.
   이전의 상태는 절대로 건들이지 않고, 변화를 일으킨 새로운 상태 객체를 만들어서 반환합니다.
   똑같은 파라미터로 호출된 리듀서 함수는 언제나 똑같은 결과값을 반환해야만 합니다

리덕스 모듈 만들기

- 한 파일에 몰아서 작성하자!
  Ducks 패턴

리덕스 모듈이란?

액션타임
액션 생성 함수
리듀서
가 모두 들어가 있는 javascript file

Redux DevTools 설치
