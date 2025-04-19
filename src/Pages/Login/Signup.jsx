import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../config/apiConfiq";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
   const navigate=useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const res = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("Registration successful. You can now login.");
        navigate("/Login");
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Registration failed");
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
    <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
    <h1 className="text-2xl font-bold text-center mb-6">Register</h1>
      {error && <p className="text-red-500">{error}</p>}
      {message && <p className="text-green-500">{message}</p>}
      <form className="mt-6" onSubmit={handleRegister}>
      <div className="mb-4">
      <label
        htmlFor="name"
        className="block text-sm font-medium text-gray-700"
      >
        Name <span className="text-red-600 font-bold">*</span>
      </label>
      <input
        type="text"
        id="name"
        placeholder="Name"
        className="border p-2 w-full mb-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
        
      />
    </div>
    <div className="mb-4">
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        Email
        <span className="text-red-600 font-bold"> *</span>
      </label>
      <input
        type="email"
        id="email"
        placeholder="Email"
        className="border p-2 w-full mb-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div className="mb-4">
      <label
        htmlFor="password"
        className="block text-sm font-medium text-gray-700"
      >
        Password
        <span className="text-red-600 font-bold"> *</span>
      </label>
      <input
          type="password"
          id="password"
          placeholder="Password"
          className="border p-2 w-full mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
      />
    </div>
       
        <button type="submit" className="bg-green-500 text-white p-2 w-full">
          Register
        </button>
      </form>
    </div>
  </div>
  );
};

export default Signup;

{/* <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
<div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
    <h1 className="text-2xl font-bold text-center mb-6">Register</h1>

  <form className="mt-6">
    <div className="mb-4">
      <label
        htmlFor="name"
        className="block text-sm font-medium text-gray-700"
      >
        name <span className="text-red-600 font-bold">*</span>
      </label>
      <input
        type="text"
        id="name"
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        placeholder="Enter your name"
      />
    </div>

    <div className="mb-4">
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        Email
        <span className="text-red-600 font-bold"> *</span>
      </label>
      <input
        type="email"
        id="email"
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        placeholder="Enter your email"
      />
    </div>

    <div className="mb-4">
      <label
        htmlFor="password"
        className="block text-sm font-medium text-gray-700"
      >
        Password
        <span className="text-red-600 font-bold"> *</span>
      </label>
      <input
        type="password"
        id="password"
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        placeholder="Enter your password"
      />
    </div>

    <button
      type="submit"
      className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
    >
      Register
    </button>
  </form>

 

  
</div>
</div> */}
