import React from "react";
import "./index.css";
import html from "../../assets/html.webp";
import css from "../../assets/css.webp";
import github from "../../assets/github.webp";
import js from "../../assets/js.webp";
import linux from "../../assets/linux.webp";
import mongodb from "../../assets/mongodb.webp";

import python from "../../assets/python.webp";
import sass from "../../assets/sass.webp";
import react from "../../assets/react.webp";
import node from "../../assets/node.webp";
import bitbucket from "../../assets/bitbucket.webp";
import storyblok from "../../assets/storyblok.webp";
import gatsby from "../../assets/gatsby.webp";
import firebase from "../../assets/firebase.webp";

// companies icon
import mediaagility from "../../assets/mediaagility.webp";
import persistent from "../../assets/persistent.webp";

function Experience() {
  return (
    <div id="experience" className="experience-wrapper">
      <div className="experience-heading">Experience</div>
      <div className="experience-subheading">
        I'm working as a frontend developer from 2+ years, Most of my work was related to javascript and React Js,
        I'have some experience on node js as well.
        I'm always eager to learn anything and everything related to javascript
      </div>
      <div className="skils-wrapper">
        <div className="skill-icon">
          <p>The technologies on which i have worked on </p>
          <div className="skill">
            <div className="skil-icon">
              <img src={html} />
              <img src={css} />
              <img src={github} />
              <img src={react} />
              <img src={node} />
              <img src={js} />
              <img src={python} />
              <img src={sass} />
              <img src={mongodb} />
              <img src={linux} />
              <img src={storyblok} />
              <img src={gatsby} />
              <img src={bitbucket} />
              <img src={firebase} />
            </div>
          </div>
        </div>
        <div className="work-icons">
          <p> Companies I have worked for </p>
          <div className="company">
            <img src={mediaagility} />
            <img fill="black" src={persistent} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
