import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

type RecordItem = {
  tagIds:number[]
  note:string
  category:'-'|'+'
  amount:number
}
export const useRecords = () =>{
  const [records,setRecord] = useState<RecordItem[]>([])
  useEffect(()=>{
    setRecord(JSON.parse(window.localStorage.getItem('records')|| '[]'))//渲染页面将数据读取出来
  },[])
  useUpdate(()=>{
    window.localStorage.setItem('records',JSON.stringify(records))
  },[records])
  const addRecord =(record:RecordItem)=>{
     setRecord([...records,record]);
  };

  return {records,addRecord}
}