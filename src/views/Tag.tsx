import React from 'react';
import Layout from 'components/Layout';
import {useTags} from '../useTags';
import {useParams} from 'react-router-dom';
type Params ={
  id:string
}
const Tag:React.FC = ()=>{
  const {findTag} = useTags();
  let{id} = useParams<Params>();
  const tag = findTag(parseInt(id));
  return (
    <Layout>
    <div>
      {tag.name}
    </div>
    </Layout>
  )
}
export {Tag}