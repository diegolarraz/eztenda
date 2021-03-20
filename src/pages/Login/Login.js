import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Switch, Route, Redirect } from "react-router-dom";

import api from "../../axiosInstances";

import classes from "./Login.module.css";

export default function Login() {
  const { userData, setUserData } = useContext(AuthContext);
  const { isLoggedIn } = userData;

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get("/listings");
        console.log(response);
        return response;
      } catch (error) {
        console.log(error);
      }
    };
    console.log(isLoggedIn);
    // getData();
    // const guestId = localStorage.getItem("guestId");
    // if (!guestId && !userData.isLoggedIn) {
    //   let id = Math.random().toString(36).substring(7);
    //   const createGuest = `Guest_${id}`;
    //   localStorage.setItem("guestId", createGuest);
    // }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("form submitted");
    setUserData({ isLoggedIn: true });
  };

  const login = isLoggedIn ? (
    <Redirect to="/" />
  ) : (
    <form className={classes.Login} onSubmit={handleSubmit}>
      <p className={classes.Title}>Log in</p>
      <input type="text" placeholder="Username" />
      <i className="fa fa-user"></i>
      <input type="password" placeholder="Password" />
      <i className="fa fa-key"></i>
      <button>
        <i className={classes.Spinner}></i>
        <span className="state">Log in</span>
      </button>
    </form>
  );

  return login;
}
