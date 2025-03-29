import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

function NavBarTop() {
    const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="bg-blue-500 text-white pt-5">
        <div className="flex justify-between gap-24 items-center p-3 max-w-9xl ">
         
          <div className="flex items-center gap-3">
            <img
              className="h-12 w-12 md:h-16 md:w-16"
              src="https://res.cloudinary.com/dcxlcy6ls/image/upload/v1736589644/pgbbuyig6p9yvkj3qbvk.png"
              alt="Labour-logo"
            />
            <h1 className="text-2xl md:text-3xl font-bold">EASY LABOUR</h1>
          </div>

      
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-3xl focus:outline-none">
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

         
          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } absolute top-20 left-0 w-full bg-blue-500 p-5 md:p-0 md:static md:w-auto md:flex md:items-center md:gap-10`}
          >
            <NavLink
              className="block text-lg font-semibold py-2 md:inline md:py-0 hover:underline"
              to="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            
            <NavLink
              className="block text-lg font-semibold py-2 md:inline md:py-0 hover:underline"
              to="/Services"
              onClick={() => setIsOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              className="block text-lg font-semibold py-2 md:inline md:py-0 hover:underline"
              to="/RentalEquipments"
              onClick={() => setIsOpen(false)}
            >
              Rental Equipments
            </NavLink>
            <NavLink
              className="block text-lg font-semibold py-2 md:inline md:py-0 hover:underline"
              to="/About"
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              className="block text-lg font-semibold py-2 md:inline md:py-0 hover:underline"
              to="/Contact"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
            <div className="flex gap-5">
           {user ? (
                <>
                <span className="mr-4">Welcome, {user.username}</span>
                <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">
                 Logout
               </button>
               </>
            ) : (
           <>
             <NavLink to="/Login"  onClick={() => setIsOpen(false)}  className="block text-lg font-semibold py-2 md:inline md:py-0 hover:underline">Login</NavLink>
             <NavLink to="/SignUp" onClick={() => setIsOpen(false)}  className="block text-lg font-semibold py-2 md:inline md:py-0 hover:underline">Register</NavLink>
          </>
        )}
      </div>
          
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default NavBarTop

