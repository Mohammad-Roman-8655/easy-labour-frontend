import React from 'react'
import { NavLink } from 'react-router-dom'

function Job() {
  return (
    <div>
      <div className='w-full'>
      <div className="flex flex-wrap justify-around items-center w-full p-5 bg-blue-500">
      <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
        <select
          className="w-full p-2 border-2 hover:border-black rounded-xl"
          id="category"
        >
          <option value="">Select Company : </option>
          <option value="">Ad Construction Pvt Ltd.</option>
          <option value="">Viraj Cosntrcution Pvt Ltd</option>
          <option value="">Ad Construction Pvt Ltd.</option>
          <option value="">Viraj Cosntrcution Pvt Ltd</option>
        </select>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
       
        <select
          className="w-full p-2 border-2 hover:border-black rounded-xl"
          id="type"
        >
          <option value="">Select Job Type:</option>
          <option value="">Labour</option>
          <option value="">Carpenter</option>
          <option value="">Welder</option>
          <option value="">Electrision</option>
          <option value="">Engineer</option>
          <option value="">Contractor</option>
          <option value="">Manager</option>
          <option value="">Instructor</option>
       
        </select>
      </div>
      <div className="w-[100%] sm:w-auto lg:w-1/3 h-11   flex justify-center items-center">
        <button
          className="lg:w-[30%] md:w-[30%] sm:w-auto p-2 px-5 text-black bg-white font-bold mx-10 border-2 border-black rounded-md"
        >
          Search
        </button>
        <div className='w-[50%]'>
          <NavLink className='w-[100%] p-2 px-5 text-black bg-white font-bold mx-10 border-2 border-black rounded-md' to="/AddProfile">Add Jobs</NavLink >
        </div>

      </div>
     
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto w-full p-5">
      {[...Array(80)].map((_, index) => (
        <div key={index} className="w-full border-2 rounded-lg overflow-hidden">
          <img
            className="w-full h-48 object-cover"
            src="https://res.cloudinary.com/dcxlcy6ls/image/upload/v1737793093/epezvjv4jnsokmmlx063.webp"
            alt="company-name"
          />
          <div className="flex flex-col p-3">
            <h1 className="text-xl font-semibold">Viraj cosntruction Pvt Ltd.</h1>
            <p className="font-normal">Vacancy : 12</p>
            <p className="font-normal">Type : Labour</p>
            <p className="font-normal">Salary : 400 /day</p>
            

            <p className="font-light mb-3"><i className="fa-solid fa-location-dot"></i> Lucknow, UP</p>
            <div className="flex items-center justify-between">
              <a
                className="w-2/3 border-2 bg-blue-500 text-white font-semibold p-1 rounded-3xl text-center"
                href=""
              >
                Apply Now
              </a>
              <a
                className="font-bold text-blue-600 text-2xl"
                href="tel:+916386663632"
              >
                <i className="fa-solid fa-phone"></i>
              </a>
              <a
                className="font-bold text-green-400 text-3xl"
                href="https://wa.me/6386663632"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>

      </div>
    </div>
  )
}

export default Job