import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark bg-gradient">
  <div className="container-fluid">
    <Link className="navbar-brand text-light" to="/">BackLoggo</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/games">Games</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/users">Profile</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar