
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {  
  let count = 0;
  const incrementCount = () =>{
    count ++;
    console.log(count);    
  }
  return (
    <>
      <h3>Current Count: {count}</h3>
      <button onClick={incrementCount}>Increment</button>
    </>
  )
}

export default App
