import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AddEquipments() {
  const [newShop, setNewShop] = useState({
    shopName: "",
    openTime: "",
    closeTime: "",
    daysOpen: "",
    address: "",
    phone: "",
    whatsapp: "",
    email: "",
    orderLink: "",
    description: "",
    shopImage:"",
    createdBy: '65efbcd98723456789abcd01'
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setNewShop({
      ...newShop,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    });
  };
  const navigate=useNavigate();
       const handleAddShop = async () => {
         try {
           const response = await fetch("http://localhost:3000/api/shops", {
             method: "POST",
             headers: {
               "Content-Type": "application/json",
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
        <input type="text" name="shopName" placeholder="Shop Name" value={newShop.shopName}  onChange={handleChange} required className="w-full p-2 border rounded-md" />
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="openTime" placeholder="Opening Time" value={newShop.openTime}  onChange={handleChange} required className="w-full p-2 border rounded-md" />
          <input type="text" name="closeTime" placeholder="Closing Time" value={newShop.closeTime}  onChange={handleChange} required className="w-full p-2 border rounded-md" />
        </div>
        <input type="text" name="daysOpen" placeholder="Days Open (e.g., Mon-Sat)" value={newShop.daysOpen}  onChange={handleChange} required className="w-full p-2 border rounded-md" />
        <input type="text" name="address" placeholder="Shop Address" value={newShop.address}  onChange={handleChange} required className="w-full p-2 border rounded-md" />
        <input type="number" name="phone" placeholder="Phone Number" value={newShop.phone}  onChange={handleChange} required className="w-full p-2 border rounded-md" />
        <input type="number" name="whatsapp" placeholder="WhatsApp Number" value={newShop.whatsapp}  onChange={handleChange} required className="w-full p-2 border rounded-md" />
        <input type="email" name="email" placeholder="Email" value={newShop.email}  onChange={handleChange} required className="w-full p-2 border rounded-md" />
        <input type="text" name="orderLink" placeholder="Google Form Link for Orders" value={newShop.orderLink}  onChange={handleChange} className="w-full p-2 border rounded-md" />
        <input type="text" name="shopImage" placeholder="Enter the Link of shop Image" value={newShop.shopImage}  onChange={handleChange} className="w-full p-2 border rounded-md" />
        <textarea name="description" placeholder="Describe available materials & equipment" value={newShop.description}  onChange={handleChange} required className="w-full p-2 border rounded-md h-24"></textarea>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">Submit</button>
      </form>
    </div>
  );
}

export default AddEquipments