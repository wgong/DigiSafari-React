import React from 'react'
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0)

    const increment = ()=>{
        setCount((count)=> count + 1)
    }

    const incrementByValue = (value)=>{
        setCount((count)=> count + value)
    }
    
  return (
    <div>
        <h2>Current Count: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={()=>incrementByValue(2)}>Increment by 2</button>
    </div>
  )
}

export default Counter