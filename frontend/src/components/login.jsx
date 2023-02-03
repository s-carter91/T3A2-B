import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        e.preventDefault()
        console.log(username, password)

    }


// const getHeader = async () => {
//         /// DEBUG
//         /// ADD USER_ID TO /USERS/
//         let response = await fetch(`http://localhost:4002/users/${activeUser._id}/playing`,{ 
//             method: 'GET',
//             headers: {
//                 authorization: "key",
//                 Accept: 'application/json'
//             },
            
//         })
//         const data = await response.json()
//       }


  return (
    <>
    <form onSubmit={handleSubmit}>
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

  {/* <!-- 2 column grid layout for inline styling --> */}
  <div className="row mb-4">
    <div className="col">
      {/* <!-- Simple link --> */}
      <Link to="#!">Forgot password?</Link>
    </div>
  </div>

  {/* <!-- Submit button --> */}
  <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

  {/* <!-- Register buttons --> */}
  <div className="text-center">
    <p>Not a member? <Link to="/signup">Register</Link></p>
  </div>
</form>
    </>


    // <>
    // <form className="login" onSubmit={handleSubmit}>
    //     <h3>Log in</h3>

    //     <label>Username:</label>
    //     <input
    //         type="username"
    //         onChange={(e) => setUsername(e.target.value)}
    //         value={username}
    //     />

    //     <label>Password:</label>
    //     <input 
    //         type="password"
    //         onChange={(e) => setPassword(e.target.value)}
    //         value={password}
    //     />

    //     <button>Log in</button>
    // </form>
    // </>
  )
}

export default Login