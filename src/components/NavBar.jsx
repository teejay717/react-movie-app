import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <div className='flex justify-center'>
    <nav>
        <ul>
            <li>
                <NavLink to="/" className={({ isActive }) => isActive ? "text-red-400" : ""}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/search" className={({ isActive }) => isActive ? "text-red-200" : ""}>Search</NavLink>
            </li>
        </ul>
    </nav>
    </div>
    </>
  )
}

export default NavBar