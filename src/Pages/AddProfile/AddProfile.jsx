import React from 'react'
import { NavLink } from 'react-router-dom'

function AddProfile() {
  return (
    <div className='w-[100%] '>
      <div className='lg:w-[100%] md:w-[100%] sm:w-[100%] grid  gap-5 grid-cols-1 lg:mx-80 md:mx-40  sm:mx-20  lg:my-20 md:my-20 sm:my-10'>
        <NavLink className="lg:w-[50%] md:w-[50%] sm:w-[60%] w-[60%] text-white bg-blue-500 p-3 font-bold border-2 border-gray-400 hover:border-black text-center rounded-xl hover:underline" to="/AddLabour">Add Labour</NavLink>
        <NavLink className="lg:w-[50%] md:w-[50%] sm:w-[60%] w-[60%] text-white bg-blue-500 p-3 font-bold border-2 border-gray-400 hover:border-black text-center rounded-xl hover:underline" to="/AddContractor">Add Contractor</NavLink>
        <NavLink className="lg:w-[50%] md:w-[50%] sm:w-[60%] w-[60%] text-white bg-blue-500 p-3 font-bold border-2 border-gray-400 hover:border-black text-center rounded-xl hover:underline" to="/AddJobs">Add Jobs</NavLink>
        <NavLink className="lg:w-[50%] md:w-[50%] sm:w-[60%] w-[60%] text-white bg-blue-500 p-3 font-bold border-2 border-gray-400 hover:border-black text-center rounded-xl hover:underline" to="/AddEquipments">Add Rental Equipments & Shop</NavLink>
      </div>
    </div>
  )
}

export default AddProfile