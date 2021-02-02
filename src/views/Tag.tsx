import React from 'react';
import Layout from 'components/Layout';
import {useTags} from 'useTags';
import {useParams,useHistory} from 'react-router-dom';
import Icon from 'components/Icon';
import {Button} from 'components/Button';
import styled from 'styled-components';
import {Input} from 'components/Input';
import {Space} from 'components/Space';
import {Center} from 'components/Center';
type Params ={
  id:string
}

const Topbar = styled.header`
display: flex;
justify-content: space-between;
line-height: 20px;
padding: 14px;
background: #ffd700;
`
const InputWrapper = styled.div`
 background: #ffe474;
 padding: 0 16px;
 margin-top: 8px;
 border-radius: 5%;
`
const IconWrapper = styled.div`
  padding: 60px 0;
  .icon{
  width: 60px;
  height: 60px;
  }
`

const Tag:React.FC = ()=>{
  const {findTag , updateTag,deleteTag} = useTags();
  let{id:idString} = useParams<Params>();
  const tag = findTag(parseInt(idString));
  const tagContent = (tag: { id: number; name: string })=>(
      <div>
         <InputWrapper>
              <Input label="标签名" type="text"
               placeholder={"目前没有标签名哦~"}
               value={tag.name}
               onChange={(e)=>{
               updateTag(tag.id,{name:e.target.value})
            }}
           />
          </InputWrapper>
          <Space/>
          <Space/>
          <Space/>
          <Center>
           <Button onClick = {()=>{
              deleteTag(tag.id);
            }}>
              删除标签
           </Button>
           </Center>
           <Space/>
      </div>

  )
  const history = useHistory()
  const onClickBack =()=>{
    history.goBack()
  }
  return (
    <Layout>
      <Topbar>
        <Icon name="left" onClick = {onClickBack}/>
        <span>编辑标签页</span>
        <span> </span>
      </Topbar>
      {tag ? tagContent(tag) : <Center><IconWrapper><Icon name="crying"/></IconWrapper>tag 不存在</Center>}
    </Layout>
  )
}
export {Tag}