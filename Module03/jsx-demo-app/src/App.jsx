import './App.css'

function App() {
  let message = <h1>Welcome to JSX Expression</h1>
  const person ={
    firstName: 'John',
    lastName: 'Peter',
    age: 25
  }

  const showDetail = () =>{
    return <h2>{person.firstName} {person.lastName} age is {person.age}</h2>
  }

  const myStyle = {color:'green', backgroundColor: 'lightgreen'}
  return (
      <>
      <div style={myStyle}>Working with Inline sytles in JSX</div>
      <div className='myDiv'>Working with CSS Stylesheets</div>
        {message}
        <hr/>
        {showDetail()}
        <img src='/src/assets/react.svg' alt="React logo" />
      </>
  )
}

export default App
