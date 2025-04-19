import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'
import { API_URL } from '../../config/apiConfiq';

function AddCompany() {  
    const [newCompany, setNewCompany] = useState({
        companyName: '',
        founderName: '',
        foundedYear: '',
        phone: '',
        email: '',
        address: '',
        description: '',
        website: '',
        companyLogo: '',
        
      });
    
      const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setNewCompany({
          ...newCompany,
          [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
        });
      };

      const navigate=useNavigate();
      const token = localStorage.getItem("token");
      const handleAddCompany = async () => {
        if(!token) {
          toast.error("Please Login to Add Company")
          navigate("/Login")
          return;
        }
        try {
          const response = await fetch(`${API_URL}/api/companies`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
             Authorization: `Bearer ${token}` 
            },
            body: JSON.stringify(newCompany),
          });
      
          if (response.ok) {
            alert("Company added successfully!");
            navigate("/Company") // Refresh the list
          } else {
            alert("Failed to add Company.");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        handleAddCompany();
      };
    
      return (
        <div className="max-w-4xl mx-auto p-5 bg-gray-100 rounded-lg shadow-lg my-20">
          <h1 className="text-3xl font-bold text-white p-4 rounded-xl mb-6 bg-blue-600 text-center">Contractor Registration Form</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="companyName"
                placeholder="Full Company Name"
                value={newCompany.companyName}
                onChange={handleChange}
                className="p-3 border hover:border-black rounded-lg w-full"
                required
              />
              <input
                type="text"
                name="founderName"
                placeholder='Founder Name'
                value={newCompany.founderName}
                onChange={handleChange}
                className="p-3 border hover:border-black rounded-lg w-full"
                required
              />
              <input
                type="number"
                name="foundedYear"
                placeholder="Founded Year"
                value={newCompany.foundedYear}
                onChange={handleChange}
                className="p-3 border hover:border-black rounded-lg w-full"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="WhatsApp Number"
                value={newCompany.phone}
                onChange={handleChange}
                className="p-3 border hover:border-black rounded-lg w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={newCompany.email}
                onChange={handleChange}
                className="p-3 border hover:border-black rounded-lg w-full"
                required
              />
            </div>
            <input
              type="text"
              name="website"
              placeholder="Enter Website URL"
              value={newCompany.website}
              onChange={handleChange}
              className="p-3 border hover:border-black rounded-lg w-full"
              required
            />
            <textarea
              name="address"
              placeholder="Address"
              value={newCompany.address}
              onChange={handleChange}
              className="p-3 border hover:border-black rounded-lg w-full"
              required
            />
             <textarea
              name="description"
              placeholder="description"
              value={newCompany.description}
              onChange={handleChange}
              className="p-3 border hover:border-black rounded-lg w-full"
              required
            />

            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium">Upload Company Logo</label>
                <input
                  type="text"
                  name="companyLogo"
                  value={newCompany.companyLogo}
                  onChange={handleChange}
                  placeholder='Enter Company Logo link'
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
      );
    }
    


export default AddCompany