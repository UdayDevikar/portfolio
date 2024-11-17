import React from "react";
import "./index.css";
import { FaKeyboard } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";
import { MdMovie } from "react-icons/md";

function About() {
  return (
    <div id="about" className="about-container">
      <div className="about-info">
        <h2 className="heading">About Me </h2>

        <div className="about-me">
          <p className="about-intro">Hi, I'M Uday</p>
          <div className="about-intro-para">
          <p> Front End Developer & Javascript Enthusiast</p>
          <p>I'M Interested in anything and everything related to Javascript</p>
          </div>


          <p className="about-description">
            I am currently Associated with Infosys Working as a Software Engineer.
          </p>

          <div className="interests-wrapper">
            <div className="head">
              <p>My Interests</p>
            </div>
            <div className="interests">
              <div>
                <p>
                  <FaKeyboard size={70} />
                </p>
                <p>Coding</p>
              </div>
              <div>
                <p>
                  <FaPlane size={70} />
                </p>
                <p>Travelling</p>
              </div>
              <div>
                <p>
                  <MdMovie size={70} />
                </p>
                <p>Movies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-icon">
        <img src='/portfolio/assets/profile-icon.jpg' alt="profile" />
      </div>
    </div>
  );
}

export default About;
