import React from "react";

const Projects = ({
  projectImage,
  projectTitle,
  techStack,
  githubLink,
  demoLink,
}) => {
  return (
    <div className="card-container" data-aos="zoom-in">
      <div className="card">
        <div className="slide slide1">
          <div className="content">
            <div className={projectImage}></div>
          </div>
        </div>
        <div className="slide slide2">
          <div className="content">
            <h3>{projectTitle}</h3>
            <div className="tech-stack flex-container">
              {techStack.map((stack) => stack)}
            </div>

            <div className="view-git-button">
              <a
                href={demoLink}
                target="_blank"
                className="demo-button btn btn-md"
              >
                View Demo
              </a>
              <a
                href={githubLink}
                target="_blank"
                className="git-button btn btn-md"
              >
                View GIT repo
              </a>
            </div>
          </div>
        </div>
      </div>

      
    </div>

    
  );
};

export default Projects;
