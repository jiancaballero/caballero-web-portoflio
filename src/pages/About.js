import React from "react";
import styled, { keyframes } from "styled-components";
const fadeInBottom = keyframes`
0% {
  opacity: 0;
  -webkit-transform: translateY(50px);
}
100% {
  opacity: 1;
  webkit-transform: translateY(0);
}
`;
const BottomFade = styled.div`
animation: ${fadeInBottom} 2s both
`
const About = () => {
  return (
    <section id="about">
      <BottomFade className="container about-container fade-in-bottom">
        <div className="about-title">
          <h1>ABOUT</h1>
        </div>

        <div className="about-grid grid-container">
          <div className="about-grid-item about-image">
            <img
              src={require("../assets/images/jc-profile.png")}
              alt=""
              width="500"
              height="500"
            />
          </div>
          <div className="about-grid-item about-header">
            <h2>Hello, I'm</h2>
            <h2>Jc Caballero</h2>
          </div>

          <div className="about-grid-item about-info">
            <div className="about-info-flex flex-container">
              <div className="about-info-left">
                <h3>Name:</h3>
                <h3>Age:</h3>
                <h3>Phone:</h3>
                <h3>Address:</h3>
                <h3>Email:</h3>
              </div>
              <div className="about-info-right">
                <h3>Jian Caballero</h3>
                <h3>23</h3>
                <h3>+63 977 194 2780</h3>
                <h3>Manila, PH</h3>
                <h3>jiancaballero@gmail.com</h3>
              </div>
            </div>
          </div>
          <div className="about-grid-item about-message">
            <h3>I design and build websites</h3>
            <i className="fa-solid fa-quote-left"></i>
            <p>
              I'm a BS Information Systems graduate seeking for great
              opportunities in the tech industry. My interest in designing and
              developing web applications began when I was in high school. My
              first ever attempt in web design and development was building a
              simple blog site. From then on, my passion for creating meaningful
              web projects grew deeper. I usually spend my time practicing
              coding and photography.
            </p>
          </div>

          <div className="download-cv-button ">
            <a href="" className="cv-btn btn button btn-sm">
              <i className="fa-solid fa-file-arrow-down"></i> DOWNLOAD CV
            </a>
          </div>
        </div>
      </BottomFade>
    </section>
  );
};

export default About;
