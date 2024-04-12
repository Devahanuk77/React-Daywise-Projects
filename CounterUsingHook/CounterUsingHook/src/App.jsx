import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './Components/StateChange/MyButton'


function App() {

  const [count, setCount] =useState(0);

  const handleClick =()=>{
    setCount(count+1);
    console.log("count value ", count);
  }
  
  return (
    <div>

<MyButton count ={count} onClick={handleClick}/>
<MyButton count ={count} onClick ={handleClick}/>
    </div>

   
  )
}

export default App
