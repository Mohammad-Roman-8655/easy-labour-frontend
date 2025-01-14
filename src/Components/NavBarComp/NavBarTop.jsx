import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBarTop() {
  return (
    <>
    <div className='flex justify-between items-center p-3 bg-blue-500 text-white '>

      <div className='flex gap-3 ' >
        
        <img className='h-16 w-16' src="https://res.cloudinary.com/dcxlcy6ls/image/upload/v1736589644/pgbbuyig6p9yvkj3qbvk.png" alt="Labour-logo" />
        <h1 className='text-3xl font-bold my-auto '>EASY LABOUR</h1>

      </div>
      <div className='flex gap-10'>
         <NavLink className="text-xl font-semibold " to="/">Home</NavLink>
         <NavLink className="text-xl font-semibold " to="/Services">Services</NavLink>
         <NavLink className="text-xl font-semibold " to="/RentalEquipments">Rental Equipments</NavLink> 
         <NavLink className="text-xl font-semibold " to="/About">About</NavLink>
         <NavLink className="text-xl font-semibold " to="/Contact">Contact</NavLink>
         <NavLink className="text-xl font-semibold " to="/Login">Login</NavLink>
      </div>
    </div>
    <hr />
    
    </>
  )
}

export default NavBarTop

// Logo,Home,about contact,Login