import React from 'react'

function Counter({count, increment}) {
    console.log("Rendering Counter component...");    
  return (
    <div>
        <h2>Current Count: {count}</h2>
        <button onClick={increment}>Increment count</button>
    </div>
  )
}

export default Counter