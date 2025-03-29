import React from 'react'
import { useLocation } from "react-router-dom";

function ViewDetailsLabour() {
    const location = useLocation();
  const {Labour} = location.state || {};
   
  return (
    <div className="container mx-auto p-4 ">
    <div className="overflow-x-auto ">
      <table className="min-w-[70%] border-separate border-spacing-2 border border-gray-400  dark:border-gray-500 mx-auto ">
        <caption className='caption-top border p-4 text-2xl bg-sky-600 text-white font-semibold '>{Labour.name} Details</caption>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4  font-semibold text-center ">Profile Photo</td>
            <td className="border border-gray-300 dark:border-gray-700">
              <img src={Labour.profilePhoto} alt="Profile" className="h-86 w-50 mx-auto text-center " />
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4  font-semibold">Name</td>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4">{Labour.name}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700  px-5 py-4  font-semibold">Email</td>
          

            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4"><a href={`mailto:${Labour.email}`} className="text-blue-600 hover:underline">{Labour.email}</a></td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4  font-semibold">Date of Birth</td>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4">{new Date(Labour.DOB).toLocaleDateString()}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4  font-semibold">Gender</td>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4">{Labour.gender}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4  font-semibold">Phone Number</td>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4">{Labour.phoneNum}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4  font-semibold">WhatsApp Number</td>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4">{Labour.whatsappNum}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4  font-semibold">Address</td>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4">{Labour.address}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4  font-semibold">Location to Work</td>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4">{Labour.locationToWork}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4  font-semibold">Profession</td>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4">{Labour.profession}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4  font-semibold">Experience Level</td>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4">{Labour.expLevel}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4  font-semibold">Years of Experience</td>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4">{Labour.YOE}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4  font-semibold">Availability</td>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4">{Labour.Availability}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4  font-semibold">Salary Type</td>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4">{Labour.salaryType}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4  font-semibold">Salary</td>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4">{Labour.salary}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4  font-semibold">ID Proof</td>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4">
              <a href={Labour.Idprof} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                View ID Proof
              </a>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4  font-semibold">Created At</td>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4">{new Date(Labour.createdAt).toLocaleString()}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4  font-semibold">Updated At</td>
            <td className="border border-gray-300 dark:border-gray-700 px-5 py-4">{new Date(Labour.updatedAt).toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

 
  )
}

export default ViewDetailsLabour