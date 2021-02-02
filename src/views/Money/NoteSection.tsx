import styled from 'styled-components';
import React, {useRef} from 'react';
import {Input} from '../../components/Input';

const Wrapper = styled.section`
background: #ffff;
padding: 0 16px;
font-size: 14px;
`
type Props= {
  value:string;
  onChange:(value:string)=>void;
}
const  NoteSection:React.FC<Props> = (props)=>{
  const note = props.value
  const refInput = useRef<HTMLInputElement>(null)
  const onBlur =()=>{
    if (refInput.current !== null){
      props.onChange(refInput.current.value);
    }
  };
  return(
    <Wrapper>
      <Input label='备注' type="text"
             defaultValue={note}
             placeholder={"在这里添加备注哦~"}
             onBlur={onBlur}
      />
    </Wrapper>
  )
}
export {NoteSection};