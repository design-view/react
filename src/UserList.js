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
  
    return (
        <div>
            <div>
                <b>{users[0].username}</b>
                <span>({users[0].email})</span>
            </div>
            <div>
                <b>{users[1].username}</b>
                <span>({users[1].email})</span>
            </div>
            <div>
                <b>{users[2].username}</b>
                <span>({users[2].email})</span>
            </div>
        </div>
    )
}
export default UserList;