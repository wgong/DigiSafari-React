import React from 'react'
import { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)
    const changeHandler = (event) => {
        if(event.target.name == 'username'){
            setUsername(event.target.value)
        }else if(event.target.name == 'password'){
            setPassword(event.target.value)
        }
    }
    const submitHandler = (event) =>{
        event.preventDefault();       
        if(username != '' && password !=''){
            setErrorMessage(null)
            console.log("Form Submitted", username, password)
        }else{
            setErrorMessage('Username and Password is Required')
        }
        
    }
  return (
    <div>
        <h1>Login form using useState</h1>
        {errorMessage && <p style={{color: "red"}}>{errorMessage}</p>}
        <form onSubmit={submitHandler}>
            <div>
                <label>Username</label>
                <input type='text' name='username' onChange={changeHandler} value={username} placeholder='Enter username' />
            </div>
            <div>
                <label>Password</label>
                <input type='password' name='password' onChange={changeHandler} value={password} placeholder='Enter password' />
            </div>
            <button type='submit'>Submit</button>
        </form>
        <p>
            Username: {username}
        </p>
        <p>
            Password: {password}
        </p>
    </div>
  )
}

export default Login