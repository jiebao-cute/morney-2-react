import Layout from '../components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import {useRecords} from 'components/hooks/useRecords';
import {useTags} from '../components/hooks/useTags';
import day from 'dayjs';
function Statistics() {
  const [category,setCategory] = useState<'-'|'+'>('-')
  const {records} = useRecords()
  const {getName} = useTags()
  return(
    <Layout>
      <CategorySection
        value={category}
        onChange={value=> setCategory(value)}/>
        <div>
          {records.map(r=>{
            return<div>
              {r.tagIds.map(tagId => <span>{getName(tagId)}</span>)}
              <hr/>
              {r.amount}
              {day(r.createdAt).format('YYYY年MM月DD日')}
            </div>
          })}
        </div>
    </Layout>
  )
}
export default Statistics;