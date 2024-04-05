import React from 'react'

const Map = () => {
    let array =[
        {
            name:"Devendra",
            age:25,
            role :"Developer",
            place:"HYD"
        },
        {
            name:"Veera",
            age:26,
            role :" Java Developer",
            place:"BNG"
        },
        {
            name:"Uday",
            age:26,
            role :" frontend Developer",
            place:"Chennai"
        },
        {
            name:"Hemanth",
            age:27,
            role :"ML engineer",
            place:"Pune"
        },
    
    
    ]
  return (
  <ul>
   { array.map((element, index)=>{
       return <li key ={index}>{index} {element.name} {element.age} {element.role}</li>
    })}
  </ul>
    
  )
}

export default Map