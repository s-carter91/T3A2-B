const Login = ({setActiveUser, setToken}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const nav = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        loginUser()

    }


    const loginUser = async() => {
        const loginDetails = {
            username: username,
            password: password
        }

        const loginUser = await fetch('http://localhost:4002/auth/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'},
            body: JSON.stringify(loginDetails)
    })
    const data = await loginUser.json()
    setActiveUser(data.user)
    console.log(data)
    localStorage.setItem('token', data.token)
    setToken(data.token)
    nav(-1)
    }

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
    
    
    
      )
    }
    
    export default Login