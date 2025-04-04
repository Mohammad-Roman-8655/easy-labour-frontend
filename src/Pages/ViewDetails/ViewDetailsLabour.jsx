import React,{useState, useEffect} from 'react'
import { useLocation,useNavigate } from "react-router-dom";

function ViewDetailsLabour() {
    const location = useLocation();
    const currentUser = localStorage.getItem("currentUser");
    console.log(currentUser)
  const {Labour} = location.state || {};
  const navigate = useNavigate();

  console.log(Labour)

  const handleDeleteLabour = async () => {
    if (!window.confirm("Are you sure you want to delete this Labour?")) return;
  
    try {
      const response = await fetch(`http://localhost:3000/api/Labours/${Labour._id}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        alert("Labour deleted successfully!");  
        navigate("/Labours"); 
      } else {
        alert("Failed to delete Labour.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
   
  const handleUpdateLabourDetails = (Labour) => {
    navigate("/EditLabourDetails", {
        state:{
            Labour:Labour
        }
    });
  }
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden p-6 border border-gray-200">
    <div className="flex items-center space-x-4 mb-4">
      <img
        src={Labour?.profilePhoto}
        alt={Labour?.name}
        className="w-20 h-20 rounded-full border-2 border-gray-300"
      />
      <div>
        <h2 className="text-xl font-bold text-gray-800">{Labour.name}</h2>
        <p className="text-gray-600">{Labour.profession} ({Labour.expLevel})</p>
        <p className="text-sm text-gray-500">{Labour.locationToWork}</p>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4 text-gray-700">
      <p><strong>Email:</strong> {Labour.email || "N/A"}</p>
      <p><strong>Phone:</strong> {Labour.phoneNum}</p>
      <p><strong>WhatsApp:</strong> {Labour.whatsappNum || "N/A"}</p>
      <p><strong>Gender:</strong> {Labour.gender === "M" ? "Male" : Labour.gender === "F" ? "Female" : "Other"}</p>
      <p><strong>Date of Birth:</strong> {new Date(Labour.DOB).toLocaleDateString()}</p>
      <p><strong>Experience:</strong> {Labour.YOE} Years</p>
      <p><strong>Availability:</strong> <span className={`px-2 py-1 rounded-lg text-white ${Labour.Availability === "Available" ? "bg-green-500" : "bg-red-500"}`}>{Labour.Availability}</span></p>
      <p><strong>Salary:</strong> ₹{Labour.salary} / {Labour.salaryType}</p>
    </div>

    <div className="mt-4">
      <h3 className="text-lg font-semibold text-gray-700">Address</h3>
      <p className="text-gray-600">{Labour.address}</p>
      <p className="text-gray-600"><strong>District : </strong>{Labour.district}</p>
      <p className="text-gray-600"><strong>State : </strong>{Labour.state}</p>
    </div>

    <div className="flex justify-between mt-6">
     {currentUser === Labour?.createdBy && 
     <>   <button onClick={() => {handleUpdateLabourDetails(Labour)}} className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">Update</button>
      <button onClick={() => {handleDeleteLabour()}} className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600">Delete</button></>
      }
    </div>
  </div>

 
  )
}

export default ViewDetailsLabour