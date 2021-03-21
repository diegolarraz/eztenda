import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Redirect } from "react-router-dom";

import api from "../../axiosInstances";
import Spinner from "../../components/UI/Spinner/Spinner";

import classes from "./SignUp.module.css";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false);
  const [showError, setError] = useState({ error: false, message: "" });

  const { userData, setUserData, setToken } = useContext(AuthContext);
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

  const handleCompanyNameChange = (event) => {
    setCompanyName(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const sendForm = async () => {
    try {
      setLoading(true);
      const data = {
        email,
        password,
        company_name: companyName,
        location,
        description,
      };
      const response = await api.post("/sessions", data);
      setToken(response.data["authentication_token"]);
      setUserData({ isLoggedIn: true });
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError({ error: true, message: "Something went wrong" });
    }
  };

  const errorMessage = <h2>{showError.message}</h2>;

  const login = isLoggedIn ? (
    <Redirect to="/" />
  ) : (
    <form className={classes.SignUp} onSubmit={handleSubmit}>
      <p className={classes.Title}>Sign up</p>
      {showError.error && errorMessage}
      <input type="email" placeholder="Email" onChange={handleEmailChange} />
      <input
        type="password"
        placeholder="Password"
        onChange={handlePasswordChange}
      />
      <input
        type="text"
        placeholder="Company name"
        onChange={handleCompanyNameChange}
      />
      <input
        type="text"
        placeholder="Location"
        onChange={handleLocationChange}
      />
      <textarea
        type="textarea"
        rows="10"
        placeholder="Description"
        onChange={handleDescriptionChange}
      />
      <button>
        <i className={classes.Spinner}></i>
        <span className="state">Sign Up</span>
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
