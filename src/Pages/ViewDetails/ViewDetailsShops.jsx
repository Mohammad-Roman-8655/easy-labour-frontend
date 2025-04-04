import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ViewDetailsShops() {
  const location = useLocation();
  const currentUser = localStorage.getItem("currentUser");
  const navigate = useNavigate();
  const { Shop } = location.state || {};


      const handleDeleteShop = async () => {
        if (!window.confirm("Are you sure you want to delete this Shop?")) return;
      
        try {
          const response = await fetch(`http://localhost:3000/api/Shops/${Shop._id}`, {
            method: "DELETE",
          });
      
          if (response.ok) {
            alert("Shop deleted successfully!");  
            navigate("/RentalEquipments"); 
                
          } else {
            alert("Failed to delete Shop.");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };

      const handleUpdateShopDetails = () => {
        navigate("/EditShopDetails", {
            state:{
                Shop:Shop
            }
        });
      }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-3xl font-bold text-center mb-6 bg-blue-700 text-white p-3 rounded-lg">{Shop.shopName} Details</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src={Shop.shopImage} alt={Shop.shopName} className="w-full h-64 object-cover rounded-lg shadow-md" />
        <div className="space-y-4 mt-5">
          <p className='mb-5'><strong>Name:</strong> {Shop.shopName}</p>
          <p className='mb-5'><strong>Email:</strong> <a href={`mailto:${Shop.email}`} className="text-blue-600 hover:underline">{Shop.email}</a></p>
          <p className='mb-5'><strong>Timing:</strong> {Shop.openTime} to {Shop.closeTime}</p>
          <p className='mb-5'><strong>Days Open:</strong> {Shop.daysOpen}</p>
          <p className='mb-5'><strong>Phone:</strong> {Shop.phone}</p>
          <p className='mb-5'><strong>WhatsApp:</strong> {Shop.whatsapp}</p>
        </div>
        <div className='flex'>
          <div>
            <p className='mb-5'><strong>Address:</strong> {Shop.address}</p>
          <p className='mb-5'><strong>District:</strong> {Shop.district}</p>
          <p className='mb-5'><strong>State:</strong> {Shop.state}</p></div>
        </div>
        <div>
        <p className='mb-5'><strong>Description:</strong> {Shop.description}</p>
        <p className='mb-5'><strong>Website:</strong> <a href={Shop.orderLink} className="text-blue-600 hover:underline">Order Now</a></p>
        <p className='mb-5'><strong>Shop Type :</strong> {Shop.shopType}</p>
        </div>
      </div>
      
      <div className="flex justify-between mt-6">
      {currentUser === Shop?.createdBy &&  <> 
        <button onClick={handleUpdateShopDetails} className="bg-yellow-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-yellow-600">Update</button>
        <button onClick={handleDeleteShop} className="bg-red-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-red-700">Delete</button>
       </>
        }
        
      </div>
    </div>
  );
}

export default ViewDetailsShops;