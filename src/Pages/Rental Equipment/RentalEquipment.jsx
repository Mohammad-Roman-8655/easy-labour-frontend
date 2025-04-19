import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import locationData from "../../../../easy-labour-backend/Data/location.json";
import { API_URL } from '../../config/apiConfiq';

function RentalEquipment() {
  const [Shops, setShops] = useState([]);
  const [filteredShops, setFilteredShops] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedShopType, setSelectedShopType] = useState('');
  const [districts, setDistricts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchShops();
  }, []);

  const fetchShops = async () => {
    try {
      const response = await fetch(`${API_URL}/api/shops`);
      const data = await response.json();
      setShops(data);
      setFilteredShops(data);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setSelectedDistrict('');
    setDistricts(locationData.states.find(s => s.state === state)?.districts || []);
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  const handleShopTypeChange = (e) => {
    setSelectedShopType(e.target.value);
  };

  useEffect(() => {
    let filtered = Shops;

    console.log("Filtering shops based on: ", { selectedState, selectedDistrict, selectedShopType });

    if (selectedState) filtered = filtered.filter(shop => shop.state === selectedState);
    if (selectedDistrict) filtered = filtered.filter(shop => shop.district === selectedDistrict);
    if (selectedShopType) {
        filtered = filtered.filter(shop => (shop.shopType?.trim().toLowerCase() || "") === selectedShopType.trim().toLowerCase());
    }

    setFilteredShops(filtered);
}, [selectedState, selectedDistrict, selectedShopType, Shops]);


  const resetFilters = () => {
    setSelectedState('');
    setSelectedDistrict('');
    setSelectedShopType('');
    setDistricts([]);
    setFilteredShops(Shops);
  };

  return (
    <div>
      <div className="w-full">
      <div className="flex flex-wrap justify-center gap-4 items-center w-full p-5 bg-blue-500">
  {/* State Dropdown */}
  <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[22%]">
    <select
      className="w-full p-3 border-2 rounded-xl hover:border-black"
      value={selectedState}
      onChange={handleStateChange}
    >
      <option value="">Select state</option>
      {locationData.states.map((stateObj, idx) => (
        <option key={idx} value={stateObj.state}>{stateObj.state}</option>
      ))}
    </select>
  </div>

  {/* District Dropdown */}
  <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[22%]">
    <select
      className="w-full p-3 border-2 rounded-xl hover:border-black"
      value={selectedDistrict}
      onChange={handleDistrictChange}
      disabled={!selectedState}
    >
      <option value="">Select district</option>
      {districts.map((district, idx) => (
        <option key={idx} value={district}>{district}</option>
      ))}
    </select>
  </div>

  {/* Shop Type Dropdown */}
  <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[22%]">
    <select
      className="w-full p-3 border-2 rounded-xl hover:border-black"
      value={selectedShopType}
      onChange={handleShopTypeChange}
    >
      <option value="" disabled>Select Category</option>
      <option value="Material Shop">Material Shop</option>
      <option value="Rental Equipment Shop">Rental Equipment Shop</option>
    </select>
  </div>

  {/* Reset Filters Button */}
  <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[22%]">
    <button
      className="w-full p-3 text-black bg-white font-bold border-2 border-black hover:bg-gray-100 rounded-xl"
      onClick={resetFilters}
    >
      Remove Filter
    </button>
  </div>
</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
          {filteredShops.length === 0 ? (
            <p className="text-center text-xl font-semibold">No shops found</p>
          ) : (
            filteredShops.map((shop, index) => (
              <div key={index} className="w-full border-2 rounded-lg overflow-hidden">
                <img className="w-full h-48 object-cover" src={shop.shopImage} alt={shop.shopName} />
                <div className="p-3">
                  <h1 className="text-xl font-semibold">{shop.shopName}</h1>
                  <p>{shop.openTime} to {shop.closeTime}</p>
                  <p><i className="fa-solid fa-location-dot"></i> {shop.address}</p>
                  <div className="flex justify-between">
                    <button className="w-2/3 bg-blue-500 text-white font-semibold p-1 rounded-3xl"
                      onClick={() => navigate("/ViewDetailsShops", { state: { Shop: shop } })}>
                      View Details
                    </button>
                    <a className="text-blue-600 text-2xl" href={`tel:+91${shop.phone}`}>
                      <i className="fa-solid fa-phone"></i>
                    </a>
                    <a className="text-green-400 text-3xl" href={`https://wa.me/${shop.whatsapp}`}>
                      <i className="fa-brands fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default RentalEquipment;

