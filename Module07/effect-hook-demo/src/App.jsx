import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState()
  const [name, setName] = useState()

  // Intializing count and name from local storage
  useEffect(()=>{
    // console.log("useEffect called...", count, name); 
    setCount((count)=> Number(localStorage.getItem('count') || 0) ) 
    setName((name)=> localStorage.getItem('name') || 'No Name') 
  },[])

  // Updat the count to local storage
  useEffect(()=>{
    localStorage.setItem('count', count)
  }, [count])

  // Update the nmae to local storage
  useEffect(()=>{
    localStorage.setItem('name', name)
  }, [name])

  return (
    <>      
      <h1>Working with useEffect</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className="card">
        <h4>Current Name: {name}</h4>
        <button onClick={() => setName("Peter")}>
          Change Name
        </button>
      </div>        
    </>
  )
}

export default App
