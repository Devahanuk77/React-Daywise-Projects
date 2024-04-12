import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let isUserAuthenticated = false;
  // let context;
  // if(isUserAuthenticated){
  //   context =<h1>User is Authenticated!</h1>
  // }
  // else{
  //   context=<h2>User is not Authenticated!</h2>
  // }
  

  return (
    isUserAuthenticated ? <h2>User is Authenticated</h2> : <h2>User is not Authenticated</h2> // Ternary operator
   
  )
}

export default App
