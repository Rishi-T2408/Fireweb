import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/SignUp'>SignUp</NavLink></li>
        <li><NavLink to='/SignIn'>Log In</NavLink></li>

      </ul>
    </div>
  )
}

export default SignedOutLinks