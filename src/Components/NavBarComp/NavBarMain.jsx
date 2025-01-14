import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBarMain() {
  return (
    <div className=''>
      <div className='flex gap-5 p-5 w-[100%] items-center'>
        <div className='w-[20%]'>
          <select className='w-[100%] p-2 border-2 rounded-md' name="" id="">
            <option value="">Select your loaction</option>
            <option value="">Lucknow</option>
            <option value="">Barabanki</option>
            <option value="">Hardoi</option>
            <option value="">Unnao</option>
            <option value="">Kanpur</option>
          </select>
        </div>
        <div className='w-[50%]'>
          <input className='w-[100%] p-2 border-2 rounded-md' type="text" placeholder='Search Labour and Contractor ' />
        </div>
        <div className='w-[15%]'>
          <select className='w-[100%] p-2 border-2 rounded-md' name="" id="">
            <option value="">English</option>
            <option value="">Hindi</option>
          </select>
        </div>
        <div className='w-[15%]'>
          <NavLink className='w-[100%] p-2 px-5 text-black bg-white font-bold mx-10 border-2 border-black rounded-md' to="/AddProfile">Add Profile</NavLink >
        </div>
      </div>
    </div>
  )
}

export default NavBarMain