import React from 'react'

const MyButton = (props) => {
    console.log(props);
    const {buttonText:text,bgColor:color,clickMe}=props; // Object destruction with parameter nae changed from buttonText to text & bgColor to color
   
    return (
    <button style={{backgroundColor:color}} onClick={clickMe}>{text}</button>
  )
}

export default MyButton