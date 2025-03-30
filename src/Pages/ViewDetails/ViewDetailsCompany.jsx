import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'



function ViewDetailsCompany() {
        const location = useLocation();
          const {Company} = location.state || {}; 
          const navigate=useNavigate();
          const handleDeleteCompany = async (id) => {
            if (!window.confirm("Are you sure you want to delete this Company?")) return;
          
            try {
              const response = await fetch(`http://localhost:3000/api/companies/${id}`, {
                method: "DELETE",
              });
          
              if (response.ok) {
                alert("Company deleted successfully!");
                 navigate("/Company");
              } else {
                alert("Failed to delete Company.");
              }
            } catch (error) {
              console.error("Error:", error);
            }
          };
          const handleUpdateCompanyDetails = (Company) => {
            navigate("/EditCompanyDetails", {
                state:{
                    Company:Company
                }
            });
          }
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6 mt-10">
    <div className="flex items-center space-x-6">
      <img
        src={Company.companyLogo}
        alt="Company Logo"
        className="w-24 h-24 object-cover rounded-full border-2 border-blue-500"
      />
      <div>
        <h2 className="text-2xl font-bold text-gray-800">{Company.companyName}</h2>
        <p className="text-gray-600">Founded by: {Company.founderName} ({Company.foundedYear})</p>
      </div>
    </div>
    <div className="mt-4 text-gray-700">
      <p><strong>📍 Address:</strong> {Company.address}</p>
      <p><strong>📞 Phone:</strong> {Company.phone}</p>
      <p><strong>📧 Email:</strong> {Company.email}</p>
      <p><strong>🌐 Website:</strong> <a href={Company.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{Company.website}</a></p>
      <p className="mt-2"><strong>📜 Description:</strong> {Company.description}</p>
    </div>
    <div className="mt-6 flex space-x-4">
      <button
        onClick={() => {handleUpdateCompanyDetails(Company)}}
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
      >
        Update
      </button>
      <button
        onClick={() => {handleDeleteCompany(Company._id)}}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
      >
        Delete
      </button>
    </div>
  </div>
  )
}

export default ViewDetailsCompany