import './App.css'

function App() {
  let message = <h1>Welcome to JSX Expression</h1>
  const person ={
    firstName: 'John',
    lastName: 'Peter',
    age: 25
  }
  return (
      <>
        {message}
        <hr/>
        <h2>{person.firstName} {person.lastName} age is {person.age}</h2>
        <img src='/src/assets/react.svg' alt="React logo" />
      </>
  )
}

export default App
