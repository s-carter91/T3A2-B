import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./form.css"


const Login = ({setActiveUser, setToken}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const nav = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        loginUser()

    }
    // function to login user
    const loginUser = async() => { 
        const loginDetails = {
            username: username,
            password: password
        }
        const loginUser = await fetch(`https://t3a2-b-server-production.up.railway.app/auth/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'},
            body: JSON.stringify(loginDetails)
    })
    const data = await loginUser.json()
    setActiveUser(data.user)
    localStorage.setItem('token', data.token)
    setToken(data.token)
    nav(-1)
    }

  return (
    <>
        <form className="form" onSubmit={handleSubmit}>
            {/* Username input */}
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="username"
                    className="form-control"
                    id="exampleInputUsername" 
                    aria-describedby="usernameHelp" 
                    placeholder="Enter your username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
    
            </div>

            {/* Password input */}
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" 
                    className="form-control" 
                    id="exampleInputPassword" 
                    aria-describedby="PasswordHelp"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </div>

            {/* <!-- Submit button --> */}
            <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

            <div className="text-center">
                <p>Not a member? <Link to="/signup">Register</Link></p>
            </div>
        </form>
    </>
  )
}

export default Login