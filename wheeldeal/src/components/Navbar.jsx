import React from "react";
import "../index.css";
const Navbar = () => {
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
              <a className="navbar-brand" href="/">
                WheelDeal
              </a>
            </div>

              <a href="/login" className="icon-a d-flex justify-content-end">
                <i class="ri-account-circle-fill nav-icon"></i>
              </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
