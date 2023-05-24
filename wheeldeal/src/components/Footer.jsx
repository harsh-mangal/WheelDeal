import React from 'react';
import '../index.css'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h4 className="footer-heading">Contact Us</h4>
        <p className="footer-text">Chitkara University , Rajupra IN</p>
        <p className="footer-text">Email: customercare@wheeldeal.com</p>
        <p className="footer-text">Phone: +1 123-456-7890</p>
      </div>
      <div className="footer-social ">
        <a href="#" className="footer-icon icon-a">
          <i className="ri-facebook-fill nav-icon"></i>
        </a>
        <a href="#" className="footer-icon icon-a">
          <i className="ri-twitter-fill nav-icon"></i>
        </a>
        <a href="#" className="footer-icon icon-a">
          <i className="ri-instagram-fill nav-icon"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
