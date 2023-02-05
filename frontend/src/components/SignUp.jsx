import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./form.css"


const SignUp = ({setActiveUser, setToken}) => {
    const nav = useNavigate()
    
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const createUser = async() => {
        const newUser = {
            username: username,
            name: name,
            password: password
        }
    
        const insertedUser = await fetch(`${process.env.API_URL}/auth/signup`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'},
            body: JSON.stringify(newUser)
    })
    const data = await insertedUser.json()
    setActiveUser(data.user)
    console.log(data)
    localStorage.setItem('token', data.token)
    setToken(data.token)
    nav('/')
    }

    const handleSubmit = (event) => {
        event.preventDefault() 
        createUser()

    }



  return (
    <>
    <form className="form" onSubmit={handleSubmit}>
        <div className="form-body container">
        <div className="row d-flex justify-content-center">
            <div className="form_label signup">
                <label className="form_label" htmlFor="username">Username</label>
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
                <label htmlFor="exampleInputPassword1">Name</label>
                <input 
                type="name" 
                className="form-control" 
                id="exampleInputName" 
                placeholder="Name"
                onChange={(event) => setName(event.target.value)}
                value={name}
                />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
            <   input 
                    type="password" 
                    className="form-control" 
                    id="exampleInputPassword1" 
                    placeholder="Password"
                    onChange={(event) => setPassword(event.target.value)}
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