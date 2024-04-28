import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Cart from './Components/Pages/Cart'
import Payment from './Components/Pages/Payment'
import Login from './Components/Pages/Login'
import Navbar from './Components/Pages/Navbar'
import Users from './Components/Pages/Users'
import SinglePageUser from './Components/Pages/SinglePageUser'

function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/cart' element={<Cart/>}/> 
    <Route path='/payment' element={<Payment/>}/>
    <Route path='/login' element={<Login/>}/>   
    <Route path='/users' element={<Users/>}/>   
    <Route path='/users/:id' element={<SinglePageUser/>}/> 
  </Routes>
  </>
  )
}

export default App
