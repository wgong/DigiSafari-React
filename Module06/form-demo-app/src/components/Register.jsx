import React, { useRef, useState } from 'react'

function Register() {
    const usernameRef = useRef()
    const passwordRef = useRef()
    const [errorMessage, setErrorMessage] = useState(null)
    const [formData, setFormData] = useState({username: '', password: ''})

    const submitHandler = (event) =>{
        event.preventDefault();
        let username = usernameRef.current.value
        let password = passwordRef.current.value
        if(username != '' && password !=''){
            setErrorMessage(null)
            console.log("Register form submitted", username, password);
            setFormData((formData)=> ({...formData, username, password}))
        }else{
            setErrorMessage('Username and Password is Required')
        }                
    }
  return (
    <div>
        <h1>Register form using useRef</h1>
        {errorMessage && <p style={{color: "red"}}>{errorMessage}</p>}
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
            Username: {formData.username}
        </p>
        <p>
            Password: {formData.password}
        </p>
    </div>
  )
}

export default Register