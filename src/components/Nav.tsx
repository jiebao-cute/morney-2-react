import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react'
import Icon from './Icon';

const NavWrapper = styled.div`
line-height: 24px;
box-shadow: 0 0 3px rgba(0,0,0,0.25);
>ul{
display: flex;
  >li{
  width: 33.3333%;
   text-align: center;
  >a{
  color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 4px 0;
  .icon{
  fill: grey;
  width: 24px;
  height: 24px;
  }
  &.selected{
  color: cadetblue;
  .icon{
  fill:cadetblue;
  }
  } 
  }
  }
}
`

const Nav =() =>{
  return(
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money"/>记账
          </NavLink>
        </li>
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <Icon name="tag"/>标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="chart"/>统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  )
}
export default Nav;