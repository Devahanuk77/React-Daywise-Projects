import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {

const properties =[
    {
        path:"/",
        text:"Home"
    },
    {
        path:"/about",
        text:"About"
    },
    {
        path:"/cart",
        text:"Cart"
    },
    {
        path:"/payment",
        text:"Payment"
    },
    {
        path:"/login",
        text:"Login"
    },
    {
        path:"/users",
        text:"Users"
    },
]

  return (
    <div style={{display:"flex", gap:"10px"}}>
   { properties.map((link)=>{
       return <NavLink to={link.path} className={({isActive})=>{
        return isActive? styles.activeStyle:styles.defaultStyle;
       }}>{link.text}</NavLink>
    })}
    </div>
  )
}

export default Navbar