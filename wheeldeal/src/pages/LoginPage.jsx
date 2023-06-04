import React, { useState } from "react";
import "./LoginPage.css"; // Import custom CSS file for styling
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: username,
      password: password,
    };

    axios
      .post("http://localhost:3000/login", user)
      .then((response) => {
        console.log("User logged in successfully");
        const token = response.data.token;
      // Save token to local storage
      localStorage.setItem("token", token);
        alert("User logged in successfully");
        navigate("/home");
        window.location.reload(); // Refresh the page
        // Handle successful login, e.g., redirect to another page
      })
      .catch((error) => {
        if(error.response.status === 401){
          alert("Invalid username or password");
          console.error("Login failed:", error);
        }
        
        // Handle login error, e.g., display an error message
      });
  };

  return (
    <>
      <div className="login-container">
        <div className="left-section">
          <h1>
            Welcome To
            <br />
            <b>WheelDeal!</b>
          </h1>
          <p>Unlock a world of possibilities. Login now!</p>
          {/* <img src="logo.png" alt="Logo" /> */}
          <Link to="/register" className="a-r">
            <h3>Create New Account !!</h3>
          </Link>
        </div>
        <div className="right-section">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
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
    </>
  );
};

export default LoginPage;
