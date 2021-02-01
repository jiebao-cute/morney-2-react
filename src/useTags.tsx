import {useState} from 'react';

const useTags =() =>{
  const [tags,setTags] = useState<{id:number ; name:string}[]>([
    {id:1,name:'衣服'},
    {id:2,name:'吃饭饭'},
    {id:3,name:'家庭消费'},
    {id:4,name:'粗去玩~'},
    ]);
  return {tags,setTags}
}

export {useTags};
