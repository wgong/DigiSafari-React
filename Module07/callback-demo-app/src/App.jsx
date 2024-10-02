import { useState } from 'react'
import './App.css'
import Todos from './components/Todos'
import Counter from './components/Counter'

function App() {
  const [todoList, setTodoList] = useState([])
  const [count, setCount] = useState(0)

  const addTodoItem = (item) =>{
    setTodoList((todoList)=> [...todoList, item])
  }

  const increment = () =>{
    setCount((count=> count+1))
  }
  return (
    <>
      <h1>Working with useCallback hook</h1>
      <Todos todoList={todoList} addTodoItem={addTodoItem}/>
      <hr/>
      <Counter count={count} increment={increment} />
    </>
  )
}

export default App
