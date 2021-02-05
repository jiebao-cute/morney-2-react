import Layout from 'components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from './Money/TagsSection';
import {NoteSection} from './Money/NoteSection';
import {CategorySection} from './Money/CategorySection';
import {NumberPadSection} from './Money/NumberPadSection';
import {useRecords} from '../components/hooks/useRecords';

const CategoryWrapper = styled.div`
background: #ffe474;
`

const MyLayout = styled(Layout)`
display: flex;
flex-direction: column;
`
type Category = '+'|'-'
const defaultFormData = {
  tagIds:[] as number[],
  note:'',
  category:'-' as Category,
  amount: 0
}

function Money() {
  const [selected,setSelected] = useState(defaultFormData)
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    })
  }
  const {addRecord }= useRecords()
  const submit =()=>{
    if(addRecord(selected)){
      alert('小可爱保存成功啦')
    }
     setSelected({tagIds: [],note:'',category:'-',amount: 0});
  }
  return(
    <MyLayout>
       <TagsSection
         value={selected.tagIds}
         onChange={(tagIds)=> onChange({tagIds})}
       />
        <NoteSection
          value={selected.note}
          onChange={(note)=> onChange({note})}
        />
      <CategoryWrapper>
        <CategorySection
          value={selected.category}
          onChange={(category)=> onChange({category})}
        />
      </CategoryWrapper>
         <NumberPadSection
          value={selected.amount}
          onChange={(amount)=> onChange({amount})}
          onOk={submit}
         />
    </MyLayout>
  )
}
export default Money;