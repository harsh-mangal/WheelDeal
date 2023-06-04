import React, { useEffect, useState } from "react";
import "../index.css";
const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUsername = localStorage.getItem("username");
    if (token) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    alert("Logged out successfully");
    window.location.reload(); // Refresh the page

  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light nav-color">
        <div className="container">
          <div className="navbar-collapse">
            <div className="d-flex justify-content-center">
              <a href="#" className="icon-a">
                <i className="ri-instagram-fill nav-icon"></i>
              </a>
              <a href="#" className="icon-a">
                <i className="ri-twitter-fill nav-icon"></i>
              </a>
              <a href="#" className="icon-a">
                <i className="ri-facebook-circle-fill nav-icon"></i>
              </a>

              {/* <a className="navbar-brand" href="#">
                WheelDeal
              </a> */}
            </div>
            <div className="d-flex justify-content-first mid">
              <a className="navbar-brand">
                WheelDeal
              </a>
            </div>

              <a href="/login" className="icon-a d-flex justify-content-end" onClick={handleLogout}>
                {isLoggedIn ? (
                  <i class="ri-logout-circle-fill nav-icon"></i>
                ) : (
                  <i className="ri-account-circle-fill nav-icon"></i>
                )}
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
