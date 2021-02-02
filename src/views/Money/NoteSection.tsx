import styled from 'styled-components';
import React, {ChangeEventHandler, useRef} from 'react';
import {Input} from '../../components/Input';

const Wrapper = styled.section`
background: #ffff;
padding: 10px 16px;
font-size: 14px;
`
type Props= {
  value:string;
  onChange:(value:string)=>void;
}
const  NoteSection:React.FC<Props> = (props)=>{
  const note = props.value
  const onChange:ChangeEventHandler<HTMLInputElement> =(e)=>{
      props.onChange(e.target.value);
  };
  return(
    <Wrapper>
      <Input label='备注' type="text"
             value={note}
             placeholder={"在这里添加备注哦~"}
             onChange={onChange}
      />
    </Wrapper>
  )
}
export {NoteSection};