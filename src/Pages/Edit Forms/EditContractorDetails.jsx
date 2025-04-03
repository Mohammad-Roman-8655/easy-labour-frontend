import React, {useState, useEffect} from 'react'
import { useLocation,useNavigate } from 'react-router-dom'


function EditContractorDetails() {
    const location=useLocation();
    const {Contractor} =location.state || '';

     const [editingContractor, setEditingContractor] = useState({});
             
              
        const handleEditInputChange = (e) => {
            setEditingContractor({ ...editingContractor, [e.target.name]: e.target.value });
          };
           
          const navigate=useNavigate();
          const handleUpdateContractor = async () => {
            try {
              const response = await fetch(`http://localhost:3000/api/contractors/${editingContractor._id}`, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(editingContractor),
              });
          
              if (response.ok) {
                alert("Contractor updated successfully!");
                navigate("/Contractors");
              } else {
                alert("Failed to update Contractor.");
              }
            } catch (error) {
              console.error("Error:", error);
            }
          };
          const handleSubmit = (e) => {
            e.preventDefault();
            handleUpdateContractor();
          };
           const [ContractorTypes,setContractorTypes]=useState([]);
                
                      const fetchContractorTypes = async () => {
                        const response = await fetch("http://localhost:3000/api/ContractorType");
                        const data = await response.json();
                        setContractorTypes(data);
                        
                      }
                
                     
    
          useEffect(() => {
            fetchContractorTypes();
            setEditingContractor(Contractor);
          },[]);
  return (
    <div className="max-w-4xl mx-auto p-5 bg-gray-100 rounded-lg shadow-lg my-20">
    <h1 className="text-3xl font-bold text-white p-4 rounded-xl mb-6 bg-blue-600">Contractor Registration Form</h1>
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleEditInputChange} 
          value={editingContractor?.name || ''}
          className="p-3 border rounded-lg w-full"
          required
        />
        <input
          type="date"
          name="DOB"
          onChange={handleEditInputChange} 
          value={editingContractor?.DOB ? editingContractor.DOB.split('T')[0] : ''}
          className="p-3 border rounded-lg w-full"
          required
        />
        <select
          name="Gender"
          onChange={handleEditInputChange} 
          value={editingContractor?.Gender || ''}
          className="p-3 border rounded-lg w-full"
          required
        >
          <option value="" disabled>Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="text"
          name="pnoneNum"
          placeholder="Contact Number"
          onChange={handleEditInputChange} 
          value={editingContractor?.pnoneNum || ''}
          className="p-3 border rounded-lg w-full"
          required
        />
        <input
          type="text"
          name="whatsappNum"
          placeholder="WhatsApp Number"
          onChange={handleEditInputChange} 
          value={editingContractor?.whatsappNum || ''}
          className="p-3 border rounded-lg w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleEditInputChange} 
          value={editingContractor?.email || ''}
          className="p-3 border rounded-lg w-full"
          required
        />
      </div>

      <textarea
        name="Address"
        placeholder="Address"
        onChange={handleEditInputChange} 
          value={editingContractor?.Address || ''}
        className="p-3 border rounded-lg w-full"
        required
      />

      <input
        type="text"
        name="loactionToWork"
        placeholder="Preferred Location to Work"
        onChange={handleEditInputChange} 
        value={editingContractor?.loactionToWork || ''}
        className="p-3 border rounded-lg w-full"
        required
      />

      <select
        name="profession"
        onChange={handleEditInputChange} 
        value={editingContractor?.profession || ''}
        className="p-3 border rounded-lg w-full"
        required
      >
        <option value="" disabled>Select Profession</option>
        {
        ContractorTypes.map((ContractorType,idx) => (
               <option key={idx} value={ContractorType.contractorType}>  {ContractorType.contractorType} </option>
                )
              )
       } 
      </select>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <select
          name="expLevel"
          onChange={handleEditInputChange} 
          value={editingContractor?.expLevel || ''}
          className="p-3 border rounded-lg w-full"
          required
        >
          <option value="">Select Experience Level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
        </select>
        <input
          type="number"
          name="YOE"
          placeholder="Years of Experience"
          onChange={handleEditInputChange} 
          value={editingContractor?.YOE || ''}
          className="p-3 border rounded-lg w-full"
          required
        />
      </div>

      <select
        name="Availability"
        onChange={handleEditInputChange} 
        value={editingContractor?.Availability || ''}
        className="p-3 border rounded-lg w-full"
        required
      >
        <option value="">Select Availability</option>
        <option value="Available">Available</option>
        <option value="Busy">Busy</option>
      </select>

      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium mb-3 mr-10">Upload Profile Photo</label>
          <input
            type="text"
            name="profilePhoto"
            placeholder='Enter Profile Photo link'
            onChange={handleEditInputChange} 
        value={editingContractor?.profilePhoto || ''}
            className="p-3 border rounded-lg w-full "
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-3 mr-10">Upload Previous Work Photos</label>
          <input
            type="text"
            name="prevousWorkPhoto"
             placeholder='Enter Previous work Photo link'
             onChange={handleEditInputChange} 
             value={editingContractor?.prevousWorkPhoto || ''}
            className="p-3 border rounded-lg w-full "
            multiple
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-3 mr-10">Upload ID Proof</label>
          <input
            type="text"
            name="Idprof"
             placeholder='Enter Id Prof link'
             onChange={handleEditInputChange} 
             value={editingContractor?.Idprof || ''}
            className="p-3 border rounded-lg w-full "
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  </div>
  )
}

export default EditContractorDetails