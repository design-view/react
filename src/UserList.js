import React from "react";

function UserList( { users }) {
    
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