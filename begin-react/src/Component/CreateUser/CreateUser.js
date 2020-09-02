/*
    배열에 항목 추가하기 

    React.memo 
    최적화 기능 
    props가 바뀌었을 경우에만 사용됨.
    componnet 에서 리렌더링이 불필요할때는 이전에 렌더링 했던 내용 재사용 
*/
import React from 'react';

// props로 받아오는 데이터 - username, email, onChange, onCreate 
function CreateUser({ username, email, onChange, onCreate }) {
    console.log('createuser');
    return (
        <div>
            <input 
                name="username" 
                placeholder="계정명"
                onChange={onChange}
                value={username}
            />
            <input 
                name="email" 
                placeholder="이메일"
                onChange={onChange}
                value={email}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    )
}

export default React.memo(CreateUser);