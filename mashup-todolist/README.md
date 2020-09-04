<h1>Context API를 활용한 상태 관리</h1> 

React 사용기능 
- createContext 
- useContext
- useReducer 
- custom Hook 
  - error 처리 
- useRef 

component
- TodoTemplate 
- TodoHeader
- TodoList
- TodoItem
- TodoCreate

리듀서 파일 
src/TodoContext.js

context 
- state
- dispatch
- next id (key값)
=> state, dispatch 따로 관리하여 불필요한 렌더링 방지 

구현 기능
- 오늘 날짜, 요일 노출  
- 할 일 count 
- 체크리스트 체크 TOGGLE 
- 체크리스트 삭제 REMOVE
- 체크리스트 추가 CREATE

to do list 결과 
![todolist](https://user-images.githubusercontent.com/42309919/92227854-dd88be00-eee1-11ea-8400-24673a9042bf.PNG)

to do list context API 구조 
![context api](https://user-images.githubusercontent.com/42309919/92227863-e083ae80-eee1-11ea-81ca-c06401873bd5.png)
