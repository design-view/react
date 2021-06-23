import React, { createContext, useContext, useState } from 'react';

//기본값을 넣어줌
const MyContext = createContext('defalutValue');

function Child() {
    //useContext는 context에있는값을 읽어와서 사용할수잇게해줌
    const text = useContext(MyContext);
    return <div>안녕하세요? {text}</div>
}

function Parent() {
    return <Child />;
}
function GrandParent() {
    return <Parent />;
}

function ContextSample(){
    const [value,setValue] = useState(true);
    return(
        //MyContext안에 Provider를 사용하여 value값을 저장
        <MyContext.Provider value={value ? 'GOOD' : 'BAD'}>
        <GrandParent />
        <button onClick={()=>setValue(!value)}>클릭</button>
        </MyContext.Provider>
    )
}
export default ContextSample;