import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBarMain() {
  
  return (
    <div className='bg-blue-500'>
  <div className='flex flex-wrap justify-around gap-5 p-5 w-full items-center'>
    <div className='w-full md:w-1/5'>
      <select className='w-full p-2 border-2 rounded-md' name='' id=''>
        <option value=''>Select your location</option>
        <option value=''>Lucknow</option>
        <option value=''>Barabanki</option>
        <option value=''>Hardoi</option>
        <option value=''>Unnao</option>
        <option value=''>Kanpur</option>
      </select>
    </div>
   
    <div className='w-full md:w-1/5'>
      <select className='w-full p-2 border-2 rounded-md' name='' id=''>
        <option value=''>English</option>
        <option value=''>Hindi</option>
      </select>
    </div>
    <div className='w-full md:w-1/5'>
      <NavLink
        className='block w-full p-2 px-5 text-black bg-white font-bold border-2 border-black rounded-md text-center'
        to='/AddProfile'>
        Add Profile
      </NavLink>
    </div>
  </div>
</div>
  )
}

export default NavBarMain