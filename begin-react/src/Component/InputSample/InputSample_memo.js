// 여러개의 input 상태 관리하기 
// useRef 사용하여 특정 DOM 선택하기 
import React, { useState, useRef } from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        // 초깃값 설정 
        name: '',
        nickname: ''
    });

    // useRef() 호출 
    // useRef 로 특정 DOM 선택 
    const nameInput = useRef();

    // 비구조할당 
    const { name, nickname } = inputs;

    // 수정 이벤트 
    const onChange = (e) => {
        const { name, value } = e.tartget;
        
        /*
            객체 상태를 업데이트 할 경우 
            기존 객체 복사해서 ( spread 연산자 ) 
            업데이트 할 값을 덮어씌어줘서 
            새로운 상태 만들어준다
            => 불변성 지켜줌
            새로운 객체 생성 [name] = name, nickname  
        */
        const nextInputs = {
            ...inputs,
            [name]: value,
        }
    };

    // 초기화 클릭 이벤트 
    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        });

        // 현재 선택한 DOM 
        nameInput.current.focus();
    } 

    return (
        <div>
            <input 
                name="name" 
                placeholder="이름" 
                onChange={onChange} 
                value={name} 
                ref={nameInput} //원하는 DOM 에 설정 
            />
            <input 
                name="nickname" 
                placeholder="닉네임" 
                onChange={onChange} 
                value={nickname} 
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b> <br />
                {name} ({nickname})<br /> 
            </div> 
        </div>
    );
}

export default InputSample;
