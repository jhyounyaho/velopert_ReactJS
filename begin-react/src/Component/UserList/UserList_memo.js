// 배열 렌더링 하기 
// key 를 설정해야 효율적으로 사용가능함. 
// index 를 key로 설정하면 비효율적으로 사용하게 됨. 비추 
/*
  useEffect Hook 
  react component 가 처음 화면에 나타날때, 화면에서 사라질때 특정 작업 
  componnet에서 props 가 변경되기 전, 후 작업 
  리렌더링 되기전 특정 작업 할 수 있음. 
*/
import React, { useEffect } from 'react';

// 한 파일에 여러개 component 사용 가능 
// props로 user 받아옴 
const User = React.memo(function User({ user, onRemove, onToggle }) {
    const { username, id, email, active } = user;

    useEffect(() => {
        // 첫번째 파라미터 - 함수
        // UI가 화면에 나타난 이후 
        // props 값을 component의 state 값 설정할때 
        // REST API 외부 API 요청 
        // D3, Video.js 외부 라이브러리 사용 
        // setInterval, setTimeout 
        console.log('user값이 설정됨', user);
        return () => {
            // UI가 화면에서 사라진 이후 
            // clearInterval, clearTimeout 
            // D3, Video.js 라이브러리 제거시  
            console.log('user값이 바뀌기 전', user);
        }
    }, [user]); // 두번째 파라미터 - 조회 할 상태 

    return (
        <div>
            <b style={{
                color: active ? 'green' : 'black',
                cursor: 'pointer' // 마우스오버시 손가락 모양 
                }} 
                onClick={() => onToggle(id)}
            >
                {username}
            </b>
            <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
            {/*
                <button onClick={onRemove(id)}>삭제</button>
                이렇게 써주면 렌더링할때 onRemove 호출됨 
                => 이렇게 써주면 안됨!
                따라서 화살표함수를 사용하여 함수를 호출하는 하수를 만들어야함 
            */}
        </div>
    )
});

// props로 users, onRemove 받아옴 
function UserList({ users, onRemove, onToggle }) {
    return(
        <div>
            {
                users.map(
                    // 고유값을 key로 설정해줘야함 
                    user => (
                        <User 
                            user={user} 
                            key={user.id} 
                            onRemove={onRemove} 
                            onToggle={onToggle}
                        />
                    )
                    /*
                        이렇게 쓸수도 있으나, 추천하지 않는다. 
                        (user, index) => (<User user={user} key={index} />)
                    */
                )
            }
        </div>
    )
}

export default React.memo(UserList, (prevProps, nextProps) => nextProps.users === prevProps.users);