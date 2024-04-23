import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Posts from './component/Posts'
import Timer from './component/Timer'

function App() {
  const [showTimer, setShowTimer]=useState(true);


  return (
    <>
{/* <Posts/> */}
{showTimer && <Timer/>}
<button onClick={()=>setShowTimer(!showTimer)}>{showTimer ? "Hide counter": "show counter"}</button>

    </>
  )
}

export default App
