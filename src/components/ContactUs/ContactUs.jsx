import React from "react";
import "./ContactUs.css"; // CSS file for styling
import img from "/rootvestors_nav.png";
import { Email, Instagram, LinkedIn } from "@mui/icons-material"; // Import icons from MUI

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={img} alt="Rootvestors Logo" />
        </div>

        {/* Company Links */}
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#team">Our Team</a></li>
            <li><a href="#partner">Partner with Us</a></li>
            <li><a href="#terms">Terms and Condition</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-section">
          <h4>Social</h4>
          <ul>
            <li><a href="#instagram" style={{display:"flex", alignItems:"center"}}><Instagram style={{ marginRight: "8px" }} /> Instagram</a></li>
            <li><a href="#linkedin" style={{display:"flex", alignItems:"center"}}><LinkedIn style={{ marginRight: "8px" }} /> LinkedIn</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="footer-section">
          <h4>Links</h4>
          <ul>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#newsletter">Newsletter</a></li>
            <li><a href="#teach">Become Teacher</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p style={{ textAlign: "left", margin: "0" }}>
          <a style={{display:"flex", alignItems:"center", cursor:"pointer"}} href="mailto:rootvestors@gmail.com"><Email style={{ marginRight: "8px" }} />rootvestors@gmail.com</a>
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>Copyright © 2024 All Rights Reserved By Rootvestors.</p>
      </div>
    </footer>
  );
};

export default Footer;
