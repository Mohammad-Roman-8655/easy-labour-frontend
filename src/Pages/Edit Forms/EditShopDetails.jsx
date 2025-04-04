import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import locationData from "../../../../easy-labour-backend/Data/location.json";

function EditShopDetails() {
  const location = useLocation();
  const { Shop } = location.state || "";

  const [editingShop, setEditingShop] = useState({});
  const [districts, setDistricts] = useState([]);
  const navigate = useNavigate();

  // Handle input changes
  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditingShop((prev) => ({ ...prev, [name]: value }));

    if (name === "state") {
      const selectedState = locationData.states.find((s) => s.state === value);
      setDistricts(selectedState ? selectedState.districts : []);
      setEditingShop((prev) => ({ ...prev, district: "" })); // Reset district when state changes
    }
  };

  // Load existing data when component mounts
  useEffect(() => {
    if (Shop) {
      setEditingShop(Shop);

      // Prepopulate districts if a state is already selected
      if (Shop.state) {
        const selectedState = locationData.states.find((s) => s.state === Shop.state);
        if (selectedState) {
          setDistricts(selectedState.districts);
        }
      }
    }
  }, [Shop]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/shops/${editingShop._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingShop),
      });

      if (response.ok) {
        alert("Shop updated successfully!");
        navigate("/RentalEquipments");
      } else {
        alert("Failed to update Shop.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6 bg-blue-800 text-white p-3 rounded-xl">
        Shop Registration
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="shopName" placeholder="Shop Name" onChange={handleEditInputChange} value={editingShop?.shopName || ""} required className="w-full p-2 border rounded-md" />
        <select
          name="shopType"
          className="p-3 border rounded-lg w-full"
          value={editingShop?.shopType || ""}  onChange={handleEditInputChange}
        >
          <option value="" disabled>Select Category</option>
          <option value="Material Shop">Material Shop</option>
          <option value="Rental Equipment Shop">Rental Equipment Shop</option>
        </select>
        
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="openTime" placeholder="Opening Time" onChange={handleEditInputChange} value={editingShop?.openTime || ""} required className="w-full p-2 border rounded-md" />
          <input type="text" name="closeTime" placeholder="Closing Time" onChange={handleEditInputChange} value={editingShop?.closeTime || ""} required className="w-full p-2 border rounded-md" />
        </div>

        <input type="text" name="daysOpen" placeholder="Days Open (e.g., Mon-Sat)" onChange={handleEditInputChange} value={editingShop?.daysOpen || ""} required className="w-full p-2 border rounded-md" />

        {/* State Dropdown */}
        <select name="state" value={editingShop?.state || ""} onChange={handleEditInputChange} className="p-3 border rounded-lg w-full" required>
          <option value="" disabled>Select State</option>
          {locationData.states.map((stateObj, idx) => (
            <option key={idx} value={stateObj.state}>
              {stateObj.state}
            </option>
          ))}
        </select>

        {/* District Dropdown */}
        <select name="district" value={editingShop?.district || ""} onChange={handleEditInputChange} className="p-3 border rounded-lg w-full" required>
          <option value="" disabled>Select District</option>
          {districts.map((district, idx) => (
            <option key={idx} value={district}>
              {district}
            </option>
          ))}
        </select>

        <input type="text" name="address" placeholder="Shop Address" onChange={handleEditInputChange} value={editingShop?.address || ""} required className="w-full p-2 border rounded-md" />
        <input type="number" name="phone" placeholder="Phone Number" onChange={handleEditInputChange} value={editingShop?.phone || ""} required className="w-full p-2 border rounded-md" />
        <input type="number" name="whatsapp" placeholder="WhatsApp Number" onChange={handleEditInputChange} value={editingShop?.whatsapp || ""} required className="w-full p-2 border rounded-md" />
        <input type="email" name="email" placeholder="Email" onChange={handleEditInputChange} value={editingShop?.email || ""} required className="w-full p-2 border rounded-md" />
        <input type="text" name="orderLink" placeholder="Google Form Link for Orders" onChange={handleEditInputChange} value={editingShop?.orderLink || ""} className="w-full p-2 border rounded-md" />
        <input type="text" name="shopImage" placeholder="Enter the Link of shop Image" onChange={handleEditInputChange} value={editingShop?.shopImage || ""} className="w-full p-2 border rounded-md" />
        <textarea name="description" placeholder="Describe available materials & equipment" onChange={handleEditInputChange} value={editingShop?.description || ""} required className="w-full p-2 border rounded-md h-24"></textarea>
        
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">Submit</button>
      </form>
    </div>
  );
}

export default EditShopDetails;
