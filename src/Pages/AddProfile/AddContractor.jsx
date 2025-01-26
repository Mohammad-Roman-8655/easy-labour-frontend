import React from 'react'
import { useState } from 'react';

function AddContractor() {
    const [formData, setFormData] = useState({
        name: '',
        dateOfBirth: '',
        gender: '',
        contactNumber: '',
        whatsappNumber: '',
        email: '',
        address: '',
        preferredLocation: '',
        profession: '',
        experienceLevel: '',
        yearsOfExperience: '',
        availability: '',
        photo: null,
        workPhotos: null,
        idProof: null,
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
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="p-3 border rounded-lg w-full"
                required
              />
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="p-3 border rounded-lg w-full"
                required
              />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="p-3 border rounded-lg w-full"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <input
                type="text"
                name="contactNumber"
                placeholder="Contact Number"
                value={formData.contactNumber}
                onChange={handleChange}
                className="p-3 border rounded-lg w-full"
                required
              />
              <input
                type="text"
                name="whatsappNumber"
                placeholder="WhatsApp Number"
                value={formData.whatsappNumber}
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
    
            <textarea
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="p-3 border rounded-lg w-full"
              required
            />
    
            <input
              type="text"
              name="preferredLocation"
              placeholder="Preferred Location to Work"
              value={formData.preferredLocation}
              onChange={handleChange}
              className="p-3 border rounded-lg w-full"
              required
            />
    
            <select
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              className="p-3 border rounded-lg w-full"
              required
            >
              <option value="">Select Profession</option>
              <option value="Contractor of Construction">Contractor of Construction</option>
              <option value="Contractor of Labour">Contractor of Labour</option>
              <option value="Contractor of Plumber">Contractor of Plumber</option>
              <option value="Contractor of Electrician">Contractor of Electrician</option>
            </select>
    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <select
                name="experienceLevel"
                value={formData.experienceLevel}
                onChange={handleChange}
                className="p-3 border rounded-lg w-full"
                required
              >
                <option value="">Select Experience Level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Expert">Expert</option>
              </select>
              <input
                type="number"
                name="yearsOfExperience"
                placeholder="Years of Experience"
                value={formData.yearsOfExperience}
                onChange={handleChange}
                className="p-3 border rounded-lg w-full"
                required
              />
            </div>
    
            <select
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className="p-3 border rounded-lg w-full"
              required
            >
              <option value="">Select Availability</option>
              <option value="Available">Available</option>
              <option value="Busy">Busy</option>
            </select>
    
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium">Upload Profile Photo</label>
                <input
                  type="file"
                  name="photo"
                  onChange={handleChange}
                  className="block w-full text-sm text-gray-500 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Upload Previous Work Photos</label>
                <input
                  type="file"
                  name="workPhotos"
                  onChange={handleChange}
                  className="block w-full text-sm text-gray-500 border rounded-lg"
                  multiple
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Upload ID Proof</label>
                <input
                  type="file"
                  name="idProof"
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
    


export default AddContractor