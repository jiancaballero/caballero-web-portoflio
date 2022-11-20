import React from "react";
import gradeCert from "../assets/images/gradeCert.pdf";
const Skills = () => {
  return (
    <section id="skill-section">
      <div class="skill-relative">
        <div class="skill-container container">
          <div class="skill-container-left">
            <h3>SKILLS</h3>
          </div>
          <div class="skill-container-right">
            <div class="html-skill skill-item">
              <div class="flex-container skill-label">
                <h3>HTML/CSS</h3>
                <h3>90%</h3>
              </div>
              <div class="html-skill-bar skill-bar"></div>
            </div>
            <div class="js-skill skill-item">
              <div class="flex-container skill-label">
                <h3>JAVASCRIPT / JQUERY</h3>
                <h3>94%</h3>
              </div>
              <div class="js-skill-bar skill-bar"></div>
            </div>
            <div class="react-skill skill-item">
              <div class="flex-container skill-label">
                <h3>REACT</h3>
                <h3>98%</h3>
              </div>
              <div class="react-skill-bar skill-bar"></div>
            </div>
            <div class="node-skill skill-item">
              <div class="flex-container skill-label">
                <h3>NODE / EXPRESS JS</h3>
                <h3>90%</h3>
              </div>
              <div class="node-skill-bar skill-bar"></div>
            </div>
            <div class="sql-skill skill-item">
              <div class="flex-container skill-label">
                <h3>SQL / MONGO DB</h3>
                <h3>98%</h3>
              </div>
              <div class="sql-skill-bar skill-bar"></div>
            </div>
            <div class="adobe-skill skill-item">
              <div class="flex-container skill-label">
                <h3>PHOTOSHOP / ADOBE XD</h3>
                <h3>98%</h3>
              </div>
              <div class="adobe-skill-bar skill-bar"></div>
            </div>
            <div>
              <a className="gradeCert" href={gradeCert} download>
                Download my Certificate of Grades by Uplift Coding Camp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
