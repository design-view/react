import React from "react";
//props로 받아올것듯
//input값이 변경될때 처리할 이벤트 함수 onChange
//버튼을 눌렀을때 새로운 값을 추가할 함수 onCreate
function CreateUser({ username, email, onChange, onCreate}){
    return(
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
    );
}
export default CreateUser;
