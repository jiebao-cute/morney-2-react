import Layout from '../components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import {useRecords} from 'components/hooks/useRecords';
import {useTags} from '../components/hooks/useTags';

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

function Statistics() {
  const [category,setCategory] = useState<'-'|'+'>('-')
  const {records} = useRecords()
  const {getName} = useTags()
  return(
    <Layout>
     <CategoryWrapper>
      <CategorySection
        value={category}
        onChange={value=> setCategory(value)}/>
       </CategoryWrapper>
        <div>
          {records.map(r=>{
            return<Item>
              <div className="tags">
              {r.tagIds.map(tagId => <span>{getName(tagId)}</span>)}
              </div>
              {r.note && <div className="note">
                {r.note}
              </div>}
              <div className="amount">
                  ￥{r.amount}
              </div>

              {/*{day(r.createdAt).format('YYYY年MM月DD日')}*/}
            </Item>
          })}
        </div>
    </Layout>
  )
}
export default Statistics;