import React from 'react'
import { useState } from 'react';

function Counter() {
    const getInitialCountFromLocalStorage = () =>{
      return Number(localStorage.getItem('count') || 0) 
    }

    const [count, setCount] = useState(getInitialCountFromLocalStorage)

    const increment = ()=>{
        setCount((count)=> count + 1)
    }

    const incrementByValue = (value)=>{
        setCount((count)=> count + value)
    }

    const saveCountToLocalStorage=()=>{
      localStorage.setItem("count", count)
    }
    
  return (
    <div>
        <h2>Current Count: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={()=>incrementByValue(2)}>Increment by 2</button>
        <button onClick={saveCountToLocalStorage}>Update Count to Local Storage</button>
    </div>
  )
}

export default Counter