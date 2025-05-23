import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import locationData from "../../Data/location.json"
import toast from 'react-hot-toast'
import { API_URL } from '../../config/apiConfiq';

function AddContractor() {
    const [newContractor, setNewContractor] = useState({
        name: '',
        DOB: '',
        Gender: '',
        pnoneNum: '',
        whatsappNum: '',
        email: '',
        district:'',
        state:'',
        Address: '',
        loactionToWork: '',
        profession: '',
        expLevel: '',
        YOE: '',
        Availability: '',
        profilePhoto: '',
        prevousWorkPhoto: '',
        Idprof: '',
        
      });
     
    const [districts, setDistricts] = useState([]);
        const handleInputChange = (e) => {
          const { name, value } = e.target;
          setNewContractor((prev) => ({ ...prev, [name]: value }));
      
          if (name === "state") {
            const selectedState = locationData.states.find(
              (s) => s.state === value
            );
            setDistricts(selectedState ? selectedState.districts : []);
            setNewContractor((prev) => ({ ...prev, district: "" })); // Reset district
          }
        };

      const navigate=useNavigate();
      const token = localStorage.getItem("token");
      const handleAddContractor = async () => {
        if(!token) {
          toast.error("Please Login to Add Contractor")
          navigate("/Login")
          return;
        }
        try {
          const response = await fetch(`${API_URL}/api/contractors`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
             Authorization: `Bearer ${token}` 
            },
            body: JSON.stringify(newContractor),
          });
      
          if (response.ok) {
            alert("Contractor added successfully!");
            navigate("/Contractors") // Refresh the list
          } else {
            alert("Failed to add Contractor.");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        handleAddContractor();
        
      };
      const [ContractorTypes,setContractorTypes]=useState([]);
      
            const fetchContractorTypes = async () => {
              const response = await fetch(`${API_URL}/api/contractor-type`);
              const data = await response.json();
              setContractorTypes(data);
              
            }
      
            useEffect(() => {
              fetchContractorTypes();
              
            },[]);
    
      return (
        <div className="max-w-4xl mx-auto p-5 bg-gray-100 rounded-lg shadow-lg my-20">
          <h1 className="text-3xl font-bold text-white p-4 rounded-xl mb-6 bg-blue-600">Contractor Registration Form</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={newContractor.name}
                onChange={handleInputChange}
                className="p-3 border rounded-lg w-full"
                required
              />
              <input
                type="date"
                name="DOB"
                value={newContractor.DOB}
                onChange={handleInputChange}
                className="p-3 border rounded-lg w-full"
                required
              />
              <select
                name="Gender"
                value={newContractor.Gender}
                onChange={handleInputChange}
                className="p-3 border rounded-lg w-full"
                required
              >
                <option value="" disabled>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <input
                type="text"
                name="pnoneNum"
                placeholder="Contact Number"
                value={newContractor.pnoneNum}
                onChange={handleInputChange}
                className="p-3 border rounded-lg w-full"
                required
              />
              <input
                type="text"
                name="whatsappNum"
                placeholder="WhatsApp Number"
                value={newContractor.whatsappNum}
                onChange={handleInputChange}
                className="p-3 border rounded-lg w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={newContractor.email}
                onChange={handleInputChange}
                className="p-3 border rounded-lg w-full"
                required
              />
               <select
                      name="state"
                      value={newContractor.state}
                      onChange={handleInputChange}
                      className="p-3 border rounded-lg w-full"
                      required
                >
               <option value=""  disabled>Select State</option>
                  {locationData.states.map((stateObj, idx) => (
                        <option key={idx} value={stateObj.state}>{stateObj.state}</option>
                     ))}
              </select>

         <select
             name="district"
             value={newContractor.district}
             onChange={handleInputChange}
             className="p-3 border rounded-lg w-full"
             required
             disabled={!newContractor.state} // Disable until a state is selected
         >
            <option value="" disabled>Select District</option>
            {districts.map((district, idx) => (
               <option key={idx} value={district}> {district} </option>
          ))}
        </select>
              
            </div>
    
            <textarea
              name="Address"
              placeholder="Address"
              value={newContractor.Address}
              onChange={handleInputChange}
              className="p-3 border rounded-lg w-full"
              required
            />
    
            <input
              type="text"
              name="loactionToWork"
              placeholder="Preferred Location to Work"
              value={newContractor.loactionToWork}
              onChange={handleInputChange}
              className="p-3 border rounded-lg w-full"
              required
            />
    
            <select
              name="profession"
              value={newContractor.profession}
              onChange={handleInputChange}
              className="p-3 border rounded-lg w-full"
              required
            >
              <option value="" disabled>Select Profession</option>
              {ContractorTypes.map((ContractorType,idx) => (
                                <option key={idx} value={ContractorType.contractorType}>  {ContractorType.contractorType} </option>
                              ))} 
            </select>
    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <select
                name="expLevel"
                value={newContractor.expLevel}
                onChange={handleInputChange}
                className="p-3 border rounded-lg w-full"
                required
              >
                <option value="" disabled>Select Experience Level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Expert">Expert</option>
              </select>
              <input
                type="number"
                name="YOE"
                placeholder="Years of Experience"
                value={newContractor.YOE}
                onChange={handleInputChange}
                className="p-3 border rounded-lg w-full"
                required
              />
            </div>
    
            <select
              name="Availability"
              value={newContractor.Availability}
              onChange={handleInputChange}
              className="p-3 border rounded-lg w-full"
              required
            >
              <option value="">Select Availability</option>
              <option value="Available">Available</option>
              <option value="Busy">Busy</option>
            </select>
    
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-3 mr-10">Upload Profile Photo</label>
                <input
                  type="text"
                  name="profilePhoto"
                  placeholder='Enter Profile Photo link'
                  value={newContractor.profilePhoto}
                  onChange={handleInputChange}
                  className="p-3 border rounded-lg w-full "
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-3 mr-10">Upload Previous Work Photos</label>
                <input
                  type="text"
                  name="prevousWorkPhoto"
                   placeholder='Enter Previous work Photo link'
                  value={newContractor.prevousWorkPhoto}
                  onChange={handleInputChange}
                  className="p-3 border rounded-lg w-full "
                  multiple
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-3 mr-10">Upload ID Proof</label>
                <input
                  type="text"
                  name="Idprof"
                   placeholder='Enter Id Prof link'
                  value={newContractor.Idprof}
                  onChange={handleInputChange}
                  className="p-3 border rounded-lg w-full "
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
    


export default AddContractor