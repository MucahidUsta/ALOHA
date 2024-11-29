import React from 'react'
import MyTextView from './MyTextView';

const ChildComponent=({count})=>{
    
    return(
        <>
        <MyTextView count={count}/>
        </>
    );
  
};
export default ChildComponent;