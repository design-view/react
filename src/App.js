import React,{useRef, useState } from 'react';
//css불러오기
import './App.css';
import UserList from './UserList';
import CreateUser from './CreateUser';
function App() {
  //여러개의 인풋을 관리할때는 객체 형태로 관리
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  })
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const [users, setUsers] = useState([
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
]);
//다음항목을 관리
const nextId = useRef(4);

//실행때마다 1씩증가
//리렌더링 되지않음.
const onCreate = () => {
  //배열의 불변성을 지키며 새로운 항목을 추가하기 
  //스프레드 연산자를 사용하기!!!!
  const user = {
    id: nextId.current,
    username,
    email,
  }
  //기존배열을 복사 ...users
  setUsers([...users, user]);
  //concat함수를 사용해도됨
  // setUsers(users.concat(user));
  setInputs({
    username: '',
    email:'',
  })
  console.log(nextId.current);

  

  nextId.current += 1;
}
  return (
    <>
      <CreateUser 
      username={username} 
      email={email}
      onChange={onChange}
      onCreate={onCreate}
      />
      <UserList users={users}/>
    </>
  );
}

export default App;
