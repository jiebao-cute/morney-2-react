import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
font-size: 24px;
> ul{
  display: flex;
  background: #ffe474;
>li{
   width: 50%;
   text-align: center;
   padding: 16px 0; 
   position: relative;
   &.selected::after{
   content: '';
   display: block;
   height: 5px;
   background:#ae9c69;
   position: absolute;
   bottom: 0;
   width: 100%;
   left: 0;
   }
    }
}
`
const CategorySection:React.FC = () =>{
  const [category,setCategory] = useState('-')
  return(
    <Wrapper>
      <ul>
        <li className={category === '-' ? 'selected' : ''}
        onClick={()=>{setCategory('-');}}
        >支出
        </li>
        <li className={category === '+' ? 'selected' : ''}
        onClick={()=>{setCategory('+');}}
        >收入
        </li>
      </ul>
    </Wrapper>
  )
}
export {CategorySection};