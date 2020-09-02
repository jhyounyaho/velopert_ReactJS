/*
    Context API 를 사용한 전역 값 관리
    장점 : 여러개의 자식을 통해 props 전달 X, 바로 props 전달 O
    
    useContext 
    context 값을 읽어서 사용할 수 있게 해주는 react 내장 hook

    예제: ContextSample에서 바로 Child한테 props로 데이터 넘기기
*/

import React, { createContext, useContext, useState } from 'react';

// 첫번째 파라미터 - default 값 
const MyContext = createContext('defaultValue');

function Child() {
    // MyContext 참조 
    const text = useContext(MyContext);
    return <div>안녕하세요? {text}</div>
}

function Parent({ text }) {
    return <Child />
}

function GrandParent({ text }) {
    return <Parent />
}

function ContextSample() {
    // value default 값 true 
    const [ value, setValue ] = useState(true);

    return (
        // MyConetex 로 감싸준다 
        <MyContext.Provider value={value ? 'GOOD' : 'BAD'}>
            <GrandParent />
            <button onClick={() => setValue(!value)}>CLICK ME</button>
        </MyContext.Provider>
    )
}

export default ContextSample;