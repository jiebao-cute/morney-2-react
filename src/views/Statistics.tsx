import Layout from '../components/Layout';
import React, {ReactNode, useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import {RecordItem, useRecords} from 'components/hooks/useRecords';
import {useTags} from '../components/hooks/useTags';
import day from 'dayjs';
import styled from 'styled-components';
const Item = styled.div`
display: flex;
justify-content: space-between;
background:#ffe474;
font-size: 18px;
border-radius: 5%;
line-height: 20px;
padding: 10px 16px;
border-top: 1px solid white;
box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.1),
                inset 0 5px 5px -5px rgba(0,0,0,0.1);
>.note{
margin-right: auto;
margin-left: 16px;
color: #999 ;

font-size: 16px;
`
const CategoryWrapper = styled.div`
box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
                inset 0 5px 5px -5px rgba(0,0,0,0.25);
background: #ffd700;
`
const Header = styled.h3`
display: flex;
justify-content: space-between;
font-size: 18px;
line-height: 20px;
padding: 10px 16px;
`

 function Statistics() {
   const [category, setCategory] = useState<'-' | '+'>('-')
   const {records} = useRecords()
   console.log(records);
   const {getName} = useTags()
   const selectedRecords = () => records.filter(t => t.category === category)
   const hash: { [key: string]: RecordItem[] } = {}
   selectedRecords().forEach(r => {
     const key = day(r.createdAt).format('YYYY-MM-DD')
     if (!(key in hash)) {
       hash[key] = []
     }
     hash[key].push(r)
   })
   const array = Object.entries(hash)
     .sort((a, b) => {
       if (a[0] === b[0]) return 0;
       if (a[0] > b[0]) return -1;
       if (a[0] < b[0]) return 1;
       return 0;
     })
   let sum = 0;
   return (
     <Layout>
       <CategoryWrapper>
         <CategorySection
           value={category}
           onChange={value => setCategory(value)}/>
       </CategoryWrapper>
       {array.map(([date, records]) =>
         <div key={date}>
           <Header>
             <span> {date}</span>
             <div>
               {records.map((r,index)=>{
                 sum = sum + r.amount
                 if(index === records.length -1){
                   const newSum = sum;
                   sum = 0;
                   return newSum;
                 }else{
                   return '';
                 }
               })
               }
             </div>
           </Header>
           <div>
             {records.map(r => {
               return <Item key={r.createdAt}>
                 <div className="tags">
                   {r.tagIds.map(tagId => <span key={tagId}>{getName(tagId)}</span>)
                     .reduce((result, span, index, array) =>
                       result.concat(index < array.length - 1 ? [span, '，'] : [span]), [] as ReactNode[]
                     )
                   }
                 </div>
                 {r.note && <div className="note">
                   {r.note}
                 </div>}
                 <div className="amount">
                   ￥{r.amount}
                 </div>
               </Item>
             })}
           </div>
         </div>
       )}
     </Layout>
   )
 }
export default Statistics;