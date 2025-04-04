import { div } from 'framer-motion/client'
import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBarMain() {
  
  return (
    <div className='bg-blue-500  '>
  <div className=' flex flex-row  lg:justify-end md:justify-end sm:justify-around justify-around lg:gap-5 md:gap-5 sm:gap-3  gap-3 lg:p-3 md:p-3 sm:p-2 p-2 w-full items-center'>
    <NavLink
        className='block lg:w-[12%] md:w-[20%] sm:w-[50%] w-[50%] p-2 px-4 text-white bg-blue-500 font-bold border-2 border-white rounded-md text-center hover:border-black hover:underline'
        to='/AddCompany'>
        Add Company 
      </NavLink>
  <NavLink
        className='block lg:w-[12%] md:w-[20%] sm:w-[50%] w-[50%] p-2 px-4 text-white bg-blue-500 font-bold border-2 border-white rounded-md text-center hover:border-black hover:underline'
        to='/AddProfile'>
        Add Profile 
      </NavLink>
     {/* <NavLink
        className='block w-[15%] p-2 px-5 text-black bg-white font-bold border-2 border-black rounded-md text-center hover:underline'
        to='/AddEquipments'>
        Add Shop 
      </NavLink>
      <NavLink
        className='block w-[15%] p-2 px-5 text-black bg-white font-bold border-2 border-black rounded-md text-center hover:underline'
        to='/AddJobs'>
        Add Job 
      </NavLink>
      <NavLink
        className='block w-[15%] p-2 px-5 text-black bg-white font-bold border-2 border-black rounded-md text-center hover:underline'
        to='/AddCompany'>
        Add Company
      </NavLink> */}
    
  </div>
</div>
  
  )
}

export default NavBarMain