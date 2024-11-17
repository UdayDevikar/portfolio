import React from "react";
import "./index.css";

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
              <img src="/portfolio/assets/html.webp" alt="html" />
              <img src='/portfolio/assets/css.webp' alt="css" />
              <img src="/portfolio/assets/github.webp" alt="github"/>
              <img src="/portfolio/assets/react.webp" alt="react"/>
              <img src="/portfolio/assets/node.webp" alt="node" />
              <img src='/portfolio/assets/js.webp' alt="Js"/>
              <img src="/portfolio/assets/python.webp" alt="python" />
              <img src="/portfolio/assets/sass.webp" alt="sass"/>
              <img src="/portfolio/assets/mongodb.webp" alt="mongoDb" />
              <img src="/portfolio/assets/linux.webp" alt="linux" />
              <img src="/portfolio/assets/storyblok.webp" alt="storybook"/>
              <img src="/portfolio/assets/gatsby.webp" alt="gatsby" />
              <img src="/portfolio/assets/bitbucket.webp" alt="bitbucket"/>
              <img src="/portfolio/assets/firebase.webp" alt="firebase" />
            </div>
          </div>
        </div>
        <div className="work-icons">
          <p> Companies I have worked for </p>
          <div className="company">
            <img src='/portfolio/assets/mediaagility.webp' alt="mediaAgility"/>
            <img fill="black" src='/portfolio/assets/persistent.webp' alt="persistent" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
