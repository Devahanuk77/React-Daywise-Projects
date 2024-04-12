import React from 'react'
import style from './Greetings.module.css'

const Greetings = () => {
    console.log(style)
  return (
    <>
    <div>Greetings</div>
    <h2 className={style.App}>Hey Devendra Good Morning!</h2>
    <h3 id={style.react}>Welcome to React World</h3>
    
    </>
    
  )
}

export default Greetings