import {useEffect, useState} from 'react';
import {createId} from 'lib/createId';
import {useUpdate} from 'components/hooks/useUpdate';

const useTags =() =>{//封装一个自定义hook
  const [tags,setTags] = useState<{id:number ; name:string}[]>([]);
  useEffect(()=>{
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]')
    if (localTags.length ===0){
      localTags = [
        {id:createId(),name:'衣服'},
        {id:createId(),name:'吃饭饭'},
        {id:createId(),name:'家庭消费'},
        {id:createId(),name:'粗去玩~'},
      ]
    }
    setTags(localTags);
  },[]);//deps是空数组代表第一次进来就执行
  useUpdate(()=>{
    window.localStorage.setItem('tags', JSON.stringify(tags))
  },[tags]);
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
      if (tagName === '') {
        window.prompt('新标签的名字不可以是空的哦~');
      } else {
        setTags([...tags, {id: createId(), name: tagName}]);
      }
    }
  };
  return {tags,setTags,findTag,findTagIndex,updateTag,deleteTag,addTag}
}

export {useTags};
