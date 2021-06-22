import React,{useRef, useState } from 'react';
//css불러오기
import './App.css';
import CreateUser from './CreateUser';
import UserList from './UserList';

function App() {
  //인풋관리
  const [ inputs, setInputs ] = useState({
    username:"",
    email:""
  })
  const { username, email } = inputs;
  //input변경
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]:value
    })
  }
  //생성하기
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    }
    setUsers([
      ...users,
      user
    ])
    setInputs({
      username:"",
      email:""
    })
    nextId.current += 1;
  }
  //삭제하기
  const onRemove = (id) => {
    setUsers(users.filter((user) => id !== user.id));
  } 
  //색상병경하기
  const onToggle = (id) => {
    setUsers(users.map( user => 
      user.id === id ? { ...user, active: !user.active } : user
    ))
  }

  const [users, setUsers] = useState([
    {
        id:1,
        username: 'bella',
        email:'bella@example.com',
        active: true
    },
    {
        id:2,
        username: 'green',
        email:'green@example.com',
        active: false
    },
    {
        id:3,
        username: 'sky',
        email:'sky@example.com',
        active: false
    },
    {
        id:4,
        username: 'hong',
        email:'hong@example.com',
        active: false
    }    
]);
const nextId = useRef(5);
  //여러개의 인풋을 관리할때는 객체 형태로 관리
  
  return (
    <>
     <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
     <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;
