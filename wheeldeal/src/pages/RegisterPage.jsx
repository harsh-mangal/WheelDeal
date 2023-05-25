import React from "react";
import "./RegisterPage.css"; // Import custom CSS file for styling

const RegisterPage = () => {
  return (
    <div className="register-container">
      <div className="left-section">
        <h1>
          Join <b>WheelDeal!</b>
        </h1>
        <p>Join us today and unleash endless possibilities!</p>
        {/* <img src="logo.png" alt="Logo" /> */}
        
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
