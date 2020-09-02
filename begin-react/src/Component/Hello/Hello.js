/*
  컴포넌트 형식 2개 

  함수형 컴포넌트
  - 요즘 쓰는 방식  
  - hooks 쓸 수 있게되서 많이 사용하게 됨 

  class형 컴포넌트
  - 옛날에 쓰던 방식(유지보수용) 
*/ 
import React, { Component } from 'react';

// class 형 component, Component import 해줘야함
class Hello extends Component{
    static defaultProps = {
        name: '이름없음'
    };
    render() {
        const { isSpecial, color, name } = this.props; 
        return(
            <div style={{color}}>
                {isSpecial && <b>*</b>}
                안녕하세요 {name}
            </div>
        );
    }    

}

// 컴포넌트 대문자 작성 
/*
// 함수형 component
function Hello({ color, name, isSpecial }) {
    // JSX 
    return (
        <div style={{color}}>
            { isSpecial ? <b>*</b> : null }
            { isSpecial && <b>*</b> }
            안녕하세요! {name}
        </div>
    )
}
*/

// 기본값 
/*
Hello.defaultProps = {
  name: '이름없음'
}
*/

export default Hello;