import React, { useEffect, useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import { API_URL } from '../../config/apiConfiq';

function EditCompanyDetails() {
    const location =useLocation();
    const {Company} =location.state || '';
    
          const [editingCompany, setEditingCompany] = useState({});
         
          
    const handleEditInputChange = (e) => {
        setEditingCompany({ ...editingCompany, [e.target.name]: e.target.value });
      };
       
      const navigate=useNavigate();
      const handleUpdateCompany = async () => {
        try {
          const response = await fetch(`${API_URL}/api/companies/${editingCompany._id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(editingCompany),
          });
      
          if (response.ok) {
            alert("Company updated successfully!");
            navigate("/Company");
          } else {
            alert("Failed to update Company.");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        handleUpdateCompany();
      };

      useEffect(() => {
        setEditingCompany(Company);
      },[]);
     
  return (
    <div className="max-w-4xl mx-auto p-5 bg-gray-100 rounded-lg shadow-lg my-20">
    <h1 className="text-3xl font-bold text-white p-4 rounded-xl mb-6 bg-blue-600 text-center">Contractor Registration Form</h1>
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          name="companyName"
          placeholder="Full Company Name"
          onChange={handleEditInputChange} 
          value={editingCompany?.companyName || ''}
          className="p-3 border hover:border-black rounded-lg w-full"
          required
        />
        <input
          type="text"
          name="founderName"
          placeholder='Founder Name'
          onChange={handleEditInputChange} 
          value={editingCompany?.founderName || ''} 
          className="p-3 border hover:border-black rounded-lg w-full"
          required
        />
        <input
          type="number"
          name="foundedYear"
          placeholder="Founded Year"
          onChange={handleEditInputChange} 
          value={editingCompany?.foundedYear || ''}
          className="p-3 border hover:border-black rounded-lg w-full"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleEditInputChange} 
          value={editingCompany?.phone || ''}
          className="p-3 border hover:border-black rounded-lg w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleEditInputChange} 
          value={editingCompany?.email || ''}
          className="p-3 border hover:border-black rounded-lg w-full"
          required
        />
      </div>
      <input
        type="text"
        name="website"
        placeholder="Enter Website URL"
        onChange={handleEditInputChange} 
          value={editingCompany?.website || ''}
        className="p-3 border hover:border-black rounded-lg w-full"
        required
      />
      <textarea
        name="address"
        placeholder="Address"
        onChange={handleEditInputChange} 
          value={editingCompany?.address || ''}
        className="p-3 border hover:border-black rounded-lg w-full"
        required
      />
       <textarea
        name="description"
        placeholder="description"
        onChange={handleEditInputChange} 
          value={editingCompany?.description || ''}
        className="p-3 border hover:border-black rounded-lg w-full"
        required
      />

      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium">Upload Company Logo</label>
          <input
            type="text"
            name="companyLogo"
            placeholder='Enter Link of Company Logo link'
            onChange={handleEditInputChange} 
            value={editingCompany?.companyLogo || ''}
            className="p-3 border hover:border-black rounded-lg w-full"
            required
          />
        </div>
        
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  </div>
  )
}

export default EditCompanyDetails