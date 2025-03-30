import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate,NavLink } from 'react-router-dom';

function Company() {
  const [Companies, setCompanies] = useState([]);
      
  const fetchCompanies = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/Companies");
      const data = await response.json();
      setCompanies(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  useEffect(() => {
    fetchCompanies();
  }, []);
 const navigate=useNavigate();
  const handleViewDetailsCompany = (idx)  => {
    navigate("/ViewDetailsCompany", {
        state :{
            Company:Companies[idx]
        }
    })
  }
  return (
    <div className='w-full mt-10'>
      <div className='w-[100%]'>
        <div className='w-full'>
        <NavLink className="lg:w-[50%] md:w-[50%] sm:w-[60%] w-[60%] text-white bg-blue-500 p-3 font-bold border-2 border-gray-400 hover:border-black text-center rounded mb-1- hover:underline ml-[81%]" to="/AddCompany">Add Company</NavLink>
          <table className='border-collapse border border-black mx-auto lg:w-[80%] md:w-[80%] sm:w-[95%] w-[95%] text-center shadow-3xl mt-5'>
            <caption className='border border-black lg:p-5 md:p-5 sm:p-2 p-2 lg:text-2xl md:text-2xl sm:text-xl text-xl font-bold bg-blue-900 text-white'>Companies List</caption>
           <thead>
           <tr>
            <th className='border border-black lg:p-5 md:p-5 sm:p-2 p-2 bg-blue-500 text-white ' >Serial No.</th>
              <th className='border border-black lg:p-5 md:p-5 sm:p-2 p-2 bg-blue-500 text-white ' >Company Name</th>
              <th className='border border-black lg:p-5 md:p-5 sm:p-2 p-2 bg-blue-500 text-white'>Founder Name</th>
              <th className='border border-black lg:p-5 md:p-5 sm:p-2 p-2  bg-blue-500 text-white'>Address</th>
              <th className='border border-black lg:p-5 md:p-5 sm:p-2 p-2  bg-blue-500 text-white'>Logo</th>
              <th className='border border-black lg:p-5 md:p-5 sm:p-2 p-2  bg-blue-500 text-white'>Action</th>
            </tr>
           </thead>
           <tbody>
            {
              Companies.map((Company,idx)=>{
                return(
                 
                   <tr key={idx}>
                    <td className='border border-black lg:p-5 md:p-5 sm:p-2 p-2'>{idx+1}</td>
                    <td className='border border-black lg:p-5 md:p-5 sm:p-2 p-2'>{Company.companyName}</td>
                    <td className='border border-black lg:p-5 md:p-5 sm:p-2 p-2 '>{Company.founderName}</td>
                    <td className='border border-black lg:p-5 md:p-5 sm:p-2 p-2 '>{Company.address}</td>
                    <td className='border border-black lg:p-5 md:p-5 sm:p-2 p-2 '><img className='rounded-[50%] h-20 w-20' src={Company.companyLogo} alt={Company.companyName} /></td>
                    <td className='border border-black lg:p-5 md:p-5 sm:p-2 p-2  '>
                        <button className='p-2 border-2 bg-green-600 font-semibold text-white rounded-lg' onClick={() => {handleViewDetailsCompany(idx)}}>View</button>
                    
                    </td>
                  </tr>
                 
                )
              })
            }
            </tbody>
           

          </table>
        </div>
      </div>
    </div>
  )
}

export default Company