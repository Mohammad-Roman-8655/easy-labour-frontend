import React, { useState,useEffect } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';

function AddLabour() {
    const [newLabour, setNewLabour] = useState({
        name: "",
        email: "",
        DOB: "",
        gender: "",
        phoneNum: "",
        whatsappNum: "",
        address: "",
        locationToWork: "",
        profession: "",
        expLevel: "",
        YOE: "",
        Availability: "",
        salaryType: "Daily",
        salary: "",
        profilePhoto: "",
        Idprof: "",
        createdBy: '65efbcd98723456789abcd01'
    });
    
      const handleInputChange = (e) => {
        setNewLabour({ ...newLabour, [e.target.name]: e.target.value });
      };

      const navigate=useNavigate();
      const handleAddLabour = async () => {
        try {
          const response = await fetch("http://localhost:3000/api/labours", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newLabour),
          });
      
          if (response.ok) {
            alert("Labour added successfully!");
            navigate("/Labours") // Refresh the list
          } else {
            alert("Failed to add Labour.");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        handleAddLabour();
       
      };
      
    return (
        <div className="w-full max-w-4xl mx-auto p-5 bg-white rounded-lg shadow-lg my-20 border-2">
            <h1 className="text-2xl font-bold text-white p-5 mb-6 bg-blue-500 rounded-xl">Labour Registration Form</h1>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <input type="text" name="name" value={newLabour.name}  onChange={handleInputChange} placeholder="Full Name" required className="w-full border rounded-md p-2" />
                <input type="email" name="email" value={newLabour.email}  onChange={handleInputChange} placeholder="Email (Optional)" className="w-full border rounded-md p-2" />
                <input type="date" name="DOB" value={newLabour.DOB}  onChange={handleInputChange} required className="w-full border rounded-md p-2" />
                <select name="gender" value={newLabour.gender}  onChange={handleInputChange} required className="w-full border rounded-md p-2">
                    <option value="">Select Gender</option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="OT">Other</option>
                </select>
                <input type="tel" name="phoneNum" value={newLabour.phoneNum}  onChange={handleInputChange} placeholder="Contact Number" required className="w-full border rounded-md p-2" />
                <input type="tel" name="whatsappNum" value={newLabour.whatsappNum}  onChange={handleInputChange} placeholder="WhatsApp Number (Optional)" className="w-full border rounded-md p-2" />
                <input type="text" name="address" value={newLabour.address}  onChange={handleInputChange} placeholder="Address" required className="w-full border rounded-md p-2" />
                <input type="text" name="locationToWork" value={newLabour.locationToWork}  onChange={handleInputChange} placeholder="Preferred Work Location" required className="w-full border rounded-md p-2" />
                <select name="profession" value={newLabour.profession}  onChange={handleInputChange} required className="w-full border rounded-md p-2">
                    <option value="">Select Profession</option>
                    <option value="Construction Labour">Construction Labour</option>
                    <option value="Plumber">Plumber</option>
                    <option value="Electrician">Electrician</option>
                </select>
                <select name="expLevel" value={newLabour.expLevel}  onChange={handleInputChange} required className="w-full border rounded-md p-2">
                    <option value="">Select Experience Level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Expert">Expert</option>
                </select>
                <input type="number" name="YOE" value={newLabour.YOE}  onChange={handleInputChange} placeholder="Years of Experience" required className="w-full border rounded-md p-2" />
                <select name="Availability" value={newLabour.Availability}  onChange={handleInputChange} required className="w-full border rounded-md p-2">
                    <option value="">Select Availability</option>
                    <option value="Available">Available</option>
                    <option value="Busy">Busy</option>
                </select>
                <select name="salaryType" value={newLabour.salaryType}  onChange={handleInputChange} required className="w-full border rounded-md p-2">
                    <option value="Daily">Daily</option>
                    <option value="Monthly">Monthly</option>
                </select>
                <input type="number" name="salary" value={newLabour.salary}  onChange={handleInputChange} placeholder={newLabour.salaryType === "Daily" ? "Daily Salary" : "Monthly Salary"} required className="w-full border rounded-md p-2" />
                <div>
                  <label className='mb-5' htmlFor="profilePhoto">Profile Photo</label>
                  <input type="text" name="profilePhoto" placeholder='Enter link of Profile Photo'  value={newLabour.profilePhoto}  onChange={handleInputChange}  required className="w-full border rounded-md p-2" />
                </div>
                <div>
                  <label className='mb-5' htmlFor="Idprof">Id Proff</label>
                  <input type="text" name="Idprof" placeholder='Enter link of Id prof' value={newLabour.Idprof}  onChange={handleInputChange} required className="w-full border rounded-md p-2" />
                </div>
               
                <button type="submit" className="w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800">Submit</button>
            </form>
        </div>
    );
}

export default AddLabour;
