import React from "react";
import "./Footer.scss";
import footerLogo from "../Assets/logo.png";
import instagram from "../Assets/instagram_icon.png";
import pinterest from "../Assets/pintester_icon.png";
import watsup from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className={"footer"}>
      <div className="footer-logo">
        <img src={footerLogo} alt="footer-logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-media">
        <div className="footer-icons-container">
          <img src={instagram} alt="instagram" />
        </div>
        <div className="footer-icons-container">
          <img src={pinterest} alt="pinterest" />
        </div>
        <div className="footer-icons-container">
          <img src={watsup} alt="watsup" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 All right reserved.</p>
      </div>
    </div>
  );
};
export default Footer;
