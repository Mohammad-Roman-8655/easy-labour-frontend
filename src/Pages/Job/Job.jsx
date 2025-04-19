import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { API_URL } from "../../config/apiConfiq";

function Job() {
  const [Jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]); // To store filtered jobs
  const [Companies, setCompanies] = useState([]);
  const [LabourTypes, setLabourTypes] = useState([]);

  const [selectedCompany, setSelectedCompany] = useState(""); // Store selected company
  const [selectedLabourType, setSelectedLabourType] = useState(""); // Store selected job type

  // Fetch Jobs
  const fetchJobs = async () => {
    try {
      const response = await fetch(`${API_URL}/api/jobs`);
      const data = await response.json();
      setJobs(data);
      setFilteredJobs(data); // Initialize filtered jobs with all jobs
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Fetch Companies
  const fetchCompanies = async () => {
    try {
      const response = await fetch(`${API_URL}/api/companies`);
      const data = await response.json();
      setCompanies(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Fetch Labour Types
  const fetchLabourTypes = async () => {
    try {
      const response = await fetch(`${API_URL}/api/labour-type`);
      const data = await response.json();
      setLabourTypes(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchLabourTypes();
    fetchCompanies();
    fetchJobs();
  }, []);

  const navigate = useNavigate();

  // Handle Apply Button
  const handleApply = (idx) => {
    navigate("/ApplyJob", {
      state: {
        Job: filteredJobs[idx],
      },
    });
  };

  // Filter Jobs when selection changes
  useEffect(() => {
    let filtered = Jobs;

    if (selectedCompany) {
      filtered = filtered.filter((job) => job.companyName === selectedCompany);
    }

    if (selectedLabourType) {
      filtered = filtered.filter((job) => job.vacancyType   === selectedLabourType);
    }

    setFilteredJobs(filtered);
  }, [selectedCompany, selectedLabourType, Jobs]);

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-around items-center w-full p-5 bg-blue-500">
        {/* Company Dropdown */}
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <select
            className="w-full p-2 border-2 hover:border-black rounded-xl"
            id="category"
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
          >
            <option value="">Select Company:</option>
            {Companies.map((Company, idx) => (
              <option key={idx} value={Company.companyName}>
                {Company.companyName}
              </option>
            ))}
          </select>
        </div>

        {/* Job Type Dropdown */}
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <select
            className="w-full p-2 border-2 hover:border-black rounded-xl"
            id="type"
            value={selectedLabourType}
            onChange={(e) => setSelectedLabourType(e.target.value)}
          >
            <option value="">Select Job Type:</option>
            {LabourTypes.map((LabourType, idx) => (
              <option key={idx} value={LabourType.labourType}>
                {LabourType.labourType}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button onClick={() => {fetchJobs(),setSelectedCompany(''),setSelectedLabourType('')}} className="text-black bg-white font-semibold border-2 px-4 py-2 hover:border-black rounded-lg">Remove Filter</button>
        </div>
      </div>

      {/* Job List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto w-full p-5">
        {filteredJobs.map((Job, idx) => (
          <div key={idx} className="w-full border-2 rounded-lg overflow-hidden">
            <img
              className="w-full h-48 object-cover"
              src={Job.companyLogo}
              alt={Job.companyName}
            />
            <div className="flex flex-col p-3">
              <h1 className="text-xl font-semibold">{Job.companyName}</h1>
              <p className="font-normal">Vacancy : {Job.vacancies}</p>
              <p className="font-normal">Type : {Job.jobType}</p>
              <p className="font-normal">Salary : {Job.salary} /day</p>
              <p className="font-normal">
                Email :{" "}
                <a
                  href={`mailto:${Job.email}`}
                  className="text-blue-600 hover:underline"
                >
                  {Job.email}
                </a>
              </p>

              <p className="font-light mb-3">
                <i className="fa-solid fa-location-dot"></i> {Job.address}
              </p>
              <div className="flex items-center justify-between">
                <button
                  className="w-2/3 border-2 bg-blue-500 text-white font-semibold p-1 rounded-3xl text-center"
                  onClick={() => handleApply(idx)}
                >
                  Apply Now
                </button>
                <a
                  className="font-bold text-blue-600 text-2xl"
                  href={`tel:+91${Job.contactNumber}`}
                >
                  <i className="fa-solid fa-phone"></i>
                </a>

                <a
                  className="font-bold text-green-400 text-3xl"
                  href={`https://wa.me/${Job.whatsappNumber}`}
                >
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <p className="text-center text-gray-500">No jobs found</p>
      )}
    </div>
  );
}

export default Job;
