
import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';

function EditShopDetails() {

  const location = useLocation();

  const {Shop} = location.state || ''
 
 
  const [editingShop, setEditingShop] = useState({});

        
               
         const handleEditInputChange = (e) => {
             setEditingShop({ ...editingShop, [e.target.name]: e.target.value });
           };
            
           const navigate=useNavigate();
           const handleUpdateShop = async () => {
             try {
               const response = await fetch(`http://localhost:3000/api/shops/${editingShop._id}`, {
                 method: "PUT",
                 headers: {
                   "Content-Type": "application/json",
                 },
                 body: JSON.stringify(editingShop),
               });
           
               if (response.ok) {
                 alert("Shop updated successfully!");
                 navigate("/RentalEquipments")
               } else {
                 alert("Failed to update Shop.");
               }
             } catch (error) {
               console.error("Error:", error);
             }
           };
           const handleSubmit = (e) => {
             e.preventDefault();
             handleUpdateShop();
           };
     
           useEffect(() => {
             setEditingShop(Shop);
           },[]);

  return (   
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6 bg-blue-800 text-white p-3 rounded-xl">Shop Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="shopName" placeholder="Shop Name" onChange={handleEditInputChange}   value={editingShop?.shopName || ''} required className="w-full p-2 border rounded-md" />
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="openTime" placeholder="Opening Time" onChange={handleEditInputChange}   value={editingShop?.openTime || ''} required className="w-full p-2 border rounded-md" />
          <input type="text" name="closeTime" placeholder="Closing Time" onChange={handleEditInputChange}   value={editingShop?.closeTime || ''} required className="w-full p-2 border rounded-md" />
        </div>
        <input type="text" name="daysOpen" placeholder="Days Open (e.g., Mon-Sat)" onChange={handleEditInputChange}   value={editingShop?.daysOpen || ''} required className="w-full p-2 border rounded-md" />
        <input type="text" name="address" placeholder="Shop Address" onChange={handleEditInputChange}   value={editingShop?.address || ''} required className="w-full p-2 border rounded-md" />
        <input type="number" name="phone" placeholder="Phone Number" onChange={handleEditInputChange}   value={editingShop?.phone || ''} required className="w-full p-2 border rounded-md" />
        <input type="number" name="whatsapp" placeholder="WhatsApp Number" onChange={handleEditInputChange}   value={editingShop?.whatsapp || ''} required className="w-full p-2 border rounded-md" />
        <input type="email" name="email" placeholder="Email" onChange={handleEditInputChange}   value={editingShop?.email || ''} required className="w-full p-2 border rounded-md" />
        <input type="text" name="orderLink" placeholder="Google Form Link for Orders" onChange={handleEditInputChange}   value={editingShop?.orderLink || ''} className="w-full p-2 border rounded-md" />
        <input type="text" name="shopImage" placeholder="Enter the Link of shop Image" onChange={handleEditInputChange}   value={editingShop?.shopImage || ''} className="w-full p-2 border rounded-md" />
        <textarea name="description" placeholder="Describe available materials & equipment" onChange={handleEditInputChange}   value={editingShop?.description || ''} required className="w-full p-2 border rounded-md h-24"></textarea>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">Submit</button>
      </form>
    </div>
  );
}

export default EditShopDetails