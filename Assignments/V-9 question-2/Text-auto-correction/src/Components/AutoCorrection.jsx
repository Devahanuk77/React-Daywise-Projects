import React, { useState } from 'react'

const AutoCorrection = (props) => {
   
    const [text, setText] =useState("");

    let corrections ={
        "taech":"teach",
        "relay":"really",
        "wierd": "weird",
        "chnage": "change",
        "claen": "clean",
    }

    const handleChange =()=>{
        <ol>
{ corrections.map((element)=>{
            return <li>{element}</li>
        })}
        </ol>
       
        if(text ===""){
            console.log("text");
        }
        
    }

  return (
   <input type="text" onChange={handleChange} />
  )
}

export default AutoCorrection