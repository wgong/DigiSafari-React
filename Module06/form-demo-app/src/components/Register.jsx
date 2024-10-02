import React, { useRef } from 'react'

function Register() {
    const usernameRef = useRef()
    const passwordRef = useRef()

    const submitHandler = (event) =>{
        event.preventDefault();
        let username = usernameRef.current.value
        let password = passwordRef.current.value
        console.log("Register form submitted", username, password);        
    }
  return (
    <div>
        <h1>Register form using useRef</h1>
        {/* {errorMessage && <p style={{color: "red"}}>{errorMessage}</p>} */}
        <form onSubmit={submitHandler}>
            <div>
                <label>Username</label>
                <input type='text' ref={usernameRef} placeholder='Enter username' />
            </div>
            <div>
                <label>Password</label>
                <input type='password' ref={passwordRef} placeholder='Enter password' />
            </div>
            <button type='submit'>Submit</button>
        </form>
        <p>
            Username: 
        </p>
        <p>
            Password: 
        </p>
    </div>
  )
}

export default Register