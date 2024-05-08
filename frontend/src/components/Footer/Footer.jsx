import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer-links">
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>FAQs</li>
        <li>About</li>
      </ul>
      <div className="footer-copyright">
        <hr />
        <p>© 2024 Company, Inc</p>
      </div>
    </div>
  );
};

export default Footer;
