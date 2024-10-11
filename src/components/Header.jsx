import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
  console.log(props.cart)



  const {cart} = props

  return (
    <div className="navbar bg-base-100">
    <div className="flex-1">
      <Link className="btn btn-ghost text-xl">daisyUI</Link>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li>
          <details>
            <summary>Parent</summary>
            <ul className="bg-base-100 rounded-t-none p-2">
              <li><Link>Link 1</Link></li>
              <li><Link>Link 2</Link></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
  )
}
