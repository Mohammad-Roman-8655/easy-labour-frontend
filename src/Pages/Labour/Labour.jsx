import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import locationData from "../../../../easy-labour-backend/Data/location.json";

function Labour() {
  const [labours, setLabours] = useState([]);
  const [labourTypes, setLabourTypes] = useState([]);
  const [filteredLabours, setFilteredLabours] = useState([]);
 
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedLabourType, setSelectedLabourType] = useState('');
  const [districts, setDistricts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchLabours();
    fetchLabourTypes();
  }, []);

  const fetchLabours = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/labours');
      const data = await response.json();
      setLabours(data);
      setFilteredLabours(data);
    } catch (error) {
      console.error("Error fetching labours: ", error);
    }
  };

  const fetchLabourTypes = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/LabourType");
      const data = await response.json();
      setLabourTypes(data);
    } catch (error) {
      console.error("Error fetching labour types: ", error);
    }
  };

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setSelectedDistrict('');
    setDistricts(locationData.states.find(s => s.state === state)?.districts || []);
    filterLabours(state, '', selectedLabourType);
  };

  const handleDistrictChange = (e) => {
    const district = e.target.value;
    setSelectedDistrict(district);
    filterLabours(selectedState, district, selectedLabourType);
  };

  const handleLabourTypeChange = (e) => {
    const labourType = e.target.value;
    setSelectedLabourType(labourType);
    filterLabours(selectedState, selectedDistrict, labourType);
  };

  const filterLabours = (state, district, labourType) => {
    let filtered = labours;
    if (state) filtered = filtered.filter(labour => labour.state === state);
    if (district) filtered = filtered.filter(labour => labour.district === district);
    if (labourType) filtered = filtered.filter(labour => labour.profession === labourType);
    setFilteredLabours(filtered);
  };

  const resetFilters = () => {
    setSelectedState('');
    setSelectedDistrict('');
    setSelectedLabourType('');
    setDistricts([]);
    setFilteredLabours(labours);
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-4 justify-center items-center w-full p-4 bg-blue-500">
  {/* State Filter */}
  <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[22%]">
    <select
      className="w-full p-3 border-2 hover:border-black rounded-xl"
      value={selectedState}
      onChange={handleStateChange}
    >
      <option value="">Select state</option>
      {locationData.states.map((stateObj, idx) => (
        <option key={idx} value={stateObj.state}>{stateObj.state}</option>
      ))}
    </select>
  </div>

  {/* District Filter */}
  <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[22%]">
    <select
      className="w-full p-3 border-2 hover:border-black rounded-xl"
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

  {/* Labour Type Filter */}
  <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[22%]">
    <select
      className="w-full p-3 border-2 hover:border-black rounded-xl"
      value={selectedLabourType}
      onChange={handleLabourTypeChange}
    >
      <option value="">Select Labour Type</option>
      {labourTypes.map((labourType, idx) => (
        <option key={idx} value={labourType.labourType}>{labourType.labourType}</option>
      ))}
    </select>
  </div>

  {/* Reset Button */}
  <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[22%]">
    <button
      className="w-full p-3 text-black bg-white font-semibold border-2 hover:border-black rounded-xl"
      onClick={resetFilters}
    >
      Reset Filters
    </button>
  </div>
</div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
        {filteredLabours.map((labour, idx) => (
          <div key={idx} className="border-2 rounded-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src={labour.profilePhoto} alt="labour-type" />
            <div className="p-3">
              <h1 className="text-xl font-semibold">{labour.name}</h1>
              <p className="font-normal">Position: {labour.profession}</p>
              <p className="font-normal">Salary: {labour.salary} / day</p>
              <p className="font-normal">Status: {labour.Availability}</p>
              <p className="font-normal"><i className="fa-solid fa-location-dot"></i> {labour.address}</p>
              <div className="flex justify-between">
                <button className="w-2/3 border-2 bg-blue-500 text-white font-semibold p-1 rounded-3xl text-center" onClick={() => navigate("/ViewDetailsLabour", { state: { Labour: labour } })}>
                  View Details
                </button>
                <a className="text-blue-600 text-2xl" href={`tel:+91${labour.phoneNum}`}>
                  <i className="fa-solid fa-phone"></i>
                </a>
                <a className="text-green-400 text-3xl" href={`https://wa.me/${labour.whatsappNum}`}>
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Labour;
