import React, { useRef } from 'react'

function Todos({todoList, addTodoItem}) {
    const newItemRef = useRef()
    console.log('Rendering Todo Component...')
  return (
    <div>
        <h2>My Todos Items</h2>
        {
            todoList.map((item, index)=> <p key={index}>{item}</p>)
        }
        <hr/>
        <input type='text' placeholder='Enter new todo item' ref={newItemRef} />
        <button onClick={()=> addTodoItem(newItemRef.current.value)}>Add Item</button>
    </div>
  )
}

export default Todos