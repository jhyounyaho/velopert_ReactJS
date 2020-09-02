// userReducer 사용 
import React, { useReducer, Component } from 'react';

// 클래스형 컴포넌트
class Counter extends Component {
    // 메소드에서 this를 알게 하기 위한 작업 
    // 1. constructor, super(props) 사용 - 보편적
    constructor(props) {
        super(props);

        // 초깃값설정, state는 무조건 객체형태여야함.
        // 1. constructor 안에 써줄때는 this.state 
        this.state = {
            counter: 0,
            fixed: 1,
            updateMe: {
                toggleMe: false,
                contChangeMe: 1,
            }
        }

        this.handleIncrease = this.handleIncrease.bind(this);
    }

    /* 
    // 2. 밖에서 선언해줄때는 state 
    state = {
        counter: 0
    }
    */

    handleIncrease() {
        // 두번쓰면 +2 됨
        // why? setState는 바로 상태를 변경하는게 아니라 변경해달라고 요청하는 비동기 이다 
        // 따라서 여러번 setState를 해야할 경우 아래와 같이 함수형 으로 써줘야한다
        this.setState(state => ({
            counter: this.state.counter + 1
        }));
        this.setState(state => ({
            counter: this.state.counter + 1
        }));
    }

    // 화살표 함수 사용 
    handleDecrease = () => {
        // 두번써도 -1 됨 
        this.setState({
            counter: this.state.counter - 1
        })
        this.setState({
            counter: this.state.counter - 1
        })
    }

    handleToggle = () => {
        this.setState({
            updateMe: {
                ...this.state.updateMe,
                toggleMe: !this.state.updateMe.toggleMe
            }
        })
    }
    render() {
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
                <p>고정된 값 : {this.state.fixed}</p>
            </div>
        )
    }
}
/*
// 함수형 컴포넌트 
function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            throw new Error('Unhandled action!');
    }
}

function Counter() {
    const [number, dispatch] = useReducer(reducer, 0); //초깃값 0

    const onIncrease = () => {
        dispatch({
            type: 'INCREMENT'
        })
    } 

    const deIncrease = () => {
        dispatch({
            type: 'DECREMENT'
        })
    } 

    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={deIncrease}>-1</button>
        </div>
    )
}
*/

export default Counter;