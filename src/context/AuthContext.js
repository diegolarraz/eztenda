import React, { useState, createContext, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    isLoggedIn: false,
    // user: null,
    token: null,
  });

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setUserData({
        isLoggedIn: true,
        // user: data.user,
        token: token,
      });
    }
  }, []);

  const setToken = (token) => localStorage.setItem("authToken", token);

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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
