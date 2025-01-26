import React, { useState } from 'react';

function AddLabour() {
    const [salaryType, setSalaryType] = useState('Daily');
    return (
        <div className="w-full max-w-4xl mx-auto p-5 bg-white rounded-lg shadow-lg my-20 border-2 ">
          <h1 className="text-2xl font-bold text-white p-5 mb-6 bg-blue-500 rounded-xl">Labour Registration Form</h1>
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Full Name <span className='text-red-600 font-bold'>*</span></label>
              <input type="text" className="w-full border rounded-md p-2" placeholder="Enter your full name" required />
            </div>
    
            {/* Date of Birth */}
            <div>
              <label className="block text-sm font-medium mb-1">Date of Birth <span className='text-red-600 font-bold'>*</span></label>
              <input type="date" className="w-full border rounded-md p-2" required />
            </div>
    
            {/* Gender */}
            <div>
              <label className="block text-sm font-medium mb-1">Gender <span className='text-red-600 font-bold'>*</span></label>
              <select className="w-full border rounded-md p-2" required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
    
            {/* Contact Details */}
            <div>
              <label className="block text-sm font-medium mb-1">Contact Number <span className='text-red-600 font-bold'>*</span></label>
              <input type="tel" className="w-full border rounded-md p-2" placeholder="Enter your contact number" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">WhatsApp Number(Optional)</label>
              <input type="tel" className="w-full border rounded-md p-2" placeholder="Enter your WhatsApp number" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email (Optional)</label>
              <input type="email" className="w-full border rounded-md p-2" placeholder="Enter your email address" />
            </div>
    
            {/* Address */}
            <div>
              <label className="block text-sm font-medium mb-1">Address <span className='text-red-600 font-bold'>*</span></label>
              <input type="text" className="w-full border rounded-md p-2" placeholder="Enter your address" required />
            </div>
    
            {/* Preferred Location */}
            <div>
              <label className="block text-sm font-medium mb-1">Preferred Location to Work <span className='text-red-600 font-bold'>*</span></label>
              <input type="text" className="w-full border rounded-md p-2" placeholder="Enter preferred location" required />
            </div>
    
            {/* Profession */}
            <div>
              <label className="block text-sm font-medium mb-1">Profession <span className='text-red-600 font-bold'>*</span></label>
              <select className="w-full border rounded-md p-2" required>
                <option value="">Select Profession</option>
                <option value="Construction Labour">Construction Labour</option>
                <option value="Plumber">Plumber</option>
                <option value="Electrician">Electrician</option>
              </select>
            </div>
    
            {/* Experience Level */}
            <div>
              <label className="block text-sm font-medium mb-1">Experience Level <span className='text-red-600 font-bold'>*</span></label>
              <select className="w-full border rounded-md p-2" required>
                <option value="">Select Experience Level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Expert">Expert</option>
              </select>
            </div>
    
            {/* Years of Experience */}
            <div>
              <label className="block text-sm font-medium mb-1">Years of Experience <span className='text-red-600 font-bold'>*</span></label>
              <input type="number" className="w-full border rounded-md p-2" placeholder="Enter years of experience" required />
            </div>
    
            {/* Availability */}
            <div>
              <label className="block text-sm font-medium mb-1">Availability <span className='text-red-600 font-bold'>*</span></label>
              <select className="w-full border rounded-md p-2" required>
                <option value="">Select Availability</option>
                <option value="Available">Available</option>
                <option value="Busy">Busy</option>
              </select>
            </div>
    
            {/* Salary Type */}
            <div>
              <label className="block text-sm font-medium mb-1">Salary Type <span className='text-red-600 font-bold'>*</span></label>
              <select
                className="w-full border rounded-md p-2"
                value={salaryType}
                onChange={(e) => setSalaryType(e.target.value)}
                required
              >
                <option value="Daily">Daily</option>
                <option value="Monthly">Monthly</option>
              </select>
            </div>
    
            {/* Salary */}
            {salaryType === 'Daily' ? (
              <div>
                <label className="block text-sm font-medium mb-1">Daily Salary</label>
                <input type="number" className="w-full border rounded-md p-2" placeholder="Enter daily salary" required />
              </div>
            ) : (
              <div>
                <label className="block text-sm font-medium mb-1">Monthly Salary</label>
                <input type="number" className="w-full border rounded-md p-2" placeholder="Enter monthly salary" required />
              </div>
            )}
    
            {/* Upload Photo */}
            <div>
              <label className="block text-sm font-medium mb-1">Upload Photo <span className='text-red-600 font-bold'>*</span></label>
              <input type="file" className="w-full border rounded-md p-2" accept="image/*" required />
            </div>
    
            {/* Upload ID Proof */}
            <div>
              <label className="block text-sm font-medium mb-1">Upload ID Proof <span className='text-red-600 font-bold'>*</span></label>
              <input type="file" className="w-full border rounded-md p-2" accept="image/*,.pdf" required />
            </div>
    
            {/* Agreement */}
            <div>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" required />
                I agree to add my profile to the Easy Labour website.
              </label>
            </div>
    
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      );
}

export default AddLabour