import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import locationData from "../../../../easy-labour-backend/Data/location.json";
import toast from 'react-hot-toast'
import { API_URL } from '../../config/apiConfiq';

function AddEquipments() {
  const [newShop, setNewShop] = useState({
    shopName: "",
    openTime: "",
    closeTime: "",
    daysOpen: "",
    state : "",
    district : "",
    address: "",
    shopType: "",
    phone: "",
    whatsapp: "",
    email: "",
    orderLink: "",
    description: "",
    shopImage:"",
    
  });

  
   const [districts, setDistricts] = useState([]);
    const handleInputChange = (e) => {
      const { name, value } = e.target;
     setNewShop((prev) => ({ ...prev, [name]: value }));
  
      if (name === "state") {
        const selectedState = locationData.states.find(
          (s) => s.state === value
        );
        setDistricts(selectedState ? selectedState.districts : []);
       setNewShop((prev) => ({ ...prev, district: "" })); // Reset district
      }
    };
  const navigate=useNavigate();
  const token = localStorage.getItem("token");
       const handleAddShop = async () => {
        if(!token) {
          toast.error("Please Login to Add Shop")
          navigate("/Login")
          return;
        }
         try {
           const response = await fetch(`${API_URL}/api/shops`, {
             method: "POST",
             headers: {
              "Content-Type": "application/json",
             Authorization: `Bearer ${token}` 
            },
             body: JSON.stringify(newShop),
           });
       
           if (response.ok) {
             alert("Shop added successfully!");
             navigate("/RentalEquipments") // Refresh the list
           } else {
             alert("Failed to add Shop.");
           }
         } catch (error) {
           console.error("Error:", error);
         }
       };
       const handleSubmit = (e) => {
         e.preventDefault();
         handleAddShop();
       };

  return (  
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6 bg-blue-800 text-white p-3 rounded-xl">Shop Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="shopName" placeholder="Shop Name" value={newShop.shopName}  onChange={handleInputChange} required className="w-full p-2 border rounded-md" />
        <select
          name="shopType"
          className="p-3 border rounded-lg w-full"
          value={newShop.shopType}  onChange={handleInputChange}
        >
          <option value="" disabled>Select Category</option>
          <option value="Material Shop">Material Shop</option>
          <option value="Rental Equipment Shop">Rental Equipment Shop</option>
        </select>
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="openTime" placeholder="Opening Time" value={newShop.openTime}  onChange={handleInputChange} required className="w-full p-2 border rounded-md" />
          <input type="text" name="closeTime" placeholder="Closing Time" value={newShop.closeTime}  onChange={handleInputChange} required className="w-full p-2 border rounded-md" />
        </div>
        <input type="text" name="daysOpen" placeholder="Days Open (e.g., Mon-Sat)" value={newShop.daysOpen}  onChange={handleInputChange} required className="w-full p-2 border rounded-md" />
        <select
          name="state"
          value={newShop.state}
          onChange={handleInputChange}
          className="p-3 border rounded-lg w-full"
          required
        >
          <option value=""  >Select State</option>
          {locationData.states.map((stateObj, idx) => (
            <option key={idx} value={stateObj.state}>
              {stateObj.state}
            </option>
          ))}
        </select>

        <select
          name="district"
          value={newShop.district}
          onChange={handleInputChange}
          className="p-3 border rounded-lg w-full"
          required
          disabled={!newShop.state} // Disable until a state is selected
        >
          <option value="" disabled>Select District</option>
          {districts.map((district, idx) => (
            <option key={idx} value={district}>
              {district}
            </option>
          ))}
        </select>
        <input type="text" name="address" placeholder="Shop Address" value={newShop.address}  onChange={handleInputChange} required className="w-full p-2 border rounded-md" />
        <input type="number" name="phone" placeholder="Phone Number" value={newShop.phone}  onChange={handleInputChange} required className="w-full p-2 border rounded-md" />
        <input type="number" name="whatsapp" placeholder="WhatsApp Number" value={newShop.whatsapp}  onChange={handleInputChange} required className="w-full p-2 border rounded-md" />
        <input type="email" name="email" placeholder="Email" value={newShop.email}  onChange={handleInputChange} required className="w-full p-2 border rounded-md" />
        <input type="text" name="orderLink" placeholder="Google Form Link for Orders" value={newShop.orderLink}  onChange={handleInputChange} className="w-full p-2 border rounded-md" />
        <input type="text" name="shopImage" placeholder="Enter the Link of shop Image" value={newShop.shopImage}  onChange={handleInputChange} className="w-full p-2 border rounded-md" />
        <textarea name="description" placeholder="Describe available materials & equipment" value={newShop.description}  onChange={handleInputChange} required className="w-full p-2 border rounded-md h-24"></textarea>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">Submit</button>
      </form>
    </div>
  );
}

export default AddEquipments