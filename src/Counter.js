//react에서 useState라는 함수를 불러오기
import React, { useState } from 'react';

function Counter() {
    // const numberState = useState(0);
    // const number = numberState[0];
    // const setNumber = numberState[1];

    //위코드를 구조분할로 변경
    //number는 현재상태 setNumber는 상태를 업데이트하는함수
    //0이 기본값
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1);
    }
    const onDecrease = () => {
       setNumber(prevNumber => prevNumber - 1);
    }
    return (
        <div>
            <h1>{number}</h1>
            {/* 함수를 넣어주는거지 함수를 호출하는거 아님
            함수를 호출하게되면 클릭전 바로 실행됨 
            onIncrease() --> 이렇게 넣으면 안됨
            */}
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;