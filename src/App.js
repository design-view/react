import React, { useRef, useReducer, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}
//useState를 useReducer로 변경하기
//초기상태를 컴포넌트 밖에 선언하기 
//App에서 사용할 inputs와 users의 초기상태를 담아두기
const initialState = {
  inputs : {
    username: '',
    email: '',
  },
  users : [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]
}
//함수 만들기
function reducer(state, action){
   switch (action.type) {
     case 'CHANGE_INPUT':
       return {
         ...state,
         inputs: {
           ...state.inputs,
           [action.name]: action.value
         }
       };
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        //또는 users: [...state.users,action.user]이렇게 적어도됨
        users: state.users.concat(action.user)
      };
    case 'TOGGLE_USER':
      //원래있던 상태의 state를 뿌려주고(spread) users만 업데이트
      // user.id와 받은 id가 같으면 active반전
      return {
        ...state,
        users:state.users.map(user => 
          user.id === action.id ? {...user, active: !user.active } 
          : user )
      };
    case 'REMOVE_USER':
      //원래있던 상태의 state를 뿌려주고(spread) users만 업데이트
      //user.id와 action.id가 다른것만 배열로 넣어줌
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      }
    default:
      throw new Error('Unhandled action');
   }
}

function App() {
  //state는 현재상태 dispatch는 action을 발생시키는 함수
  //초기값선언한 initialState를 넣어줌
  const [ state, dispatch ] = useReducer(reducer, initialState);

  //구조분해할당으로 각각 값을추출
  //state가 객체이므로 객체 구조분해 할당을 함
  const { users } = state;
  //inputs도 객체이므로 객체 구조분해 할당을 함
  //username과 email추출함
  const { username, email } = state.inputs;

  const nextId = useRef(4);

  //onChange만들기
  const onChange = useCallback( e => {
    const { name, value } =e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value
    })
    console.log(value);
  },[]);

  
  //onCreate만들기
  const onCreate = useCallback(()=>{
    dispatch({
      type:'CREATE_USER',
      user: {
        id:nextId.current,
        username,
        email
      }
    });
    nextId.current += 1;
  },[username,email]);

  //onToggle만들기
  const onToggle = useCallback((id) => {
    dispatch({
      type:'TOGGLE_USER',
      id
    })
  },[]);

  //onRemove만들기
  const onRemove = useCallback((id) => {
    dispatch({
      type:'REMOVE_USER',
      id
    })
  },[]);

  //활성사용자수 구하기
  const count = useMemo(() => countActiveUsers(users),[users])


  return (
    <>
      <CreateUser
        username={username} email={email} onChange={onChange} onCreate={onCreate}
      />
      <UserList users={users}  onRemove={onRemove} onToggle={onToggle} />
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;