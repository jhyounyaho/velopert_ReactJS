/*
    배열 렌더링 하기 
    key 를 설정해야 효율적으로 사용가능함.
    index 를 key로 설정하면 비효율적으로 사용하게 됨. 비추 

    useEffect Hook 
    react component 가 처음 화면에 나타날때, 화면에서 사라질때 특정 작업 
    componnet에서 props 가 변경되기 전, 후 작업 
    리렌더링 되기전 특정 작업 할 수 있음. 
*/
import React, { useEffect, useContext } from 'react';
import { UserDispatch } from '../../App';

const User = React.memo(function User({ user }) {
    const { username, id, email, active } = user;

    const dispatch = useContext(UserDispatch); 

    useEffect(() => {
        console.log('user값이 설정됨', user);
        return () => {
            console.log('user값이 바뀌기 전', user);
        }
    }, [user]); // 두번째 파라미터 - 조회 할 상태 

    return (
        <div>
            <b style={{
                color: active ? 'green' : 'black',
                cursor: 'pointer' // 마우스오버시 손가락 모양 
                }} 
                onClick={() => dispatch({ 
                    type: 'TOGGLE_USER',
                    id
                })}
            >
                {username}
            </b>
            <span>({email})</span>
            <button onClick={() => dispatch({
               type: 'REMOVE_USER',
               id 
            })}>삭제</button>
        </div>
    )
});

function UserList({ users }) {
    return(
        <div>
            {
                // 고유값을 key로 설정해줘야함 
                users.map(
                    (user) => (
                        <User 
                            user={user} 
                            key={user.id} 
                        />
                    )
                )
            }
        </div>
    )
}

export default React.memo(UserList, (prevProps, nextProps) => nextProps.users === prevProps.users);