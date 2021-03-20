import React, { useState, createContext, useEffect } from "react";
import { endpoints } from "api";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    isLoggedIn: false,
    user: null,
    token: null,
  });

  useEffect(() => {
    const guestId = localStorage.getItem("guestId");

    if (!guestId && !userData.isLoggedIn) {
      let id = Math.random().toString(36).substring(7);
      const createGuest = `Guest_${id}`;

      localStorage.setItem("guestId", createGuest);
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      apiGet(endpoints.account)
        .then((res) => res.json())
        .then((data) =>
          setUserData({
            isLoggedIn: true,
            user: data.user,
            token: token,
          })
        )
        .catch((err) => console.log(err));
    }
  }, []);

  // ! Passing userData as a dependency causes infinite loop in settings pages
  const refreshUserInfo = () => {
    apiGet(endpoints.account)
      .then((res) => res.json())
      .then((data) => setUserData({ ...userData, user: data?.user }))
      .catch((err) => console.log(err));
  };

  const logout = () => {
    setUserData({ isLoggedIn: false, user: null, token: null });
    localStorage.removeItem("token");
  };

  const recovery = (recoveryError, email) => {
    apiPost(endpoints.recovery, { body: JSON.stringify({ email: email }) })
      .then((res) => res.json())
      .then((data) => {
        if (data.error !== undefined) {
          recoveryError(data);
        } else {
          recoveryError({
            errorNum: -2,
            errorMessage: "Success - Check your inbox for a recovery link",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const resendVerificationEmail = async (email, code) => {
    return apiPost(endpoints.verifyEmail, {
      body: JSON.stringify({ email: email, code: code }),
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((err) => {
        return err;
      });
  };

  return (
    <AuthContext.Provider
      value={{
        userData,
        setUserData,
        logout,
        recovery,
        resendVerificationEmail,
        refreshUserInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
