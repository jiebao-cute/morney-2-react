
import React, {useState} from 'react';
import {Wrapper} from './NumberPadSection/Wrapper';
import {generateOutput} from './NumberPadSection/generateOutput';

type Props = {
  value: number;
  onChange: (value:number) => void;
   onOk?:() => void;
}
const  NumberPadSection :React.FC<Props> =(props)=>{
  const output = props.value.toString();
  const setOutput = (output:string)=>{
    let value;
    if (output.length === 0){
      value = 0;
    }else if (output.length >= 16){
       value =parseFloat( output.slice(0,16));
    }else {
      value = parseFloat(output);
    }
     props.onChange(value);
  }
  const  onClickButtonWrapper =(e:React.MouseEvent)=>{
     const text = (e.target as HTMLButtonElement).textContent;
     if (text === null){return;}
     if (text === 'ok'){
       if (props.onOk) {props.onOk();}
       return;
     }
    if ('0123456789.'.split('').concat(['删除', '清空']).indexOf(text) >= 0) {
      setOutput(generateOutput(text, output));
    }
  }
  return(
    <Wrapper>
      <div className="output">
        {output}
      </div>
      <div className="pad clearfix" onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">ok</button>
        <button className="zero">0</button>
        <button>.</button>
      </div>
    </Wrapper>
  )
}
export {NumberPadSection};