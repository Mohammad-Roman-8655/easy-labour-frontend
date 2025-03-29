import React from 'react'
import { useState } from 'react';

function AddEquipments() {
  const [formData, setFormData] = useState({
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
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6 bg-blue-800 text-white p-3 rounded-xl">Shop Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="shopName" placeholder="Shop Name" onChange={handleChange} required className="w-full p-2 border rounded-md" />
        <div className="grid grid-cols-2 gap-4">
          <input type="time" name="openTime" placeholder="Opening Time" onChange={handleChange} required className="w-full p-2 border rounded-md" />
          <input type="time" name="closeTime" placeholder="Closing Time" onChange={handleChange} required className="w-full p-2 border rounded-md" />
        </div>
        <input type="text" name="daysOpen" placeholder="Days Open (e.g., Mon-Sat)" onChange={handleChange} required className="w-full p-2 border rounded-md" />
        <input type="text" name="address" placeholder="Shop Address" onChange={handleChange} required className="w-full p-2 border rounded-md" />
        <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required className="w-full p-2 border rounded-md" />
        <input type="tel" name="whatsapp" placeholder="WhatsApp Number" onChange={handleChange} required className="w-full p-2 border rounded-md" />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="w-full p-2 border rounded-md" />
        <input type="text" name="orderLink" placeholder="Google Form Link for Orders" onChange={handleChange} className="w-full p-2 border rounded-md" />
        <textarea name="description" placeholder="Describe available materials & equipment" onChange={handleChange} required className="w-full p-2 border rounded-md h-24"></textarea>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">Submit</button>
      </form>
    </div>
  );
}

export default AddEquipments