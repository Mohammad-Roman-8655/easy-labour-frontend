import React, { useState,useEffect } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import toast from 'react-hot-toast'
import { API_URL } from "../../config/apiConfiq";

function AddJobs() {
  const [CompanyId,setCompanyId]=useState({});
    const [newJob, setNewJob]  = useState({
        companyName: "",
        companyLogo: "",
        vacancies: "",
        vacancyType: "Labour",
        contactNumber: "",
        whatsappNumber: "",
        email: "",
        address: "",
        preferredLocation: "",
        salary: "",
        companyId :CompanyId._id
    });
   

   
    const handleInputChange = (e) => {
        const { name, value } = e.target;
      
        // If the user selects a company, find its corresponding logo
        if (name === "companyName") {
          const selectedCompany = companyNames.find(company => company.companyName === value);
          setNewJob({
            ...newJob,
            companyName: value,
            companyLogo: selectedCompany ? selectedCompany.companyLogo : "" // Set the logo if found
          });
        } else {
          setNewJob({
            ...newJob,
            [name]: value
          });
        }
      };
      

      const navigate=useNavigate();
      const token = localStorage.getItem("token");
      const handleAddJob = async () => {
        if(!token) {
          toast.error("Please Login to Add Job")
          navigate("/Login")
          return;
        }
        try {
          const response = await fetch(`${API_URL}/api/jobs`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
             Authorization: `Bearer ${token}` 
            },
            body: JSON.stringify(newJob),
          });
      
          if (response.ok) {
            alert("Job added successfully!");
            navigate("/Jobs") // Refresh the list
          } else {
            alert("Failed to add Job.");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        handleAddJob();
       
      };

      const [companyNames,setCompanyNames]=useState([]);
     
       const fetchCompanyNames = async () => {
          try {

            const response = await fetch(`${API_URL}/api/companies`);
            const data = await response.json();
            setCompanyNames(data);
          } catch (error) {
            console.error("Error:", error);
          }
        };
        
           const [LabourTypes,setLabourTypes]=useState([]);
        
              const fetchLabourTypes = async () => {
                const response = await fetch(`${API_URL}/api/labour-type`);
                const data = await response.json();
                setLabourTypes(data);
                
              }
        
              
        useEffect(() => {
          fetchCompanyNames();
          fetchLabourTypes();
        }, []);
        

      
    return (   
        <div className="max-w-4xl mx-auto p-5 bg-white shadow-lg rounded-lg my-20 border-2">
            <h1 className="text-2xl font-bold text-white rounded-xl p-3 mb-5 bg-blue-500">Post a Job</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Company Name *</label>
                    <select name="companyName" value={newJob.companyName} onChange={handleInputChange} className="w-full border p-2 rounded-lg">
                             <option value="" disabled>Select Company Name</option>
                              {companyNames.map((company) => (
                                       <option key={company._id} onChange={() => {setCompanyId(company._id)} } value={company.companyName}>{company.companyName}</option>
                                ))}
                    </select>
                </div>
            
                <div>
                    <label className="block text-sm font-medium mb-1">No of Vacancies *</label>
                    <input type="number" name="vacancies" value={newJob.vacancies}  onChange={handleInputChange} className="w-full border p-2 rounded-lg" required />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Type of Vacancy *</label>
                    <select name="vacancyType" min="1" value={newJob.vacancyType}  onChange={handleInputChange} className="w-full border p-2 rounded-lg">
                        <option value="">Select Vacancy Type : </option>
                        {LabourTypes.map((LabourType,idx) => (
                                <option key={idx} value={LabourType.labourType}>  {LabourType.labourType} </option>
                              ))}  
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Contact Number *</label>
                    <input type="tel" name="contactNumber" value={newJob.contactNumber}  onChange={handleInputChange} className="w-full border p-2 rounded-lg" required />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">WhatsApp Number *</label>
                    <input type="tel" name="whatsappNumber" value={newJob.whatsappNumber}  onChange={handleInputChange} className="w-full border p-2 rounded-lg" required />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Email *</label>
                    <input type="email" name="email" value={newJob.email}  onChange={handleInputChange} className="w-full border p-2 rounded-lg" required />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Address *</label>
                    <input type="text" name="address" value={newJob.address}  onChange={handleInputChange} className="w-full border p-2 rounded-lg" required />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Preferred Location</label>
                    <input type="text" name="preferredLocation" value={newJob.preferredLocation}  onChange={handleInputChange} className="w-full border p-2 rounded-lg" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Salary Offered *</label>
                    <input type="number" name="salary" value={newJob.salary}  onChange={handleInputChange} className="w-full border p-2 rounded-lg" required />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Company Logo</label>
                    <input type="text" name="companyLogo" value={newJob.companyLogo} onChange={handleInputChange} className="w-full border p-2 rounded-lg" />
                </div>
                <button type="submit" className="w-full bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800">Submit Job</button>
            </form>
        </div>
    );
}

export default AddJobs;
