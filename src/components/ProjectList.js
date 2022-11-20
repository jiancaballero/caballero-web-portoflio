import React from "react";
import Projects from "../pages/Projects";

const ProjectList = () => {
  const allProjects = [
    {
      projectImage: "icon pautakards",
      projectTitle: "(JS Game) Pautakards",
      techStack: [
        <img src={require("../assets/icons/html.png")} alt="" />,
        <img src={require("../assets/icons/css-3.png")} alt="" />,
        <img src={require("../assets/icons/js.png")} alt="" />,
      ],
      githubLink: "https://github.com/jiancaballero/js-game-pautakards",
      demoLink: "https://pautakards-js-game.netlify.app/",
    },

    {
      projectImage: "icon todo",
      projectTitle: "React TODO App",
      techStack: [
        <img src={require("../assets/icons/html.png")} alt="" />,
        <img src={require("../assets/icons/css-3.png")} alt="" />,
        <img src={require("../assets/icons/js.png")} alt="" />,
        <img src={require("../assets/icons/react.png")} />,
      ],
      githubLink: "https://github.com/jiancaballero/react-todo-app",
      demoLink: "https://react-todo-app-jc.herokuapp.com/",
    },

    {
      projectImage: "icon resto",
      projectTitle: "(REACT NODE) Uchiha Resto App",
      techStack: [
        <img src={require("../assets/icons/html.png")} alt="" />,
        <img src={require("../assets/icons/css-3.png")} alt="" />,
        <img src={require("../assets/icons/js.png")} alt="" />,
        <img src={require("../assets/icons/react.png")} />,
        <img src={require("../assets/images/material-ui.png")} />,
        <img src={require("../assets/images/node.png")} />,
        <img src={require("../assets/images/ExpressJS-logo.png")} />,
      ],
      githubLink: "https://gitlab.com/jiancaballero/caballero-dev-projects/-/tree/003-react-resto-app",
      demoLink: "https://uchiha-resto-app.netlify.app/",
    },
    {
      projectImage: "icon hotel",
      projectTitle: "CASA CABALLERO (MERN APP)  ",
      techStack: [
        <img src={require("../assets/icons/html.png")} alt="" />,
        <img src={require("../assets/icons/css-3.png")} alt="" />,
        <img src={require("../assets/icons/js.png")} alt="" />,
        <img src={require("../assets/icons/react.png")} />,
        <img src={require("../assets/images/redux-icon.webp")} />,
        <img src={require("../assets/images/material-ui.png")} />,
        <img src={require("../assets/images/node.png")} />,
        <img src={require("../assets/images/ExpressJS-logo.png")} />,
        <img src={require("../assets/images/mongodv.png")} />,
      ],
      githubLink: "https://gitlab.com/jiancaballero/caballero-dev-projects/-/tree/004-fs-mern-hotel-website",
      demoLink: "https://casa-caballero.netlify.app/",
    },
  ];

  return (
    <>
      <section id="projects">
        <div class="project-container-main">
          <div class="project-header">
            <h1>
              <i class="fa-solid fa-laptop-code"></i> My Projects{" "}
              <i class="fa-solid fa-laptop-code"></i>
            </h1>
            <p>Check out the best projects I have made so far.</p>
          </div>
          <div class="flex-container flex-card">
            {allProjects.map((project) => (
              <Projects
                projectImage={project.projectImage}
                projectTitle={project.projectTitle}
                techStack={project.techStack}
                githubLink={project.githubLink}
                demoLink={project.demoLink}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectList;
