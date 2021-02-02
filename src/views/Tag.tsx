import React from 'react';
import Layout from 'components/Layout';
import {useTags} from 'useTags';
import {useParams} from 'react-router-dom';
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


const Tag:React.FC = ()=>{
  const {findTag , updateTag} = useTags();
  let{id:idString} = useParams<Params>();
  const tag = findTag(parseInt(idString));
  return (
    <Layout>
      <Topbar>
        <Icon name="left"/>
        <span>编辑标签页</span>
        <span> </span>
      </Topbar>
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
       <Button>
          删除标签
       </Button>
     </Center>
    <Space/>
    </Layout>
  )
}
export {Tag}