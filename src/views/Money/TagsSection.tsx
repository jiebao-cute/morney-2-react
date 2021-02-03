import styled from 'styled-components';
import React, {} from 'react';
import {useTags} from 'components/hooks/useTags';

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
    background: #f60}
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
type Props = {
  value:number[];
  onChange:(selected:number[])=>void;
}
const TagsSection:React.FC<Props> = (props)=>{
  const {tags,addTag} = useTags();
  const selectedTagIds = props.value;

  const onToggleTag = (tagId:number)=>{
    const index = selectedTagIds.indexOf(tagId);
    if (index>=0){
      //如果tag被选中，就复制其他没被选中的tag，作为新的selectTags
      props.onChange(selectedTagIds.filter(t=>t!==tagId))
    }else {
      props.onChange([...selectedTagIds,tagId])
    }
  }

  return(
    <Wrapper>
      <ol>
        {tags.map(tag=>
        <li key={tag.id}
            onClick = {()=>{onToggleTag(tag.id);}}
            className={selectedTagIds.indexOf(tag.id)>=0 ? 'selected' : ''}
        >{tag.name}
        </li>
        )}
      </ol>
      <button onClick={addTag}>新增标签</button>
    </Wrapper>
  )
}
export {TagsSection};
