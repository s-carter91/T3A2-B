import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const nav = useNavigate()
    
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const postUser =async (username, name, password) => {
        const newUser = {
            username: username,
            name: name,
            password: password
        }

        const insertedUser = await fetch('https://localhost:4002/users/', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'},
        body: JSON.stringify(newUser)

    })
    const data = await insertedUser.json()
    nav('/home')
    }
    const handleSubmit = (event) => {
        event.preventDefault() 
        postUser()

    }

        console.log(postUser)


  return (
    <>
    <form onSubmit={handleSubmit}>
        <div className="container mt-5">
        <div className="row d-flex justify-content-center">
        <div className="form-group signup">
            <label htmlFor="username">Username</label>
            <input type="username" 
                className="form-control" 
                id="exampleInputUsername" 
                aria-describedby="usernameHelp" 
                placeholder="Enter username"
                onChange={(event) => setUsername(event.target.value)}
                value={username}
            />
            <small id="usernameHelp" className="form-text text-muted">We'll never share your details with anyone else.</small>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input 
                type="password" 
                className="form-control" 
                id="exampleInputPassword1" 
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
        </div>
        
        <button type="submit" className="btn btn-primary mt-4">Sign up</button>
        </div>
        </div>
    </form>
    </>
)}




export default SignUp