import React from 'react'
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0)

    const increment = ()=>{
        setCount((count)=> count + 1)
    }
    
  return (
    <div>
        <h2>Current Count: {count}</h2>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Counter