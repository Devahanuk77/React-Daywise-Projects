import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleIncrement =()=>{
        setCount(count+1);
    }

    const handleDecrement =()=>{
        setCount(count-1);
    }

    const handleDouble =()=>{
        setCount(count*2);
    }

  return (
    <>
    <h2 >Counter</h2>
    <h3>{count}</h3>
    <button className='changePositive' onClick={handleIncrement} >+</button>
    <button className='changeNegative' onClick={handleDecrement}>-</button>
    <button  className='changeDouble' onClick={handleDouble}>Double</button>
    </>
  )
}

export default Counter