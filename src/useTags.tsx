import {useState} from 'react';
import {createId} from 'lib/createId';

const useTags =() =>{
  const [tags,setTags] = useState<{id:number ; name:string}[]>([
    {id:createId(),name:'衣服'},
    {id:createId(),name:'吃饭饭'},
    {id:createId(),name:'家庭消费'},
    {id:createId(),name:'粗去玩~'},
    ]);
  return {tags,setTags}
}

export {useTags};
