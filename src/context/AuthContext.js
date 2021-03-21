import React, { useState, createContext, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    isLoggedIn: false,
    user: null,
    token: null,
  });

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setUserData({
        isLoggedIn: true,
        user: "",
        token: token,
      });
    }
  }, []);

  const setToken = (token) => localStorage.setItem("authToken", token);
  const setUser = (user) => localStorage.setItem("user", user);
  const logout = () => {
    setUserData({ isLoggedIn: false, user: null, token: null });
    localStorage.removeItem("authToken");
  };

  return (
    <AuthContext.Provider
      value={{
        userData,
        setUserData,
        logout,
        setToken,
        setUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
