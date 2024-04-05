import React from 'react'

const Fun = () => {

    let array=[
        {
            name:"Ganesh",
            age:26,
            place:"ADB",
            role:"Java Dev"
        },
        {
            name:"Deva",
            age:25,
            place:"HYD",
            role:"Full stack Dev"
        },
        {
            name:"Sri kanth",
            age:27,
            place:"GTR",
            role:"Tester"
        },
        {
            name:"Veera",
            age:26,
            place:"RVP",
            role:"Backend Dev"
        }
    ]

  return (
    <ul>
      {  array.map(function(element,index){
           return <li key={index}>{element.name}</li>
        })}
    </ul>
  )}

  export default Fun