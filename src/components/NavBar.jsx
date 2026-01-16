import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <>
    <nav className="fixed top-10 -translate-y-1/2 left-1/2 -translate-x-1/2 w-auto z-50 bg-neutral-800 shadow-lg border-1 border-neutral-600 rounded-lg px-4">
        <div className="flex flex-row justify-center items-center gap-6 py-2">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-neutral-400" : "text-white"}>
                <FontAwesomeIcon className="" icon={faHouse} />
            </NavLink>

            <NavLink to="/search" className={({ isActive }) => isActive ? "text-neutral-400" : "text-white"}>
                <FontAwesomeIcon className="" icon={faMagnifyingGlass} />
            </NavLink>
        </div>
    </nav>
    </>
  )
}

export default NavBar