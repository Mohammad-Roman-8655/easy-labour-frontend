import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { API_URL } from '../../config/apiConfiq';
function ViewDetailsContractor() {
        const location = useLocation();
      const {Contractor} = location.state || {};
      const currentUser = localStorage.getItem("currentUser"); 
      const navigate=useNavigate();
      const handleDeleteContractor = async () => {
        if (!window.confirm("Are you sure you want to delete this Contractor?")) return;
      
        try {
          const response = await fetch(`${API_URL}/api/contractors/${Contractor._id}`, {
            method: "DELETE",
          });
      
          if (response.ok) {
            alert("Contractor deleted successfully!");  
            navigate("/Contractors"); 
                
          } else {
            alert("Failed to delete Contractor.");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };

      const handleUpdateContractorDetails = (Contractor) => {
        navigate("/EditContractorDetails", {
            state:{
                Contractor:Contractor
            }
        });
      }
      
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-10 p-6 border border-gray-200">
    <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-6">
      <img
        className="w-32 h-32 object-cover rounded-full border-4 border-blue-500"
        src={Contractor.profilePhoto}
        alt="Contractor Profile"
      />
      <div className="mt-4 md:mt-0">
        <h2 className="text-2xl font-bold text-gray-800">{Contractor.name}</h2>
        <p className="text-gray-600">{Contractor.profession} - {Contractor.expLevel}</p>
        <p className="text-gray-500">{Contractor.YOE} Years of Experience</p>
        <span
          className={`px-4 py-1 rounded-full text-white text-sm font-semibold mt-2 inline-block ${Contractor.Availability === "Available" ? "bg-green-500" : "bg-red-500"}`}
        >
          {Contractor.Availability}
        </span>
      </div>
    </div>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <p className="text-gray-700"><span className="font-semibold">Email:</span> {Contractor.email}</p>
        <p className="text-gray-700"><span className="font-semibold">Phone:</span> {Contractor.pnoneNum}</p>
        <p className="text-gray-700"><span className="font-semibold">WhatsApp:</span> {Contractor.whatsappNum || "N/A"}</p>
        <p className="text-gray-700"><span className="font-semibold">Gender:</span> {Contractor.Gender}</p>
      </div>
      <div>
        <p className="text-gray-700"><span className="font-semibold">Location to Work:</span> {Contractor.loactionToWork}</p>
        <p className="text-gray-700"><span className="font-semibold">Address:</span> {Contractor.Address}</p>
        <p className="text-gray-700"><span className="font-semibold">District:</span> {Contractor.district}</p>
        <p className="text-gray-700"><span className="font-semibold">State:</span> {Contractor.state}</p>
        
      </div>
    </div>
    <div className="mt-6">
      <h3 className="text-lg font-semibold text-gray-800">Documents & Previous Work</h3>
      <div className="flex space-x-4 mt-3">
        <img className="w-24 h-24 object-cover rounded-lg border border-gray-300" src={Contractor.prevousWorkPhoto} alt="Previous Work" />
        <img className="w-24 h-24 object-cover rounded-lg border border-gray-300" src={Contractor.Idprof} alt="ID Proof" />
      </div>
    </div>
    <div className="mt-6 flex justify-between">
    {currentUser === Contractor?.createdBy &&  <> 
      <button onClick={() => {handleUpdateContractorDetails(Contractor)}}  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Update</button>
      <button onClick={() => {handleDeleteContractor()}} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">Delete</button>
     </>
       }
      
    </div>
  </div>
  )
}

export default ViewDetailsContractor