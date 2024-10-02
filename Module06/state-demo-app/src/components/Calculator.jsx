import React, { useReducer, useRef } from 'react'

const initialState = { result: 0}
const reducer = (state, action) => {
    switch(action.type){
        case "add":
            return {...state, result: state.result + action.value}
        default:
            return state;
    }
}

function Calculator() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const inputRef = useRef()
  return (
    <div>
        <h1>Simple Calculator</h1>
        <h3>Result: {state.result}</h3>
        <input type='number' ref={inputRef} placeholder='Type a number' />
        <div>
            <button onClick={()=> dispatch({type:"add", value: Number(inputRef.current.value)})}>+</button>
        </div>
    </div>
  )
}

export default Calculator