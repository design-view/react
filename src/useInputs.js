import { useState, useCallback } from "react";

//초기값을 initialForm파라미터로 받는다.
function useInputs(initialForm) {
    //form상태를 선언 초기값은 initialForm
    const [form, setForm] = useState(initialForm);
    //onChange함수 만들기
    const onChange = useCallback(e => {
        const { name, value} = e.target;
        //form값을 변경
        setForm(form => ({...form, [name]:value}));
    },[]);
    //초기값을 다시 셋팅
    const reset = useCallback(()=>setForm(initialForm),[initialForm]);

    //객체또는 배열로 반환할 수있음 배열로 반환하기
    //인풋의 변경은 onChange
    //상태는 form
    //초기화는 reset
    return [form, onChange, reset];
};

//다른곳에서 사용할수 있도록 내보내기
export default useInputs;