import {useState} from 'react';
import {createId} from 'lib/createId';
const defaultTags=[
  {id:createId(),name:'衣服'},
  {id:createId(),name:'吃饭饭'},
  {id:createId(),name:'家庭消费'},
  {id:createId(),name:'粗去玩~'},
]
const useTags =() =>{
  const [tags,setTags] = useState<{id:number ; name:string}[]>(defaultTags);
  const findTag = (id:number)=>tags.filter(tag => tag.id === id)[0];
  return {tags,setTags,findTag}
}

export {useTags};
