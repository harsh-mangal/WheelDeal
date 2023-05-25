import React from "react";
import "./LoginPage.css"; // Import custom CSS file for styling

const LoginPage = () => {
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
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
