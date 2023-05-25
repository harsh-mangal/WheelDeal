import React from "react";
import "./LoginPage.css"; // Import custom CSS file for styling
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send login data to the backend API
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Display response from the backend
        // Handle success or display an error message
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error or display an error message
      });
  };
  return (
    <div className="login-container">
      <div className="left-section">
        <h1>
          Welcome To
          <br />
          <b>WheelDeal!</b>
        </h1>
        <p>Unlock a world of possibilities. Login now!</p>
        {/* <img src="logo.png" alt="Logo" /> */}
      </div>
      <div className="right-section">
        
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
