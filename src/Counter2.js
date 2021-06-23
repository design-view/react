//react에서 useState라는 함수를 불러오기
import React, { useReducer } from 'react';

function reducer(state, action){
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            //에러발생 콘솔에서확인가능
            throw new Error('Unhandled action');
    }
}

function Counter2() {

    const [number, dispatch] = useReducer(reducer, 0);
    const onIncrease = () => {
        dispatch({
            type:'INCREMENT'
        })
    }
    const onDecrease = () => {
       dispatch({
           type:'DECREMENT'
       })
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter2;