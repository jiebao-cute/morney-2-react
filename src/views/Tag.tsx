import React from 'react';
import Layout from 'components/Layout';
import {useTags} from 'useTags';
import {useParams} from 'react-router-dom';
import Icon from 'components/Icon';
import {Button} from 'components/Button';
import styled from 'styled-components';
import {Input} from '../components/Input';
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
const  Space = styled.div`
height: 16px;
`
const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Tag:React.FC = ()=>{
  const {findTag} = useTags();
  let{id} = useParams<Params>();
  const tag = findTag(parseInt(id));
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