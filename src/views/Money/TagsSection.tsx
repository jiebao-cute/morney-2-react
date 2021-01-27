import styled from 'styled-components';

const TagsSection = styled.section`
background: #fff8dd;
flex-grow: 1;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-start;
padding: 12px 16px;
>ol{margin: 0 -12px;
  >li{
    background:#ffd700;
    border-radius: 18px;
    display: inline-block;
    padding: 3px 18px;
    font-size: 14px;
    margin: 8px 12px;
    }
  }
  >button{
    background: none;
    border: none;
    border-bottom:1px solid;
    color: #333;
    padding: 2px 4px;
    margin-top: 8px;
`
export {TagsSection};
