import { useEffect, useState, useRef, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes,Link} from 'react-router-dom'
import About from './Components/About'
import Home from './Components/Home'
import Cart from './Components/Cart'
import Navbar from './Components/Navbar'
import Users from './Components/Users'
import SingleUserPage from './Components/SingleUserPage'




function App() {
 return(
  <>
  <Navbar/>
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/cart" element={<Cart/>}/>
  <Route path="/users" element={<Users/>}/>
  <Route path ="/users/:id" element={<SingleUserPage/>}/>

 </Routes>
 
  </>
 )
}
export default App




