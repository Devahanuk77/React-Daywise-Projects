import React, { useState } from 'react'

const MyButton = (props) => {
  const {count,onClick}= props;
// const [count, setCount] =useState(0);

// let count =0;
const handleClick =()=>{
    // console.log("Clicked!")
    // count =count+1;
    // setCount(count+1);
    // console.log("Count value ",count);
}

  return (
    <>
     <h3>{count}</h3>
    <button onClick={handleClick}>Counter</button>    
    </>
   
  )
}

export default MyButton