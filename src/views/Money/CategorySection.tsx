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
type Props ={
  value: '-'|'+';
  onChange:(value:'-'|'+')=>void;
}
const CategorySection:React.FC<Props> = (props) =>{
  const categoryMap = {'-':'支出',"+":'收入'};
  type keys = keyof typeof categoryMap;
  const [categoryList] = useState<keys[]>(['-','+'])
  const category = props.value;

  return(
    <Wrapper>
      <ul>
        {categoryList.map(c=>
          <li key={c}
            className={category === c ? 'selected' : ''}
              onClick={()=>{props.onChange(c);}}
          >{categoryMap[c]}
          </li>
        )}
      </ul>
    </Wrapper>
  )
}
export {CategorySection};