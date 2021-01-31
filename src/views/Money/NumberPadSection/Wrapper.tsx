import styled from 'styled-components';

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    >.output{
    font-size: 36px;
    background: white;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
                inset 0 5px 5px -5px rgba(0,0,0,0.25);
    } 
    >.pad{
    > button{
       font-size: 18px;float: left;width: 25%;height: 64px;border: none;
       &.ok{float: right;height: 128px;}
       &.zero{width: 50%;}
       &:nth-child(1){
       background: #ffffff;
       }
       &:nth-child(2),
       &:nth-child(5){
       background: #fff8dd;
       }
       &:nth-child(3),
       &:nth-child(6),
       &:nth-child(9){
       background: #fff1ba;
       }
       &:nth-child(4),
       &:nth-child(7),
       &:nth-child(10){
       background: #ffea98;
       }
       &:nth-child(8),
       &:nth-child(11),
       &:nth-child(13){
       background: #ffe474;
       }
        &:nth-child(12){
       background: #ffd700;
       }
        &:nth-child(14){
       background: #ffdd4c;
       }
    }
    }
`
export {Wrapper};