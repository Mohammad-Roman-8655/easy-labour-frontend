import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ApplyJob() {
  const location = useLocation();
  const currentUser = localStorage.getItem("currentUser");
  const navigate = useNavigate();
  const { Job } = location.state || {}; // Ensure Job exists to prevent errors

  if (!Job) {
    return <div className="text-center text-red-500">No job details available.</div>;
  }

  const handleUpdate = () => {
    navigate("/EditJobDetails", 
      { state: { 
        Job : Job
      } 
    }
  );
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this job?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:3000/api/jobs/${Job._id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Job deleted successfully!");
        navigate("/jobs");
      } else {
        alert("Failed to delete job.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-5 bg-white shadow-lg rounded-lg my-10 border">
      <div className="text-center">
        <img
          src={Job.companyLogo}
          alt={`${Job.companyName} Logo`}
          className="w-20 h-20 mx-auto rounded-full shadow-md"
        />
        <h1 className="text-2xl font-bold mt-3">{Job.companyName}</h1>
      </div>

      <div className="mt-5 space-y-3">
        <p className="text-md"><strong>📍 Address:</strong> {Job.address}</p>
        <p className="text-md"><strong>📞 Contact:</strong> {Job.contactNumber}</p>
        <p className="text-md"><strong>💬 WhatsApp:</strong> {Job.whatsappNumber}</p>
        <p className="text-md"><strong>✉️ Email:</strong> {Job.email}</p>
        <p className="text-md"><strong>📌 Preferred Location:</strong> {Job.preferredLocation || "Not specified"}</p>
        <p className="text-md"><strong>💼 Vacancy Type:</strong> {Job.vacancyType}</p>
        <p className="text-md"><strong>👥 Vacancies:</strong> {Job.vacancies}</p>
        <p className="text-md"><strong>💰 Salary:</strong> ₹{Job.salary.toLocaleString()}</p>
      </div>

      <div className="flex justify-between mt-6">
      {currentUser === Job?.createdBy &&  <> 
        <button
          onClick={handleUpdate}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md"
        >
          ✏️ Update
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md"
        >
          🗑️ Delete
        </button>
       </> 
       }
       
      </div>
    </div>
  );
}

export default ApplyJob;

