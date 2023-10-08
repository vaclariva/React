import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-wrap">
      <div className="footer-wrap">
        <div className="footer-wrap-1">
          <div className="footer-section">
            <h1>About</h1>
            <a href="#">Services</a>
            <a href="#">Portfolio</a>
            <a href="#">Pricing</a>
            <a href="#">Careers</a>
          </div>
          <div className="footer-section">
            <h1>Resources</h1>
            <a href="#">Docs</a>
            <a href="#">Blog</a>
            <a href="#">eBooks</a>
            <a href="#">Videos</a>
          </div>
          <div className="footer-section">
            <h1>Contact</h1>
            <a href="#">Help</a>
            <a href="#">Sales</a>
            <a href="#">Advertise</a>
          </div>
          <div className="footer-section">
            <h1>Stay Connected</h1>
            <p>Subscribe to our newsletter to receive latest news.</p>
            <form action="">
              <input refs="email" type="email" name="email" id="email" size="30" placeholder="Enter Email Address" />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="footer-wrap-2">
          <div className="line"></div>
          <div className="social-link">
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-github"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter-square"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="first-box">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="last-box">
          <a href="#">&copy; Copyright 2023 Job Connect</a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
