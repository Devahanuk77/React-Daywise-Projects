import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Check from './Components/Conditional/Check'
import Button from './Components/StateChange/Button'

function App() {
  const [count, setCount] = useState(0)

  const handleClick =()=>{
    setCount(count+1);
  }

  return (
    <>
    <Check/>
    <h3 className='follow'>Hey Good Morning Devendra</h3>
    <h3 className='follow'>Welcome to React World</h3>
    <Button count ={count} onClick={handleClick}/>
    <Button count ={count} onClick={handleClick}/>
    </>
    
  )
}

export default App
