import React from 'react'

const Map = () => {

    let array =[
        {
            name:"Devendra",
            age:25,
            place:"KKD",
            role:"Fullstack"
        },
        {
            name:"Vamsi",
            age:23,
            place:"Vzg",
            role:"Backend dev"
        },
        {
            name:"Prashanth",
            age:22,
            place:"Hyd",
            role:"Frontend dev"
        },
        {
            name:"kiran",
            age:26,
            place:"Anakapalle",
            role:"ML Engineer"
        },
    ]

     

  return (
    <>
    <ul>
       { array.map((element,index)=>{
            return <li key ={index}>{index} {element.name} {element.age} {element.place} {element.role}</li> 
        })}
    </ul>
    
    </>
  )
}

export default Map