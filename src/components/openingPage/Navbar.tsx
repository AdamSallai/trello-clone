import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to="/main/login">Login</Link>
      <Link to="/main/registration">Registration</Link>
    </div>
  )
}

export default Navbar
