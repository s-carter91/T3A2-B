import React from 'react'
import { Link } from "react-router-dom"



const Navbar = ({ activeUser }) => {

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark bg-gradient">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">BackLoGGo</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/games">Games</Link>
            </li>
            {/* {activeUser && (
              <li className="nav-item">
                <Link className="nav-link text-light" to="/users/1">Profile</Link>
              </li>
            )} */}
            {activeUser ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/my_profile">Profile</Link>
                </li>
                <li>
                  <Link className="nav-link text-light" to="/logout">Logout</Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/signup">Signup</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar