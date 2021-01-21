import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react'
require('icons/money.svg');
require('icons/chart.svg');
require('icons/tag.svg');
const NavWrapper = styled.div`
line-height: 24px;
box-shadow: 0 0 3px rgba(0,0,0,0.25);
>ul{
display: flex;
  >li{
  width: 33.3333%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 4px 0;
  .icon{
  width: 24px;
  height: 24px;
  }
  }
}
`

const Nav =() =>{
  return(
    <NavWrapper>
      <ul>
        <li>
          <svg fill={"#999999"} className="icon">
            <use xlinkHref="#money" />
          </svg>
          <Link to="/money">记账</Link>
        </li>
        <li>
          <svg fill={"#999999"} className="icon">
            <use xlinkHref="#tag" />
          </svg>
          <Link to="/tags">标签</Link>
        </li>
        <li>
          <svg fill={"#999999"} className="icon">
            <use xlinkHref="#chart" />
          </svg>
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}
export default Nav;