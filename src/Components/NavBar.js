import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css';
const NavBar = () => {

  return (
    <div><nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="./Home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="./Student">Students</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="./Contact">Contact Us</Link>
          </li>
        </ul>
  </nav></div>
  )
}

export default NavBar