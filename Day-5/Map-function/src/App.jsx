import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Map from './Map/Map'
import Fun from './Map/Fun'
import Sample from './Sample'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Map/>
    <Fun/>
    <Sample/>
    </>
    
  )
}

export default App
