import React from "react";
import "./RegisterPage.css"; // Import custom CSS file for styling
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="register-container">
      <div className="left-section-r">
        <h1>
          Join <b>WheelDeal!</b>
        </h1>
        <p>Join us today and unleash endless possibilities!</p>
        {/* <img src="logo.png" alt="Logo" /> */}
        <Link to="/login" className="a-r"><h3>Login Now !!</h3></Link>
      </div>
      <div className="right-section">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Register</button>
      </div>
    </div>
  );
};

export default RegisterPage;
