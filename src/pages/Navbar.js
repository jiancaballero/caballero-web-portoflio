import React from "react";
import styled, { keyframes } from "styled-components";

const fadeInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
  `;

const fadeInRight = keyframes`
0% {
  opacity: 0;
  -webkit-transform: translateX(50px);
}
100% {
  opacity: 1;
  webkit-transform: translateX(0);
}
`;

const fadeInTop = keyframes`
0% {
  opacity: 0;
  -webkit-transform: translateY(-50px);
}
`;
const LeftFade = styled.a`
  animation: ${fadeInLeft} 2s both;
`;
const RightFade = styled.ul`
  animation: ${fadeInRight} 2s both;
`;

const TopFade = styled.ul`
  animation: ${fadeInTop} 2s both;
`;
const Navbar = () => {
  return (
    <header class="header">
      <div class="container header-container">
        <div class="navbar-wrapper-main">
          <LeftFade href="" class="logo">
            {" "}
            <h3>
              JC CABALLERO <span class="">Web Developer</span>{" "}
            </h3>
          </LeftFade>
          <TopFade className="nav-links-main fade-in-top">
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#experience">WORK</a>
            </li>
            <li>
              <a href="#skill-section">SKILLS</a>
            </li>
            <li>
              <a href="#projects">PROJECTS</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </TopFade>
          <RightFade className="social-links-main ">
            <li>
              <a
                href="https://www.facebook.com/jc.caballero.503/"
                target="_blank"
              >
                <i class="fa-brands fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jc-caballero-762094192"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://gitlab.com/users/jiancaballero/projects"
                target="_blank"
              >
                <i class="fa-brands fa-gitlab"></i>
              </a>
            </li>
          </RightFade>
        </div>
        <div class="navbar-wrapper-second">
          <a href="#">
            {" "}
            <h3>
              JC CABALLERO <span class="">Web Developer</span>{" "}
            </h3>
          </a>
          <input type="checkbox" id="nav-toggle" class="nav-toggle" />
          <nav class="navbar">
            <ul class="nav-links flex-container">
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#experience">WORK</a>
              </li>
              <li>
                <a href="#skill">SKILLS</a>
              </li>
              <li>
                <a href="#project">PROJECTS</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
              </li>
            </ul>
            <ul class="social-links flex-container">
              <li>
                <a
                  href="https://www.facebook.com/jc.caballero.503/"
                  target="_blank"
                >
                  <i class="fa-brands fa-facebook-square"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jc-caballero-762094192/"
                  target="_blank"
                >
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://gitlab.com/users/jiancaballero/projects"
                  target="_blank"
                >
                  <i class="fa-brands fa-gitlab"></i>
                </a>
              </li>
            </ul>
          </nav>

          <label for="nav-toggle" class="nav-toggle-label">
            <i class="fa-solid fa-bars"></i>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
