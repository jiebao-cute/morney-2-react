import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
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
    &.selected{
    color: white;
    background: darkorange}
    }
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
const TagsSection:React.FC = ()=>{
  const [tags,setTags] = useState<string[]>(['衣','食','住','行']);
  const [selectedTags,setSelectedTags]=useState<string[]>([])
  const onAddTag = ()=>{
    const tagName = window.prompt('新标签的名字为');
    if(tagName !== null){
      setTags([...tags,tagName])
    }
  };
  const onToggleTag = (tag:string)=>{
    const index = selectedTags.indexOf(tag);
    if (index>=0){
      //如果tag被选中，就复制其他没被选中的tag，作为新的selectTags
      setSelectedTags(selectedTags.filter(t=>t!==tag))
    }else {
      setSelectedTags([...selectedTags,tag])
    }
  }

  return(
    <Wrapper>
      <ol>
        {tags.map(tag=>
        <li key={tag}
            onClick = {()=>{onToggleTag(tag);}}
            className={selectedTags.indexOf(tag)>=0 ? 'selected' : ''}
        >{tag}
        </li>
        )}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  )
}
export {TagsSection};