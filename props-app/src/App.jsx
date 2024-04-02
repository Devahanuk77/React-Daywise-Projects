import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './MyButton'

function App() {
  const [count, setCount] = useState(0)

  const handleClick=()=>{
    console.log("handle click me button");
  }

  const handleSubmit=()=>{
    alert("handle submit button");
  }

  const handleLogin=()=>{
    confirm("handle login button");
  }
  const handleHome=()=>{
    console.log("handle home button");
  }
  return (
    <div>
    <MyButton buttonText="Click Me!" bgColor="red" clickMe={handleClick}/>
    <MyButton buttonText="Submit" bgColor="Green" clickMe={handleSubmit}/>
    <MyButton buttonText="Login" bgColor="blue" clickMe={handleLogin}/>
    <MyButton buttonText ="Home" bgColor="pink" clickMe={handleHome}/>
    </div>
  )
}

export default App
