import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import locationData from "../../Data/location.json";
import { API_URL } from '../../config/apiConfiq';

function Contractor() {
  const [Contractors,setContractores]=useState([]);
  const [ContractorTypes,setContractorTypes]=useState([]);
  const [filteredContractors, setFilteredContractors] = useState([]);
   
    const [selectedState, setSelectedState] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedContractorType, setSelectedContractorType] = useState('');
    const [districts, setDistricts] = useState([]);

  const fectchContracters = async () => {
    try {
      const response = await fetch(`${API_URL}/api/contractors`);
      const data= await response.json();
      setContractores(data);
      setFilteredContractors(data);
      
    } catch (error) {
        console.error("Error : ",error);
    }
  }

        
              const fetchContractorTypes = async () => {
                const response = await fetch(`${API_URL}/api/contractor-type`);
                const data = await response.json();
                setContractorTypes(data);
                
              }

  useEffect(() => {
    fetchContractorTypes();
    fectchContracters();
  },[]);

  const navigate=useNavigate();
  const  handleViewDetailsContractor = (index) => {
    navigate("/ViewDetailsContractor",
      {state:{
        Contractor:Contractors[index]
      }}
    );
  }

  const handleStateChange = (e) => {
      const state = e.target.value;
      setSelectedState(state);
      setSelectedDistrict('');
      setDistricts(locationData.states.find(s => s.state === state)?.districts || []);
      filterContractors(state, '', selectedContractorType);
    };
  
    const handleDistrictChange = (e) => {
      const district = e.target.value;
      setSelectedDistrict(district);
      filterContractors(selectedState, district, selectedContractorType);
    };
  
    const handleContractorTypeChange = (e) => {
      const ContractorType = e.target.value;
      setSelectedContractorType(ContractorType);
      filterContractors(selectedState, selectedDistrict, ContractorType);
    };
  
    const filterContractors = (state, district, ContractorType) => {
      let filtered = Contractors;
      if (state) filtered = filtered.filter(Contractor => Contractor.state === state);
      if (district) filtered = filtered.filter(Contractor => Contractor.district === district);
      if (ContractorType) filtered = filtered.filter(Contractor => Contractor.profession === ContractorType);
      setFilteredContractors(filtered);
    };
  
    const resetFilters = () => {
      setSelectedState('');
      setSelectedDistrict('');
      setSelectedContractorType('');
      setDistricts([]);
      setFilteredContractors(Contractors);
    };
 
  return (
    <div>
    <div className='w-full'>
    <div className="flex flex-wrap justify-center items-center gap-4 p-4 bg-blue-500">
  {/* State Dropdown */}
  <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[22%]">
    <select
      className="w-full p-3 border-2 hover:border-black rounded-xl"
      id="state"
      value={selectedState}
      onChange={handleStateChange}
    >
      <option value="">Select state:</option>
      {locationData.states.map((stateObj, idx) => (
        <option key={idx} value={stateObj.state}>{stateObj.state}</option>
      ))}
    </select>
  </div>

  {/* District Dropdown */}
  <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[22%]">
    <select
      className="w-full p-3 border-2 hover:border-black rounded-xl"
      id="district"
      value={selectedDistrict}
      onChange={handleDistrictChange}
      disabled={!selectedState}
    >
      <option value="">Select district:</option>
      {districts.map((district, idx) => (
        <option key={idx} value={district}>{district}</option>
      ))}
    </select>
  </div>

  {/* Contractor Type Dropdown */}
  <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[22%]">
    <select
      className="w-full p-3 border-2 hover:border-black rounded-xl"
      id="type"
      value={selectedContractorType}
      onChange={handleContractorTypeChange}
    >
      <option value="">Select Contractor Type:</option>
      {ContractorTypes.map((ContractorType, idx) => (
        <option key={idx} value={ContractorType.contractorType}>{ContractorType.contractorType}</option>
      ))}
    </select>
  </div>

  {/* Remove Filter Button */}
  <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[22%]">
    <button
      className="w-full p-3 text-black bg-white font-bold border-2 hover:border-black rounded-xl"
      onClick={resetFilters}
    >
      Remove Filter
    </button>
  </div>
</div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto w-full p-5">
    {filteredContractors.map((Contractor, index) => (
      <div key={index} className="w-full border-2 rounded-lg overflow-hidden">
        <img
          className="w-full h-48 object-cover"
          src={Contractor.profilePhoto}
          alt="Contractor-image"
        />
        <div className="flex flex-col p-3">
          <h1 className="text-xl font-semibold">{Contractor.name}</h1>
          <p className="font-normal">{Contractor.profession}</p>
          <p className="font-normal"> Experience : {Contractor.expLevel}</p>
          <p className="font-normal">Status: {Contractor.Availability}</p>
          

          <p className="font-light mb-3"><i className="fa-solid fa-location-dot"></i> {Contractor.Address}</p>
          <div className="flex items-center justify-between">
            <button
              className="w-2/3 border-2 bg-blue-500 text-white font-semibold p-1 rounded-3xl text-center"
              onClick={() => {handleViewDetailsContractor(index)}}
            >
             View Details
            </button>
            <a
                 className="font-bold text-blue-600 text-2xl"
                href={`tel:+91${Contractor.pnoneNum}`} // Removed the space after +91
               >
              <i className="fa-solid fa-phone"></i>
              </a>
              <a
                className="font-bold text-green-400 text-3xl"
                href={`https://wa.me/${Contractor.whatsappNum}`}
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

export default Contractor