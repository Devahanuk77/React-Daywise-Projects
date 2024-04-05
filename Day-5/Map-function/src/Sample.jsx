import React from 'react'

const Sample = () => {

    let array =[
        {
            name:"Prashanth",
            age :23,
            role:"SDE",
            native:"KarimNagar",
            company:"Google"

        },
        {
            name:"Devendra",
            age :25,
            role:"Full stack Developer",
            native:"Kakinada",
            company:"Zoho"

        },
        {
            name:"Vamsi",
            age :23,
            role:"Backend Developer",
            native:"Vizag",
            company:"Microsoft"

        },
        {
            name:"Kiran",
            age :26,
            role:"Prompt Engineer",
            native:"Anakapalle",
            company:"Meta"

        },
        {
            name:"Veera",
            age :27,
            role:"SDE-2",
            native:"HYD",
            company:"Apple"

        },
    ]
  return (
    <ul>
        {
        array.map((element,index)=>{
          return <li key={index}>{index} {element.name} ->{element.role} ->{element.company}</li>
        })}
    </ul>
  )
}

export default Sample