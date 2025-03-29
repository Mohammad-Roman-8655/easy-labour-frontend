import React from "react";
import { useLocation } from "react-router-dom";

function ApplyJob() {
  const location = useLocation();
  const {Job} = location.state || {}; // Ensure state exists to prevent errors
  

  return (
    <div>
      <h1>Company Name: {Job.companyName}</h1>
      <h2>Address: {Job.address}</h2>
      <h2>Contact Number: {Job.contactNumber}</h2>
      <h3>WhatsApp: {Job.whatsappNumber}</h3>
      <h3>Email: {Job.email}</h3>
    </div>
  );
}

export default ApplyJob;
