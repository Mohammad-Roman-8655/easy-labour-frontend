
import React, { useState } from "react";

function AddJobs() {
    const [formData, setFormData] = useState({
        companyName: "",
        registrationNumber: "",
        vacancies: "",
        vacancyType: "Labour",
        contactNumber: "",
        whatsappNumber: "",
        email: "",
        address: "",
        preferredLocation: "",
        companyLogo: null,
        startingYear: "",
        headOffice: "",
        salary: "",
        salaryType: "Monthly",
      });
    
      const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
          ...formData,
          [name]: type === "file" ? files[0] : value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        // Add form submission logic here
      };
    
      return (
        <div className="max-w-4xl mx-auto p-5 bg-white shadow-lg rounded-lg my-20 border-2">
          <h1 className="text-2xl font-bold text-white rounded-xl p-3 mb-5 bg-blue-500">Post a Job</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Company Name <span className='text-red-600 font-bold'>*</span></label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full border p-2 rounded-lg"
                required
              />
            </div>
    
            <div>
              <label className="block text-sm font-medium mb-1">Company Registration Number <span className='text-red-600 font-bold'>*</span></label>
              <input
                type="text"
                name="registrationNumber"
                value={formData.registrationNumber}
                onChange={handleChange}
                className="w-full border p-2 rounded-lg"
                required
              />
            </div>
    
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">No of Vacancies <span className='text-red-600 font-bold'>*</span></label>
                <input
                  type="number"
                  name="vacancies"
                  value={formData.vacancies}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-lg"
                  required
                />
              </div>
    
              <div>
                <label className="block text-sm font-medium mb-1">Type of Vacancy <span className='text-red-600 font-bold'>*</span></label>
                <select
                  name="vacancyType"
                  value={formData.vacancyType}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-lg"
                >
                  <option value="Labour">Labour</option>
                  <option value="Electrician">Electrician</option>
                  <option value="Carpenter">Carpenter</option>
                </select>
              </div>
            </div>
    
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Contact Number <span className='text-red-600 font-bold'>*</span></label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-lg"
                  required
                />
              </div>
    
              <div>
                <label className="block text-sm font-medium mb-1">WhatsApp Number <span className='text-red-600 font-bold'>*</span></label>
                <input
                  type="tel"
                  name="whatsappNumber"
                  value={formData.whatsappNumber}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-lg"
                />
              </div>
            </div>
    
            <div>
              <label className="block text-sm font-medium mb-1">Email <span className='text-red-600 font-bold'>*</span></label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-2 rounded-lg"
                required
              />
            </div>
    
            <div>
              <label className="block text-sm font-medium mb-1">Address <span className='text-red-600 font-bold'>*</span></label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border p-2 rounded-lg"
                required
              />
            </div>
    
            <div>
              <label className="block text-sm font-medium mb-1">Preferred Location for Jobs <span className='text-red-600 font-bold'>*</span></label>
              <input
                type="text"
                name="preferredLocation"
                value={formData.preferredLocation}
                onChange={handleChange}
                className="w-full border p-2 rounded-lg"
              />
            </div>
    
            <div>
              <label className="block text-sm font-medium mb-1">Company Logo <span className='text-red-600 font-bold'>*</span></label>
              <input
                type="file"
                name="companyLogo"
                onChange={handleChange}
                className="w-full border p-2 rounded-lg"
              />
            </div>
    
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Starting Year <span className='text-red-600 font-bold'>*</span></label>
                <input
                  type="number"
                  name="startingYear"
                  value={formData.startingYear}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-lg"
                  required
                />
              </div>
    
              <div>
                <label className="block text-sm font-medium mb-1">Company Head Office <span className='text-red-600 font-bold'>*</span></label>
                <input
                  type="text"
                  name="headOffice"
                  value={formData.headOffice}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-lg"
                />
              </div>
            </div>
    
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Salary Offered <span className='text-red-600 font-bold'>*</span></label>
                <input
                  type="text"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-lg"
                  required
                />
              </div>
    
              <div>
                <label className="block text-sm font-medium mb-1">Salary Type <span className='text-red-600 font-bold'>*</span></label>
                <select
                  name="salaryType"
                  value={formData.salaryType}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-lg"
                >
                  <option value="Monthly">Monthly</option>
                  <option value="Daily">Daily</option>
                </select>
              </div>
            </div>
    
            <button
              type="submit"
              className="w-full bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800"
            >
              Submit Job
            </button>
          </form>
        </div>
      );
    };


export default AddJobs