import React from "react";
import "./index.css";
import { FaHandshake } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return (
    <div id="footer" className="footer-wrapper">

    <div className="hand">
      <FaHandshake size={50}/>
    </div>
    <div className="contact">
      I'm always open to Collaborate on new Idaes
      <p>Let's Connect</p>
    </div>

      <div className="horizontal"></div>

      <div className="icons">
        <a className="icon" href="https://www.linkedin.com/in/uday-devikar-101867130/"><FaLinkedin size={40}  /></a>
        <a className="icon" href="https://www.facebook.com/uday.devikar.3/"><FaFacebookSquare size={40} /></a>
        <a  className="icon" href="https://github.com/UdayDevikar"><FaGithubSquare size={40} /></a>
        <a className="icon" href="https://twitter.com/UdayDevikar"><FaTwitterSquare size={40} /></a>
      </div>
 
      
        <p className="copyright">&copy; Built by Uday Devikar & desined referenced by <a href="https://github.com/bchiang7/v1">Brittany Chiang.
</a></p>
    </div>
  );
}

export default Footer;
