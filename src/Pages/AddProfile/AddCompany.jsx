import React from 'react'
import { useState } from 'react';

function AddCompany() {  //companyName founderName foundedYear companyLogo address phone email website description createdBy
    const [formData, setFormData] = useState({
      companyName: '',
      founderName: '',
      foundedYear: '',
        phone: '',
        email: '',
        address: '',
        description: '',
        website: '',
        companyLogo: '',
        agreement: false,
      });
    
      const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setFormData({
          ...formData,
          [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };
    
      return (
        <div className="max-w-4xl mx-auto p-5 bg-gray-100 rounded-lg shadow-lg my-20">
          <h1 className="text-3xl font-bold text-white p-4 rounded-xl mb-6 bg-blue-600">Contractor Registration Form</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="companyName"
                placeholder="Full Company Name"
                value={formData.companyName}
                onChange={handleChange}
                className="p-3 border rounded-lg w-full"
                required
              />
              <input
                type="text"
                name="founderName"
                placeholder='Founder Name'
                value={formData.founderName}
                onChange={handleChange}
                className="p-3 border rounded-lg w-full"
                required
              />
              <input
                type="number"
                name="foundedYear"
                placeholder="Contact Number"
                value={formData.foundedYear}
                onChange={handleChange}
                className="p-3 border rounded-lg w-full"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="WhatsApp Number"
                value={formData.phone}
                onChange={handleChange}
                className="p-3 border rounded-lg w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="p-3 border rounded-lg w-full"
                required
              />
            </div>
            <input
              type="text"
              name="website"
              placeholder="Enter Website URL"
              value={formData.website}
              onChange={handleChange}
              className="p-3 border rounded-lg w-full"
              required
            />
            <textarea
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="p-3 border rounded-lg w-full"
              required
            />
             <textarea
              name="description"
              placeholder="description"
              value={formData.description}
              onChange={handleChange}
              className="p-3 border rounded-lg w-full"
              required
            />
            
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium">Upload Company Logo</label>
                <input
                  type="file"
                  name="companyLogo"
                  onChange={handleChange}
                  className="block w-full text-sm text-gray-500 border rounded-lg"
                />
              </div>
              
            </div>
    
            <div className="flex items-center">
              <input
                type="checkbox"
                name="agreement"
                checked={formData.agreement}
                onChange={handleChange}
                className="mr-2"
                required
              />
              <label className="text-sm">
                I agree to add my profile on the Easy Labour website.
              </label>
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