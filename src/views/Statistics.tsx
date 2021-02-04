import Layout from '../components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './Money/CategorySection';

function Statistics() {
  const [category,setCategory] = useState<'-'|'+'>('-')


  return(
    <Layout>
      <CategorySection
        value={category}
        onChange={value=> setCategory(value)}/>
    </Layout>
  )
}
export default Statistics;