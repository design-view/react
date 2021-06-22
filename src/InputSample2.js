import React,{useState, useRef} from 'react';

function InputSample2() {
    //돔에 접근할 변수를 선언
    const nameInput = useRef();
    //객체를 담는다.
    const [inputs,setInputs] = useState({
        name: "",
        nickname: ""
    });
    
    //inputs에 담김 이름과 닉네임을 각각 변수에 담는다.
    const { name, nickname } = inputs;
    const onChange = (e) => {
        //글자가 변경되는 이벤트발생시
        //이벤트의 타겟의 name과 value를 구조분해할당한다.
        const { name, value} = e.target;
        setInputs({
            ...inputs,
            [name]:value
        })
        console.log(inputs,name);
    }
    
    
    const onReset = () => {
        setInputs({
            name: "",
            nickname: ""
        })
        nameInput.current.focus();
    }; 
    return (
        <div>
            <input placeholder="이름" name="name" value={name} onChange={onChange} ref={nameInput}/>
            <input placeholder="닉네임" name="nickname" value={nickname} onChange={onChange}/>
            <button onClick = {onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name}과
                {nickname}
            </div>
        </div>
    )
}

export default InputSample2;