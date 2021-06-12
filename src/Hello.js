//리엑트를 불러와서 사용하겠다.
import React from 'react';
//컴포넌트를 만들때는 함수형태와 클래스형태로 만들수 있음.
//함수형태로 만들기 먼저!
//컴포넌트 이름은 대문자로 시작!!!
//html같지만 jsx임
//세미콜론은 있어도 되고 없어도됨
function Hello({color,name}) {
    console.log(color,name)
    return <div style={{color}}>안녕하세요 {name}</div>;
}
//Hello란 컴포넌트를 내보내기 export
export default Hello;

