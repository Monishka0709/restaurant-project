import React from "react";
import Logo from "../Assets/FoodieEats.png";
import FooterBackground from "../Assets/footer-background.jpg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    
    <footer>
    <div className="footer" >
      <div className="footerimage-container">
      <img src={FooterBackground}  alt="" />
      </div>
      <div className="footer-wrapper" >
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          
          <a href="https://x.com/" target="_blank"><BsTwitter className ="tweet"/></a>
          <a href="https://linkedin.com/" target="_blank"><SiLinkedin className ="linkedin"/></a>
          <a href="https://youtube.com/" target="_blank"><BsYoutube className ="youtube"/></a>
          <a href="https://facebook.com/" target="_blank"><FaFacebookF className ="facebook"/></a>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Map</span>
          <span>Help</span>
          <span>Feedback</span>
          <span>Careers</span>
          <span>Testimonials</span>
          <span>Partners</span>
        </div>
        <div className="footer-section-columns">
          <span>1180-5453-3383</span>
          <span>foodieeats@food.com</span>
          <span>customer@food.com</span>
          <span>contact@food.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
    </div>
    </footer>
  );
};

export default Footer;
