import { useCallback, useState } from 'react'
import './App.css'
import Todos from './components/Todos'
import Counter from './components/Counter'

function App() {
  const [todoList, setTodoList] = useState([])
  const [count, setCount] = useState(0)

  const addTodoItem = useCallback((item) =>{
    setTodoList((todoList)=> [...todoList, item])
  }, [todoList]) 

  const increment = useCallback(() =>{
    setCount((count=> count+1))
  }, [count]) 
  
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
