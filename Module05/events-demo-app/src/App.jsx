
import './App.css'
import HoverComponent from './components/HoverComponent'

function App() {
 const handleClick = (msg)=>console.log('Button Clicked, with '+ msg)
 const handleHover = () => console.log('Hover works')
  return (
    <>
     <h2>Working with Event Handling</h2>
     <button onClick={()=>handleClick("Message")}>Click me</button>
     <hr />
     <HoverComponent handleHover={handleHover}/>
    </>
  )
}

export default App
