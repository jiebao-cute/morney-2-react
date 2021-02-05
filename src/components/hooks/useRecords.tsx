import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

export type RecordItem = {
  tagIds:number[]
  note:string
  category:'-'|'+'
  amount:number
  createdAt:string
}
type newRecordItem = Omit<RecordItem, 'createdAt'>//继承RecordItem但是除去createdAt
export const useRecords = () =>{
  const [records,setRecord] = useState<RecordItem[]>([])
  useEffect(()=>{
    setRecord(JSON.parse(window.localStorage.getItem('records')|| '[]'))//渲染页面将数据读取出来
  },[])
  useUpdate(()=>{
    window.localStorage.setItem('records',JSON.stringify(records))
  },[records])
  const addRecord =(newRecord:newRecordItem)=>{
    if (newRecord.amount <= 0){
      alert('宝贝，要记得输入金额，不然没办法保存哦！')
      return false;
    }
    if (newRecord.tagIds.length === 0){
      alert('哎呀，建议小可爱选择一个标签或者创建新标签~')
      return false;
    }
    const record = {...newRecord,createdAt:(new Date()).toISOString()}
    setRecord([...records,record]);
     return true;
  };

  return {records,addRecord}
}