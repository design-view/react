//리엑트를 불러와서 사용하겠다.
import React from 'react';

function Hello({color,name,isSpecial}) {
    
    return (
        <div style={{color}}>
            {/* 삼항연산자 또는 엔드 연산자를 사용하면됨 */}
            {/* 값이 다를때는 삼항연산자를 사용 true일때만 출력하려면 &&연산자를 사용 */}
            <b>{ isSpecial? '스페셜하다!': '낫스페셜'}</b>
            { isSpecial && <b>*</b> }
            안녕하세요 {name}
        </div>
    );
}
//Hello란 컴포넌트를 내보내기 export
export default Hello;

