import React from "react"

const Logout = ({ setToken, setActiveUser, nav }) => {

    // Logout function
    const logOut = () => {
        localStorage.removeItem('token')
        setToken(null)
        setActiveUser(null)
        nav('/')
    }
    const no = () =>{
        nav(-1)
    }

    return (
        <>
            <p>Are you sure you want to log out?</p>
            <button onClick={logOut}>Yes</button>
            <button onClick={no}>No</button>
        </>
    )
}
export default Logout