import React, { useState } from "react";

function AddJobs() {
    const [formData, setFormData] = useState({
        companyName: "",
        companyLogo: null,
        vacancies: "",
        vacancyType: "Labour",
        contactNumber: "",
        whatsappNumber: "",
        email: "",
        address: "",
        preferredLocation: "",
        salary: ""
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === "file" ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        // Form submission logic here
    };

    return (
        <div className="max-w-4xl mx-auto p-5 bg-white shadow-lg rounded-lg my-20 border-2">
            <h1 className="text-2xl font-bold text-white rounded-xl p-3 mb-5 bg-blue-500">Post a Job</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Company Name *</label>
                    <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className="w-full border p-2 rounded-lg" required />
                </div>
            
                <div>
                    <label className="block text-sm font-medium mb-1">No of Vacancies *</label>
                    <input type="number" name="vacancies" value={formData.vacancies} onChange={handleChange} className="w-full border p-2 rounded-lg" required />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Type of Vacancy *</label>
                    <select name="vacancyType" min="1" value={formData.vacancyType} onChange={handleChange} className="w-full border p-2 rounded-lg">
                        <option value="Labour">Labour</option>
                        <option value="Skilled">Skilled</option>
                        <option value="Managerial">Managerial</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Contact Number *</label>
                    <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} className="w-full border p-2 rounded-lg" required />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">WhatsApp Number *</label>
                    <input type="tel" name="whatsappNumber" value={formData.whatsappNumber} onChange={handleChange} className="w-full border p-2 rounded-lg" required />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border p-2 rounded-lg" required />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Address *</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full border p-2 rounded-lg" required />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Preferred Location</label>
                    <input type="text" name="preferredLocation" value={formData.preferredLocation} onChange={handleChange} className="w-full border p-2 rounded-lg" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Salary Offered *</label>
                    <input type="number" name="salary" value={formData.salary} onChange={handleChange} className="w-full border p-2 rounded-lg" required />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Company Logo</label>
                    <input type="file" name="companyLogo" onChange={handleChange} className="w-full border p-2 rounded-lg" />
                </div>
                <button type="submit" className="w-full bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800">Submit Job</button>
            </form>
        </div>
    );
}

export default AddJobs;
