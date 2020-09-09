설치
yarn add react-router-dom
yarn add qs
yarn add use-react-router

라우팅

- 어떤 주소에 어떤 UI를 보여줄지 규칙을 정하는 작업
- 옛날에는 보통 서버에서 관리하는 로직이었으나 이제는 클라이언트가 관리함.
  당

non-SPA

- 라우팅을 서버가 담당
- 여러개의 페이지로 구성되어 있다.
- 서버측에서 사용자에게 어떤 화면을 보여줘야할지 처리함
- 서버자원을 많이 사용하게 되어 불필요한 트래픽

SPA
Single Page Application

- 라우팅을 클라이언트가 담당
- 필요한 데이터만 서버에게 요청하여 JSON형식으로 받아옴

SPA 의 단점

- 앱의 규모가 커지면 js 파일의 크기가 너무 커질 수 있다
  해결책 : Code Splitting
- 브라우저에서 자바스크립트가 구동 되지 않으면 UI를 볼 수 없다.
  예) 검색엔진에서 크롤링 불가능
  해별책 : Server Side Rendering

react-router

- 리엑트에서 가장 많이 사용되는 라우터 라이브러리
- 컴포넌트를 기반으로 라우팅을 한다.
  필요한 값은 props 로 넣어준다

Next.js

- 두번째로 많이 사용하는 라우터 라이브러리
- 서버사이드 렌더링을 엄청나게 쉽게 구현 가능
- 파일 경로, 이름을 기반으로 라우팅을 함

리액트 라우터에서 사용되는 주요 컴포넌트 살펴보기

BrowserRouter

- HTML5 History API 사용
- 주소만 바꾸고 페이지는 다시 불러오진 않음
- 가장 많이 사용
- IE6~9 옛날 브라우저에서는 작동하지 않을 수 있음

HashRouter

- example.com/#/path/to/route
- #를 사용함. 못생김, 옛날 브라우저 전용

MemoryRouter

- 브라우저의 주소와 무관함, 일체 건들이지 않음
  따라서 브라우저와 무관한 환경에서 사용하기 좋음.
- url 변경되지 않음.
- 임베디드 웹앱, 리액트 네이티브 등에서 사용

StaticRouter

- 서버사이드 렌더링에서 사용하는 용도

Route

- 라우트를 정의할 때 사용하는 컴포넌트

Link

- 사용한 Router의 주소를 바꿈
- a 태그지만 새로고침 안됨 리렌더링 해줌
- <a> 태그 써주면 안됨 why? 새로고침되서 따라서 Link 사용해줌

파라미터와 쿼리

- 주소를 통해서 어떤 동적인 값을 읽어와야할때 사용함

URL Parameter
/profiles/velopert

Query
/filter?type=book&sort_by=date
주로 검색시 사용함

서브 라우트 만들기

- 라우트 안에 있는 라우트
- 라우트로 사용한 라우트 안에 한번 더쓰기!
- 페이지를 만들때 특정 경로의 tab이 있는 경우 서브라우트 사용
- 태그 선택시 페이지 내부에서 내용이 바뀌어지는 경우 사용

리액트 라우터 부가기능

history 객체

- 라우터로 사용되는 컴포넌트에게 props로 전달됨. 이 객체를 사용해 컴포넌트에서 라우터에 직접적으로 접근 할 수 있다.
- 특정 함수를 호출했을때 특정 경로로 이동하거나 뒤로가거나 페이지 이탈을 막을수 있다.

withRouter

- 라우터 컴포넌트가 아닌 곳에서 match, location, history 사용

Switch

- 여러 라우트 중 하나만 보여줌

NavLink

- 현재 주소와 일치한다면 스타일 바꾸기

Prompt

Redirect

Route Config

useReactRouter Hook 사용하기

![1홈](https://user-images.githubusercontent.com/42309919/92575307-20240f00-f2c3-11ea-93d0-8c6f0a530565.PNG)
![2소개](https://user-images.githubusercontent.com/42309919/92575311-21553c00-f2c3-11ea-8e4f-df5b9353ad76.PNG)
![3프로필목록](https://user-images.githubusercontent.com/42309919/92575316-21553c00-f2c3-11ea-932d-b75f65810cbb.PNG)
![4예제](https://user-images.githubusercontent.com/42309919/92575317-21edd280-f2c3-11ea-96ca-fabbb2dadce4.PNG)
