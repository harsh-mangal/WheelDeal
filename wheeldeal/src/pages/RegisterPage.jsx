import React, { useState } from "react";
import "./RegisterPage.css"; // Import custom CSS file for styling
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const Navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    const newUser = {
      username: name,
      email: email,
      password: password,
    };
  
    axios
      .post("http://localhost:3000/register", newUser)
      .then((response) => {
        console.log("User registered successfully");
        alert("User registered successfully");
        Navigate("/login");
        // Handle successful registration, e.g., redirect to another page
      })
      .catch((error) => {
        console.error("Registration failed:", error);
        // Handle registration error, e.g., display an error message
      });
  };

  return (
    <div className="register-container">
      <div className="left-section-r">
        <h1>
          Join <b>WheelDeal!</b>
        </h1>
        <p>Join us today and unleash endless possibilities!</p>
        {/* <img src="logo.png" alt="Logo" /> */}
        <Link to="/login" className="a-r">
          <h3>Login Now !!</h3>
        </Link>
      </div>
      <div className="right-section">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};

export default RegisterPage;
