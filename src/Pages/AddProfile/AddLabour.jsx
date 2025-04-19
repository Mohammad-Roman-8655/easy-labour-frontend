import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import locationData from "../../../../easy-labour-backend/Data/location.json"; // Import the JSON file
import toast from 'react-hot-toast'
import { API_URL } from "../../config/apiConfiq";


function AddLabour() {
  const [newLabour, setNewLabour] = useState({
    name: "",
    email: "",
    DOB: "",
    gender: "",
    phoneNum: "",
    whatsappNum: "",
    address: "",
    district: "",
    state: "",
    locationToWork: "",
    profession: "",
    expLevel: "",
    YOE: "",
    Availability: "",
    salaryType: "",
    salary: "",
    profilePhoto: "",
    Idprof: "",
   
  });

  const [LabourTypes, setLabourTypes] = useState([]);
 // Store districts based on selected state

 const token = localStorage.getItem("token");

  // Fetch Labour Types
  const fetchLabourTypes = async () => {
    try {
      const response = await fetch(`${API_URL}/api/labour-type`);
      const data = await response.json();
      setLabourTypes(data);
    } catch (error) {
      console.error("Error fetching labour types:", error);
    }
  };

  useEffect(() => {
    fetchLabourTypes();
  }, []);

  const navigate = useNavigate();
  const [districts, setDistricts] = useState([]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewLabour((prev) => ({ ...prev, [name]: value }));

    if (name === "state") {
      const selectedState = locationData.states.find(
        (s) => s.state === value
      );
      setDistricts(selectedState ? selectedState.districts : []);
      setNewLabour((prev) => ({ ...prev, district: "" })); // Reset district
    }
  };

  const handleAddLabour = async () => {
    if(!token) {
      toast.error("Please Login to Add Labour")
      navigate("/Login")
      return;
    }
    try {
      const response = await fetch(`${API_URL}/api/labours`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
         Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify(newLabour),
      });

      if (response.ok) {
        alert("Labour added successfully!");
        navigate("/Labours");
      } else {
        alert("Failed to add Labour.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newLabour);  //onSubmit={handleSubmit}   value={newLabour.name} onChange={handleInputChange}
    handleAddLabour();
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-5 bg-white rounded-lg shadow-lg my-20 border-2">
      <h1 className="text-2xl font-bold text-white p-5 mb-6 bg-blue-500 rounded-xl text-center">
        Labour Registration Form
      </h1>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newLabour.name}
          onChange={handleInputChange}
          placeholder="Full Name"
          required
          className="w-full border rounded-md p-2"
        />
        <input
          type="email"
          name="email"
          value={newLabour.email}
          onChange={handleInputChange}
          placeholder="Email (Optional)"
          className="w-full border rounded-md p-2"
        />
        <input
          type="date"
          name="DOB"
          value={newLabour.DOB}
          onChange={handleInputChange}
          required
          className="w-full border rounded-md p-2"
        />
        <select
          name="gender"
          value={newLabour.gender}
          onChange={handleInputChange}
          required
          className="w-full border rounded-md p-2"
        >
          <option value="" disabled>Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="text"
          name="phoneNum"
          value={newLabour.phoneNum}
          onChange={handleInputChange}
          placeholder="Contact Number"
          required
          className="w-full border rounded-md p-2"
        />
        <input
          type="text"
          name="whatsappNum"
          value={newLabour.whatsappNum}
          onChange={handleInputChange}
          placeholder="WhatsApp Number (Optional)"
          className="w-full border rounded-md p-2"
        />
          <select name="Availability" value={newLabour.Availability}  onChange={handleInputChange} required className="w-full border rounded-md p-2">
                    <option value="" disabled>Select Availability</option>
                    <option value="Available">Available</option>
                    <option value="Busy">Busy</option>
                </select>
          <select name="salaryType" value={newLabour.salaryType}  onChange={handleInputChange} required className="w-full border rounded-md p-2">
                     <option value="" disabled>Select Salary Type : </option>
                    <option value="Daily">Daily</option>
                    <option value="Monthly">Monthly</option>
                </select>
                <input type="number" name="salary" value={newLabour.salary}  onChange={handleInputChange} placeholder={newLabour.salaryType === "Daily" ? "Daily Salary" : "Monthly Salary"} required className="w-full border rounded-md p-2" />
        <select
          name="state"
          value={newLabour.state}
          onChange={handleInputChange}
          className="p-3 border rounded-lg w-full"
          required
        >
          <option value="" >Select State</option>
          {locationData.states.map((stateObj, idx) => (
            <option key={idx} value={stateObj.state}>
              {stateObj.state}
            </option>
          ))}
        </select>

        <select
          name="district"
          value={newLabour.district}
          onChange={handleInputChange}
          className="p-3 border rounded-lg w-full"
          required
          disabled={!newLabour.state} // Disable until a state is selected
        >
          <option value="" disabled>Select District</option>
          {districts.map((district, idx) => (
            <option key={idx} value={district}>
              {district}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="address"
          value={newLabour.address}
          onChange={handleInputChange}
          placeholder="Address"
          required
          className="w-full border rounded-md p-2"
        />
        <input
          type="text"
          name="locationToWork"
          value={newLabour.locationToWork}
          onChange={handleInputChange}
          placeholder="Preferred Work Location"
          required
          className="w-full border rounded-md p-2"
        />
        <select
          name="profession"
          value={newLabour.profession}
          onChange={handleInputChange}
          required
          className="w-full border rounded-md p-2"
        >
          <option value="" disabled>Select Profession</option>
          {LabourTypes.map((LabourType, idx) => (
            <option key={idx} value={LabourType.labourType}>
              {LabourType.labourType}
            </option>
          ))}
        </select>
        <select
          name="expLevel"
          value={newLabour.expLevel}
          onChange={handleInputChange}
          required
          className="w-full border rounded-md p-2"
        >
          <option value="" disabled>Select Experience Level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
        </select>
        <input
          type="number"
          name="YOE"
          value={newLabour.YOE}
          onChange={handleInputChange}
          placeholder="Years of Experience"
          required
          className="w-full border rounded-md p-2"
        />
         <div>
                  <label className='mb-5' htmlFor="profilePhoto">Profile Photo</label>
                  <input type="text" name="profilePhoto" placeholder='Enter link of Profile Photo'  value={newLabour.profilePhoto}  onChange={handleInputChange}  required className="w-full border rounded-md p-2" />
                </div>
                <div>
                  <label className='mb-5' htmlFor="Idprof">Id Proff</label>
                  <input type="text" name="Idprof" placeholder='Enter link of Id prof' value={newLabour.Idprof}  onChange={handleInputChange} required className="w-full border rounded-md p-2" />
                </div>
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

export default AddLabour;
