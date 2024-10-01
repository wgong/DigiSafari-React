import React from 'react'
import { useState } from 'react'

function Name() {
    const [firstName, setFirstName] = useState('John')
    const [show, setShow] = useState(true)

    const updateName = () =>{
        setFirstName((firstName)=> firstName +" Peter")
    }

    const toggle = () =>{
        setShow((show)=> !show)
    }
  return (
    <div>
        <h3>Name: {firstName}</h3>
        <button onClick={updateName}>Change Name</button>
        {show && <h3>Sample content used to show or hide with boolean state values</h3>}
        <button onClick={toggle}>Show / Hide</button>
    </div>
  )
}

export default Name