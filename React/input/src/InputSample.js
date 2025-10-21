import React, {useState} from 'react'

export default function InputSample() {
  const [text, setText] = useState('');
  // useState('') 초기값
  // text 현재값
  // setText text 값을 변경할 수 있음

  // e 이벤트 객체
  // e.target 현재 이벤트가 발생하는 input 창
  const onChange = (e) => {
    setText(e.target.value);
  }

  const onReset = () => {
    setText('');
  };

  return (
    <div>
      <input onChange={onChange} value={text}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 : {text} </b>
      </div>
    </div>
  )
}
