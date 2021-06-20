import React from "react";

function UserList() {
    const users = [
        {
            id: 1,
            username: "민영",
            email: "min@example.com"
        },
        {
            id: 2,
            username: "중기",
            email: "min@example.com"
        },
        {
            id: 3,
            username: "하하",
            email: "min@example.com"
        }
    ];
    function User({ user }){
        return (
            <div>
                <b>{user.username}</b>
                <span>({user.email})</span>
            </div>
        )
    }
    return (
        <div>
        {/* <User user={users[0]} />
        <User user={users[1]} />
        <User user={users[2]} /> */}
        
        {
            users.map(user => (<User user={user} key={user.id} />)
            )
        }
        </div>
    );
}
export default UserList;