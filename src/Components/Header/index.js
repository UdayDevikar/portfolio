import React from "react";
import Navbar from "../Navbar";
import "./index.css";

function Header() {
  return (
    <div id="home" className="main">
      <Navbar />
      <div className="header">
        <div className="heading">
          <h1>Hi, I'M UDAY</h1>
        </div>
        <p className="description">Web Developer & Javascript Enthusiast</p>

        <div className="angle-down">
          <a href="#experience">
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
