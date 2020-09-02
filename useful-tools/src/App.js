/*
  prettierrc 
  자동으로 코드 스타일 관리 
  '문자열' or "문자열"
  ; or null
  들여쓰기
  vscode > 확장 > prettier 검색 > 설치 
  .prettierrc 에 규칙 정의 - https://prettier.io/ 참조 
  코드 작성 후 f1 format document  

  파일 > 기본설정 > 설정 > format on save > 체크 
  => 저장할때마다 설정한 규칙으로 자동 변환되어 저장된다.

  yarn add eslint-config-airbnb 

  yarn add eslint-config-prettier 

  Snippet 코드조각 
  코드 자동완성기능 
  vscode > 확장 > react snippet 검색  
*/

import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const a = 'abcde';
const b = 'abcedfgh';

function App() {
    const [value, setValue] = useState(0);
    useEffect(() => {
        console.log(value);
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
