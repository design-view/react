import React from 'react';
import Hello from './Hello';
//css불러오기
import './App.css';
import Wrapper from './Wrapper';
function App() {
  return (
    <Wrapper>
      <Hello name="react" color="pink" isSpecial={true} />
      <Hello color="pink"/>
    </Wrapper>
  );
}
Hello.defaultProps = {
  name: '이름없음'
}
export default App;
