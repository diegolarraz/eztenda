import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Switch, Route, Redirect } from "react-router-dom";

import api from "../../axiosInstances";
import Spinner from "../../components/UI/Spinner/Spinner";

import classes from "./Login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showError, setError] = useState({ error: false, message: "" });

  const { userData, setUserData, setToken, setUser } = useContext(AuthContext);
  const { isLoggedIn } = userData;

  const handleSubmit = async (event) => {
    event.preventDefault();
    await sendForm();
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const sendForm = async () => {
    try {
      setLoading(true);
      const data = {
        email,
        password,
      };
      const response = await api.post("/login", data);
      setUser(response.data.email)
      setToken(response.data["authentication_token"]);
      setUserData({ isLoggedIn: true, user: response.data.email });
    } catch (error) {
      setLoading(false);

      setError({ error: true, message: "Email or password not recognised" });
    }
  };

  const errorMessage = <h2>{showError.message}</h2>;

  const login = isLoggedIn ? (
    <Redirect to="/" />
  ) : (
    <form className={classes.Login} onSubmit={handleSubmit}>
      <p className={classes.Title}>Log in</p>
      {showError.error && errorMessage}
      <input type="email" placeholder="Email" onChange={handleEmailChange} />
      <i className="fa fa-user"></i>
      <input
        type="password"
        placeholder="Password"
        onChange={handlePasswordChange}
      />
      <i className="fa fa-key"></i>
      <button>
        <i className={classes.Spinner}></i>
        <span className="state">Log in</span>
      </button>
    </form>
  );

  return (
    <>
      {login}
      {loading && <Spinner />}
    </>
  );
}
