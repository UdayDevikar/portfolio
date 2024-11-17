import React from "react";
import Navbar from "../Navbar";
import "./index.css";

function Header() {
  return (
    <div id="home" className="main">
      <Navbar />
      <div className="header">
        <div className="heading">
          <h1>Hi, I'm Uday Devikar</h1>
        </div>
        <h3 className="description">Software Engineer (Frontend), with 5 years experienced with working knowledge on current and in trend cloud and web development technologies.</h3>
      </div>
    </div>
  );
}

export default Header;