import React, { useState } from 'react'

const Button = (props) => {
    const {count,onClick} =props;
    
    const handleClick =()=>{

    }
   
  return (
    <>
    {count}
    <button onClick={onClick}>Counter</button>
    
    </>
    
  )
}

export default Button