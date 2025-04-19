import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate,NavLink } from 'react-router-dom';
import { API_URL } from '../../config/apiConfiq';

function Company() {
  const [Companies, setCompanies] = useState([]);
      
  const fetchCompanies = async () => {
    try {
      const response = await fetch(`${API_URL}/api/companies`);
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
    <div className="w-full mt-10 px-2">
    <div className="w-full flex justify-end mb-4 pr-4">
      <NavLink
        to="/AddCompany"
        className="text-white bg-blue-500 px-4 py-2 font-bold border-2 border-gray-400 hover:border-black text-center rounded hover:underline"
      >
        Add Company
      </NavLink>
    </div>
  
    <div className="overflow-x-auto">
      <table className="w-full text-center border-collapse border border-black shadow-lg">
        <caption className="border border-black p-4 text-xl sm:text-2xl font-bold bg-blue-900 text-white">
          Companies List
        </caption>
  
        <thead>
          <tr>
            <th className="border border-black p-2 sm:p-4 bg-blue-500 text-white">Serial No.</th>
            <th className="border border-black p-2 sm:p-4 bg-blue-500 text-white">Company Name</th>
            <th className="border border-black p-2 sm:p-4 bg-blue-500 text-white">Founder Name</th>
            <th className="border border-black p-2 sm:p-4 bg-blue-500 text-white">Address</th>
            <th className="border border-black p-2 sm:p-4 bg-blue-500 text-white">Logo</th>
            <th className="border border-black p-2 sm:p-4 bg-blue-500 text-white">Action</th>
          </tr>
        </thead>
  
        <tbody>
          {Companies.map((company, idx) => (
            <tr key={idx}>
              <td className="border border-black p-2 sm:p-4">{idx + 1}</td>
              <td className="border border-black p-2 sm:p-4">{company.companyName}</td>
              <td className="border border-black p-2 sm:p-4">{company.founderName}</td>
              <td className="border border-black p-2 sm:p-4">{company.address}</td>
              <td className="border border-black p-2 sm:p-4">
                <img
                  src={company.companyLogo}
                  alt={company.companyName}
                  className="rounded-full h-16 w-16 mx-auto object-cover"
                />
              </td>
              <td className="border border-black p-2 sm:p-4">
                <button
                  onClick={() => handleViewDetailsCompany(idx)}
                  className="px-3 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  
  )
}

export default Company