import React, { useState,useEffect } from "react";
import { useLocation,useNavigate } from "react-router-dom";

function EditJobDetails() {
  const location = useLocation();
  const { Job } = location.state || {}; // Ensure Job data exists

  const [editingJob, setEditingJob] = useState({});

  const [companyNames, setCompanyNames] = useState([]);

  // Fetch the company names and logos from the API
  const fetchCompanyNames = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/Companies");
      const data = await response.json();
      setCompanyNames(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Set the initial editingJob when the component mounts
  useEffect(() => {
    if (Job) {
      setEditingJob(Job);
    }
  }, [Job]);
   const [LabourTypes,setLabourTypes]=useState([]);
          
                const fetchLabourTypes = async () => {
                  const response = await fetch("http://localhost:3000/api/LabourType");
                  const data = await response.json();
                  setLabourTypes(data);
                  
                }

  // Fetch company names when the component mounts
  useEffect(() => {
    fetchLabourTypes();
    fetchCompanyNames();
  }, []);

  // Handle input changes for editing the job
  const handleEditInputChange = (e) => {
    const { name, value } = e.target;

    // If the user selects a company, find its corresponding logo
    if (name === "companyName") {
      const selectedCompany = companyNames.find(
        (company) => company.companyName === value
      );
      setEditingJob({
        ...editingJob,
        companyName: value,
        companyLogo: selectedCompany ? selectedCompany.companyLogo : "", // Set the logo if found
      });
    } else {
      setEditingJob({
        ...editingJob,
        [name]: value,
      });
    }
  };

  // Handle job update
  const handleUpdateJob = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/Jobs/${editingJob._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editingJob),
        }
      );

      if (response.ok) {
        alert("Job updated successfully!");
        navigate("/Jobs"); // Redirect to job listing page
      } else {
        alert("Failed to update Job.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateJob();
  };

  const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto p-5 bg-white shadow-lg rounded-lg my-20 border-2">
      <h1 className="text-2xl font-bold text-white rounded-xl p-3 mb-5 bg-blue-500">
        Edit Job
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Company Name *</label>
          <select
            name="companyName"
            value={editingJob.companyName || ""}
            onChange={handleEditInputChange}
            className="w-full border p-2 rounded-lg"
          >
            <option value="" disabled>
              Select Company Name
            </option>
            {companyNames.map((company) => (
              <option key={company._id} value={company.companyName}>
                {company.companyName}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">No of Vacancies *</label>
          <input
            type="number"
            name="vacancies"
            value={editingJob.vacancies || ""}
            onChange={handleEditInputChange}
            className="w-full border p-2 rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Type of Vacancy *</label>
          <select
            name="vacancyType"
            value={editingJob.vacancyType || ""}
            onChange={handleEditInputChange}
            className="w-full border p-2 rounded-lg"
          >
            <option value="" disabled>Select Vacancy Type</option>
            {LabourTypes.map((LabourType,idx) => (
                                <option key={idx} value={LabourType.labourType}>  {LabourType.labourType} </option>
                              ))} 
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Contact Number *</label>
          <input
            type="tel"
            name="contactNumber"
            value={editingJob.contactNumber || ""}
            onChange={handleEditInputChange}
            className="w-full border p-2 rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">WhatsApp Number *</label>
          <input
            type="tel"
            name="whatsappNumber"
            value={editingJob.whatsappNumber || ""}
            onChange={handleEditInputChange}
            className="w-full border p-2 rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email *</label>
          <input
            type="email"
            name="email"
            value={editingJob.email || ""}
            onChange={handleEditInputChange}
            className="w-full border p-2 rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Address *</label>
          <input
            type="text"
            name="address"
            value={editingJob.address || ""}
            onChange={handleEditInputChange}
            className="w-full border p-2 rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Preferred Location</label>
          <input
            type="text"
            name="preferredLocation"
            value={editingJob.preferredLocation || ""}
            onChange={handleEditInputChange}
            className="w-full border p-2 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Salary Offered *</label>
          <input
            type="number"
            name="salary"
            value={editingJob.salary || ""}
            onChange={handleEditInputChange}
            className="w-full border p-2 rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Company Logo</label>
          <input
            type="text"
            name="companyLogo"
            value={editingJob.companyLogo || ""}
            onChange={handleEditInputChange}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800"
        >
          Update Job
        </button>
      </form>
    </div>
  )
}

export default EditJobDetails