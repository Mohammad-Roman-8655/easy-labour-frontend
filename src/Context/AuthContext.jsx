import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    if (token) {
      fetchUserProfile();
    }
  }, [token]);

  const fetchUserProfile = async () => {
    try {
        const token = localStorage.getItem("token");
       
        if (!token) return;

        const res = await fetch("http://localhost:3000/api/auth/profile", {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` }
        });
        console.log(res);
        if (!res.ok) {
            console.error(`Error: ${res.status} - ${res.statusText}`);
            return;
        }

        const data = await res.json();
        localStorage.setItem("currentUser", data._id)
        setUser(data);
    } catch (error) {
        console.error("Error fetching user:", error.message);
    }
};



  const login = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
    fetchUserProfile();
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser")
    setUser(null);
    setToken("");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
