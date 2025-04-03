import React from 'react'
import { NavLink,useNavigate} from 'react-router-dom'
import { useState,useEffect } from 'react'
function RentalEquipment() {
  const [Shops,setShops]=useState([]);
 
  const fetchShops = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/shops');
      const data = await response.json();
      setShops(data);
    } catch (error) {
         console.error("Error : ",error);
    }
  }

  useEffect(() => {
    fetchShops();
  },[]);
  
  const navigate=useNavigate();
  const handleViewDetailsShops = (index) => {
     navigate("/ViewDetailsShops", 
      {state:{
        Shop:Shops[index]
      }
     });
  }
  return (
<div>
  <div className="w-full">
    <div className="flex flex-wrap justify-around items-center w-full p-5 bg-blue-500">
      <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
        <select
          className="w-full p-2 border-2 hover:border-black rounded-xl"
          id="category"
        >
          <option value="">Select Category</option>
          <option value="">Material Shops</option>
          <option value="">Rental Vehicles</option>
        </select>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
       
        <select
          className="w-full p-2 border-2 hover:border-black rounded-xl"
          id="type"
        >
          <option value="">Select Type:</option>
          <option value="">Hardware Shop</option>
          <option value="">Glass Shop</option>
          <option value="">Timber Shop</option>
          <option value="">Truck</option>
          <option value="">Trolley</option>
          <option value="">Bulldozers</option>
          <option value="">Excavators</option>
          <option value="">Loaders</option>
          <option value="">Backhoes</option>
          <option value="">Cranes</option>
          <option value="">Trenchers</option>
          <option value="">Dump Trucks</option>
        </select>
      </div>
      <div className="w-[100%] sm:w-auto lg:w-1/3 h-11   flex justify-center items-center">
        <button
          className="lg:w-[30%] md:w-[30%] sm:w-auto p-2 px-5 text-black bg-white font-bold mx-10 border-2 border-black rounded-md"
        >
          Search
        </button>
        <div className='w-[50%]'>
          <NavLink className='w-[100%] p-2 px-5 text-black bg-white font-bold mx-10 border-2 border-black rounded-md' to="/AddEquipments">Add Shop</NavLink >
        </div>

      </div>
     
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto w-full p-5">
      {Shops.map((Shop, index) => (
        <div key={index} className="w-full border-2 rounded-lg overflow-hidden">
          <img
            className="w-full h-48 object-cover"
            src={Shop.shopImage}
            alt={Shop.shopName}
          />
          <div className="flex flex-col p-3">
            <h1 className="text-xl font-semibold">{Shop.shopName}</h1>
            <p className="font-normal">{Shop.openTime} to {Shop.closeTime}</p>
            <p className="font-light mb-3"><i className="fa-solid fa-location-dot"></i> {Shop.address}</p>
            <div className="flex items-center justify-between">
              <button
                className="w-2/3 border-2 bg-blue-500 text-white font-semibold p-1 rounded-3xl text-center"
               onClick={() => { handleViewDetailsShops(index)}}
              >
                View Details
              </button>
              <a
                 className="font-bold text-blue-600 text-2xl"
                href={`tel:+91${Shop.phone}`} // Removed the space after +91
               >
              <i className="fa-solid fa-phone"></i>
              </a>
              <a
                className="font-bold text-green-400 text-3xl"
                href={`https://wa.me/${Shop.whatsapp}`}
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  )
}

export default RentalEquipment