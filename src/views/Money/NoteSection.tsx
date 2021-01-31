import styled from 'styled-components';
import React, {useRef, useState} from 'react';

const Wrapper = styled.section`
background: #ffff;
padding: 0 16px;
font-size: 14px;
    >label{
    display: flex;
    align-items: center;
    >span{
    margin-right: 16px;
    white-space: nowrap;
    }
    >input{
    display: block;
    width: 100%;
    height: 72px;
    border: none;
    background: none;
    }
    }
`
const  NoteSection:React.FC=()=>{
  const [note,setNote] = useState('');
  const refInput = useRef<HTMLInputElement>(null)
  const onBlur =()=>{
    if (refInput.current !== null){
      setNote(refInput.current.value);
    }
  };
  return(
    <Wrapper>
      <label>
        <span>备注</span>
        <input type="text" placeholder={"在这里输入备注"}
          ref={refInput}
          defaultValue={note}
           onBlur={onBlur}
        />
      </label>
    </Wrapper>
  )
}
export {NoteSection};