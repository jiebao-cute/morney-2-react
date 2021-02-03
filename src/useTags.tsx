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
  const findTagIndex =(id:number)=>{
     let result = -1;
     for (let i = 0;i < tags.length;i++){
       if (tags[i].id === id){
         result = i;
         break;
       }
     }
    return result;
  }
   const updateTag = (id:number ,{name}:{name:string}) => {
    setTags(tags.map(tag => tag.id === id ? {id , name:name} : tag));
   }
   const deleteTag = (id:number)=>{
     setTags(tags.filter(tag=>tag.id !== id));
   }
  const addTag = ()=>{
    const tagName = window.prompt('新标签的名字为');
    if(tagName !== null){
      setTags([...tags,{id:createId(),name:tagName}])
    }
  };
  return {tags,setTags,findTag,findTagIndex,updateTag,deleteTag,addTag}
}

export {useTags};
