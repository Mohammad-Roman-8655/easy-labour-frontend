import React,{useState,useEffect} from 'react'
import { useLocation,useNavigate } from 'react-router-dom'

function EditLabourDetails() {
    const location = useLocation();
    const {Labour} = location.state || '';
      const [editingLabour, setEditingLabour] = useState({});
                 
                  
            const handleEditInputChange = (e) => {
                setEditingLabour({ ...editingLabour, [e.target.name]: e.target.value });
              };
               
              const navigate=useNavigate();
              const handleUpdateLabour = async () => {
                try {
                  const response = await fetch(`http://localhost:3000/api/labours/${editingLabour._id}`, {
                    method: "PUT",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(editingLabour),
                  });
              
                  if (response.ok) {
                    alert("Labour updated successfully!");
                    navigate("/Labours");
                  } else {
                    alert("Failed to update Labour.");
                  }
                } catch (error) {
                  console.error("Error:", error);
                }
              };
              const handleSubmit = (e) => {
                e.preventDefault();
                handleUpdateLabour();
              };
              const [LabourTypes,setLabourTypes]=useState([]);
            
                  const fetchLabourTypes = async () => {
                    const response = await fetch("http://localhost:3000/api/LabourType");
                    const data = await response.json();
                    setLabourTypes(data);
                    
                  }
            
              useEffect(() => {
                setEditingLabour(Labour);
                fetchLabourTypes();
              },[]);
  return (   
    <div className="w-full max-w-4xl mx-auto p-5 bg-white rounded-lg shadow-lg my-20 border-2">
    <h1 className="text-2xl font-bold text-white p-5 mb-6 bg-blue-500 rounded-xl">Labour Registration Form</h1>
    <form className="space-y-6" onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={handleEditInputChange}  value={editingLabour?.name || ''} placeholder="Full Name" required className="w-full border rounded-md p-2" />
        <input type="email" name="email" onChange={handleEditInputChange}  value={editingLabour?.email || ''} placeholder="Email (Optional)" className="w-full border rounded-md p-2" />
        <input type="date" name="DOB" onChange={handleEditInputChange}   value={editingLabour?.DOB ? editingLabour.DOB.split('T')[0] : ''} required className="w-full border rounded-md p-2" />
        <select name="gender" onChange={handleEditInputChange}  value={editingLabour?.gender || ''} required className="w-full border rounded-md p-2">
            <option value="" disabled>Select Gender</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="OT">Other</option>
        </select>
        <input type="tel" name="phoneNum" onChange={handleEditInputChange}  value={editingLabour?.phoneNum || ''} placeholder="Contact Number" required className="w-full border rounded-md p-2" />
        <input type="tel" name="whatsappNum" onChange={handleEditInputChange}  value={editingLabour?.whatsappNum || ''} placeholder="WhatsApp Number (Optional)" className="w-full border rounded-md p-2" />
        <input type="text" name="address" onChange={handleEditInputChange}  value={editingLabour?.address|| ''} placeholder="Address" required className="w-full border rounded-md p-2" />
        <input type="text" name="locationToWork" onChange={handleEditInputChange}  value={editingLabour?.locationToWork || ''} placeholder="Preferred Work Location" required className="w-full border rounded-md p-2" />
        <select name="profession" onChange={handleEditInputChange}  value={editingLabour?.profession || ''} required className="w-full border rounded-md p-2">
            <option value="" disabled>Select Profession</option>
                    {
                            LabourTypes.map((LabourType,idx) => (
                                <option key={idx} value={LabourType.labourType}>  {LabourType.labourType} </option>
                              ))}  
        </select>
        <select name="expLevel"  onChange={handleEditInputChange}  value={editingLabour?.expLevel || ''} required className="w-full border rounded-md p-2">
            <option value="" disabled>Select Experience Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
        </select>
        <input type="number" name="YOE" onChange={handleEditInputChange}  value={editingLabour?.YOE || ''} placeholder="Years of Experience" required className="w-full border rounded-md p-2" />
        <select name="Availability"  onChange={handleEditInputChange}  value={editingLabour?.Availability || ''} required className="w-full border rounded-md p-2">
            <option value="" disabled>Select Availability</option>
            <option value="Available">Available</option>
            <option value="Busy">Busy</option>
        </select>
        <select name="salaryType"  onChange={handleEditInputChange}  value={editingLabour?.salaryType || ''} required className="w-full border rounded-md p-2">
            <option value="" disabled>Select Salary Type</option>
            <option value="Daily">Daily</option>
            <option value="Monthly">Monthly</option>
        </select>
        <input type="number" name="salary" onChange={handleEditInputChange}  value={editingLabour?.salary || ''} placeholder='Enter Salary' required className="w-full border rounded-md p-2" />
        <div>
          <label className='mb-5' htmlFor="profilePhoto">Profile Photo</label>
          <input type="text" name="profilePhoto" placeholder='Enter link of Profile Photo'  onChange={handleEditInputChange}  value={editingLabour?.profilePhoto || ''}  required className="w-full border rounded-md p-2" />
        </div>
        <div>
          <label className='mb-5' htmlFor="Idprof">Id Proff</label>
          <input type="text" name="Idprof" placeholder='Enter link of Id prof' onChange={handleEditInputChange}  value={editingLabour?.Idprof || ''} required className="w-full border rounded-md p-2" />
        </div>
       
        <button type="submit" className="w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800">Submit</button>
    </form>
</div>
  )
}

export default EditLabourDetails