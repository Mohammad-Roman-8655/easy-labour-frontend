import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'


function Job() {

  const [Jobs,setJobs]=useState([]);

  const fetchJobs= async () => {
          try {

            const response= await fetch('http://localhost:3000/api/jobs');
            const data= await response.json();
            setJobs(data);
            
          } catch (error) {
            console.error("Error:", error);
          }
  }

  useEffect(() => {
    fetchJobs();
  },[]);
  const navigate=useNavigate();
  const handleApply = (idx) => {
    // console.log(Jobs[idx])
    navigate("/ApplyJob", {
      state: {
         Job:Jobs[idx]
      },
    });
  };

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
          <NavLink className='w-[100%] p-2 px-5 text-black bg-white font-bold mx-10 border-2 border-black rounded-md' to="/AddJobs">Add Jobs</NavLink >
        </div>

      </div>
     
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto w-full p-5">
      {Jobs.map((Job, idx) => (
        <div key={idx} className="w-full border-2 rounded-lg overflow-hidden">
          <img
            className="w-full h-48 object-cover"
            src={Job.companyLogo}
            alt={Job.companyName}
          />
          <div className="flex flex-col p-3">
            <h1 className="text-xl font-semibold">{Job.companyName}</h1>
            <p className="font-normal">Vacancy : {Job.vacancies}</p>
            <p className="font-normal">Type : {Job.companyName}</p>
            <p className="font-normal">Salary : {Job.salary} /day</p>
            <p className="font-normal">
               Email : <a href={`mailto:${Job.email}`} className="text-blue-600 hover:underline">{Job.email}</a>
            </p>


            <p className="font-light mb-3"><i className="fa-solid fa-location-dot"></i> {Job.address}</p>
            <div className="flex items-center justify-between">
              <button
                className="w-2/3 border-2 bg-blue-500 text-white font-semibold p-1 rounded-3xl text-center"
                onClick={() => {handleApply(idx)}}
              >
                Apply Now 
              </button>
              <a
                 className="font-bold text-blue-600 text-2xl"
                href={`tel:+91${Job.contactNumber}`} // Removed the space after +91
               >
              <i className="fa-solid fa-phone"></i>
              </a>

              <a
                className="font-bold text-green-400 text-3xl"
                href={`https://wa.me/${Job.whatsappNumber}`}
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