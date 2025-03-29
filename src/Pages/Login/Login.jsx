import React, { useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { NavLink } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        login(data.token);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Login failed");
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form className="space-y-4 mb-5" onSubmit={handleLogin}>
       <div>
       <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Email
        <span className="text-red-600 font-bold"> *</span>
      </label>
       <input
          type="email"
          placeholder="Email"
          id="email"
          className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
       </div>
         <div>
         <label htmlFor="password" className="block text-sm font-medium text-gray-700">
        Password
        <span className="text-red-600 font-bold"> *</span>
      </label>
         <input
          type="password"
          placeholder="Password"
          id="password"
          className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
         </div>
       
        <button type="submit"  className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Login
        </button>
      </form>
      <button
    className="w-full  text-black border-2  font-semibold py-2 px-4 rounded-lg flex items-center justify-center hover:border-black"
  >
    <img
      src="https://res.cloudinary.com/dcxlcy6ls/image/upload/v1737710817/e1lqyzx1ebvrjdsgce8k.webp"
      alt="Google Logo"
      className="w-5 h-5 mr-2"
    />
    Continue with Google
  </button>
  <div className="mt-4 flex justify-between items-center text-sm">
    <button
      className="text-blue-500 hover:underline text-lg font-semibold"
      onClick={() => setIsModalOpen(true)}
    >
      Forgot Password?
    </button>
    <NavLink to="/SignUp" className="text-blue-500 hover:underline text-lg font-semibold">Register</NavLink>
  </div>

    </div>
  </div>
  );
};

export default Login;

{/* <div className="flex items-center justify-center min-h-screen bg-gray-100">
<div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
  <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
  <form className="space-y-4 mb-5">
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Email
        <span className="text-red-600 font-bold"> *</span>
      </label>
      <input
        type="email"
        id="email"
        className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>
    <div>
      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
        Password
        <span className="text-red-600 font-bold"> *</span>
      </label>
      <input
        type="password"
        id="password"
        className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>
    <button
      type="submit"
      className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Login
    </button>
  </form>
  <button
    className="w-full  text-black border-2  font-semibold py-2 px-4 rounded-lg flex items-center justify-center hover:border-black"
  >
    <img
      src="https://res.cloudinary.com/dcxlcy6ls/image/upload/v1737710817/e1lqyzx1ebvrjdsgce8k.webp"
      alt="Google Logo"
      className="w-5 h-5 mr-2"
    />
    Continue with Google
  </button>
  <div className="mt-4 flex justify-between items-center text-sm">
    <button
      className="text-blue-500 hover:underline text-lg font-semibold"
      onClick={() => setIsModalOpen(true)}
    >
      Forgot Password?
    </button>
    <NavLink to="/SignUp" className="text-blue-500 hover:underline text-lg font-semibold">Register</NavLink>
  </div>
</div>

{isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Reset Password</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="reset-email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="reset-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mt-4">
          <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
            New Password
          </label>
          <input
            type="password"
            id="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mt-6 flex justify-end space-x-2">
          <button
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={handlePasswordReset}
          >
            Reset Password
          </button>
        </div>
      </form>
    </div>
  </div>
)}
</div> */}
