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
   const updateTag = (id:number ,obj:{name:string}) => {
    //获取要改的id的下标
    const index = findTagIndex(id);
    //深拷贝tags到tagsClone
    const tagsClone = JSON.parse(JSON.stringify(tags));
    //把tagsClone的第index删掉，换成{id:id,name:obj.name}
    tagsClone.splice(index,1,{id:id , name: obj.name});
    setTags(tagsClone);
   }

  return {tags,setTags,findTag,findTagIndex,updateTag}
}

export {useTags};
