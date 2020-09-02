import React from 'react';

function User({ user }) {
    // error는 발생하지 않으나 User 컴포넌트는 렌더링되지 않는다.
    // if (!user) return null;

    return(
        <div>
            <div>
                <b>ID</b>: {user.id}
            </div>
            <div>
                <b>UserName</b>: {user.username}
            </div>
        </div>
    )
}

export default User;